import React, { useRef, useState } from 'react';
import { View, Image, StatusBar, TouchableOpacity, Text, FlatList } from 'react-native';
import { em, hm } from '../constants';
import CommonText from '../text/CommonText';
import Modal from 'react-native-modal';
import CommonListItem from '../adapter/CommonListItem';
import CommonButton from '../Components/button/CommonButton';
import { Delete, ReportProblem, Block, CheckBlue } from '../assets/svg/icons';
import { Actions } from 'react-native-router-flux';
import RBSheet from "react-native-raw-bottom-sheet";
import MabulCommonListItem from '../adapter/MabulCommonListItem';
import ReportCommonListItem from '../topbar/activity/ReportCommonListItem';

const reportItems = [
  { id: 1, itemName: 'Nudité ou actes sexuels' },
  { id: 2, itemName: 'Discours ou symboles haineux' },
  { id: 3, itemName: 'Violence ou organisations dangereuses' },
  { id: 4, itemName: 'Vente de produits illégaux ou réglementés' },
  { id: 5, itemName: 'Intimidation ou harcèlement' },
  { id: 6, itemName: 'Contenu indésirable' },
  { id: 7, itemName: 'Intimidation ou harcèlement' },
];

const MessageProfilePopupScreen = (props) => {
  const refRBSheet = useRef();
  const [isReported, setIsReported] = useState(true)


  const renderFlatList = ({ item }) => (
    <ReportCommonListItem
      text={item.itemName}
      style={styles.items}
      onPress={() => setIsReported(false)
      }
    />
  );
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
        <Image source={require('../assets/images/avatar.png')} style={styles.avatar} />
        <CommonText text="Amandine Bernard" style={styles.userName} />
        <CommonListItem
          style={styles.listItem}
          title="Supprimer conversation"
          titleStyle={{ color: '#6A8596' }}
          rightView={Delete({ width: 18 * em, height: 20 * em })}
        />
        <CommonListItem
          style={styles.listItem}
          title="Signaler profil"
          titleStyle={{ color: '#F9547B' }}
          rightView={ReportProblem({ width: 20 * em, height: 20 * em })}
          onPress={() => refRBSheet.current.open()}
        />
        <CommonListItem
          style={styles.listItem}
          title="Bloquer"
          titleStyle={{ color: '#F9547B' }}
          rightView={Block({ width: 20 * em, height: 20 * em })}
        />
      </View>
      <CommonButton
        text="Annuler"
        style={styles.cancelBtn}
        textStyle={{ color: '#1E2D60' }}
        onPress={() => props.onPress()}
      />
      <View style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}>
        <RBSheet
          ref={refRBSheet}
          height={hm * 550}

          openDuration={250}
          closeOnDragDown={true}

          customStyles={{
            container: {
              borderTopLeftRadius: 28 * em,
              borderTopRightRadius: 28 * em,
              paddingTop: hm * 15,
              paddingBottom: 30 * em
            }
          }}
        >
          {isReported ?
            <View style={{}}>
              <View style={{ paddingTop: 26 * hm, paddingBottom: hm * 20, flexDirection: 'row', }}>
                <TouchableOpacity style={{ paddingLeft: 26 * em, paddingRight: 109 * em }} onPress={() => refRBSheet.current.close()}  >
                  <Fleche width={20 * em} height={18 * em} />
                </TouchableOpacity>
                <Text style={{ alignItems: 'center', color: '#1E2D60', fontSize: 18 * em, fontFamily: 'Lato-Bold', }}>
                  Signaler
              </Text>
              </View>
              <View style={styles.containerSheet}>

                <CommonText text={
                  'Sélectionne un problème à signaler'
                }
                  style={{ alignItems: 'center', color: '#1E2D60' }}> </CommonText>

                <Text style={{ marginLeft: 56 * em, marginRight: 56 * em, color: '#6A8596', fontSize: 12 * em, fontFamily: 'Lato-Medium', textAlign: 'center' }}>
                  Nous n’informons pas la personne qui détient le compte que tu viens de signaler.
              </Text>
                <FlatList style={{ marginBottom: 250 * hm }} data={reportItems} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
              </View>
            </View>
            :
            <View style={{ alignItems: 'center', margin: 0, flex: 1, marginTop: 80 * hm }}>
              <CheckBlue width={25 * em} height={25 * em}></CheckBlue>
              <Text style={{ color: '#1E2D60', fontSize: 18 * em, fontFamily: 'Lato-Bold', marginTop: 12 * hm }}>
                Merci de nous avoir informés
              </Text>
              <Text style={{ marginLeft: 56 * em, marginRight: 56 * em, color: '#1E2D60', fontSize: 16 * em, fontFamily: 'Lato-Medium', textAlign: 'center', marginTop: 12 * hm }}>
                Ton aide nous permets de faire de Labul un endroit sûr.
              </Text>

            </View>}

        </RBSheet>
      </View>
    </Modal >


  );
};
const styles = {
  container: { margin: 0, flex: 1, justifyContent: 'flex-end' },
  containerSheet: { alignItems: 'center', margin: 0, },
  avatar: { width: 54 * em, height: 54 * em, marginTop: 29 * em },
  userName: { fontFamily: 'Lato-Bold', color: '#1E2D60', marginBottom: 23 * em, marginTop: 10 * em },

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
  items: { width: 345 * em, marginTop: 25 * hm, },
  cancelBtn: { marginTop: 35 * em, backgroundColor: '#ffffff', alignSelf: 'center', marginBottom: 23 * em },
};
export default MessageProfilePopupScreen;
