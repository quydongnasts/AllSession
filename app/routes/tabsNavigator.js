import React from 'react';

import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HomeScreen from './../layouts/home/index';
import NewsScreen from './../layouts/news/index';
import WeatherScreen from './../layouts/weather/index';
import ProfileScreen from './../layouts/profile/index';


const tabBarOptions = {
  showIcon: true,
  labelStyle: {
    fontSize: 11,
    marginTop: 0
  },
  tabStyle: {
    padding: 0
  },
  style: {
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderColor: 'gray'
  },
  activeTintColor: '#D228A0',
  inactiveTintColor: 'gray',
  indicatorStyle: {
    backgroundColor: '#ffffff'
  }
};

const Tabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='home' type='entypo' color={tintColor} size={20} />
      ),
    },
  },
  Weather: {
    screen: WeatherScreen,
    navigationOptions: {
      tabBarLabel: 'Weather',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='onedrive' type='entypo' color={tintColor} size={20} />
      ),
    },
  },
  News: {
    screen: NewsScreen,
    navigationOptions: {
      tabBarLabel: 'News',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='twitter' type='entypo' color={tintColor} size={20} />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='user' type='entypo' color={tintColor} size={20} />
      ),
    },
  },
},
{
  tabBarPosition: 'bottom',
  tabBarOptions
});

export default Tabs;
