'use strict';


/**
 	 <Rating
 	  maxStars={5}
      rating={2}
      selectStar={require('image!select_star')}
      unSelectStar={require('image!unselect_star')}
      valueChanged={this._valueChanged}
      starSize={25}/>	      
*/

import React, { PropTypes, 
	Component } from 'react';

import {
  View,
  StyleSheet,
  Image,
} from 'react-native';

export default class Rating extends Component {

  static defaultProps = {
    maxStars: 5,
    rating: 0,
    starSize: -1,
    interitemSpacing: 0,
    valueChanged: (index) => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      maxStars: this.props.maxStars,
      rating: this.props.rating,
      firstImageLayout: null,
      starSize: this.props.starSize,
    };
    this._onLayout = this._onLayout.bind(this);
    this._onResponderMove = this._onResponderMove.bind(this);
    this._onResponderGrant = this._onResponderGrant.bind(this);
  }

  render() {
    var starArray = [];
    var imageSource = null;
    for(var i = 0; i < this.state.maxStars; i++) {
      if(i < this.state.rating) {
        imageSource = this.props.selectStar;
      }
      else {
        imageSource = this.props.unSelectStar;
      }

      var onLayoutFunc = null;
      if(i === 0) {
        onLayoutFunc = this._onLayout;
      }

      var styleArray = [];
      if(i !== this.state.maxStars - 1) {
        styleArray.push({ marginRight: this.props.interitemSpacing });
      }
      if(this.state.starSize > 0) {
        styleArray.push({width: this.state.starSize, height: this.state.starSize});
      }

      //push Image
      starArray.push(
        <Image
          key={i}
          source={imageSource}
          style={styleArray}
          onLayout={onLayoutFunc}
        />
      );
    }
    return (
      <View
        style={styles.container}
        onStartShouldSetResponder={this._onStartShouldSetResponder}
        onMoveShouldSetResponder={this._onMoveShouldSetResponder}
        onResponderGrant={this._onResponderGrant}
        onResponderMove={this._onResponderMove}
      >
        {starArray}
      </View>
    )
  }

  _onLayout(layoutInfo) {
    console.log(layoutInfo.nativeEvent.layout);
    var starSize = layoutInfo.nativeEvent.layout.width;
    if(this.state.starSize > 0) {
      this.setState({
        containerLayout: layoutInfo.nativeEvent.layout,
      });
    }
    else {
      this.setState({
        containerLayout: layoutInfo.nativeEvent.layout,
        starSize: starSize,
      });
    }
  }

  _onStartShouldSetResponder(evt) {
    return true;
  }

  _onMoveShouldSetResponder(evt) {
    return true;
  }

  _onResponderGrant(evt) {
    this._updateChangeValue(evt);
  }

  _onResponderMove(evt) {
    this._updateChangeValue(evt);
  }

  _updateChangeValue(evt) {
    var starWidth = this.state.starSize + this.props.interitemSpacing;
    var rating = Math.ceil((evt.nativeEvent.pageX-this.state.containerLayout.x)/starWidth);
    if(rating < 0) {
      rating = 0;
    }
    else if(rating > this.state.maxStars) {
      rating = this.state.maxStars;
    }
    this.setState({
      rating: rating,
    });
    //value changed
    this.props.valueChanged(rating);
  }

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
