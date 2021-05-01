import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em } from 'view/common/const';

const MabulSearchScreen = () => {
  return (
    <View style={styles.container}>
      <TitleText text="MabulSearchScreen" />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 16 * em,
  },
};

export default MabulSearchScreen;
