import React from 'react';
import { Text, View, Image } from 'react-native';
import { em, hm } from '../../constants/consts';
import { TouchableOpacity } from 'react-native';
import { MabulGive, MabulNeed, MabulSell, MabulOrganize ,Alerte} from '../../assets/svg/icons';

const CircularButton = (props) => {
  let imageTag = MabulOrganize(styles.buttonImage);
  let text = "J'organise";
  if (props.type === 'alerte') {
    imageTag = Alerte(styles.buttonImage);
    text = "J'alerte";
  }
  else if (props.type === 'sell') {
    imageTag = MabulSell(styles.buttonImage);
    text = 'Je vends';
  } else if (props.type === 'need') {
    imageTag = MabulNeed(styles.buttonImage);
    text = "J'ai besoin";
  } else if (props.type === 'give') {
    imageTag = MabulGive(styles.buttonImage);
    text = 'Je donne';
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        {imageTag}
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: { flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
  buttonText: {
    fontSize: 13 * em,
    color: '#FFFFFF',
    fontFamily: 'HelveticaNeue',
    marginTop: 5 * hm,
  },
  buttonImage: { width: 50 * em, height: 50 * hm },
};

export default CircularButton;
