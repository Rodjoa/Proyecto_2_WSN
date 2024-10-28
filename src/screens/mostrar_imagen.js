import React from 'react';
import { StyleSheet, View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import img from './assets/Torre_individual.png'



export default function mostrar_imagen(){

    return(
        <View style={styles.container}>
             <Image source={img} style = {{
                width: 100, 
                height: 100,
                resizeMode: 'center'
            }}/>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#09f',
        alignItems: 'center',
        justifyContents: 'center',


    },
});