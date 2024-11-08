import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SaveTorres } from './Storage';




export default function List({ navigation }) {
  const [Torres, setTorres] = useState([]);
  
  // Cargar Torres desde AsyncStorage cuando se monta el componente
  useEffect(() => {
    const loadTorres = async () => {
      try {
        const storedTorres = await AsyncStorage.getItem('torres');
        if (storedTorres) {
          setTorres(JSON.parse(storedTorres));
        }
      } catch (e) {
        console.error('Error al cargar las torres:', e);
      }
    };
    loadTorres();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Agregar_Torre navigation={navigation} Torres={Torres} setTorres={setTorres} />
      <Borrar_Torre navigation={navigation} Torres={Torres} setTorres={setTorres} />
    </SafeAreaView>
  );
}


// El componente Agregar_Torre ahora recibe Torres y setTorres como props
export function Agregar_Torre({ navigation, Torres, setTorres }) {
  const [InputEspecie, setInputEspecie] = useState('');

  const agregarTorre = () => {
    const nuevaTorre = {
      Especie: InputEspecie,
      id: (Torres.length + 1).toString(),
      key: (Torres.length + 1).toString(),
    };

    const torresActualizadas = [...Torres, nuevaTorre]
    setTorres(torresActualizadas);
    SaveTorres(torresActualizadas)
    setInputEspecie(''); // Limpiamos el input para el próximo uso
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Indique especie de la torre"
        value={InputEspecie}
        onChangeText={(val) => setInputEspecie(val)}
      />

      <Button title="Agregar Torre" onPress={agregarTorre} />
      <ScrollView>
        {Torres.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>Torre id: {item.id} {"\n"} Especie: {item.Especie}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Volver"
          onPress={() => navigation.navigate("Connection")}
        />
      </View>
    </View>
  );
}

//AÑADIMOS Borrar_Torre, tal cual está en ese archivo

export function Borrar_Torre({navigation, Torres, setTorres} ){

  const [InputId, setInputId] = useState('');



//Despues de borrar la torre debe recorrer del primer al ultimo elemento asignando id de 1 en adelante

const BorrarTorre = async (InputId) => {
  try {
    // Filtrar las torres para eliminar la torre con el id proporcionado
    const Torres_Act = Torres.filter(torre => torre.id !== InputId);
    // Actualizamos los IDs de las torres para que sean consecutivos
    const torresActualizadas = Torres_Act.map((torre, index) => ({
      ...torre,
      id: (index + 1).toString(),
      key: (index + 1).toString(),
    }));
    
    // Actualizar el estado
    setTorres(torresActualizadas);

    // Guardar la lista de torres actualizada en AsyncStorage
    await SaveTorres(Torres);

    // Limpiar el campo de entrada
    setInputId('');
  } catch (e) {
    console.error('Error al borrar la torre:', e);
  }
};

//entre los atributos del TextInput es su valor

//PROBLEMA AL LLAMAR BorrarTorre con el argumento (InputId)
  return(
    <View style = {styles.container}>
      <TextInput style={styles.input}
      placeholder='Indique Id de la torre'
      value = {InputId}
      onChangeText={(val) => setInputId(val)}  />

      <Button title="Eliminar Torre" onPress={()=>BorrarTorre(InputId)} />

      <ScrollView>
        {Torres.map((item) => {
          return(
            <View key = {item.key} >
              <Text style={styles.item}>  Torre id: {item.id} {"\n"}   Especie: {item.Especie}  </Text>

            </View>
          )
        })}
    </ScrollView>
    <View style={styles.buttonContainer}>
        <Button
          title="Volver"
          onPress={() => navigation.navigate("Connection")}
        />
      </View>
  </View>
  )
}

//Fin Borrar_Torre





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    margin: 12,
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: '#98FB98',
    fontSize: 24,
  },
});
