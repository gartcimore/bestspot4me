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
  constructor(props){
  	super(props);
  	this.values = {};
  }
  render() {
  	let jsonForm = this.props.form;
  	let fields = [];
  	for(let key of Object.keys(jsonForm.schema.properties)){
  		fields.push(this.generateField(key,jsonForm.schema.properties[key]));
  		this.values[key] = "";
  	}
  	let actions = [];
  	jsonForm.actions.forEach(action => {
  		actions.splice(0,0,this.generateActionButton(action));
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
  generateField(key,property){
  	let field;
  	switch(property.type){
  		case 'string':
  			field = <TextInput 
  				style={styles.buttonText} 
  				key={property.title} 
  				placeholder={property.title} 
  				secureTextEntry={(property.secure)?true:false}
  				onChangeText={(text) => {
  					this.values[key]=text;
  				}}></TextInput>;
  			break;
  		case 'number':
  			field = <TextInput keyboardType="numeric" key={property.title}placeholder={property.title} style={styles.buttonText}></TextInput>;
  			break;
  	}  	
  	return field;
  }
  generateActionButton(action,i){
  	return <TouchableHighlight key={action.type} onPress={(action.type==='submit')?this.submitForm.bind(this):this.doNothing} style={(action.type==='submit')?styles.submit:styles.action}>
            <Text style={styles.actionText}>{action.title}</Text>
          </TouchableHighlight>;
  }
  submitForm(){
  	fetch('http://10.0.3.2:8082/api/users/signin', {method: "POST", headers: {}, body:
  	  JSON.stringify(this.values)})
  	      .then((response) => response.json())
  	      .then((responseData) => {
  	          console.log(responseData.body)
  	      })
  	      .done(() => {            
            this.props.callback();
  	      });
  }
  doNothing(){

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
  	borderColor: '#48BBEC',
  	borderWidth:1,
  	borderRadius: 8,
  	marginBottom: 10
  },
  submit: {
  	height: 36,
  	borderColor: '#48BBEC',
  	borderWidth:1,
  	borderRadius: 8,
  	marginBottom: 10,
  	backgroundColor: '#48BBEC'
  }
 });
