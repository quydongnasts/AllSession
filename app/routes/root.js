import React from 'react';
import {

} from 'react-native';

import { StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';

import Drawers from './drawersNavigator';
import LogInScreen from './../layouts/logIn/index';
import SignUpScreen from './../layouts/signUp/index';

const Root = StackNavigator({
  Unauthorized: {
    screen: LogInScreen,
    navigationOptions: {
      header: null
    },
  },
  Authorized: {
    screen: Drawers,
    navigationOptions: {
      header: null
    },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      header: null
    },
  }
});

export default Root;
