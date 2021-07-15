import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  ViewPropTypes as RNViewPropTypes,
  Animated,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { em, hm } from '../../constants/consts';
import {
  SelectionOn,
  SelectionOff,
  CheckBlue,
  CheckOff,
  CheckRed,
  CheckedWhite,
  CheckDarkBlue,
  CheckPink,CheckGray,CheckOrange
} from '../../assets/svg/icons';
const ViewPropTypes = RNViewPropTypes || View.propTypes;

const checkShapeSize = { width: 26 * hm, height: 26 * hm };
export default class CheckBox extends Component {
  static propTypes = {
    ...ViewPropTypes,
    onClick: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    shape: PropTypes.string,
    color: PropTypes.string,
  };
  static defaultProps = {
    // isChecked: false,
    shape: 'rectangle',
  };
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1), // Initial value for opacity: 0
      isChecked: false,
    };
    this.onClick = this.onClick.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
  }
  fadeOut() {
    this.setState({ fadeAnim: new Animated.Value(1) }, () => {
      Animated.timing(
        // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 0, // Animate to opacity: 1 (opaque)
          duration: 2000, // 2000ms
        }
      ).start();
    });
  }
  onClick() {
    this.props.onClick();
    this.fadeOut;
  }

  genShape() {
    const CheckFalse = this.props.oval ? CheckOff(checkShapeSize) : SelectionOff(checkShapeSize);
    var CheckTrue = this.props.oval ? (
      this.props.single ? (
        <View
          style={{
            width: 26 * em,
            height: 26 * em,
            borderRadius: 13 * em,
            borderWidth: 1 * em,
            borderColor: '#41D0E280',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{ width: 13 * em, height: 13 * em, borderRadius: 6.5 * em, backgroundColor: '#40CDDE' }} />
        </View>
      ) : this.props.red ? (
        CheckRed(checkShapeSize)
      ) : this.props.blue ? (
        CheckDarkBlue(checkShapeSize)
      ) : this.props.pink ? (
        CheckPink(checkShapeSize)
      ) : this.props.gray ? (
        CheckGray(checkShapeSize)
      ) : this.props.orange ? (
        CheckOrange(checkShapeSize)
      ) : (
        CheckBlue(checkShapeSize)
      )
    ) : (
      SelectionOn(checkShapeSize)
    );
    return this.props.isChecked ? CheckTrue : CheckFalse;
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <TouchableOpacity
        // activeOpacity={1}
        style={this.props.style}
        onPress={this.onClick}
        underlayColor="transparent"
        disabled={this.props.disabled}>
        <View style={styles.container}>
          <Animated.View style={{ ...this.props.style, opacity: fadeAnim }}>{this.genShape()}</Animated.View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 26 * em, height: 26 * em },
});
