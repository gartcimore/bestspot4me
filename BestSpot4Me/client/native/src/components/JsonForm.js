'use strict'


import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';


export default class JsonForm extends Component {
  render() {
  	let jsonForm = this.props.form;
  	let fields = [];
  	for(let key of Object.keys(jsonForm.schema.properties)){
  		fields.push(this.generateField(jsonForm.schema.properties[key]));
  	}
  	let actions = [];
  	jsonForm.actions.forEach(action => {
  		actions.push(this.generateActionButton(action));
  	});  	
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          {fields}
        </View>  
        <View >
	        {actions}
        </View>
      </View>
    );
  }
  generateField(property){
  	let field;
  	switch(property.type){
  		case 'string':
  			field = <TextInput style={styles.buttonText} key={property.title} placeholder={property.title} secureTextEntry={(property.secure)?true:false}></TextInput>;
  			break;
  		case 'number':
  			field = <TextInput keyboardType="numeric" key={property.title}placeholder={property.title} style={styles.buttonText}></TextInput>;
  			break;
  	}  	
  	return field;
  }
  generateActionButton(action,i){
  	return <TouchableHighlight key={action.type} style={styles.action}>
            <Text style={styles.actionText}>{action.title}</Text>
          </TouchableHighlight>;
  }
}

var styles = StyleSheet.create({
  row : {
  	marginBottom: 50
  },
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  	alignSelf: 'stretch',
  	justifyContent: 'center'
  },
  actionText: {
  	textAlignVertical : 'center',
    fontSize: 18,
    color: 'black',
  	textAlign: 'center',
  	justifyContent: 'center'
  },
  action: {
  	height: 36,
  	backgroundColor: '#48BBEC',
  	borderColor: '#48BBEC',
  	borderWidth:1,
  	borderRadius: 8,
  	marginBottom: 10
  }
 });
