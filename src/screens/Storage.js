import React from 'react';  //Librerias React / Native
import { Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack'; //Navegacion entre paginas
import AsyncStorage from '@react-native-async-storage/async-storage';


//import Lista_Torres (ARRAY)

//Estas funciones almacenarán las TORRES


export const StoreData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        console.log('Guardado:', value);
        
    } catch (e) {
        console.log('Error:', e);
    }
  
};

// Guardar la lista de torres en AsyncStorage cuando cambie
export const SaveTorres = async (updatedTorres) => {
  try {
    await AsyncStorage.setItem('torres', JSON.stringify(updatedTorres));
    //console.error('Linea asyncstorage de funcion SaveTorres ejecutada');
  } catch (e) {
    console.error('Error al guardar las torres:', e);
  }
};


export const GetData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        const parsedValue = value !== null ? JSON.parse(value) : null;
        console.log('Recuperado:', parsedValue);
        alert(`Recuperado: ${parsedValue}`)
        return parsedValue;

    } catch(e) {
        console.log('Error:', e);
    }

    
}

export const RemoveData = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }

  export const UpdateData = async (key, newValue) => {
    try {
      // Obtener el valor actual desde AsyncStorage
      const currentData = await AsyncStorage.getItem(key);
      console.log('currentData:', currentData);
      // Parsear el valor actual a objeto, o inicializar uno vacío si no existe
      let parsedData = currentData != null ? JSON.parse(currentData) : {}; //Se parsea para manipular datos, poder hacer object.item
      console.log('currentData Parsed:', parsedData);
  
      // Actualizar solo el atributo 'especie' con el nuevo valor de 'especie' en newValue
      parsedData.especie = newValue.especie;
      parsedData.id = '10'
  
      // Guardar el objeto actualizado en AsyncStorage
      await AsyncStorage.setItem(key, JSON.stringify(parsedData));
  
      console.log('Especie actualizada a:', parsedData.especie);
    } catch (e) {
      console.log('Error al actualizar:', e);
    }
  };











