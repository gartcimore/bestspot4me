'use strict'

import React, { Component } from 'react';

import AppContainer from '../containers/AppContainer.js';
import LoginForm from '../components/LoginForm.js';   
import jsonForm from 'common/forms/signin.form.json';
import SignUpFormContainer from '../containers/SignUpFormContainer.js';
import {Image,StyleSheet} from 'react-native';

class LoginView extends Component {
  navSecond(){
    this.props.navigator.push({
      id: 'main'
    })
  }

  render() {
  	var container;
  	if(this.props.step === "signin"){
  		container = <LoginForm jsonForm={jsonForm} callback={this.navSecond.bind(this)}/>;
  	}
  	else if(this.props.step === "signup"){
  		container = <SignUpFormContainer/>;  		
  	}
    return (
    	<AppContainer>
    	  <Image source={require('image!background')} style={styles.backgroundImage}>
    	 	 {container} 
    	  </Image>
    	</AppContainer>
    );
  }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});

export default LoginView;
