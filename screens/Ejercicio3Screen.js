import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import crashJSON from '../assets/data/crash.json'
import Tarjeta from '../components/Tarjeta'

export default function Ejercicio3Screen() {

    return (
    <View style={styles.contenedor}>
      <Text style={{ fontSize: 35}}>Ejercicio 3</Text>
      
      <FlatList 
        data={crashJSON.personajes}
        
        renderItem={ ( {item} ) =>(
            <Tarjeta datos = {item} />
        ) }

        numColumns={2}
      />

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