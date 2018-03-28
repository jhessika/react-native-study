import React, { Component } from 'react';
import { Text, View, Platform, StyleSheet, Image, TextInput, TouchableHighlight, Alert, KeyboardAvoidingView, } from 'react-native';

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state ={ nome: '', email: '', password: '', }
  }
  handleSignUp = () => {
    const emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    const isValid = (this.state.nome !== '' || this.state.email !== '' || this.state.password !== '') && emailreg.test(this.state.email)
    if(isValid){
      Alert.alert(
        'Sucesso',
        'Você foi cadastrado com sucesso!',
        [
          { text: 'OK', onPress: () => this.props.navigation.navigate('Main') }
        ]
      )
    }else{
      Alert.alert(
        'Erro',
        'Verifique os dados preenchidos',
      )
    }
  }

  
  render(){
    return(
      <KeyboardAvoidingView behavior='padding'  style={ Styles.container}>
        <View style={ Styles.form }>
          <TextInput onChangeText={(text) => this.setState({nome: text})} placeholder='Nome' style={ Styles.input }></TextInput>
          <TextInput onChangeText={(text) => this.setState({email: text})} placeholder='E-mail' style={ Styles.input }></TextInput>
          <TextInput onChangeText={(text) => this.setState({password: text})} placeholder='Password' secureTextEntry={true} style={ Styles.input }/>
          <TouchableHighlight onPress={this.handleSignUp} style={ Styles.blackButton }>
            <Text style={{ color: 'white',}}> Cadastre-se </Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default SignUp;

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
  input: {
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