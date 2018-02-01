'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>
          HomeScreen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  }
});


export default HomeScreen;
