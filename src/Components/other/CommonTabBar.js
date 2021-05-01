import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { em, hm } from '../../constants/consts';
import CommentText from '../../text/CommentText';

export default class CommonTabBar extends Component {
  static propTypes = {
    onValueChange: PropTypes.func,
    tabTexts: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    onValueChange: () => null,
  };

  constructor(props) {
    super(props);

    this.state = {
      pos: new Animated.Value(10 * em),
      btnWidth: 0,
      btnHeight: 0,
    };
    this.tabs = React.createRef();
    this.tabContainer = React.createRef();
    this.tabs.current = [];
    this._switchThump = this._switchThump.bind(this);
  }

  _switchThump(index) {
    this.tabs.current[index + 1].measureLayout(this.tabContainer, (fx, fy, width, height) => {
      this.setState({ btnWidth: width, btnHeight: height });
      this.tabContainer.scrollTo({ x: fx, y: fy, animated: true });
      Animated.timing(this.state.pos, {
        toValue: fx,
        duration: this.props.switchSpeedChange || 200,
        useNativeDriver: true,
      }).start();
    });
  }

  render() {
    const { state, descriptors, navigation } = this.props;
    const animatedViewStyle = {
      width: this.state.btnWidth,
      height: this.state.btnHeight,
      borderRadius: this.state.btnHeight / 2,
      backgroundColor: descriptors[state.routes[state.index].key].options.tabColor,
      top: 0,
      left: 0,
      position: 'absolute',
      elevation: 3,
      shadowColor: '#254D5612',
      shadowOffset: {
        width: 0,
        height: 9 * hm,
      }, shadowOpacity: 1,
      shadowRadius: 16 * em,
    };
    return (
      <View style={{ paddingLeft: 20 * em }}>
        <ScrollView
          style={{ height: 41 * em }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={(view) => (this.tabContainer = view)}>
          <View style={{ flexDirection: 'row' }}>
            <Animated.View style={{ transform: [{ translateX: this.state.pos }] }}>
              <View style={animatedViewStyle} />
            </Animated.View>
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                    ? options.title
                    : route.name;
              const isFocused = state.index === index;
              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, { sort: route.name });
                  this._switchThump(index);
                }
              };
              return (
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  activeOpacity={1}
                  ref={(view) => (this.tabs.current[index + 1] = view)}
                  onLayout={(e) => {
                    if (isFocused) {
                      this.setState({
                        btnWidth: e.nativeEvent.layout.width,
                        btnHeight: e.nativeEvent.layout.height,
                        pos: new Animated.Value(e.nativeEvent.layout.x),
                      });
                      this.tabContainer.scrollTo({
                        x: e.nativeEvent.layout.x,
                        y: e.nativeEvent.layout.y,
                        animated: true,
                      });
                    }
                  }}
                  style={[
                    switchStyles.textPos,
                    {
                      paddingHorizontal: 14 * em,
                      paddingVertical: 7 * hm,
                      marginLeft: 10 * em,
                      height: 31 * hm,
                    },
                  ]}
                  key={route.key}>
                  <CommentText
                    color={!isFocused ? '#6A8596' : '#FFFFFF'}
                    text={label}
                    style={{ fontFamiy: 'Lato-Bold', lineHeight: 17 * em }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        {this.props.children}
      </View>
    );
  }
}

const switchStyles = StyleSheet.create({
  textPos: { justifyContent: 'center', alignItems: 'center', fontSize: 16 * em },
  rtl: { flexDirection: 'row-reverse' },
  ltr: { flexDirection: 'row' },
});
