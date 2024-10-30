import React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import Conectado_a_Torre from './src/screens/Conectado_a_Torre';
import Estado_Torre from './src/screens/Estado_Torre';
import Input_Text from './src/screens/Input';
import Update_Text from './src/screens/Input';
import Mostrar_Torres from './src/screens/Input';
import Add_Tower_toList from './src/screens/Input';
import Agregar_Torre from './src/screens/Agregar_Torre';
import Borrar_Torre from './src/screens/Borrar_Torre';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




//navegaremos entre Homescreen y Conectado_a_Torre

const Stack = createNativeStackNavigator();

export default function App() {
  return(

    //falta crear archivo <Stack.Screen name = "Network_State" component = {Estado_Red}/> aqui trae la bd creada con AsyncStorage

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



/*
export default function App() {
  return<Borrar_Torre/>
}
  */