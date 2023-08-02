import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function Ejercicio1Screen() {
  return (
    <View style={styles.contenedor}>
      <Text style={{ fontSize: 35}}>Ejercicio 1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        alignItems:'center',
        flex: 1,
        justifyContent:'center'
    }
})