import React from 'react';
import { Image, StatusBar, View } from 'react-native';
import Modal from 'react-native-modal';
import CommonListItem from '../../../adapter/CommonListItem';
import { AddGroup, CrossCircle } from '../../../assets/svg/icons';
import CommonButton from '../../../Components/button/CommonButton';
import { em } from '../../../constants/consts';
import CommonText from '../../../text/CommonText';
const UserOptionPopupScreen = (props) => {
 
  return (
    <Modal
      isVisible={props.data ? true : false}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
      <View style={styles.body}>
      <Image source={props.data?.profilePic !== undefined && props.data?.profilePic !== " " ?
          { uri: props.data?.profilePic } : { uri: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-105356015.jpg' }} style={styles.avatar} />
        <CommonText text={`${props.data?.firstName} ${props.data?.lastName}`} style={styles.userName} />
        <CommonListItem
          style={styles.listItem}
          title="Ajouter à ma famille"
          titleStyle={{ color: '#EF88B9' }}
          rightView={<AddGroup width={29.5 * em} height={32.06 * em} />}
        />
        <CommonListItem
          style={styles.listItem}
          title="Retirer de mes amis"
          titleStyle={{ color: '#6A8596' }}
          rightView={<CrossCircle width={22 * em} height={22 * em} />}
        />
        <CommonListItem
          style={styles.listItem}
          title="Retirer de mes voisins"
          titleStyle={{ color: '#6A8596' }}
          rightView={<CrossCircle width={22 * em} height={22 * em} />}
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
  container: {
    margin: 0,
    flex: 1,
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 54 * em,
    height: 54 * em,
    marginTop: 29 * em,
  },
  userName: { fontFamily: 'Lato-Black', color: '#1E2D60', marginBottom: 23 * em, marginTop: 10 * em },

  body: {
    paddingHorizontal: 25 * em,
    alignItems: 'center',
    marginRight: 30 * em,
    marginLeft: 30 * em,
    marginBottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
  },
  listItem: {
    height: 70 * em,
    justifyContent: 'center',
    borderTopWidth: 1 * em,
    borderColor: '#B3C6CF33',
    width: '100%',
  },
  cancelBtn: {
    marginTop: 35 * em,
    backgroundColor: '#ffffff',
    color: '#1E2D60',
    alignSelf: 'center',
    width: 315 * em,
    marginBottom: 23 * em,
  },
};
export default UserOptionPopupScreen;
