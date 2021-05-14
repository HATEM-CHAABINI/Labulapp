import React, { useState } from 'react';
import { View } from 'react-native';
import { em, hm } from '../constants/consts';
import CommonButton from '../Components/button/CommonButton';
import FriendParticipatePopupScreen from '../Components/FriendParticipatePopupScreen';
import FriendInvitePopupScreen from '../Components/FriendInvitePopupScreen';
import OrganizeServiceType from '../model/service/OrganizeServiceType';
import OrganizeService from '../model/service/OrganizeService';
import User from '../model/user/User';
import MabulDetailView from '../Components/view/MabulDetailView';

const organizeData = Object.assign(
  new OrganizeService(
    new User('Philippe Durand', require('../assets/images/sample_user_2.png'), 'anton@gmail.com'),
    'J’organise Atelier',
    'Photographie vintage',
    new Date(),
    require('../assets/images/sample_cover_1.png'),
    1,
    OrganizeServiceType.WORKSHOP
  ),
  { relationship: 'Mon ami/ma famille' }
);
const FriendOrganizeScreen = () => {
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  const [participatePopupVisible, setParticipatePopupVisible] = useState(false);
  const [data] = useState(organizeData);
  return (
    <View style={styles.container}>
      <MabulDetailView data={data} /> 
      <View style={styles.btnBox}>
        <CommonButton text={'Participer'} onPress={() => setParticipatePopupVisible(true)} />
      </View>
      <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
      <FriendParticipatePopupScreen
        visible={participatePopupVisible}
        onPress={() => setParticipatePopupVisible(false)}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  btnBox: {
    paddingLeft: 26 * em,
    paddingRight: 26 * em,
    paddingTop: 15 * hm,
    paddingBottom: 22 * hm,
    backgroundColor:'white'
  },
};

export default FriendOrganizeScreen;
