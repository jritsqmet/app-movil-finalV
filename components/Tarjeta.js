import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

export default function Tarjeta(props) {
   // console.log(props.datos.atributos)

    function mensaje( atributos ){

        let caracteristicas = '';

        for ( let atributo of atributos){
            caracteristicas = atributo + "\n"+ caracteristicas;
        }

        Alert.alert('Atributos', caracteristicas)
    }

    return (
        <View style={styles.contenedor}>

            <TouchableOpacity onPress={ ()=> mensaje(props.datos.atributos)}>

                <Text style={{ textAlign: 'center' }}>{props.datos.id}</Text>
                <View style={styles.fila}>
                    <Image
                        source={{ uri: props.datos.image }}
                        style={styles.img}
                        resizeMode='contain'
                    />
                    <Text>{props.datos.name}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 90,
        height: 110
    },
    contenedor: {
        borderWidth: 1,
        width: '49%',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})