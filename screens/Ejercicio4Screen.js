import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import * as FileSystem from 'expo-file-system'

export default function Ejercicio4Screen() {

    const [titulo, settitulo] = useState('');
    const [mensaje, setmensaje] = useState('')
    const [tareas, settareas] = useState([])

    const [indiceEstado, setindiceEstado] = useState(-1)

    useEffect(() => {
        cargar()
    }, [])
    

    //AGREGAR DATOS 
    function enviar() {
        if (indiceEstado === -1) {
            //guardar
            const nuevasTareas = [...tareas, { titulo, mensaje }]
            settareas(nuevasTareas)
        } else {
            //editar
            const nuevasTareas = [...tareas]
            nuevasTareas[indiceEstado] = { titulo, mensaje }
            settareas(nuevasTareas)

            setindiceEstado(-1)
        }

        settitulo('')
        setmensaje('')

        guardar();

    }


    //ELIMINAR DATOS    
    function eliminar(indice) {
        const nuevasTareas = tareas.filter((item, i) => i !== indice)
        settareas(nuevasTareas);

        guardar();
    }

    //EDITAR DATOS
    function editar(indice) {
        const nuevaTarea = tareas[indice]
        settitulo(nuevaTarea.titulo)
        setmensaje(nuevaTarea.mensaje)

        setindiceEstado(indice)
    }

    //STORAGE - GUARDAR
    const guardar = async () => {
        try {
            const file = `${FileSystem.documentDirectory}datos.json`
            await FileSystem.writeAsStringAsync(file, JSON.stringify(tareas))
            console.log('DATOS GUARDADOS')
        }catch(error){
            console.log(error)
        }  
    }

    //STORAGE - CARGAR
    const  cargar = async() =>{
        try{
            const file = `${FileSystem.documentDirectory}datos.json`
            const existe = await FileSystem.getInfoAsync(file)

            if (existe.exists){
                const contenido = await FileSystem.readAsStringAsync(file)
                const datos = JSON.parse(contenido)
                settareas(datos)
                console.log('DATOS CARGADOS')
            }

        }catch(error){
            console.log(error)
        }
    }





    return (
        <View style={styles.contenedor}>
            <TextInput
                placeholder='Ingrese un titulo'
                style={styles.input}
                onChangeText={(texto) => settitulo(texto)}
                value={titulo}
            />
            <TextInput
                placeholder='Ingrese un mensaje'
                style={styles.input}
                onChangeText={(texto) => setmensaje(texto)}
                value={mensaje}
            />

            <Button title='Enviar' onPress={() => enviar()} />


            <View
                style={{ borderWidth: 1, width: '90%', marginTop: 10, marginBottom: 10 }}
            />

            <View style={{ width: '80%' }}>
                <FlatList
                    data={tareas}
                    renderItem={({ item, index }) =>
                        <View style={styles.lista}>
                            <Text>{item.titulo}</Text>
                            <Text>{item.mensaje}</Text>
                            <View style={styles.fila}>
                                <Button title='Eliminar' color={'red'} onPress={() => eliminar(index)} />
                                <Button title='Editar' color={'green'} onPress={() => editar(index)} />
                            </View>


                        </View>

                    }
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center',
        flex: 1,

    },
    input: {
        borderWidth: 1,
        width: '80%',
        height: 40,
        marginBottom: 10,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    lista: {
        backgroundColor: '#bcbfc2',
        marginBottom: 10
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})