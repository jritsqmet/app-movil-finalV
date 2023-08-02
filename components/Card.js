import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Card( props ) {
   // console.log( props.image )
  return (
    <View>
    <Image 
        source={{ uri : props.image}}
        style= {styles.img}
    />
      <Text>Producto: {props.producto}</Text>
      <Text>Precio: {props.precio}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width: 180,
        height:160
    }
  })