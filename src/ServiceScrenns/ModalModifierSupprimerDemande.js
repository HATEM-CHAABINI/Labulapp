import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { em, hm } from '../constants/consts';
import CommonText from '../text/CommonText';
import Modal from 'react-native-modal';
import CommonListItem from '../adapter/CommonListItem';
import CommonButton from '../Components/button/CommonButton';
import { CrossCircle, Delete, DeleteRed, Edit4} from '../assets/svg/icons';
import EditNeedScreen from '../topbar/profile/myNeeds/EditNeedScreen';
// import NeedStatusType from 'model/service/NeedStatusType';

const ModalModifierSupprimerDemande = (props) => {
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
         <CommonListItem
          style={styles.listItem}
          title="Terminer"
          titleStyle={{ color: '#6A8596' }}
          rightView={<CrossCircle width={22 * em} height={22 * em} />}
          onPress={() => {
            props.onPressT();
           
          }} /> 
          <CommonListItem
          style={styles.listItem}
          title="Modifier"
          titleStyle={{ color: '#1E2D60' }}
          rightView={<Edit4 width={22 * em} height={22 * em} />}
          onPress={() => {
            props.onPressM();
          }}
        />
        <CommonListItem
          style={styles.listItem}
          title="Supprimer demande"
          titleStyle={{ color: '#FC3867' ,fontFamily:'Lato-Regular'}}
          rightView={<DeleteRed width={22 * em} height={22 * em} />}
          onPress={() => {
            props.onPressS();
          }}
       />
      </View>
      <CommonButton
        text="Annuler"
        style={styles.cancelBtn}
        textStyle={{ color: '#1E2D60' }}
        onPress={() => props.onPressT()}
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
export default ModalModifierSupprimerDemande;
