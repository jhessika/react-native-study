import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Main from './screens/Main';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import SignUp from './screens/SignUp';

export default StackNavigator ({
  Main:{
    screen: Main,
  },
  Login:{
    screen: Login,
  },
  Dashboard:{
    screen: Dashboard,
  },
  SignUp:{
    screen: SignUp,
  },
}, {
  initialRouteName: 'Main',
  navigationOptions: {
    headerTitle: <Image style={{ height: 40, width: 40,}} source={require('./img/icon.png')}/>,
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: 'black',
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
