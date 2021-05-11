import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { em, hm } from '../../constants/consts';
import CommentText from '../../text/CommentText';
import SmallText from '../../text/SmallText';
import TinyText from '../../text/TinyText';

const renderService = (data, onPressSee) => {
  if (data.service == null) {
    return <View style={styles.separator} />;
  }
  return (
    <View style={styles.serviceContainer}>
      <Image source={data.service.user.photo} style={{ width: 32 * em, height: 32 * em, marginTop: 30 * hm }} />
      <View style={styles.serviceSubContainer}>
        <TinyText fontSize={12} text={data.service.date} style={styles.largeTopPadding} />
        <SmallText text={data.service.user.name} style={{ color: "#1E2D60", fontSize: 14 * em, fontFamily: "Lato-Bold" }} />

        <View style={styles.serviceInfoContainer}>
          <View>

            <SmallText text={data.service.organName} style={styles.smallTopPadding} />
            <TinyText text={data.service.title} fontSize={14} style={styles.smallTopPaddings} />
          </View>
          <TouchableOpacity onPress={onPressSee} style={styles.colReverse}>
            <TinyText text="Voir>" fontSize={14} color="#40CDDE" style={styles.largeTopPaddings} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ScheduleCard = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <CommentText text={data.time < 10 ? '0' + data.time + 'h' : data.time + 'h'} />
      {renderService(data, props.onPressSee)}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginVertical: 20 * hm,
    paddingHorizontal: 20 * em,
  },
  serviceContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 12 * hm,
    borderRadius: 16 * em,
    marginLeft: 10 * em,
    elevation: 3,
    shadowColor: '#254D5612',
    shadowOffset: {
      width: 0,
      height: 12 * hm,
    }, shadowOpacity: 1,
    shadowRadius: 25 * em,
  },
  serviceInfoContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  colReverse: { flexDirection: 'column-reverse', marginRight: 9 * em },
  smallTopPadding: { fontSize: 12, marginTop: 4 * hm, color: "#6A8596", fontFamily: 'Lato-Regular' },
  smallTopPaddings: { marginTop: 13 * hm, color: "#1E2D60", fontFamily: 'Lato-Bold' },
  largeTopPaddings: { marginTop: 13 * hm, fontFamily: 'Lato-SemiBold' },

  largeTopPadding: { marginTop: 2 * hm, fontFamily: 'Lato-Regular', marginBottom: 20 * hm },
  serviceSubContainer: { flex: 1, paddingLeft: 10 * em },
  itemMargin: { marginLeft: 10 * em },
  separator: { flex: 1, height: hm, backgroundColor: '#A0A4B7', alignSelf: 'center', marginLeft: 10 * em },
};

export default ScheduleCard;
