import React from 'react';

import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Tabs from './tabsNavigator';

const Stacks = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
     headerTitle: 'Home',
     headerLeft: <Icon name='navicon' type='font-awesome' size={20} color='#ffffff' />,
     headerRight: <Icon name='bell-o' type='font-awesome' size={20} color='#ffffff' />,
     headerTintColor: '#ffffff',
     headerStyle: {
       backgroundColor: '#06a7e1',
       paddingHorizontal: 15
     },
     headerTitleStyle: {
       marginLeft: 80
     }
   },
  }
});

export default Stacks;
