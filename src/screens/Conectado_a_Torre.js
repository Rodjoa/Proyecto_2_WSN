import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

//source={require('./assets/Homeimage.png')} //TESTEO EN MOVIL NO FUNCIONA
//source={'./assets/Homeimage.png'}         // TESTEO EN WEB
export default function Conectado_a_Torre({navigation}) {
  return (
    
    
      <View style={styles.container}>
        <Text style={styles.title}>Conectado a torre x</Text>

        {/* Botones con espacio vertical entre ellos */}
        <View style={styles.buttonContainer}>
          <Button
            title="Consultar estado de la torre"
            onPress={() =>  navigation.navigate("Tower_State")}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Consultar estado de la red"
            onPress={() => navigation.navigate("Tower_State")}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Agregar / Eliminar torre"
            onPress={() => navigation.navigate("Add_Tower")}
          />
        </View>

        {/*<View style={styles.buttonContainer}>
          <Button
            title="Borrar torre"
            onPress={() => navigation.navigate("Remove_Tower")}
          />
        </View>
        */}

        <View style={styles.buttonContainer}>
          <Button
            title="Desconectarse de la Torre"
            onPress={() => navigation.navigate("Home")}
          />
        </View>

      </View>
    
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20, // Opcional: Margen lateral para evitar que todo quede muy pegado a los bordes
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',
  },
  buttonContainer: {
    marginVertical: 10, // Espacio entre cada botón
    width: '80%', // Ajustar tamaño del botón para que no ocupe todo el ancho
  },
});
