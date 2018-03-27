import React, { Component } from 'react';
import { Text, View, Platform, StyleSheet, Image, TextInput, TouchableHighlight, } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Login extends Component {
  render(){
    return(
      <View style={ Styles.container }>
        <View style={{ flex: 0, height: (Platform.OS === 'ios') ? 20 : 0, width: '100%'}}/>
        <View style={ Styles.header}>
          <Image style={ Styles.image } source={require('../img/icon.png')}/>
        </View>
        <View style={ Styles.form }>
          <TextInput placeholder='E-Mail' style={ Styles.emailInput }/>
          <TextInput placeholder='Password' secureTextEntry={true} style={ Styles.emailInput }/>
          <TouchableHighlight onPress={ () => this.props.navigation.navigate('Dashboard')} style={ Styles.blackButton }>
            <Text style={{ color: 'white',}}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
export default Login;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#cccc99',
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
  },
  emailInput: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 20,
    backgroundColor: 'white',
    width: '80%',
    marginBottom: 10,
  },
  blackButton: {
    backgroundColor: 'black',
    padding: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  form: {
    justifyContent:'center',
    alignItems: 'center',
    flex: 1,
  },
})