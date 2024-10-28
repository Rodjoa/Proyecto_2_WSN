import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
//source={{uri: 'assets:/Homeimage.png'}} resizeMode="cover"
 
export default function HomeScreen() {
  return (
    <ImageBackground
      
      source={'./assets/Homeimage.png'} resizeMode="cover" 

      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Tower Garden App</Text>
        <Button title="Conectarse a una torre" onPress={() => alert('Conectando...')} />
      </View>
    </ImageBackground>
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
    color: 'white',
    padding:20,
  },
});
