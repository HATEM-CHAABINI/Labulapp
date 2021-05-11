import React from 'react';
import { View } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm } from '../../constants/consts';
import CommentText from '../../text/CommentText';
import MabulCommonHeader from '../../Components/header/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from '../../Components/button/MabulNextButton';
import CommonListItem from '../../adapter/CommonListItem';
import { NoteInlineRed } from '../../assets/svg/icons';

const AlertAddNoteScreen = (props) => {
  const conceptColor = '#F9547B';
  var iconEdit = (
    <View style={{ marginRight: 19 * em }}>
      <NoteInlineRed width={20 * em} height={22 * em} />
    </View>
  );
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
          <TitleText text="Ajoute une note" style={styles.title} />
          <CommentText
            text="Si besoin, ajoute des détails de cette alerte"
            style={styles.comment}
            titleStyle={styles.listCaption}
          />
          <CommonListItem
            icon={iconEdit}
            style={[styles.listItem, { height: 62 * em }]}
            title="Détaille l'alerte ici"
            subTitle="(Soit concis pour être plus efficace)"
            titleStyle={styles.listCaption}
            subTitleStyle={styles.listComment}
          />
          <View style={styles.line} />
        </View>
        <MabulNextButton
          color={conceptColor}
          style={styles.nextBtn}
          onPress={() => Actions.alertShare({ process: 94 })}
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
  comment: {
    fontFamily: 'Lato-Regular',
    textAlign: 'left',
    lineHeight: 20 * em,
    height: 17 * hm,
    textAlignVertical: 'center',
    marginTop: 10 * em
  },
  listItem: {
    height: 43 * em,
    marginTop: 25 * hm,
  },
  icon: { width: 19 * em, height: 22 * em, marginRight: 20 * em },
  listCaption: { fontFamily: 'Lato-Medium', fontSize: 16 * em, color: '#6A8596' },
  listComment: { fontFamily: 'Lato-Medium', fontSize: 13 * em, lineHeight: 17 * em, color: '#6A8596' },
  nextBtn: {
    alignSelf: 'flex-end',
    marginBottom: 30 * hm,
  },
  line: { backgroundColor: '#BFCDDB', height: 1 * em, marginLeft: 39 * em },
};

export default AlertAddNoteScreen;
