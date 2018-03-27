import React, { Component } from 'react';
import { Text, Image, TouchableHighlight, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';


class Main extends Component {
  render(){
    return(
      <View style={ Styles.container }>
        <Image style={ Styles.image } source={require('../img/logo.png')} />
        <Text style={ Styles.slogan }>Bem-vindo ao desafio da BeeStart</Text>

        <TouchableHighlight onPress={ () => this.props.navigation.navigate('Login')} style={ Styles.blackButton }>
          <Text style={{ color: 'white',}}>Acessar o sistema</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={ () => this.props.navigation.navigate('SignUp')} style={ Styles.whiteButton}>
          <Text>Cadastrar-se</Text>
        </TouchableHighlight>

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
    backgroundColor: '#cccc99',
  },
  image: {
    width: 200,
    height: 283, 
  },
  slogan: {
    marginBottom: 100,
    marginTop: 20,
    color: 'white',
  },
  blackButton: {
    backgroundColor: 'black',
    padding: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  whiteButton: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
  }

})



