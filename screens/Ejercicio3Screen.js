import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'


export default function Ejercicio3Screen() {

    return (
    <View style={styles.contenedor}>
      <Text style={{ fontSize: 35}}>Ejercicio 3</Text>
      
     

    </View>
  )
}

const styles = StyleSheet.create({
    contenedor:{
        alignItems:'center',
        flex: 1,
        justifyContent:'center',
        
    }
})