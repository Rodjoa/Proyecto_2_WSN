/*import React, { useState } from 'react'; // Importa useState
import { Text, View } from 'react-native';
import {SafeAreaView, StyleSheet, TextInput, Button, ScrollView} from 'react-native';
*/

/*

export function Borrar_Torre({navigation, Torres, setTorres} ){

    const [InputId, setInputId] = useState('');
  

  
//Despues de borrar la torre debe recorrer del primer al ultimo elemento asignando id de 1 en adelante

    const BorrarTorre = (InputId) =>{
      //  setTorres([ Torres - (Torres.item.id==InputId)  ])
      const Torres_Act = (
        Torres.filter(torre =>
          torre.id !== InputId
      ));

        setTorres(Torres_Act)
        SaveTorres(Torres_Act)

        setInputId('')

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
            onPress={() => navigation.navigate("Remove_Tower")}
          />
        </View>
    </View>
    )
  }
  
  
  
  
  
  */
  
  /*
  
  
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
  */