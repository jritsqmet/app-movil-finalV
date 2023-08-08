import { View, Text, TouchableOpacity, Modal, Button, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta(props) {
   // console.log(props.datos.url)

    const [modalVisible, setmodalVisible] = useState(false)

    return (
        <View>
            <TouchableOpacity onPress={() => setmodalVisible(!modalVisible)}>
                <Text>{props.datos.nombre}</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                transparent={true}
            >
                <View style={ styles.modal}>
                    <Text  style = {styles.txt}>Nombre: {props.datos.nombre}</Text>
                    <Image 
                        source={{ uri: props.datos.url}}
                        style={styles.img}
                    />
                    <Text style = {styles.txt}>Descripcion: {props.datos.descripcion}</Text>
                    <Button title='cancelar' onPress={() => setmodalVisible(false)} />
                </View>

            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    modal:{
        backgroundColor: 'rgba(0, 40, 0, 0.9)',
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
    txt:{
        fontSize:30,
        color:'white'
    },
    img:{
        width: 390,
        height: 200
    }

})