'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class NewsScreen extends Component {
  static navigationOptions = () => ({
    header: null,
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>
          NewsScreen
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

export default NewsScreen;
