'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { meFromToken, meFromTokenSuccess, meFromTokenFailure, resetToken } from 'common/actions/users';
import LoginForm from '../components/LoginForm.js';  	
import NativeForm from 'tcomb-form-native';

const mapDispatchToProps = (dispatch) => {
  return {
  	'user':NativeForm.struct({
 			 username: NativeForm.String,
 		 	 password: NativeForm.String
			}),
  	'options':{},
  	'actions':[{
  				'key' : 1,
		  		'label':'Sign In',
		  		'style' : {
				    height: 36,
				    backgroundColor: '#48BBEC',
				    borderColor: '#48BBEC',
				    borderWidth: 1,
				    borderRadius: 8,
				    marginBottom: 10,
				    alignSelf: 'stretch',
				    justifyContent: 'center'
				  }
				},
				{
  				'key' : 2,
		  		'label':'Sign Up',
		  		'style' : {
				    height: 36,
				    backgroundColor: '#48BBEC',
				    borderColor: '#48BBEC',
				    borderWidth: 1,
				    borderRadius: 8,
				    marginBottom: 10,
				    alignSelf: 'stretch',
				    justifyContent: 'center'
				  }
				}]
  }
}

export default connect(null, mapDispatchToProps)(LoginForm);
