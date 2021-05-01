import React from 'react';
import { View, Image } from 'react-native';
import TitleText from '../text/TitleText';
import { hexToRGB, em, mabulColors, hm } from '../constants/consts';
import CommentText from '../text/CommentText';
import MabulCommonHeader from './MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from '../Components/button/MabulNextButton';
import { Edit, Edit1, Edit2, Edit3, Document, Document1, Document2, Document3 } from '../assets/svg/icons';
import Reinput from "reinput"

const title = {
  organize: 'Donne un titre à ton apéro',
  sell: 'Donne un titre à ta vente',
  give: 'Donne un titre à ta demande',
  need: 'Donne un titre à ta demande',
};
const MabulCommonRequestDetailScreen = (props) => {
  const conceptColor = mabulColors[props.mabulService];
  var iconEdit = Edit2(styles.icon);
  var iconDocument = Document2(styles.icon);
  if (props.mabulService === 'give') {
    iconEdit = Edit3(styles.icon);
    iconDocument = Document3(styles.icon);
  } else if (props.mabulService === 'sell') {
    iconEdit = Edit1(styles.icon);
    iconDocument = Document1(styles.icon);
  } else if (props.mabulService === 'need') {
    iconEdit = Edit(styles.icon);
    iconDocument = Document(styles.icon);
  }
  const mabulService = props.mabulService;
  return (
    <View style={styles.container}>
      <MabulCommonHeader
        style={styles.header}
        percent={props.process}
        isNoBackBtn={true}
        progressBarColor={conceptColor}
      />
      <View style={styles.body}>
        <View>
          <TitleText text={title[props.mabulService]} style={styles.title} />
          <CommentText
            text="Soi court et précis dans les détails"
            style={styles.comment}
            titleStyle={styles.listCaption}
          />
<Reinput style={{paddingTop:33*em}}
label='Écrit un titre court'
icon={iconEdit}
underlineColor="#BFCDDB"
 activeColor={conceptColor}
labelActiveColor="#6A8596"
labelColor="#6A8596"
paddingBottom={25*em}
 
 />

<Reinput style={{paddingTop:15*em}}
label={`Détail ta demande ici
(Soit concis pour être plus efficace)`}
icon={iconDocument}
underlineColor="#BFCDDB"
 activeColor={conceptColor}
labelActiveColor="#6A8596"
labelColor="#6A8596"
labelActiveTop={-38}
height={300}
paddingBottom={30*em}
 
 />
          {/* <CommonListItem
            icon={iconDocument}
            style={[styles.listItem, { height: 62 * em }]}
            title="Détail ta demande ici"
            subTitle="(Soit concis pour être plus efficace)"
            titleStyle={styles.listCaption}
            subTitleStyle={styles.listComment}
          />
          <View style={styles.line} /> */}
        </View>
        <MabulNextButton
          color={hexToRGB(conceptColor, 0.5)}
          style={styles.nextBtn}
          onPress={() => {
            mabulService === 'sell'
              ? Actions.mabulSellPrice({ mabulService: props.mabulService, process: 67 })
              : Actions.mabulCommonAddPhoto({
                  mabulService: props.mabulService,
                  process: mabulService === 'need' ? 53 : mabulService === 'organize' ? 40 : 74,
                });
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: '10.3%',
    marginTop: 16 * hm,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 300 * em,
    textAlign: 'left',
    marginTop: 35 * hm,
    lineHeight: 38 * em,
    fontSize: 28 * em,
    fontWeight: 'bold',
  },
  comment: { textAlign: 'left', lineHeight: 20 * em, textAlignVertical: 'center', marginTop: 10 * hm },
  listItem: {
    height: 43 * em,
    marginTop: 25 * em,
  },
  icon: { width: 19 * em, height: 22 * em, marginRight: 20 * em },
  listCaption: { color: '#6A8596' },
  listComment: { fontSize: 13 * em, lineHeight: 17 * em, color: '#6A8596' },
  nextBtn: {
    alignSelf: 'flex-end',
    marginBottom: 30 * hm,
  },
  line: { backgroundColor: '#BFCDDB', height: 1 * em, marginLeft: 39 * em },
};

export default MabulCommonRequestDetailScreen;
