import React from 'react';
import { View, Text, StyleSheet, Image, Button, buttonContainer, ImageBackground } from 'react-native';

export default function Estado_Torre({navigation}) {
  return (
    <View style={styles.container}>
      

      {/* Texto en la esquina superior derecha */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Estado de la torre X:</Text>
        <Text style={styles.data}>Nivel de agua: </Text>
        <Text style={styles.data}>Carga de batería: </Text>
      </View>

      <View style={styles.buttonContainer}>
          <Button
            title="Volver"
            onPress={() => navigation.navigate("Connection")}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Organiza los elementos en fila (horizontalmente)
    alignItems: 'flex-start', // Alinea los elementos en la parte superior
    padding: 10, // Opcional: Espacio alrededor del contenedor principal
  },
  image: {
    width: '40%', // Ajusta el tamaño de la imagen
    height: '100%',
  },
  textContainer: {
    flex: 1, // El texto ocupa el resto del espacio disponible
    padding: 10, // Espacio interno para separar el texto
    justifyContent: 'flex-start', // Alinea el texto en la parte superior
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  data: {
    fontSize: 24,         // Tamaño de letra cómodo para lectura
    color: 'gray',         // Color gris para un estilo más sutil
  
  },
});