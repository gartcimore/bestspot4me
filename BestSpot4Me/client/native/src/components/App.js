'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome To BestSpot4Me</Text>
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
