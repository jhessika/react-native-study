import React, { Component } from 'react';
import { Text, View, Platform, StyleSheet, Image, TextInput, TouchableHighlight, } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Dashboard extends Component {
  render(){
    return(
      <View style={ Styles.container }>
        <View style={{ flex: 0, height: (Platform.OS === 'ios') ? 20 : 0, width: '100%'}}/>
          <View style={ Styles.header}>
              <Image style={ Styles.image } source={require('../img/icon.png')}/>
          </View>
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
    backgroundColor: '#cccc99',
    flex: 1,
  },
  Text: {
    padding: 80,
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

