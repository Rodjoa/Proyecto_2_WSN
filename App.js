import React from 'react';  //Librerias React / Native
import { Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';  
import Conectado_a_Torre from './src/screens/Conectado_a_Torre';
import Estado_Torre from './src/screens/Estado_Torre';
import Agregar_Torre from './src/screens/Agregar_Torre';
import Borrar_Torre from './src/screens/Borrar_Torre';


import { createNativeStackNavigator } from '@react-navigation/native-stack'; //Navegacion entre paginas
import AsyncStorage from '@react-native-async-storage/async-storage';

import {StoreData, GetData, RemoveData, UpdateData } from './src/screens/Storage'


/*


const torres = [
  { id: '1', especie: 'Cebolla', key: '1' },
  { id: '2', especie: 'Tomate', key: '2' }
];



const App = () => {
  const handleStoreData = () =>{
    StoreData('1',Torre_1)
  }

  const handleGetData = () =>{
    GetData('1')
  }

  const handleRemoveData = () =>{
    RemoveData('1')
  }

  const handleUpdateData = () =>{
    UpdateData('1', Torre_2)
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginBottom: 10 }}>
        <Button title="        Guardar        " onPress={handleStoreData} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title="  Mostrar datos  " onPress={handleGetData} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title="   Borrar datos    " onPress={handleRemoveData} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title="Actualizar datos" onPress={handleUpdateData} />
      </View>
    </View>
  );

}

export default App;


/*
// return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Button title = "Guardar" onPress={handleStoreData}/>
  <Button title = "Mostrar datos" onPress={handleGetData}/>
  <Button title = "Borrar datos" onPress={handleRemoveData}/>
  <Button title = "Actualizar datos" onPress={handleUpdateData}/>
 </View>
)


*/











const Stack = createNativeStackNavigator();

export default function App() {
  return(

  
    

  <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name = "Home" component = {HomeScreen}/>
          <Stack.Screen name = "Connection" component = {Conectado_a_Torre}/>
          <Stack.Screen name = "Tower_State" component = {Estado_Torre}/>
          <Stack.Screen name = "Add_Tower" component = {Agregar_Torre}/>
          <Stack.Screen name = "Remove_Tower" component = {Borrar_Torre}/>


          

          
        </Stack.Navigator>
    </NavigationContainer>
  )
  
}










