import React from 'react';
import { View,TouchableOpacity,Text } from 'react-native';
import { em, HEIGHT, hm } from '../../constants/consts';
import { LocaleConfig, CalendarList } from 'react-native-calendars';
import moment from 'moment';

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
  const nextDate = [
    props.thed,
  ];
  
  let mark = {};
  
  nextDate.forEach(day => {
    mark[day] = {
      marked: true,
      customStyles: {
        text: {
          color: '#40CDDE',
          fontSize:18*em,
          fontWeight: 'bold',
          fontFamily:'Lato-Black'
        },
      },
    };
  });

  return (
    <View style={styles.container}>
      <CalendarList
  
        markingType={'custom'}
        markedDates={mark}
        // onVisibleMonthsChange={(months) => {
        //   console.log('now these months are visible', months);
        // }}
      
        scrollEnabled={true}
        showScrollIndicator={true}
        onDayPress={(day) => {
          day= moment(day).subtract(1, 'months')
          // day =moment(day).add(1, 'day')
      props.onDayPress(moment(day));
        }}
        theme={{
          
        
          todayTextColor: '#1E2D60',
          dayTextColor: '#1E2D60',
          dotColor: '#40CDDE',
      
          monthTextColor: '#1E2D60',
        
        
          textMonthFontWeight: 'bold',
        
          textMonthFontFamily:'Montserrat-Bold',
          textMonthFontSize: 20*em,
          textDayFontFamily:'Lato-Medium',
          textDayFontSize: 18*em,

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
