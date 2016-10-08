'use strict'

/*

TODO : Separation Container-Component

*/

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

const alignItemsMap = {
  "center" : "center",
  "left"  : "flex-start",
  "right" : "flex-end"
}

const shadowHeight = 12;

export default class FloatingButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: props.active,
    }

    this.anim = new Animated.Value(props.active ? 1 : 0);
    this.timeout = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  getContainerStyles() {
    return [styles.overlay, this.getOrientation(), this.getOffsetXY()];
  }

  getOrientation() {
    return { alignItems: alignItemsMap[this.props.position] };
  }

  getOffsetXY() {
    return {
      paddingHorizontal: this.props.offsetX,
      paddingBottom: this.props.offsetY
    };
  }

  render() {
    return (
      <View pointerEvents="box-none" style={styles.overlay}>
        <Animated.View pointerEvents="none" style={[styles.overlay, {
          backgroundColor: this.props.bgColor,
          opacity: this.anim
        }]}>
          {this.props.backdrop}
        </Animated.View>
        <View pointerEvents="box-none" style={this.getContainerStyles()}>
          {this.state.active && this._renderTappableBackground()}
          {this._renderButton()}
        </View>
      </View>
    );
  }

  _renderButton() {
    const buttonColorMax = this.props.btnOutRange ? this.props.btnOutRange : this.props.buttonColor;

    const animatedViewStyle = [
      styles.btn,
      {
        width: this.props.size,
        height: this.props.size,
        borderRadius: this.props.size / 2,
        backgroundColor: this.anim.interpolate({
          inputRange: [0, 1],
          outputRange: [this.props.buttonColor, buttonColorMax]
        }),
        transform: [{
            scale: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, this.props.outRangeScale]
            }),
          }, {
            rotate: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', this.props.degrees + 'deg']
            })
          }],
      },
    ];

    return (
      <View >
        <TouchableOpacity
          activeOpacity={0.85}
          onLongPress={this.props.onLongPress}
          onPress={() => {
            this.props.onPress()
          }}>
          <Animated.View
            style={animatedViewStyle}>
            {this._renderButtonIcon()}
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }

  _renderButtonIcon() {
    const { icon, btnOutRangeTxt, buttonTextColor } = this.props;

    if (icon) return icon;

    const buttonTextColorMax = btnOutRangeTxt ? btnOutRangeTxt : buttonTextColor;

    return (
      <Animated.Text style={[styles.btnText, {
        color: this.anim.interpolate({
          inputRange: [0, 1],
          outputRange: [buttonTextColor, buttonTextColorMax]
        })
      }]}>
        +
      </Animated.Text>);
}

  _renderTappableBackground() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.overlay}
        pointerEvents={this.state.active ? 'auto' : 'box-none'}
      />
  );
  }
} 

/**
StyleSheet
**/
const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    marginTop: -4,
    fontSize: 24,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  btnShadow: {
    marginBottom: 12,
  }
});

/**
Prop Validation
**/
FloatingButton.propTypes = {
  active: PropTypes.bool,
  bgColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  spacing: PropTypes.number,
  outRangeScale : PropTypes.number,
  autoInactive: PropTypes.bool,
  onPress: PropTypes.func,
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  degrees: PropTypes.number,
  position: PropTypes.string,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  size: PropTypes.number,
  verticalOrientation: PropTypes.oneOf(['up', 'down']),
};

FloatingButton.defaultProps = {
  active: false,
  bgColor: 'transparent',
  buttonColor: 'rgba(231,76,60,1)',
  buttonTextColor: 'rgba(255,255,255,1)',
  spacing: 20,
  outRangeScale: 1,
  autoInactive: true,
  onPress: () => {},
  backdrop: false,
  degrees: 135,
  position: 'right',
  offsetX: 30,
  offsetY: 30,
  size: 56,
  verticalOrientation: 'up',
};
