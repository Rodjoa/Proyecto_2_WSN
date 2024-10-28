import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

export default function Conectado_a_Torre() {
  return (
    <View style={styles.container}>
      {/* Imagen a la izquierda */}
      <Image
        source={{uri: './assets/Torre_individual.png'}} // Usar require para evitar problemas
        resizeMode="cover"
        style={styles.image}
      />

      {/* Texto en la esquina superior derecha */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Estado de la torre X:</Text>
        <Text style={styles.data}>Nivel de agua: </Text>
        <Text style={styles.data}>Carga de batería: </Text>
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
    fontSize: 18,
    color: 'gray',
  },
});