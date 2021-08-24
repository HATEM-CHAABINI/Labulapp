import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
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
      <Image source={{uri:data.service.user.photo}} style={{ width: 32 * em, height: 32 * em }} />
      <View style={styles.serviceSubContainer}>
        <SmallText text={data.service.user.name} style={{ color: "#1E2D60", fontSize: 14 * em, fontFamily: "Montserrat-Bold" }} />
        <SmallText text={data.service.organName} style={styles.smallTopPadding} />

        <View style={styles.serviceInfoContainer}>
          <View 
          style={{flexDirection:'column'}}
          >

            <TinyText fontSize={12} text={data.service.date} style={styles.smai} />

             <TinyText text={data.service.title} fontSize={14} style={styles.smallTopPaddings} />
          </View>
          <TouchableOpacity 
          onPress={()=>{
  console.log("dataaaaaa", data);

//             Actions.myNeed({ created:undefined,data: data, user: data.service.user, docId: data.key });
}} 
style={styles.colReverse}>
            <TinyText text="Voir ›" fontSize={14} color="#40CDDE" style={styles.largeTopPaddings} />
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
      <CommentText style={{fontFamily: 'Lato-Regular'}} text={data.time < 10 ? '0' + data.time + 'h' : data.time + 'h'} />
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
  smallTopPadding: { fontSize: 12*em, marginTop: 4 * hm, color: "#6A8596", fontFamily: 'Lato-Regular' },
  smallTopPaddings: { marginTop: 5 * hm, color: "#1E2D60", fontFamily: 'Montserrat-Bold',fontSize:14*em },
  largeTopPaddings: {color:'#40CDDE',fontSize:14*em, marginTop: 13 * hm, fontFamily: 'Lato-SemiBold' },
  smai: { marginTop: 24 * hm, color: "#6A8596", fontFamily: 'Lato-Regular' ,fontSize:12*em},

  largeTopPadding: { marginTop: 2 * hm, fontFamily: 'Lato-Regular', marginBottom: 20 * hm },
  serviceSubContainer: { flex: 1, paddingLeft: 10 * em },
  itemMargin: { marginLeft: 10 * em },
  separator: { flex: 1, height: hm, backgroundColor: '#A0A4B7',opacity:0.2, alignSelf: 'center', marginLeft: 10 * em },
};

export default ScheduleCard;
