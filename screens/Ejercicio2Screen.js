import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Saludo from '../components/Saludo'
import Card from '../components/Card'

export default function Ejercicio2Screen() {
  return (
    <View style={styles.contenedor}>
      <Text style={{ fontSize: 35 }}>EJERCICIO 2</Text>
      <Saludo nombre='Ana Guerra' />

      <View
        style={{ borderWidth: 1, width: '90%', marginBottom: 10, marginTop: 10 }}
      />

      <Card
        producto='Xiaomi'
        precio={250}
        image='https://celumania.com.ec/wp-content/uploads/2021/10/TELEFONO-XIAOMI-REDMI-9A-2_32GB-BLUE.png'
      />

      <Card
        producto='iPhone X'
        precio={550}
        image='https://www.pngmart.com/files/13/iPhone-12-PNG-Free-Download.png'
      />

    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})