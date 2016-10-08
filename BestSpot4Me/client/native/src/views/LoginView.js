'use strict'

import React, { Component } from 'react';

import AppContainer from '../containers/AppContainer.js';
import SignInFormContainer from '../containers/SignInFormContainer.js';
import SignUpFormContainer from '../containers/SignUpFormContainer.js';
import {Image,StyleSheet} from 'react-native';

class LoginView extends Component {
  render() {

  	var container;
  	if(this.props.step === "signin"){
  		container = <SignInFormContainer/>;
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
