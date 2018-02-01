import { StackNavigator } from 'react-navigation';

import Tabs from './tabsNavigator';

const Root = StackNavigator({
  Home: {
    screen: Tabs,
  },
});

export default Root;
