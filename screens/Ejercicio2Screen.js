import { View, Text, StyleSheet, TextInput, Button, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import Tarjeta from '../components/Tarjeta';


export default function Ejercicio2Screen() {

  const [nombre, setnombre] = useState('');
  const [descripcion, setdescripcion] = useState('');
  const [url, seturl] = useState('')

  const [listaImagenes, setlistaImagenes] = useState([])

  // HOOK DE EFECTO
  useEffect(() => {

    if (listaImagenes.length !== 0) {
      //Alert.alert('Mensaje', 'La lista se ha actualizado')
    }
  }, [listaImagenes])

  /////////////


  const agregarElementos = (nombre, descripcion, url) => {

    if (nombre.trim() !== '' && descripcion.trim() !== '' && url.trim() !== '') {
      let temp = [...listaImagenes, { nombre, descripcion, url }];
      setlistaImagenes(temp)

      setnombre('');
      setdescripcion('');
      seturl('');

    } else {
      Alert.alert("Mensaje", "No se aceptan campos en blanco")
    }


  }




  return (
    <View style={styles.contenedor}>
      <Text style={{ fontSize: 35 }}>Ejercicio 2</Text>
      <TextInput
        placeholder='Ingrese nombre'
        style={styles.input}
        onChangeText={(texto) => setnombre(texto)}
        value={nombre}
      />

      <TextInput
        placeholder='Ingrese descripcion'
        multiline={true}
        style={styles.input}
        onChangeText={(texto) => setdescripcion(texto)}
        value={descripcion}
      />

      <TextInput
        placeholder='Ingrese url'
        style={styles.input}
        onChangeText={(texto) => seturl(texto)}
        value={url}
        keyboardType='url'
      />

      <Button title='Guardar' onPress={() => agregarElementos(nombre, descripcion, url)} />

      <View
        style={{ borderWidth: 1, width: '90%', marginTop: 10, marginBottom: 10 }}
      />

      <FlatList
        data={listaImagenes}
        renderItem={({ item }) => (
          <View>
            <Tarjeta datos={item} />
            <Button title='Eliminar' color={'red'} />
          </View>
        )}
      />



    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    width: '80%',
    height: 40,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10
  }
})