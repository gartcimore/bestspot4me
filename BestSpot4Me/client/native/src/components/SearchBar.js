'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.container}>
       <TextInput placeholder={'Search'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: {
    borderRadius: 20,
    position: 'absolute',
    top: 10,
    left: 10,
    right : 10,
    backgroundColor: 'rgba(255,255,255,0.7)'
  }
});
