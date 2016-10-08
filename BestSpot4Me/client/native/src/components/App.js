'use strict'

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});
