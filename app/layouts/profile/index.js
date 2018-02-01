'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class ProfileScreen extends Component {
  static navigationOptions = () => ({
    header: null,
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>
          MessageScreen
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


export default ProfileScreen;
