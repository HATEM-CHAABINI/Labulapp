import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hexToRGB } from 'view/common/const';
import ProfileCommonListItem from 'view/components/adapter/ProfileCommonListItem';
import { Actions } from 'react-native-router-flux';
import CommonText from 'view/components/text/CommonText';
import { Enterprise, Association, Institution } from 'assets/svg/icons';
const iconSize = { width: 30 * em, height: 30 * em };
const CreateAccountMenuScreen = () => {
  return (
    <View style={styles.container}>
      <CommonText style={styles.header} text="Annuler" color="#ffffff" onPress={() => Actions.pop()} />

      <TitleText text="Qui je suis?" color={'#ffffff'} style={styles.title} />
      <View style={styles.popupView}>
        <ProfileCommonListItem
          style={styles.listItem}
          text="Professional"
          icon={Enterprise(iconSize)}
          iconColor={hexToRGB('#7398FD', 0.24)}
          onPress={() => Actions.createProfessionalAccount({ accountType: 'enterprise' })}
        />
        <View style={styles.line} />

        <ProfileCommonListItem
          style={styles.listItem}
          text="Association"
          icon={Association(iconSize)}
          iconColor={hexToRGB('#7398FD', 0.24)}
          onPress={() => Actions.createAssociationAccount({ accountType: 'association' })}
        />
        <View style={styles.line} />

        <ProfileCommonListItem
          style={styles.listItem}
          text="Collectivité/ institutionnel"
          icon={Institution(iconSize)}
          iconColor={hexToRGB('#7398FD', 0.24)}
          onPress={() => Actions.createCommunityAccount({ accountType: 'institution' })}
        />
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#7398FD',
  },
  header: {
    marginRight: 30 * em,
    marginTop: 39 * em,
    alignSelf: 'flex-end',
  },
  title: { textAlign: 'left', marginLeft: 30 * em, marginBottom: 35 * em, marginTop: 59 * em },
  popupView: {
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  listItem: {
    marginLeft: 30 * em,
    marginRight: 30 * em,
    marginTop: 25 * em,
  },
  line: {
    marginLeft: 83 * em,
    marginTop: 25 * em,
    height: 1 * em,
    backgroundColor: '#F0F5F7',
  },
};

export default CreateAccountMenuScreen;
