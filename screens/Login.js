import React, { Component } from 'react';
import { Text, View, Platform, StyleSheet, Image, TextInput, TouchableHighlight, Alert, Keyboard, KeyboardAvoidingView, } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {email: '', password:''}
  }
  handleLogin = () => {
    Keyboard.dismiss()
    if(this.state.email === 'teste@besstart.com.br' && this.state.password === 'appsimples'){
      this.props.navigation.navigate('Dashboard')
    } else {
      Alert.alert(
        'Erro',
        'Verifique os dados preenchidos.',
      )
    }
  }
  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={ Styles.container }>
        <View style={ Styles.form }>
          <TextInput onChangeText={(text) => this.setState({email: text})} placeholder='E-Mail' style={ Styles.emailInput }/>
          <TextInput onChangeText={(text) => this.setState({password: text})} placeholder='Password' secureTextEntry={true} style={ Styles.emailInput }/>
          <TouchableHighlight onPress={this.handleLogin} style={ Styles.blackButton }>
            <Text style={{ color: 'white',}}>Login</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
export default Login;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8c215',
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
    padding: 15,
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