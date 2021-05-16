import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import TitleText from '../../../text/TitleText';
import { em, hm } from '../../../constants/consts';
import CommonTabBar from '../../../Components/other/CommonTabBar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MyCirclesTabScreen from './MyCirclesTabScreen';
import CommonBackButton from '../../../Components/button/CommonBackButton';
import { Actions } from 'react-native-router-flux';
import { MagnifierBlue } from '../../../assets/svg/icons';
import RelationshipType from '../../../model/user/RelationshipType';
import SearchContact from '../../../Components/SearchContact';


const MyCirclesHomeScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  const [SearchContactVisible, setSearchContactVisible] = useState(false);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <CommonBackButton
          dark
          style={{ marginLeft: 15 * em, marginTop: 27 * hm }}
          onPress={() => Actions.pop()}
        />
        <TouchableOpacity
          style={{
            position: 'absolute', top: 39 * hm, right: 30 * em
          }}
          onPress={() => setSearchContactVisible(true)}
        >
          <MagnifierBlue width={20 * em} height={20 * em} />
        </TouchableOpacity>
        <TitleText text={'Mes cercles'} style={styles.title} />
        <Tab.Navigator tabBar={(props) => <CommonTabBar {...props} />} swipeEnabled={false} initialRouteName="families">
          <Tab.Screen
            name={RelationshipType.FAMILIY}
            options={{ title: 'Ma famille', tabColor: '#EF88B9' }}
            component={MyCirclesTabScreen}
            initialParams={{ sort: RelationshipType.FAMILIY }}
          />
          <Tab.Screen
            name={RelationshipType.FRIEND}
            options={{ title: 'Mes amis', tabColor: '#6784DA' }}
            component={MyCirclesTabScreen}
            initialParams={{ sort: RelationshipType.FRIEND }}
          />
          <Tab.Screen
            name={RelationshipType.NEIGHBOR}
            options={{ title: 'Mes voisins', tabColor: '#40CDDE' }}
            component={MyCirclesTabScreen}
            initialParams={{ sort: RelationshipType.NEIGHBOR }}
          />
        </Tab.Navigator>
        <SearchContact
          visible={SearchContactVisible}
          onPress={() => setSearchContactVisible(false)}
        />
      </View>
    </NavigationContainer>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 181 * em,
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
};

export default MyCirclesHomeScreen;
