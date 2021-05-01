import React from 'react';
import { View, Image, Text } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm } from 'view/common/const';
import CommonBackButton from 'view/components/button/CommonBackButton';
import PurchaseMenuCard from 'view/components/adapter/PurchaseMenuCard';
import { Actions } from 'react-native-router-flux';
import SmallText from 'view/components/text/SmallText';
import { Premium } from 'assets/svg/icons';
import { feedbackIcons } from 'view/common/icons';
import User from 'model/user/User';
import AccountType from 'model/user/AccountType';

const PremiumPurchasedScreen = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.profileType === 'my' ? '#40CDDE' : '#7398FC' }]}>
      <CommonBackButton
        dark={false}
        style={styles.backBtn}
        onPress={() =>
          Actions.main({
            tabNav: props.profileType === 'my' ? 'Profile' : 'ProProfile',
            purchased: props.profileType === 'my' ? AccountType.LIGHT:AccountType.PRO,
          })
        }
      />
      <View style={styles.logo}>
        <Premium width={230 * hm} height={121 * hm} />
      </View>
      <View style={styles.containerTitle}>
        <TitleText text="Labul" style={styles.title} />
        <TitleText text=" Premium" style={styles.title} color={'#40CDDE'} />
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
          commentRadius="Rayon de 1 à 3Km. "
          comment="Idéal pour un professionnel qui veut faire grimper son chiffre d’affaire"
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
  title: { fontSize: 27 * em, lineHeight: 30 * em, color: '#ffffff' },
  containerTitle: { marginBottom: 0, flexDirection: 'row', justifyContent: 'center' },
  cancelBtn: { position: 'absolute', bottom: 24 * em },
};

export default PremiumPurchasedScreen;
