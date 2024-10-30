import React, { useState } from 'react'; // Importa useState
import { Text, View } from 'react-native';
import {SafeAreaView, StyleSheet, TextInput, Button, ScrollView} from 'react-native';



export default function Agregar_Torre({navigation} ){

    const [InputEspecie, setInputEspecie] = useState('');
  
    const [Torres, setTorres] = useState([
      {Especie: 'tomate',   id:'1',   key: '1'},
      {Especie: 'cebolla',  id:'2',   key: '2'},
      {Especie: 'coliflor', id:'3',   key: '3'},
      {Especie: 'naranja',  id:'4',   key: '4'},
      {Especie: 'cebolla',  id:'5',   key: '5'},
      {Especie: 'menta',    id:'6',   key: '6'},
    ])
  
    const agregarTorre = () =>{
      const nuevaTorre = {
        //Acá debe ir el input y guardarse en el campo Especie y los demás campo deben asignarse array.lenght++...
  
        Especie: InputEspecie,
        id: (Torres.length + 1).toString(), 
        key: (Torres.length + 1).toString(), 
      }
  
      setTorres([...Torres, nuevaTorre])
      setInputEspecie('') // Limpiamos el input para el próximo uso
    }
  
  //entre los atributos del TextInput es su valor
  
    return(
      <View style = {styles.container}>
        <TextInput style={styles.input}
        placeholder='Indique especie de la torre'
        value = {InputEspecie}
        onChangeText={(val) => setInputEspecie(val)}  />
  
        <Button title="Agregar Torre" onPress={agregarTorre} />
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
  
  
  
  
  
  
  
  
  
  
  //esto de abajo acompaña a las dos funciones
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonContainer: {
      marginTop: 20
    },
  
  
    input: {
  
      margin: 12,
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      widht: 200,
    },
  
    item: {
      marginTop: 24, 
      padding: 30,
      backgroundColor:'#98FB98',
      fontSize: 24
    }
  
  
  });
  