'use strict'


import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import NativeForm from 'tcomb-form-native';

var Form = NativeForm.form.Form;

export default class SignInForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Best Spot For Me</Text>
        </View>
        <View style={styles.row}>
          <Form
            ref="form"
            type={this.props.user}
            options={this.props.options}
          />
        </View>  
        <View style={styles.row}>
	        {this.props.actions.map(function(action){
		        return <TouchableHighlight key={action.key} style={action.style}>
			            <Text style={styles.buttonText}>{action.label}</Text>
			          </TouchableHighlight>;
		    })}
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 100,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
 });
