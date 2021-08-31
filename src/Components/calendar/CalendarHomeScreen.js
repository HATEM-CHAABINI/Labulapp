<script src="http://localhost:8097"></script>;
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import 'moment/min/locales';
import React, { useEffect } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';
import { getUserProfile } from '../..//services/firebase';
import { NextIcon, PrevIcon } from '../../assets/svg/icons';
import { em, hm, WIDTH } from '../../constants/consts';
import NeedService from '../../model/service/NeedService';
import User from '../../model/user/User';
import TitleText from '../../text/TitleText';
import CalendarListView from './CalendarListView';
import CalendarStrip from './CalendarStrip';
import ScheduleCard from './ScheduleCard';
const locale = {
  name: 'fr',
  config: {
    months:
      'Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre'.split(
        '_',
      ),
    monthsShort: 'Janv_Févr_Mars_Avr_Mai_Juin_Juil_Août_Sept_Oct_Nov_Déc'.split(
      '_',
    ),
    weekdays: 'Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi'.split('_'),
    weekdaysShort: 'Dim_Lun_Mar_Mer_Jeu_Ven_Sam'.split('_'),
    weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY LT',
      LLLL: 'dddd D MMMM YYYY LT',
    },
    calendar: {
      sameDay: "[Aujourd'hui à] LT",
      nextDay: '[Demain à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [dernier à] LT',
      sameElse: 'L',
    },
    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'une année',
      yy: '%d années',
    },
    ordinalParse: /\d{1,2}(er|ème)/,
    ordinal: function (number) {
      return number + (number === 1 ? 'er' : 'ème');
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
      return input.charAt(0) === 'M';
    },
    meridiem: function (hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
    },
    week: {
      dow: 1,
      doy: 4,
    },
  },
};

const blankSchedules = [
  {id: '1', time: 8, seconds:28800},
  {
    id: '2',
    time: 9,
    seconds:32400
  },
  {id: '3', time: 10,seconds:36000},
  {id: '4', time: 11,seconds:39600},
  {
    id: '5',
    time: 12,seconds:43200
  },
  {id: '6', time: 13,seconds:46800},
  {id: '7', time: 14,seconds:50400},
  {id: '8', time: 15,seconds:54000},
  {id: '9', time: 16,seconds:57600},
  {id: '10', time: 17,seconds:61200},
  {id: '11', time: 18,seconds:64800},
];

// const schedules = [
//   {id: '1', time: 8},
//   {
//     id: '2',
//     time: 9,
//     service: new NeedService(
//       new User(
//         'Amandine Bernards',
//         require('../../assets/images/sample_user_1.png'),
//         'anton@gmail.com',
//       ),
//       'J’ai besoin Coup de main Bricolage',
//       'Réparer une chaise',
//       '06 Fév · 14h00',
//       require('../../assets/images/sample_cover_2.png'),
//       3,
//       NeedServiceType.REPAIR,
//     ),
//   },
//   {
//     id: '3',
//     time: 10,
//     service: new NeedService(
//       new User(
//         'Amandine Bernards',
//         require('../../assets/images/sample_user_1.png'),
//         'anton@gmail.com',
//       ),
//       'J’ai besoin Coup de main Bricolage',
//       'Réparer une chaise',
//       '06 Fév · 14h00',
//       require('../../assets/images/sample_cover_2.png'),
//       3,
//       NeedServiceType.REPAIR,
//     ),
//   },
//   {id: '4', time: 11},
//   {
//     id: '5',
//     time: 12,
//     service: new NeedService(
//       new User(
//         'Amandine Bernard',
//         require('../../assets/images/sample_user_1.png'),
//         'anton@gmail.com',
//       ),
//       'J’ai besoin Coup de main Bricolage',
//       'Réparer une chaise',
//       '06 Fév · 14h00',
//       require('../../assets/images/sample_cover_2.png'),
//       3,
//       NeedServiceType.REPAIR,
//     ),
//   },
//   {id: '6', time: 13},
//   {id: '7', time: 14},
//   {id: '8', time: 15},
//   {id: '9', time: 16},
//   {id: '10', time: 17},
//   {id: '11', time: 18},
// ];

const CalendarHomeScreen = props => {
  const { profileData } = useSelector((state) => state.profileReducer);

  const userDemands = firestore()
    .collection('userDemands')
    .doc(auth().currentUser.uid);
  const [Data, setData] = React.useState([]);
  const [scheduler, setscheduler] = React.useState([]);
  const [selectedSchedules, setSelectedSchedules] =
    React.useState(blankSchedules);
  const [showCalendarStrip, setShowCalendarStrip] = React.useState(true);
  const [selectedDate, setSelectedDate] = React.useState(moment());
  const [user, setUser] = React.useState({});
  const [AlertData, setAlertData] = React.useState([]);

  const demands = async date => {
    const filter = [];
    const final = [];
    const Type = [{name: 'organize'}, {name: 'give'}, {name: 'sell'}];
    const give = [];
    const sell = [];
    const organize = [];
    Type.map(async (item, index) => {
      await userDemands.collection(item.name).onSnapshot({
        next:  querySnapshot => {
          var data = querySnapshot.docs.map((docsSnap, index) =>
          {
            var hrs=moment(
              new Date(docsSnap.data().demandStartDate.toDate())
            ).format('H:mm')

            final.push({
              time: moment(
                new Date(docsSnap.data().demandStartDate.toDate())
              ).format('HH:mm'),
              date: new Date(
                docsSnap.data().demandStartDate.toDate(),
           ).toDateString(),
             seconds:moment.duration(hrs).asSeconds(),
              service: new NeedService(
                new User(`${profileData.firstName} ${profileData.lastName}`, profileData.profilePic, profileData.email),
                docsSnap.data().data.description,
                docsSnap.data().data.title,
                moment(
                  new Date(docsSnap.data().demandStartDate.toDate()),
                ).format('Do MMM YYYY'),
              ),
            })
            
          }
          );

         var d= final.filter((e)=>moment(e.date).format('Do MMM YYYY') ===
           moment(date).format('Do MMM YYYY'))
          var newArray = blankSchedules.concat(d)
          newArray = newArray.sort((a, b) => (a.seconds > b.seconds) ? 1 : ((b.seconds > a.seconds) ? -1 : 0))

          if (d.length > 0) setSelectedSchedules(newArray)
          else setSelectedSchedules(blankSchedules)
        },
        error: error => {
          console.log(error);
        },
      });
    });

    await setData(final);
  };

  // const createSchedules = date => {
  //   var filter = [];
  //   userDemands.collection('organize').onSnapshot({
  //     next: querySnapshot => {
  //       const snapData = querySnapshot.docs.map((docsSnap, index) => ({
  //         time: moment(docsSnap.data().demandStartDate).format('h'),
  //         date: new Date(
  //           docsSnap.data().demandStartDate.toDate(),
  //         ).toDateString(),
  //         service: new NeedService(
  //           new User(
  //             `${user.firstName} ${user.lastName}`,
  //             user.profilePic,
  //             user.email,
  //           ),
  //           docsSnap.data().data.description,
  //           docsSnap.data().data.title,
  //           moment(new Date(docsSnap.data().demandStartDate.toDate())).format(
  //             'Do MMM YYYY',
  //           ),
  //         ),
  //       }));
  //       snapData.map(e => {
  //         if (
  //           moment(e.date).format('Do MMM YYYY') ===
  //           moment(date).format('Do MMM YYYY')
  //         ) {
  //           filter.push(e);
  //         }
  //       });
  //       if (filter.length > 0) {
  //         setSelectedSchedules(filter);
  //       } else {
  //         setSelectedSchedules(blankSchedules);
  //       }
  //     },
  //     error: error => {
  //       console.log(error);
  //     },
  //   });
  // };
  useEffect(() => {
    getUserProfile(auth().currentUser.uid).then(async item => {
      setUser(() => item);
    });
    demands();
  }, []);
  useEffect(async () => {
    var newProjects=[]
    selectedSchedules.map((d) => {
     blankSchedules.map(p =>
     { p.id === d.id
        ? newProjects.push({ ...p, ...d })
        : null}
    );
    })
    
    // setSelectedSchedules(newProjects)
    // console.log(newProjects)
  }, [selectedDate]);
  const renderFlatList = ({item}) => (
    <ScheduleCard
      data={item}
      onPressSee={() => {
        Actions.friendNeed();
      }}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}></View>
      <View style={styles.calendarContainer}>
        {showCalendarStrip && (
          <View>
            <TitleText
              text="Mon calendrier"
              textAlign="left"
              style={styles.titleText}
            />
            <CalendarStrip
              style={styles.calendarStripStyle}
              dayComponentHeight={100}
              scrollable
              locale={locale}
              calendarHeaderStyle={styles.calendarHeaderStyle}
              calendarHeaderContainerStyle={styles.calendarHeaderContainerStyle}
              dayContainerStyle={styles.dayContainerStyle}
              highlightDateNumberContainerStyle={
                styles.highlightDateNumberContainerStyle
              }
              dateNumberStyle={styles.dateNumberStyle}
              dateNameStyle={styles.dateNameStyle}
              selectedDate={selectedDate}
              onDateSelected={date => {
                // createSchedules(date);
                demands(date);
                // if (moment().isSame(date, 'day')) {
                //   createSchedules(date);
                //   return;
                // }
                // createSchedules(date);
                setSelectedDate(date);
                // setSelectedSchedules(blankSchedules);
              }}
              leftSelector={
                <View style={styles.calendarIconStyle}>
                  <PrevIcon width={10 * em} height={10 * hm} />
                </View>
              }
              rightSelector={
                <View style={styles.calendarIconStyle}>
                  <NextIcon width={10 * em} height={10 * hm} />
                </View>
              }
              upperCaseDays={false}
              highlightDateNumberStyle={styles.highlightDateNumberStyle}
              highlightDateNameStyle={styles.highlightDateNameStyle}
            />
          </View>
        )}
        {showCalendarStrip && (
          <TouchableOpacity
            onPress={() => {
              setShowCalendarStrip(false);
            }}>
            <View>
              <View style={styles.knob} />
            </View>
          </TouchableOpacity>
        )}
        {!showCalendarStrip && (
          <CalendarListView
            thed={selectedDate.format('YYYY-MM-DD').toString()}
            disab={() => setShowCalendarStrip(true)}
            onDayPress={day => {
              setSelectedDate(day);
              setShowCalendarStrip(true);
            }}
          />
        )}
      </View>
      {showCalendarStrip && (
        <FlatList
          data={selectedSchedules}
          renderItem={renderFlatList}
          keyExtractor={i => i.id}
          style={styles.container}
        />
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F0F5F7',
  },
  titleContainer: {
    paddingLeft: 30 * em,
    paddingTop: 30 * hm,
    paddingBottom: 36 * hm,
    backgroundColor: '#fff',
  },
  titleText: {
    marginTop: 12 * hm,
    marginLeft: 15 * em,
    marginBottom: 25 * hm,
    fontFamily: 'Lato-Black',
    fontSize: 34 * em,
  },
  calendarContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomStartRadius: 24 * em,
    borderBottomEndRadius: 24 * em,
    elevation: 4,
    shadowColor: '#84848442',
    shadowOffset: {
      width: 0,
      height: 12 * hm,
    },
    shadowRadius: 25 * em,
  },
  calendarStripStyle: {width: WIDTH - 32 * em, height: 140 * hm},
  calendarHeaderStyle: {
    color: '#1E2D60',
    fontSize: 20 * em,
    fontFamily: 'Montserrat-Bold',
  },
  calendarIconStyle: {
    width: 20 * em,
    height: 20 * em,
    backgroundColor: '#A0AEB8',
    borderRadius: 10 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarHeaderContainerStyle: {marginBottom: 8 * hm},
  dayContainerStyle: {
    width: 44 * em,
    height: 75 * hm,
    backgroundColor: '#40CDDE',
    elevation: 3,
    shadowColor: '#84848442',
    shadowOffset: {
      width: 0,
      height: 4 * hm,
    },
    shadowOpacity: 1,
    shadowRadius: 16 * em,
  },
  highlightDateNumberContainerStyle: {
    backgroundColor: '#fff',

    width: 34 * em,
    height: 34 * em,
    borderRadius: 20 * em,
    // paddingTop: 2 * em,
    // marginTop: -2 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateNumberStyle: {
    color: '#1E2D60',
    fontSize: 18 * em,
    fontFamily: 'Lato-Regular',
  },
  dateNameStyle: {
    color: '#BFCDDB',
    marginBottom: 16 * hm,
    fontSize: 14 * em,
    fontFamily: 'Lato-Bold',
  },
  highlightDateNumberStyle: {
    color: '#1E2D60',
    width: 30 * em,
    fontSize: 18 * em,
    fontFamily: 'Lato-Bold',
  },
  highlightDateNameStyle: {
    color: '#fff',
    width: 30 * em,
    fontSize: 14 * em,
    fontFamily: 'Lato-Bold',
    marginBottom: 16 * em,
    paddingTop: 6 * em,
  },
  knob: {
    marginBottom: 20 * hm,
    width: 55 * em,
    height: 5 * hm,
    borderRadius: 2.5 * em,
    backgroundColor: '#BFCDDB36',
    alignSelf: 'center',
  },
};

export default CalendarHomeScreen;
