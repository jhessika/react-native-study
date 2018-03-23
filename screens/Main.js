import React, { Component } from 'react';
import { Text, Image, Button, View, StyleSheet } from 'react-native';


class Main extends Component {
  render(){
    return(
      <View style={ Styles.container }>
        <Image style={ Styles.image } source={require('../img/logo.png')} />
        <Text style={ Styles.text }>Bem-vindo ao desafio da BeeStart</Text>
        <Button title="Acessar o sistema"/>
        <Button title="Cadastrar-se"/>
      </View>
    )
  }

}
export default Main;

const Styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 200,
    height: 200, 
  },
  text: {
    marginBottom: 100,
  }
})



