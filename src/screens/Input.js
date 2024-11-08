/*
import React, { useState } from 'react'; // Importa useState
import {SafeAreaView, StyleSheet, TextInput, Text, View, Button, ScrollView} from 'react-native';
*/

/*
//TEST 1: escribir texto, almacenar en variable y mostrarla en pantalla

export default function Update_Text(){
  const [Especie, setEspecie] = useState(' ');
  
  //no hacemos la func en onPress sino que la separamos y la hacemos aca
  const clickHandler = () => {  //nombre es arbitrario
    setEspecie('Cebolla')  //en ese argumento debe ir la variable que guarde el texto del input
  }


  return (
    <View style= {styles.container}>
        <Text>La especie es: {Especie}</Text>
        <Text></Text>
        
        <View style={styles.buttonContainer}>
          <Button title = 'update state' onPress={clickHandler}/>

        </View>

    </View>
  );
};
//Fin función Update_Text()
*/


/*
//TEST 2: input Texto+ almacenar variable + mostrarla

export default function Input_Text(){
  const [Especie, setEspecie] = useState(' ');
  
// Explicación onChangeText:
//onChangeText={(val) => setEspecie()}  /> onChangeText: la variable que pongamos en val toma el valor de lo que hay en el input y se le entrega de argumento a setEspecie(val); con val =input , automaticamente.

  return (
    <View style= {styles.container}>
        <Text>Introduzca especie: </Text>
        <TextInput 
        style={styles.input}
        onChangeText={(val) => setEspecie(val)}  />

        
      <Text> {Especie} </Text>
    </View>
  );
};
//FIN Función Input_Text()
*/


/*
//TEST 3: Input Texto + guardarla en variable cuando se APRETE un botón + mostrarla
export default function Input_Text_Botton(){
  const [InputText, setInputText] = useState('');
  const[Especie, setEspecie] = useState('');


  return(
    <View style= {styles.container}>
        <Text>Introduzca especie: </Text>
        <TextInput 
        style={styles.input}
        onChangeText={(val) => setInputText(val)}  
        />

        <Button
          title = "Agregar"
          style = {styles.buttonContainer}
          onPress={() => setEspecie(InputText)}
        />
        <Text>{Especie} </Text>
      </View>

  )
}

//FIN Función Input_Text_Botton()
*/


//TEST 4: Mostrar elementos de una lista con sus items 
/*
export default function Mostrar_Torres(){
  const [Torres, setTorres] = useState([
    {Especie: 'tomate',   id:'1',   key: '1'},
    {Especie: 'cebolla',  id:'2',   key: '2'},
    {Especie: 'coliflor', id:'3',   key: '3'},
    {Especie: 'naranja',  id:'4',   key: '4'},
    {Especie: 'cebolla',  id:'5',   key: '5'},
    {Especie: 'menta',    id:'6',   key: '6'},
  ])


  return(
    <View style = {styles.container}>
      <ScrollView>
      {Torres.map((item) => {
        return(
          <View key = {item.key} >
            <Text style={styles.item}>  Torre id: {item.id} {"\n"}   Especie: {item.Especie}  </Text>
          </View>
        )
      })}
      </ScrollView>
    </View>
  )
}
*/


//TEST 5: AGREGA ELEMENTO A LISTA, MEDIANTE INPUT DE TEXTO
/*
export default function Add_Tower_toList(){

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
  </View>
  )
}
//FIN AGREGAR TORRE

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