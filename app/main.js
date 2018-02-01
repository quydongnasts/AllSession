/*global alert, confirm, console, Debug, opera, prompt, WSH */
import React, { Component } from 'react';

import {
  StyleSheet,
} from 'react-native';

import WeatherScreen from './layouts/weather/index';

class Main extends Component {
  render() {
    return (
      <WeatherScreen />
    );
  }
}

const styles = StyleSheet.create({

});


export default Main;
