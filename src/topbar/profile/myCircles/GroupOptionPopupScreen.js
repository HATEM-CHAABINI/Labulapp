import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { em, hm } from '../../../constants/consts';
import CommonText from '../../../text/CommonText';
import Modal from 'react-native-modal';
import CommonListItem from '../../../adapter/CommonListItem';
import CommonButton from '../../../Components/button/CommonButton';
import { Amis, DeleteRed, Famille, ProGroupe, SortirGroupe, Voisins } from '../../../assets/svg/icons';
import { Friend, Family, Neighbor } from '../../../assets/svg/icons';
import RelationshipType from '../../../model/user/RelationshipType';

const GroupOptionPopupScreen = (props) => {
  let groupIcon;
  switch (props.data && props.data.relationship) {

    case RelationshipType.FAMILIY:
      groupIcon = <Famille width={40 * em} height={40 * em} />;
      break;
      case RelationshipType.Friend:
        groupIcon = <Amis width={40 * em} height={40 * em} />;
        break;
      case RelationshipType.PRO:
        groupIcon = <ProGroupe width={40 * em} height={40 * em} />;
        break;
    default:
      groupIcon = <Voisins width={40 * em} height={40 * em} />;
      break;
  }
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
        <View style={styles.avatar}>{groupIcon}</View>
        <CommonText text={props.data!=null?props.data.name:"Groupe"} style={styles.userName} />
        <CommonText text={props.data && props.data.number} style={{ marginBottom: 25 * hm }} color="#A0AEB8" />

        <CommonListItem
          style={styles.listItem}
          title="Sortir du groupe"
          titleStyle={{ color: '#6A8596' }}
          rightView={<SortirGroupe width={18 * em} height={20 * em} />}
           
        />
        <CommonListItem
          style={styles.listItem}
          title="Supprimer groupe"
          titleStyle={{ color: '#F9547B' }}
          rightView={<DeleteRed width={18 * em} height={20 * em} />}
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
  avatar: { marginTop: 29 * hm },
  userName: { color: '#1E2D60', marginBottom: 5 * hm, marginTop: 5 * hm, fontFamily: 'Lato-Black' },
  body: {
    paddingHorizontal: 25 * em,
    paddingBotom: 12 * hm,
    alignItems: 'center',
    marginRight: 30 * em,
    marginLeft: 30 * em,
    marginBottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
  },
  listItem: {
    height: 70 * hm,
    justifyContent: 'center',
    borderTopWidth: 1 * em,
    borderColor: '#B3C6CF33',
    width: '100%',
  },
  cancelBtn: {
    marginTop: 35 * hm,
    backgroundColor: '#ffffff',
    color: '#1E2D60',
    alignSelf: 'center',
    width: 315 * em,
    marginBottom: 23 * hm,
  },
};
export default GroupOptionPopupScreen;
