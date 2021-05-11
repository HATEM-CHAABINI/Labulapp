import React from 'react';
import { View, Image, Text } from 'react-native';
import TitleText from '../../text/TitleText';
import { em, hm } from '../../constants/consts';
import CommonBackButton from '../../Components/button/CommonBackButton';
import PurchaseMenuCard from '../../adapter/PurchaseMenuCard';
import { Actions } from 'react-native-router-flux';
import SmallText from '../../text/SmallText';
import { Premium } from '../../assets/svg/icons';
import { feedbackIcons } from '../../constants/icons';
import User from '../../model/user/User';
import AccountType from '../../model/user/AccountType';

const PremiumPurchasedScreen = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.profileType === 'my' ? '#40CDDE' : '#7398FC' }]}>
      <CommonBackButton
        dark={false}
        style={styles.backBtn}
        onPress={() =>
          Actions.main({
            tabNav: props.profileType === 'my' ? 'Profile' : 'ProProfile',
            purchased: props.profileType === 'my' ? AccountType.LIGHT : AccountType.PRO,
          })
        }
      />
      <View style={styles.logo}>
        <Premium width={230 * hm} height={121 * hm} />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title} >Labul</Text>
        <Text style={styles.titleBleu} >Premium</Text>
      </View>
      <SmallText
        text="Vous êtes abonné à Labul Premium Light"
        color="#ffffff"
        style={{ fontSize: 13 * em, lineHeight: 17 * em }}
      />
      {props.profileType === 'my' ? (
        <PurchaseMenuCard
          style={{ width: 315 * em, height: 150 * em, marginTop: 65 * hm }}
          selected={props.profileType === 'my'}
          name="Light"
          price="0,90€"
          commentRadius="Rayon de 500m."
          comment="Idéal pour vendre juste autour de soi"
          noMore
        />
      ) : (
        <PurchaseMenuCard
          selected
          noMore
          borderColor={'#ffffff'}
          name="Pro"
          price="1,90€"
          commentRadius="Rayon de 500m."
          comment="Idéal pour vendre juste autour de soi"
          style={{ width: 315 * em, height: 150 * em, marginTop: 65 * hm }}
        />
      )}

      <SmallText style={styles.cancelBtn} color="#ffffff" text="Annuler mon abonnement" />
    </View>
  );
};

const styles = {
  container: { flex: 1, alignItems: 'center' },
  backBtn: { zIndex: 1, position: 'absolute', left: 15 * em, top: 27 * hm },
  logo: { marginTop: 54.5 * hm, alignSelf: 'center', marginBottom: 15 * hm },
  title: { fontFamily: 'Cocon-RegularTR', fontSize: 27 * em, lineHeight: 30 * em, color: '#1E2D60' },
  titleBleu: { fontFamily: 'Cocon-RegularTR', fontSize: 27 * em, lineHeight: 30 * em, color: '#40CDDE' },
  containerTitle: { marginBottom: 0, flexDirection: 'row', justifyContent: 'center' },
  cancelBtn: { position: 'absolute', bottom: 24 * em },
};

export default PremiumPurchasedScreen;
