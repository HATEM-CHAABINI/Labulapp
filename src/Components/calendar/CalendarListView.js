import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import { em, HEIGHT, hm } from '../../constants/consts';
import { LocaleConfig, CalendarList } from 'react-native-calendars';

LocaleConfig.locales.fr = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

const CalendarListView = (props) => {
  const [] = React.useState({});

  return (
    <View style={styles.container}>
      <CalendarList
        onVisibleMonthsChange={(months) => {
          console.log('now these months are visible', months);
        }}
       
        scrollEnabled={true}
        showScrollIndicator={true}
        onDayPress={(day) => {
          props.onDayPress(day);
        }}
       
      />
      <TouchableOpacity
            onPress={() => {
              props.disab();
            }}>
            <View>
              <View style={styles.knob} />
            </View>
          </TouchableOpacity>
    </View>
  );
};

const styles = {
  knob: {
    // marginBottom: 20 * hm,
    marginTop:5*hm,
    width: 55 * em,
    height: 5 * hm,
    borderRadius: 2.5 * em,
    backgroundColor: '#BFCDDB36',
    alignSelf: 'center',
  },
  container: {
    width: '100%',
    height: HEIGHT - 180 * em,
    borderBottomStartRadius: 24 * em,
    borderBottomEndRadius: 24 * em,
    paddingBottom: 24 * em,
  },
  titleStyle: {color:'red', marginLeft: 20 * em, marginTop: 30 * em },
};

export default CalendarListView;
