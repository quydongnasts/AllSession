'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import { Avatar, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

class LogInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={{ height: '100%', width: '100%' }}
            source={require('./../../assets/img/bg_header.jpg')}
          />
          <View style={styles.absolute}>
            <Avatar
              rounded
              source={require('./../../assets/img/login.png')}
              width={100}
              height={100}
            />
          </View>
        </View>
        <View style={styles.content}>

          <View style={styles.form}>
            <FormLabel labelStyle={styles.labelStyle}>EMAIL</FormLabel>
            <FormInput
              placeholder='email@example.domain'
              underlineColorAndroid='#E91F64'
              selectionColor='#E91F64'
            />
            {/* <FormValidationMessage
              containerStyle={styles.errorContainer}
              labelStyle={styles.errorLabel}
            >
              Invalid Email
            </FormValidationMessage> */}
            <FormLabel labelStyle={styles.labelStyle}>PASSWORD</FormLabel>
            <FormInput
              placeholder='••••••••'
              underlineColorAndroid='#E91F64'
              selectionColor='#E91F64'
              secureTextEntry
            />
            {/* <FormValidationMessage
              containerStyle={styles.errorContainer}
              labelStyle={styles.errorLabel}
            >
              Invalid Password
            </FormValidationMessage> */}
          </View>
          <View style={styles.button}>
            <Button
              iconRight={{ name: 'sign-in', type: 'font-awesome' }}
              title='Sign in'
              buttonStyle={{ marginBottom: 10 }}
              backgroundColor='#E91F64'
            />
            <Button
              iconRight={{ name: 'lock', type: 'font-awesome' }}
              title='Sign up'
              backgroundColor='#D3D3D3'
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ffffff'
  },
  header: {
    height: 200,
    alignItems: 'center',
  },
  absolute: {
    width: 105,
    height: 105,
    position: 'absolute',
    zIndex: 1,
    top: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 10,
    borderColor: 'white'
  },
  content: {
    flex: 2
  },
  form: {
    flex: 4,
    justifyContent: 'center',
  },
  button: {
    flex: 2,
    justifyContent: 'center'
  },
  labelStyle: {
    color: '#E91F64',
    fontSize: 13,
    fontWeight: 'normal'
  },
  errorContainer: {
    backgroundColor: 'red',
    paddingTop: 5,
    paddingBottom: 8,
    marginHorizontal: 20,
    borderRadius: 50,
     alignItems: 'center'
   },
   errorLabel: {
     color: 'white',
     fontSize: 13
   }
});

export default LogInScreen;
