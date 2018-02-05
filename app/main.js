/*global alert, confirm, console, Debug, opera, prompt, WSH */
import React, { Component } from 'react';
import {

} from 'react-native';

import { Provider } from 'react-redux';

import { store } from './redux/index';
import Root from './routes/root';

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default Main;
