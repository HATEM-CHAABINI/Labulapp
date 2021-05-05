import React, { useState } from 'react';
import { View, Image, FlatList, TouchableOpacity } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm } from '../../constants/consts';
import CommonText from '../../text/CommonText';
import MabulCommonHeader from '../../Components/header/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import CheckBox from '../../Components/checkbox/CheckBox';
import MabulNextButton from '../../Components/button/MabulNextButton';
import { Neighbor } from '../../assets/svg/icons';
const options = [
  { id: 0, title: 'Accident' },
  { id: 1, title: 'Route barrée' },
  { id: 2, title: 'Travaux' },
];
const AlertClassOptionScreen = (props) => {
  const conceptColor = '#F9547B';
  const [optionCheck, setOptionCheck] = useState();
  const [checked, setChecked] = useState();
  const renderOptions = ({ item, index }) => {
    var elevation = !checked ? 0 : 2;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[
          checked === index ? styles.optionBoxClicked : styles.optionBox,
          { marginBottom: index === 2 ? 40 * em : 0 },
        ]}
        onPress={() => setChecked(index)}>
        <TitleText style={styles.optionCaption} text={item.title} />
        <CheckBox
          oval
          red
          single
          isChecked={checked === index}
          singleSelection={true}
          onClick={() => setChecked(index)}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <TitleText text={'J’alerte'} style={styles.title} />
        <View style={styles.circleSortView}>
          <Neighbor width={31 * em} height={31 * em} />
          <CommonText text="Mes voisins" style={{ marginLeft: 10 }} />
        </View>
        <FlatList data={options} renderItem={renderOptions} keyExtractor={(i) => i.id} />
      </View>
      <MabulNextButton
        color={conceptColor}
        style={[styles.btn, { backgroundColor: conceptColor }]}
        text="Suivant"
        onPress={() => Actions.alertAddress({ process: 40 })}
      />
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
  body: { flex: 1, paddingHorizontal: 30 * em },
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
    marginHorizontal: 10 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 78 * em,
    alignItems: 'center',
    marginTop: 10 * em,
    borderRadius: 20 * em,
    paddingHorizontal: 15 * em,
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
    elevation: 1,
    shadowColor: '#254D5612',
    shadowOffset: {
      width: 0,
      height: 8 * hm,
    },
    shadowRadius: 20 * em, shadowOpacity: 1,
  },
  optionCaption: {
    fontSize: 18 * em,
    lineHeight: 23 * em,
    color: '#1E2D60',
  },
};

export default AlertClassOptionScreen;
