'use strict'

/*

Clean Floating Button test

*/

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated
} from 'react-native';
import FloatingButton from './FloatingButton';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});
