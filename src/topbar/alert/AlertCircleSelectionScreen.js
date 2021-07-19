import React, { useState } from 'react';
import { View } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm, hexToRGB } from '../../constants/consts';
import CommonText from '../../text/CommonText';
import MabulCommonHeader from '../../Mabul/MabulCommonHeader';
import MabulNextButton from '../../Components/button/MabulNextButton';
import { Actions } from 'react-native-router-flux';
import { Family, Friend, Neighbor, CheckBlue, All } from '../../assets/svg/icons';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand } from '../../redux/actions/demand'
import { update_into_demand } from '../../redux/actions/demand'
import { FlatList } from 'react-native';
import Flechedroite from '../../assets/icons/navigation-app/Flechedroite';

  const options = [
    { id: 0, title: 'Accident' },
    { id: 1, title: 'Route barrée' },
    { id: 2, title: 'Travaux' },
    { id: 3, title: 'Autre type d’alerte' },
  ];
  
  const AlertCircleSelectionScreen = (props) => {
    const conceptColor = '#F9547B';
    const dispatch = useDispatch()
    // const { demandData } = useSelector((state) => state.demandReducer);
    // console.log("demand ", demandData);
    const [optionCheck, setOptionCheck] = useState();
    const [checked, setChecked] = useState();
  
    const renderOptions = ({ item, index }) => {
      var elevation = !checked ? 0 : 2;
      const Divider = () => (<View style={styles.listDivider} />)

      return (
        <View>
        <TouchableOpacity
          activeOpacity={1}
          style={[
           styles.optionBox,
            
          ]}
          onPress={() =>  Actions.alertType({ item : item,process: 40}) }>
          <TitleText style={styles.optionCaption} text={item.title} />
       <View style={{paddingRight:30}} >
          <Flechedroite  width={14 * em} height={14 * hm} />
          </View>
        </TouchableOpacity>
        <Divider />
        </View>
      );
    };
    return (
      <View style={styles.container}>
        <MabulCommonHeader
          style={styles.header}
          percent={20}
          isNoBackBtn={true}
          progressBarColor={conceptColor}
        />
  
        <View style={styles.body}>
          <TitleText text={'J’alerte'} style={styles.title} />
        
          <FlatList data={options} renderItem={renderOptions} keyExtractor={(i) => i.id} />
        </View>
        {/* <MabulNextButton
          color={checked === undefined ? hexToRGB(conceptColor, 0.5) : hexToRGB(conceptColor)}
          style={[styles.btn, { backgroundColor: conceptColor }]}
          text="Suivant"
          disabled={checked === undefined ? true : false}
          onPress={() =>}
        /> */}
      </View>
    );
  };
  
  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    header: {
      height: '12.45%',
  
    },
    body: { flex: 1,
       paddingLeft: 30 * em },
    title: {
      width: 315 * em,
      textAlign: 'left',
      marginTop: 35 * em,
      lineHeight: 38 * em,
    },
    circleSortView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10 * em,
      marginBottom: 19 * em
    },
  
    btn: { position: 'absolute', alignSelf: 'flex-end', bottom: 30 * hm, right: 30 * em, backgroundColor: '#38C2FF' },
    optionBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 78 * em,
      alignItems: 'center',
      marginTop: 10 * em,
      borderRadius: 20 * em,
    },
    optionBoxClicked: {
      marginHorizontal: 10 * em,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 78 * em,
      alignItems: 'center',
      marginTop: 10 * em,
      borderRadius: 20 * em,
      paddingHorizontal: 15 * em, backgroundColor: '#fff',
      ...Platform.select({
        ios: {
          shadowColor: '#254D5612',
          shadowOffset: {
            width: 0,
            height: 8 * hm,
          },
          shadowRadius: 20 * em, shadowOpacity: 1,
        },
        android: {
          elevation: 5,
        },
      }),
    },
    optionCaption: {
      fontFamily:'Lato-Regular',
      fontSize: 18 * em,
      lineHeight: 23 * em,
      color: '#1E2D60',
    },
    listDivider: {
      height: 1 * em,

      // marginLeft: 30 * em,
      backgroundColor: "#eee"
    },
  
  
  
  };
  
export default AlertCircleSelectionScreen;
