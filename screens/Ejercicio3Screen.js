import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TextInput, Button, Alert } from 'react-native'

import userJSON from '../assets/data/users.json'


export default function Ejercicio3Screen() {

  const [usuario, setusuario] = useState("");
  const [contrasenia, setcontrasenia] = useState('');

  //const [listaUsuarios, setlistaUsuarios] = useState(userJSON.users)
  const [listaUsuarios, setlistaUsuarios] = useState(null)

  //HOOK DE EFECTO

  const API_USERS= 'https://my-json-server.typicode.com/jritsqmet/json-user/db';
  useEffect(() => {

    if( listaUsuarios == null){
     fetch(API_USERS)
     .then( response => response.json() )
     .then( datos =>  setlistaUsuarios(datos.users) )
    }
    console.log(listaUsuarios)
  
  }, [listaUsuarios])
  
  ///////////////////////////////

  function verificarUsuario(user, pass) {

    for (let item of listaUsuarios) {
      if (user == item.username) {
        if (pass == item.password) {
          Alert.alert('Mensaje', 'Acceso correcto')
        } else {
          Alert.alert('Mensaje', 'Accedo denegado')
        }
      }
    }
    setusuario('');
    setcontrasenia('')

  }


  return (
    <View style={styles.contenedor}>
      <Text style={{ fontSize: 35 }}>Ejercicio 3</Text>
      <TextInput
        placeholder='Ingrese usuario'
        style={styles.input}
        onChangeText={(texto) => setusuario(texto)}
        value={usuario}
      />

      <TextInput
        placeholder='Ingrese contraseña'
        style={styles.input}
        onChangeText={(texto) => setcontrasenia(texto)}
        value={contrasenia}
      />

      <Button title='LogIn' onPress={() => verificarUsuario(usuario, contrasenia)} />



    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',

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