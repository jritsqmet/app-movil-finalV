import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Login from '../components/Login'

export default function Ejercicio1Screen() {
  return (
    <View style={styles.contenedor}>
      <Text style={{ fontSize:35 }}>EJERCICIO 1</Text>
      <Login/>
      <Login/>
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