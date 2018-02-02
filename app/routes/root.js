import React from 'react';

import { DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Stack from './stackNavigator';
import ProfileScreen from './../layouts/profile/index';
import NotificationScreen from './../layouts/notification/index';
import LogOutScreen from './../layouts/logOut/index';

const Root = DrawerNavigator({
  Home: {
    screen: Stack,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon name='home' type='font-awesome' color={tintColor} size={22} />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => (
        <Icon name='user-o' type='font-awesome' color={tintColor} size={22} />
      ),
    },
  },
  Notifications: {
    screen: NotificationScreen,
    navigationOptions: {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Icon name='bell-o' type='font-awesome' color={tintColor} size={22} />
      ),
    },
  },
  LogOut: {
    screen: LogOutScreen,
    navigationOptions: {
      drawerLabel: 'Log out',
      drawerIcon: ({ tintColor }) => (
        <Icon name='share-square-o' type='font-awesome' color={tintColor} size={22} />
      ),
    },
  }
},
{
  drawerBackgroundColor: '#3c3c47',
  contentOptions: {
    labelStyle: {
      marginLeft: 0,
      color: '#ffffff',
      fontWeight: 'normal'
    },
    activeTintColor: '#ffffff',
    inactiveTintColor: '#ffffff',
    activeBackgroundColor: '#3c3c47',
    inactiveBackgroundColor: '#3c3c47'
  }
});

export default Root;
