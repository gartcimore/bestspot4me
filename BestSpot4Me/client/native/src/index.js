'use strict'

import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Navigator } from 'react-native';


import * as reducers from 'common/reducers';
import MainView from './views/MainView';
import LoginView from './views/LoginView';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
const _navigator = null;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
	      <Navigator
	        initialRoute={{ id: 'signin'}}
	        renderScene={this.navigatorRenderScene}
          callback={this.goToMap}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
	      />
      </Provider>
    );
  } 

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'signin':
        return (<LoginView navigator={navigator} step="signin"  />);
      case 'signup':
        return (<LoginView step="signup"/>);
      case 'main':
        return (<MainView />);
    }
  }

  goToMap(){
    _navigator.push({
      id: "main"
    });

    _navigator.pop();
  }
}