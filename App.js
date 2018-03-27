import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Main from './screens/Main';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import SignUp from './screens/SignUp';


// export default class App extends React.Component {
//   render() {
//     return (
//       <SignUp/>
//     );
//   }
// }

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
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
