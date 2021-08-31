

import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Image, Text, ScrollView ,TouchableOpacity} from 'react-native';
import { em, hm, WIDTH, HEIGHT } from '../../../constants/consts';
import { FlatList } from 'react-native';
import CommonListItem from '../../../adapter/CommonListItem';
import { Actions } from 'react-native-router-flux';
import { AlertMesDemandes, AlertRed, TroisPoint } from '../../../assets/svg/icons';
import firestore from '@react-native-firebase/firestore';
import Moment from 'moment';
import ModalModifierSupprimerDemande from '../../../ServiceScrenns/ModalModifierSupprimerDemande';

const alertList = [{ name: 'Alerte travaux', comment: 'Route de Mare Gaillard Guadeloupe' }];

import { deleteUserAlerts, fetchAlerts, getUserProfile } from '../../../services/firebase'

import auth from "@react-native-firebase/auth";
import ModalSupprimerAlerte from '../../../ServiceScrenns/ModalSupprimerAlerte';

const MyAlertsTabScreen = () => {
  const [alerts, setalerts] = useState([])
  const [user, setuser] = useState()
  const [loadingData, setloadingData] = useState(true)
  const [cancelUpdatePopupVisible, setcancelUpdatePopupVisible] = useState(false);
  const [DeletePopupVisible, setDeletePopupVisible] = useState(false);
  
  
  useEffect(() => {
    firestore().collection('userAlerts').doc(auth().currentUser.uid).collection('alerts').onSnapshot(snapshot => {
      setalerts(
        snapshot.docs.map((doc) => ({ data: doc.data(), docId: doc.id }))
      )
    })
    getUserProfile(auth().currentUser.uid).then(async (item) => {
      setuser(() => item)
    })
    setloadingData(false)
  }, [])

  useEffect(() => {
    if (alerts.length > 0) {
      setloadingData(false)
    }
  }, [alerts])

 
//  opendelete = () => {
  
//   }
  const RenderEmptyContainer = () => {
    return (<View style={{
      flex: 1,
      alignItems: 'center',
      minWidth: WIDTH,
      // right: '6%'
    }}>
      <Text style={{
        alignItems: 'center',
        fontSize: 18,
        marginTop: '3%'
      }}>
        No Data Found
</Text>
    </View>)
  }

  const RenderFlatList2 = ({ item }) => {
    startDate= item.data.demandStartDate.seconds * 1000
    value=Moment(startDate).format('DD MMMM YYYY')
    console.log(item.data.description.description);

    return (
      
<View style={{flexDirection:'row'}}>
<ModalModifierSupprimerDemande
            visible={cancelUpdatePopupVisible}
            onPressT={() => setcancelUpdatePopupVisible(false)}
            onPressM={() => {
              setcancelUpdatePopupVisible(false)
                  Actions.editAlert({ alertData: item.data, user: user, docId: item.docId })

            }}
            onPressS={() => {
              setcancelUpdatePopupVisible(false)

           
              setTimeout(function(){
                
                setDeletePopupVisible(true)
              
              }, 500);
              // , Actions.editNeed({ data2: data2, docId: props.docId })
            }}

           
          />
                
                 <ModalSupprimerAlerte
            visible={DeletePopupVisible}
           
            onPressS={() => {
              
              deleteUserAlerts(auth().currentUser.uid, item.data.serviceType.name, item.docId).then((item) => {
                setDeletePopupVisible(false)
              }).catch((error) => {
                console.log(error);
              })
              // , Actions.editNeed({ data2: data2, docId: props.docId })
            }}
            onPressT={() => {
              setDeletePopupVisible(false)              // , Actions.editNeed({ data2: data2, docId: props.docId })
            }}
          />
  <View>
      <TouchableOpacity onPress={() => 
      Actions.myAlert({ 
        alertData: item.data, user: user, docId: item.docId })}
       style={[styles.containerList, styles.listItem]}>
      <View style={styles.topView}>
      <View style={styles.alertIconContainer}>
             <AlertMesDemandes width={94 * em} height={154 * hm} />
     </View>
     <View style={{flexDirection:'column',bottom:10*hm}}>
     <Text style={{fontFamily:'Lato-Medium',fontStyle: 'italic',fontSize:12*em,color:'#6A8596',marginBottom:8*hm}}>Publié le {value}</Text>
     <Text style={{fontFamily:'Montserrat-Bold',fontSize:13*em,color:'#1E2D60',marginBottom:2*hm}}>{item.data.type.title}</Text>
     <Text numberOfLines={1} style={{fontFamily:'Lato-Regular',fontSize:13*em,color:'#1E2D60',marginBottom:20*hm,width:165*em}}>{item.data.description.description}</Text>
     <Text style={{fontFamily:'Lato-Regular',fontSize:13*em,color:'#1E2D60',width:165*em}}>{item.data.address}</Text>
     </View>
        {/* {textView} */}
      
      </View>
      <View style={styles.bottomView}>
        {/* {props.comment && <CommentText text={props.comment} style={props.commentStyle} />}
        {props.commentView} */}
      </View>
    </TouchableOpacity>
    </View>
 
  <TouchableOpacity 
 onPress={() => setcancelUpdatePopupVisible(true)}
style={{ paddingTop:25*hm,paddingLeft:35*em
  }}>
    <TroisPoint />
     </TouchableOpacity>
    </View>


      // <CommonListItem
      //   style={styles.listItem}
      //   title={item.data.type.title}
      //   titleStyle={styles.titleStyle}
      //   subTitleStyle={styles.subTitleStyle}
      //   subTitle={item.data.description.description}
      //   icon={
      //     <View style={styles.alertIconContainer}>
      //       <AlertMesDemandes width={94 * em} height={154 * hm} />
      //     </View>
      //   }
      //   onPress={() => Actions.myAlert({ alertData: item.data, user: user, docId: item.docId })}
      // />
    );
  };

  const listView2 = (
    <>
      {alerts.map((item) => {
        return <RenderFlatList2 item={item} />
      })}
    </>
  );

  return (<>
    {loadingData ? <ActivityIndicator size={'large'} color={'#41D0E2'} style={{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#F0F5F7',
    }} /> :
    console.log(" groups",  alerts  ),
    alerts.length < 1 ? < RenderEmptyContainer /> : <ScrollView style={{ flex: 1, width: '100%', paddingTop: 10 * hm, backgroundColor: '#F0F5F7' }}><View style={styles.container}>{listView2}</View></ScrollView>}
  </>
  );

};

const styles = {
  bottomView: { flexDirection: 'row' },

  rightView: {right:5*em},
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 10 * hm,
  },
  titleStyle: { fontSize: 14 * em, color: '#1E2D60', lineHeight: 22 * em, marginTop: 15 * em, marginBottom: 9 * em, fontFamily: 'Lato-Black' },
  subTitleStyle: { color: '#A0AEB8', lineHeight: 16 * em, marginBottom: 21 * em, fontFamily: 'Lato-Medium', fontSize: 14 * em },

  emptyView: { marginTop: 74 * hm, width: 315 * em, height: 148.15 * hm, alignSelf: 'center' },
  listItem: {paddingLeft:30*em,paddingTop:30*hm, marginBottom: 30 * hm, width: '100%' },
  containerList: { flexDirection: 'column', justifyContent: 'space-between' },

  alertIconContainer: {
    width: 95 * em,
    height: 95 * em,
    borderRadius: 20 * em,
    backgroundColor: '#FEE0E7',
    marginRight: 15 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: { flexDirection: 'row', justifyContent: 'space-between' },

};

export default MyAlertsTabScreen;
