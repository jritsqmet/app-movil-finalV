import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native'


export default function Ejercicio1Screen() {

  const [numero1, setnumero1] = useState(0);
  const [numero2, setnumero2] = useState(0);
  const [respuesta, setrespuesta] = useState(0);

  //HOOK DE EFECTO
  useEffect(() => {
    //Alert.alert("Mensaje");
    if( numero2 > 10){
      setnumero2(10)
      Alert.alert('Mensaje', 'No se puede seleccionar mas de 10 elementos')
    }

    if( numero2 < 0){
      setnumero2(0);
    }

    if(numero1 == 5){
      Alert.alert('Mensaje')
    }

  }, [numero2, numero1])
  ///////////////////////////


  function aumentar() {
    //numero1 = numero1 + 1
    if( numero1 <10 ){
      setnumero1(numero1 + 1);
    }else{
      Alert.alert('Mensaje', 'No se permiten seleccionar mas de 10 productos iguales')
    }
    

  }

  function disminuir() {
    if( numero1 > 0){
      setnumero1(numero1 - 1)
    }
   
  }

  function reiniciar(){
    setnumero1(0);
    setnumero2(0);
    setrespuesta(0);
  }

/*
  function suma (){
    setrespuesta( numero1 + numero2)
  }
*/
  function calcular ( operacion ){

    switch (operacion){
      case '+':
        setrespuesta( numero1 + numero2)
        break;
      
      case '-':
        setrespuesta ( numero1 - numero2);
        break;

      case '*':
        setrespuesta( numero1 * numero2);
        break;

      case '/':
        if( numero2 !== 0){
          setrespuesta( numero1 / numero2 )
        }else{
          Alert.alert('Advertencia', 'No se permite la division para cero')
        }
        
        break;
    }

  }



  return (
    <View style={styles.contenedor}>

      <Text style={{ fontSize: 35 }}>Ejercicio 1</Text>

      <View style={styles.fila}>
        <Button title='disminuir' onPress={() => disminuir()}  />
        <Text style={{ fontSize: 25 }}>     {numero1}     </Text>
        <Button title='Aumentar' onPress={() => aumentar()} />
      </View>

      <View style={styles.fila}>
        <Button title='disminuir' onPress={() => setnumero2(numero2 - 1)} />
        <Text style={{ fontSize: 25 }} >     {numero2}     </Text>
        <Button
          title='Aumentar'
          onPress={ () => setnumero2( numero2 + 1) }
        />
      </View>

      <View 
        style={{ borderWidth: 1, width: '90%', marginTop:10, marginBottom:10 }}
      />

      <Text style={{ fontSize: 25 }} >{respuesta}</Text>
      
      <View 
        style={{ borderWidth: 1, width: '90%', marginTop:10, marginBottom:10 }}
      />

      <Button title='reiniciar' color={'red'}  onPress={ ()=> reiniciar() }/>

      <Button title='suma'  color={'green'}  onPress={ ()=> calcular( '+' )}/>
      <Button title='resta' color={'green'}  onPress={ ()=> calcular( '-' )}/>
      <Button title='multiplicación' color={'green'}  onPress={ ()=> calcular('*')}/>
      <Button title='división' color={'green'} onPress={ () =>  calcular('/')}/>
      

    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  fila: {
    flexDirection: 'row',
    marginBottom: 10
  }
})