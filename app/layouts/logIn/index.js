'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import { Avatar, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

class LogInScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: '',
        error: false
      },
      password: {
        value: '',
        error: false
      }
    };
  }

  onChangeEmail = (value) => {
    this.setState({ email: { value } });
    console.log(this.state.email);
  }

  onChangePassword = (value) => {
    this.setState({ password: { value } });
    console.log(this.state.password);
  }

  handleSignIn = () => {
    const { email, password } = this.state;
    if (email.value !== this.props.email) {
      this.setState({ email: { error: true } });
    }
    if (password.value !== this.props.password) {
      this.setState({ password: { error: true } });
    }
    if ((email.value === this.props.email) && (password.value === this.props.password)) {
      this.props.navigation.navigate('Authorized');
    }
  }

  render() {
    const { email, password } = this.state;
    const { navigate } = this.props.navigation;
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
              value={email.value}
              onChangeText={(value) => this.onChangeEmail(value)}
            />
            { email.error &&
              <FormValidationMessage
                containerStyle={styles.errorContainer}
                labelStyle={styles.errorLabel}
              >
                Invalid Email
              </FormValidationMessage>
            }
            <FormLabel labelStyle={styles.labelStyle}>PASSWORD</FormLabel>
            <FormInput
              placeholder='••••••••'
              underlineColorAndroid='#E91F64'
              selectionColor='#E91F64'
              secureTextEntry
              value={password.value}
              onChangeText={(value) => this.onChangePassword(value)}
            />
            { password.error &&
              <FormValidationMessage
                containerStyle={styles.errorContainer}
                labelStyle={styles.errorLabel}
              >
                Invalid Password
              </FormValidationMessage>
            }
          </View>
          <View style={styles.button}>
            <Button
              iconRight={{ name: 'sign-in', type: 'font-awesome' }}
              title='Sign in'
              buttonStyle={{ marginBottom: 10 }}
              backgroundColor='#E91F64'
              onPress={this.handleSignIn}
            />
            <Button
              iconRight={{ name: 'lock', type: 'font-awesome' }}
              title='Sign up'
              backgroundColor='#D3D3D3'
              onPress={() => navigate('SignUp')}
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

function mapStateToProps(state) {
  console.log(state);
  return {
    email: state.email,
    password: state.password
  };
}

export default connect(mapStateToProps)(LogInScreen);
