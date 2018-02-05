'use strict';

import React, { PureComponent } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Avatar } from 'react-native-elements';

import { connect } from 'react-redux';

class CustomDrawerContentComponent extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <View style={styles.header}>
            <Image
              source={require('./../assets/img/bg_header.jpg')}
              style={styles.bgImgStyles}
            />
            <Avatar
              large
              rounded
              source={{ uri: 'https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/body_image/public/4minute-hyuna-2.jpg?itok=miWX11m6&mtime=1497555432' }}
              activeOpacity={0.7}
            />
            <Text style={{ paddingTop: 10, color: '#ffffff' }}>{this.props.name}</Text>
            <Text style={{ color: '#ffffff' }}>{this.props.email}</Text>
          </View>
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImgStyles: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
function mapStateToProps(state) {
  return {
    name: state.name,
    email: state.email
  };
}

export default connect(mapStateToProps)(CustomDrawerContentComponent);
