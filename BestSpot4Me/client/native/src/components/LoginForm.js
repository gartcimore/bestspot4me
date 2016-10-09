'use strict'


import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import JsonForm from './JsonForm';

export default class SignInForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View >
          <JsonForm form={this.props.jsonForm} callback={this.props.callback.bind(this)}/>
        </View>  
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex : 1,
    backgroundColor: 'transparent'
  }
 });
