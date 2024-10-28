import React, { useState } from 'react'; // Importa useState
import { SafeAreaView, StyleSheet, TextInput, Text, View } from 'react-native';

export default function Input_Id() {
  const [Id, setId] = useState(''); // Inicializa ID como vacío
  const [Especie, setEspecie] = useState(''); // Inicializa especie como vacío

  return (
    <SafeAreaView style={styles.container}>
      <Text>Introduzca Id: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='Introduzca solo números enteros mayores a 1'
        onChangeText={(val) => setId(val)}
        keyboardType="numeric" // Restringe la entrada a solo números
      />
      <Text> id: {Id} </Text>

      <Text>Introduzca especie cultivada en torre {Id}: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='Introduzca especie cultivada en la torre, por Ej: Tomates'
        onChangeText={newEspecie => setText(newText)} // Cambia a setEspecie liena molesta
      />
      <Text> Descripción: {Especie} </Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Agrega un padding para mejor diseño
    justifyContent: 'center', // Centra el contenido
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
