import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

export default function Saludo( prop ) {

    //console.log(prop.nombre)

  return (
    <View>
      <Text>{prop.nombre}</Text>
      <Button  
        title='Saludar'
        onPress={ () => (
            Alert.alert('Saludo', 'Bienvenido ' + prop.nombre)
        )}
      />

    </View>
  )
}