'use strict'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signInUser, signInUserSuccess, signInUserFailure, resetUserFields } from 'common/actions/users';
import LoginForm from '../components/LoginForm.js';  	

import jsonForm from 'common/forms/signin.form.json';

function mapStateToProps(state) {
  return {
  	'jsonForm':jsonForm,
  	'options':{}
  };
}


export default connect(mapStateToProps)(LoginForm);
