/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { em, hm } from '../constants/consts';

export default class SwitchButton extends Component {
  static propTypes = {
    onValueChange: PropTypes.func,
  };

  static defaultProps = {
    onValueChange: () => null,
  };

  constructor() {
    super();

    this.state = {
      activeSwitch: 1,
      sbWidth: 80 * em,
      sbHeight: 44 * em,
      direction: 'ltr',
      offsetX: new Animated.Value(0),
    };

    this._switchDirection = this._switchDirection.bind(this);
  }

  _switchDirection(direction) {
    let dir = 'row';

    if (direction === 'rtl') {
      dir = 'row-reverse';
    } else {
      dir = 'row';
    }
    return dir;
  }

  _switchThump(direction) {
    const { onValueChange, disabled } = this.props;
    let dirsign = 1;
    if (direction === 'rtl') {
      dirsign = -1;
    } else {
      dirsign = 1;
    }

    if (this.state.activeSwitch === 1) {
      this.setState({ activeSwitch: 2 }, () => onValueChange(this.state.activeSwitch));

      Animated.timing(this.state.offsetX, {
        toValue: ((this.props.switchWidth || this.state.sbWidth) / 2 - 12 * em) * dirsign,
        duration: this.props.switchSpeedChange || 200,
        useNativeDriver: true,
      }).start();
    } else {
      this.setState({ activeSwitch: 1 }, () => onValueChange(this.state.activeSwitch));
      Animated.timing(this.state.offsetX, {
        toValue: 0,
        duration: this.props.switchSpeedChange || 200,
        useNativeDriver: true,
      }).start();
    }
  }

  render() {
    const topPadding = 10 * em;
    const dirsign = this.props.switchdirection || this.state.direction;
    const transX = ((this.props.switchWidth || this.state.sbWidth) / 2 - 14 * em) * dirsign - this.state.offsetX;
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this._switchThump(this.props.switchdirection || this.state.direction);
          }}>
          <View
            style={[
              // eslint-disable-next-line react-native/no-inline-styles
              {
                width: this.props.switchWidth || this.state.sbWidth,
                height: this.props.switchHeight || this.state.sbHeight,
                borderRadius:
                  this.props.switchBorderRadius !== undefined ? this.props.switchBorderRadius : this.state.sbHeight / 2,
                borderColor: this.props.switchBorderColor || '#d4d4d4',
                backgroundColor: this.props.switchBackgroundColor || '#fff',

              },
              this.props.style,
            ]}>
            <View
              style={[{ flexDirection: this._switchDirection(this.props.switchdirection || this.state.direction) }]}>
              <Animated.View style={{
                shadowOffset:{width:0,height:9*em},
                shadowColor:'#242F5742',
                shadowOpacity:1,
                shadowRadius:16*em,
                 transform: [{ translateX: this.state.offsetX }] }}>
                <View
                  style={[
                    switchStyles.wayBtnActive,
                    {
                      width: this.props.switchWidth / 2 || this.state.sbWidth / 2,
                      height: this.props.switchHeight - topPadding || this.state.sbHeight - topPadding,
                      borderRadius:
                        this.props.switchBorderRadius !== undefined
                          ? this.props.switchBorderRadius
                          : this.state.sbHeight / 2,
                      borderColor: this.props.btnBorderColor || '#00a4b9',
                      backgroundColor: this.props.btnBackgroundColor || '#00bcd4',
                    },
                  ]}
                />
              </Animated.View>

              <View
                style={[
                  switchStyles.textPos,
                  {
                    width: this.props.switchWidth / 2 || this.state.sbWidth / 2,
                    height: this.props.switchHeight - topPadding || this.state.sbHeight - topPadding,
                    left: 5 * em,
                    top: 5 * em,
                  },
                ]}>
                <Text
                  style={[
                    this.state.activeSwitch === 1
                      ? { color: this.props.activeFontColor || '#fff' }
                      : { color: this.props.fontColor || '#b1b1b1' },
                    switchStyles.tabFont,
                    {fontFamily:'lato-medium',fontSize:13*em,textAlign:'center'}
                  ]}>
                  {this.props.text1 || 'ON'}
                </Text>
              </View>

              <View
                style={[
                  switchStyles.textPos,
                  {
                    width: this.props.switchWidth / 2 || this.state.sbWidth / 2,
                    height: this.props.switchHeight - topPadding || this.state.sbHeight - topPadding,
                    top: 5 * em,
                    right: 5 * em,
                  },
                ]}>
                <Text
                  style={[
                    this.state.activeSwitch === 2
                      ? { color: this.props.activeFontColor || '#fff' }
                      : { color: this.props.fontColor || '#b1b1b1' },
                    switchStyles.tabFont,
                    {fontFamily:'lato-medium',fontSize:13*em,textAlign:'center'}
                  ]}>
                  {this.props.text2 || 'OFF'}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {this.props.children}
      </View>
    );
  }
}

const switchStyles = StyleSheet.create({
  textPos: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabFont: { fontSize: 14 * em  },
  rtl: {
    flexDirection: 'row-reverse',
  },
  ltr: {
    flexDirection: 'row',
  },
  wayBtnActive: {
    marginTop: 5 * em,
    marginLeft: 6 * em,
    marginRight: 6 * em,
  },
});
