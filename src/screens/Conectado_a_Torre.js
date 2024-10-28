import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

//source={require('./assets/Homeimage.png')} //TESTEO EN MOVIL NO FUNCIONA
//source={'./assets/Homeimage.png'}         // TESTEO EN WEB
export default function Conectado_a_Torre() {
  return (
    <ImageBackground
       // Usar require para evitar errores de carga
        source={'./assets/Homeimage.png'}         // TESTEO EN WEB
        resizeMode="cover"
        style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Conectado a torre x</Text>

        {/* Botones con espacio vertical entre ellos */}
        <View style={styles.buttonContainer}>
          <Button
            title="Consultar estado de la torre"
            onPress={() => alert('Conectando...')}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Consultar estado de la red"
            onPress={() => alert('Consultando...')}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Agregar torre"
            onPress={() => alert('Agregando torre...')}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Borrar torre"
            onPress={() => alert('Borrando torre...')}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20, // Opcional: Margen lateral para evitar que todo quede muy pegado a los bordes
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
  },
  buttonContainer: {
    marginVertical: 10, // Espacio entre cada botón
    width: '80%', // Ajustar tamaño del botón para que no ocupe todo el ancho
  },
});
