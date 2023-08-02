import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'

export default function Login() {
    return (
        <View>
            <Image
                source={{ uri: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/corporate-user-icon.png' }}
                style={styles.img}
            />

            <TextInput
                placeholder='Ingrese correo'
                keyboardType='email-address'
                style={styles.input}
            />

            <TextInput
                placeholder='Ingrese contraseña'
                secureTextEntry={true}
                style={ [ styles.input, styles.inputPass] }
            />

            <Button 
                title='LogIn'
            />


        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 90,
        height: 90
    },
    input:{
        borderWidth:1,
        padding:10,
        marginBottom:10,
        marginTop: 10
    },

    inputPass:{
        backgroundColor:'#dac6fb',
        color:'white'
    }

})