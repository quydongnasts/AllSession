'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: {
        value: '',
        error: false
      }
    };
  }

  onChangeEmail = (value) => {
    this.setState({ email: value });
  }

  onChangePassword = (value) => {
    this.setState({ password: value });
  }

  onChangeConfirmPassword = (value) => {
    this.setState({ confirmPassword: { value } });
  }

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.form}>
            <FormLabel labelStyle={styles.labelStyle}>EMAIL</FormLabel>
            <FormInput
              placeholder='email@example.domain'
              underlineColorAndroid='#E91F64'
              selectionColor='#E91F64'
              value={email}
              onChangeText={(value) => this.onChangeEmail(value)}
            />
            <FormLabel labelStyle={styles.labelStyle}>PASSWORD</FormLabel>
            <FormInput
              placeholder='••••••••'
              underlineColorAndroid='#E91F64'
              selectionColor='#E91F64'
              secureTextEntry
              value={password}
              onChangeText={(value) => this.onChangePassword(value)}
            />
            <FormLabel labelStyle={styles.labelStyle}>CONFIRM PASSWORD</FormLabel>
            <FormInput
              placeholder='••••••••'
              underlineColorAndroid='#E91F64'
              selectionColor='#E91F64'
              secureTextEntry
              value={confirmPassword.value}
              onChangeText={(value) => this.onChangeConfirmPassword(value)}
            />
            { confirmPassword.error &&
              <FormValidationMessage
                containerStyle={styles.errorContainer}
                labelStyle={styles.errorLabel}
              >
                Retype password incorrect
              </FormValidationMessage>
            }
          </View>
          <View style={styles.button}>
            <Button
              title='Sign up'
              buttonStyle={{ marginBottom: 10 }}
              backgroundColor='#E91F64'
              onPress={() => alert('ok')}
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
  content: {
    flex: 1
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

export default SignUpScreen;
