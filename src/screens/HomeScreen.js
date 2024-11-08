import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Conectado_a_Torre} from './Conectado_a_Torre' 


export default function HomeScreen({navigation}) {
  return (
    
        <View style={styles.container}>
          <Text style={styles.title}>Tower Garden App</Text>
          <Button title="Conectarse a una torre" onPress={() => navigation.navigate("Connection")} />
        </View>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    padding:20,
  },
});
