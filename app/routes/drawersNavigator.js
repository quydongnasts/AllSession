import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import { DrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon, Avatar } from 'react-native-elements';

import Stack from './stackNavigator';
import ProfileScreen from './../layouts/profile/index';
import NotificationScreen from './../layouts/notification/index';
import LogOutScreen from './../layouts/logOut/index';
// import LogInScreen from './../layouts/logIn/index';

const CustomDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.header}>
        <Image
          source={require('./../assets/img/bg_header.jpg')}
          style={styles.bgImgStyles}
        />
        <Avatar
          large
          rounded
          source={{ uri: 'https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/body_image/public/4minute-hyuna-2.jpg?itok=miWX11m6&mtime=1497555432' }}
          activeOpacity={0.7}
        />
        <Text style={{ paddingTop: 10, color: '#ffffff' }}>Kim Hyun-ah</Text>
        <Text style={{ color: '#ffffff' }}>click.boom050@gmail.com</Text>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </View>
);

const Drawers = DrawerNavigator({
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
  },
  // LogIn: {
  //   screen: LogInScreen,
  //   navigationOptions: {
  //     drawerLabel: 'Log in',
  //     drawerIcon: ({ tintColor }) => (
  //       <Icon name='share-square-o' type='font-awesome' color={tintColor} size={22} />
  //     ),
  //   },
  // }
},
{
  // initialRouteName: 'LogIn',
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
  },
  contentComponent: CustomDrawerContentComponent
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImgStyles: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default Drawers;
