import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/Main';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import SignUp from './screens/SignUp';


export default class App extends React.Component {
  render() {
    return (
      <SingUp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
