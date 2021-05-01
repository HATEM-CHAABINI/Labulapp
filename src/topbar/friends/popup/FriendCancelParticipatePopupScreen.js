import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import Modal from 'react-native-modal';
import CommonListItem from 'view/components/adapter/CommonListItem';
import CommonButton from 'view/components/button/CommonButton';
import { Delete, ReportProblem } from 'assets/svg/icons';
import NeedStatusType from 'model/service/NeedStatusType';

const FriendCancelParticipatePopupScreen = (props) => {
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
      <View style={styles.body}>
        <Image source={require('assets/images/avatar.png')} style={styles.avatar} />
        <CommonText text="Mathieu Torin" style={styles.userName} />
        <CommonListItem
          style={styles.listItem}
          title="Annuler ma participation"
          titleStyle={{ color: '#6A8596' }}
          rightView={<Delete width={18 * em} height={20 * em} />}
          onPress={() => {
            props.onPress();
            props.onStatus(null);
          }}
        />
        <CommonListItem
          style={styles.listItem}
          title="Signaler un problème"
          titleStyle={{ color: '#F9547B' }}
          rightView={<ReportProblem width={20 * em} height={20 * em} />}
        />
      </View>
      <CommonButton
        text="Annuler"
        style={styles.cancelBtn}
        textStyle={{ color: '#1E2D60' }}
        onPress={() => props.onPress()}
      />
    </Modal>
  );
};
const styles = {
  container: { margin: 0, flex: 1, justifyContent: 'flex-end' },
  avatar: {
    width: 54 * em,
    height: 54 * em,
    marginTop: 29 * em,
  },
  userName: { fontFamily: 'Lato-Black', color: '#1E2D60', marginBottom: 23 * hm, marginTop: 10 * hm },

  body: {
    alignItems: 'center',
    marginRight: 30 * em,
    marginLeft: 30 * em,
    marginBottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
    paddingBottom: 12 * em,
  },
  listItem: {
    height: 70 * hm,
    paddingHorizontal: 25 * em,
    justifyContent: 'center',
    borderTopWidth: 1 * hm,
    borderColor: '#B3C6CF33',
    width: '100%',
  },
  cancelBtn: {
    marginTop: 35 * hm,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    width: 315 * em,
    marginBottom: 23 * hm,
  },
};
export default FriendCancelParticipatePopupScreen;
