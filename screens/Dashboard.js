import React, { Component } from 'react';
import { Text, View, Platform, StyleSheet, Image, TextInput, TouchableHighlight, } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Dashboard extends Component {
  render(){
    return(
      <View style={ Styles.container }>
        <Text style={ Styles.Text}> “Desafio	Concluído	com	sucesso!” </Text>
        <TouchableHighlight onPress={ () => this.props.navigation.navigate('Main')} style={ Styles.blackButton}>
          <Text style={{ color: 'white',}}> Sair </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
export default Dashboard;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8c215',
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  Text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 40,
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
  blackButton: {
    backgroundColor: 'black',
    padding: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',

  },
})

