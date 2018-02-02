import React from 'react';

import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import NewsScreen from './../layouts/news/index';
import WeatherScreen from './../layouts/weather/index';
// import Stacks from './stackNavigator';

const tabBarOptions = {
  showIcon: false,
  upperCaseLabel: false,
  labelStyle: {
    fontSize: 11,
    // marginTop: 0
  },
  tabStyle: {
    padding: 0
  },
  style: {
    backgroundColor: '#ffffff',
  },
  activeTintColor: '#06a7e1',
  inactiveTintColor: 'gray',
  indicatorStyle: {
    backgroundColor: '#06a7e1'
  }
};

const Tabs = TabNavigator({
  News: {
    screen: NewsScreen,
    navigationOptions: {
      tabBarLabel: 'News',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='twitter' type='entypo' color={tintColor} size={20} />
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
},
{
  // tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions
});

export default Tabs;
