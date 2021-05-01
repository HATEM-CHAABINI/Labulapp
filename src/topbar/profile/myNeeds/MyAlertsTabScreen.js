import React from 'react';
import { View, Image } from 'react-native';
import { em, hm } from '../../../constants/consts';
import { FlatList } from 'react-native';
import CommonListItem from '../../../adapter/CommonListItem';
import { Actions } from 'react-native-router-flux';
import { AlertRed } from '../../../assets/svg/icons';
const alertList = [{ name: 'Alerte travaux', comment: 'Route de Mare Gaillard Guadeloupe' }];
const MyAlertsTabScreen = () => {
  //   const [isEmpty, setIsEmpty] = useState(true);
  //   const emptyView = (
  //     <TouchableOpacity style={styles.emptyView} onPress={() => setIsEmpty(!isEmpty)}>
  //       <CircleDraw
  //         radius={17.31 * em}
  //         color="#A0AEB8"
  //         style={{ opacity: 0.4, position: 'absolute', left: 103.85 * em }}
  //       />
  //       <CircleDraw
  //         radius={8.31 * em}
  //         color="#A0AEB8"
  //         style={{ opacity: 0.4, position: 'absolute', top: 17.31 * em, left: 190.35 * em }}
  //       />
  //       <Image style={styles.msgIcon} />
  //       <CommonText text={'Tu n’as pas de messages'} color={'#6A8596'} style={styles.msgTxt} />
  //       <CommentText
  //         text={'Parle que si tu participes dans une demande sur Labul, la messagerie est dédiée qu’au demandes'}
  //         color={'#6A8596'}
  //         style={styles.explainTxt}
  //       />
  //     </TouchableOpacity>
  //   );
  const renderFlatList = ({ item }) => (
    <CommonListItem
      style={styles.listItem}
      title={item.name}
      titleStyle={styles.titleStyle}
      subTitleStyle={styles.subTitleStyle}
      subTitle={item.comment}
      icon={
        <View style={styles.alertIconContainer}>
          <AlertRed width={50 * em} height={50 * em} />
        </View>
      }
      onPress={() => Actions.myAlert()}
    />
  );
  const listView = (
    <FlatList
      data={alertList}
      renderItem={renderFlatList}
      keyExtractor={(i) => i.id}
      style={{ flex: 1, width: '100%', paddingTop: 25 * em, paddingHorizontal: 30 * em, backgroundColor: '#ffffff' }}
    />
  );
  return <View style={styles.container}>{listView}</View>;
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#F0F5F7',
    paddingTop: 10 * hm,
  },
  titleStyle: { fontSize: 14 * em, color: '#1E2D60', lineHeight: 22 * em, marginTop: 15 * em },
  subTitleStyle: { color: '#A0AEB8', lineHeight: 16 * em, marginBottom: 21 * em },

  emptyView: { marginTop: 74 * hm, width: 315 * em, height: 148.15 * hm, alignSelf: 'center' },
  listItem: { marginBottom: 15 * em, width: '100%' },
  alertIconContainer: {
    width: 95 * em,
    height: 95 * em,
    borderRadius: 20 * em,
    backgroundColor: '#FEE0E7',
    marginRight: 15 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default MyAlertsTabScreen;
