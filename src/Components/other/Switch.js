import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { em } from '../../constants/consts';

export default class Switch extends Component {
  static propTypes = {
    onValueChange: PropTypes.func,
  };

  static defaultProps = {
    onValueChange: () => null,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeSwitch: props.value,
      sbWidth: 50 * em,
      sbHeight: 28 * em,
      direction: 'ltr',
      offsetX: new Animated.Value(0),
    };

    this._switchDirection = this._switchDirection.bind(this);
  }
  componentDidMount() {
    this._switchThump(this.props.switchdirection || this.state.direction);
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
    const { onValueChange } = this.props;
    let dirsign = 1;
    if (direction === 'rtl') {
      dirsign = -1;
    } else {
      dirsign = 1;
    }
    if (this.state.activeSwitch === 1) {
      this.setState({ activeSwitch: 2 }, () => { onValueChange(this.state.activeSwitch) });

      Animated.timing(this.state.offsetX, {
        toValue: (this.props.switchWidth - this.props.switchHeight) * dirsign,
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
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this._switchThump(this.props.switchdirection || this.state.direction);
            // console.log(this.state)
            this.props.setstate(this.state.activeSwitch)
          }}>
          <View
            style={[
              // eslint-disable-next-line react-native/no-inline-styles
              {
                width: this.props.switchWidth || this.state.sbWidth,
                height: this.props.switchHeight || this.state.sbHeight,
                borderRadius: this.props.switchHeight / 2 || this.state.sbHeight / 2,
                padding: 0,
                borderWidth: 0,
                backgroundColor: this.state.activeSwitch === 2 ? '#40CDDE' : '#A0AEB8',
              },
              this.props.style,
            ]}>
            <View
              style={[{ flexDirection: this._switchDirection(this.props.switchdirection || this.state.direction) }]}>
              <Animated.View style={{ transform: [{ translateX: this.state.offsetX }] }}>
                <View
                  style={[
                    switchStyles.wayBtnActive,
                    {
                      elevation: 1, shadowColor: '#00000029',
                      shadowOffset: {
                        width: 0,
                        height: 3 * em,
                      }, shadowOpacity: 1,
                      shadowRadius: 6 * em,
                      width: this.props.switchHeight - 6 * em,
                      height: this.props.switchHeight - 6 * em,
                      borderRadius: this.props.switchHeight / 2,
                      backgroundColor: this.props.btnBackgroundColor || '#A0AEB8',
                    },
                  ]}
                />
              </Animated.View>
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
    fontSize: 16 * em,
  },
  rtl: {
    flexDirection: 'row-reverse',
  },
  ltr: {
    flexDirection: 'row',
  },
  wayBtnActive: {
    elevation: 1,
    margin: 0,
    shadowColor: '#254D5612',
    shadowOffset: {
      width: 0,
      height: 3 * em,
    },
    shadowRadius: 6 * em,
    marginTop: 3 * em,
    marginLeft: 3 * em,
    marginRight: 3 * em,
  },
});
