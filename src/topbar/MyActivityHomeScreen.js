import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { em, hm } from '../constants/consts';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const MyActivityHomeScreen = (prop) => {
  return (
    <View style={styles.container}>
      <Text>MyActivityHomeScreen</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 0,
    marginBottom: 10 * hm,
  },
  title: {
    fontSize: 34 * em,
    lineHeight: 38 * em,
    height: 40 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 20 * hm,
    marginBottom: 14 * hm,
  },

  notificationBtn: { alignSelf: 'flex-end', marginRight: 30 * em, marginTop: 39 * hm },
};

export default MyActivityHomeScreen;
