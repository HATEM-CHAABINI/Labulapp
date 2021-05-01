import React from 'react';
import { View, Text } from 'react-native';

const ClockDraw = (props) => {
  const { height, seconds, style } = props;

  const styles = {
    canvas: {
      backgroundColor: '#FEDDE4',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    secondsTxt: { fontFamily: 'Lato-Bold', color: '#F9547B', textAlign: 'left', textAlignVertical: 'center' },
    childView: {
      width: 0.79 * height,
      height: 0.79 * height,
      borderRadius: (0.79 * height) / 2,
      marginRight: 0.11 * height,
      backgroundColor: '#F9547B',
    },
  };

  return (
    <View style={[styles.canvas, style, { width: height * 2.33, height: height, borderRadius: height / 2 }]}>
      <Text style={[styles.secondsTxt, { fontSize: 0.5 * height, marginLeft: 0.38 * height }]}>{seconds}s</Text>
      <View style={styles.childView} />
    </View>
  );
};

export default ClockDraw;
