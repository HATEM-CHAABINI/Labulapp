import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { em, hm, WIDTH } from '../../constants/consts';
import CommonButton from '../../Components/button/CommonButton';
import CommonText from '../../text/CommonText';
import { Actions } from 'react-native-router-flux';
import CommentText from '../../text/CommentText';

const ActivityDialScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
        <CommonText text="Amandine Bernard" style={styles.userName} color="#ffffff" />
        <CommentText text="Ça sonne…" style={styles.comment} />
      </View>
      <View style={styles.controlView}>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.controlBtn}>
            <Image style={styles.btnIcon} />
          </TouchableOpacity>
          <Text style={styles.btnCaption}>Mute</Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={[styles.controlBtn, { backgroundColor: '#F83D39' }]}
            onPress={() => Actions.main({ tabNav: 'Activity', activityType: 'needs', noEmpty: true })}>
            <Image style={styles.btnIcon} />
          </TouchableOpacity>
          <Text style={styles.btnCaption}>Terminer</Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.controlBtn}>
            <Image style={styles.btnIcon} />
          </TouchableOpacity>
          <Text style={styles.btnCaption}>Haut-parleur</Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgba(9, 14, 54, 1)',
    // opacity: 0.9,
    flexDirection: 'column',
    postion: 'absolute',
  },
  popup: {
    backgroundColor: 'rgba(31, 46, 97, 1)',
    borderBottomRightRadius: 29 * em,
    borderBottomLeftRadius: 29 * em,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10 * em,
  },
  avatar: {
    width: 97 * em,
    height: 97 * em,
    marginBottom: 15 * em,
  },
  comment: {
    marginTop: 10 * em,
    color: '#FFFFFF',
  },
  controlView: {
    height: 166 * em,
    flexDirection: 'row',
    paddingHorizontal: 20 * em,
    justifyContent: 'space-around',
  },
  controlBtn: {
    width: 68 * em,
    height: 68 * em,
    borderRadius: 34 * em,
    backgroundColor: '#FFFFFF33',
    marginBottom: 30 * em,
  },
  btnView: {
    marginTop: 30 * em,
    flex: 1,
    alignItems: 'center',
  },
  btnCaption: {
    fontSize: 13 * em,
    lineHeight: 20 * em,
    color: '#ffffff',
  },
};

export default ActivityDialScreen;
