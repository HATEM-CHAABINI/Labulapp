import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {em, hm, WIDTH} from '../constants/consts';
import CommentText from '../text/CommentText';
import SmallText from '../text/SmallText';
import ServiceType from '../model/service/ServiceType';
import {getUserBadge} from '../constants/icons';
import CommonListItem from '../adapter/CommonListItem';
import AvatarWithBadge from './AvatarWithBadge';
import {CrossGray, LocationGray, LocationRed} from '../assets/svg/icons';
import firestore from '@react-native-firebase/firestore';
import {deleteUserDemands} from '../services/firebase';
import auth from '@react-native-firebase/auth';
import {Actions} from 'react-native-router-flux';
const padding = 15 * em;
import Moment from 'moment';
const textBoxMargin = 52 * em;
const userPhotoSize = 36 * em;
import {
  renderimgSell,
  renderimgneed,
  renderimgorganize,
  renderimggive,
  renderimgalert,
  renderimgalertliste,
} from '../constants/renderBange';
const FriendListCard = props => {
  // const userBadge = getUserBadge(data.type, data.subType);
  const [selectedUser, setselectedUser] = useState([]);
  const [data, setData] = useState(props.data);
  useEffect(async() => {
    //  getUserBadge(props.data.type, props.data.subType);

    await setData(props.data);
  }, [props.data]);
  const deleteDemand = () => {
    Alert.alert('Supprimer', 'Es-tu sûr?', [
      {
        text: 'Annuler',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deleteUserDemands(
            auth().currentUser.uid,
            props.data.serviceType.name,
            props.data.key,
          )
            .then(item => {
              //  console.log(auth().currentUser.uid)
              //  console.log(props.data.serviceType.name)
              //  console.log(props.data.key)
              Actions.home();
            })
            .catch(error => {
              console.log(error);
            });
        },
      },
    ]);
  };

  return (
    <TouchableOpacity onPress={props.onPress}>
   
      {data?.serviceType?.name !== 'alerts' ? (
        <View style={[styles.container, props.style]}>
          <View style={styles.containerIcon}>
            <TouchableOpacity
              onPress={() => {
                deleteDemand();
              }}>
              {/* cross icon */}
              <CrossGray width={12 * em} height={12 * em} />
            </TouchableOpacity>
          </View>
          
          {data?.images ||data?.images===" " ? (
          <Image source={{ uri: data.images[0]?.uri }} style={styles.coverImage} />
        ) : (
          <Image source={{ uri: "https://i.stack.imgur.com/y9DpT.jpg" }} style={styles.coverImage} />
        )}
          <View style={styles.textBox}>
            {data.date && (
              <View style={styles.dateText}>
                <SmallText
                  text={
                    data.type === ServiceType.ORGANIZE
                      ? Moment(data.demandStartDate.seconds * 1000).format(
                          'DD MMMM YYYY-HH:MM',
                        )
                      : Moment(data.demandStartDate.seconds * 1000).format(
                          'DD MMMM YYYY-HH:MM',
                        )
                  }
                  color="#6A8596"
                />
              </View>
            )}
            <CommonListItem
              style={styles.bottomContent}
              icon={
                <AvatarWithBadge
                  avatar={
                    data?.user?.profilePic === undefined
                      ? {
                          uri: 'https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-600w-1365533969.jpg',
                        }
                      : {uri: data?.user?.profilePic}
                  }
                  badge={
                    data.serviceType?.code == 0
                      ? renderimgorganize(data.category?.id)
                      : data.serviceType?.code == 1
                      ? renderimggive(data.category?.id)
                      : data.serviceType?.code == 2
                      ? renderimgSell(data.belongsTo?.id, data.category?.id)
                      : renderimgneed(data.belongsTo?.id, data.category?.id)
                  }
                  avatarDiameter={35 * em}
                  badgeDiameter={21 * em}
                  style={{marginRight: 16 * em}}
                  onPress={() => props.onAvatarPress()}
                />
              }
              title={data.user?.firstName + ' ' + data.user?.lastName}
              titleStyle={styles.userDescText}
              subTitle={data.data?.title}
              subTitleStyle={styles.userDescTexts}
            />
            {data?.serviceType?.code === ServiceType.GIVE && (
              <CommonListItem
                style={styles.locationContainer}
                icon={<LocationRed width={16 * em} height={19 * em} />}
                titleStyle={styles.locationText}
                title={data?.address}
              />
            )}
            {data.serviceType?.code !== ServiceType.GIVE && (
              <CommentText
                align="left"
                color="#1E2D60"
                style={styles.organText}
                text={data.data?.title}
              />
            )}
            {data?.price && (
              <CommentText
                align="left"
                color="#1E2D60"
                style={styles.priceText}
                text={data?.price}
              />
            )}
          </View>
        </View>
      ) : (
        <View style={[styles.container, props.style]}>
          <View style={styles.containerIcon}>
            <TouchableOpacity
              onPress={() => {
                deleteDemand();
              }}>
              {/* cross icon */}
              <CrossGray width={12 * em} height={12 * em} />
            </TouchableOpacity>
          </View>

          <View style={styles.textBox}>
            {data.date && (
              <View style={styles.dateText}>
                <SmallText
                  text={
                    data.type === ServiceType.ORGANIZE
                      ? Moment(data.demandStartDate.seconds * 1000).format(
                          'DD MMMM YYYY-HH:MM',
                        )
                      : Moment(data.demandStartDate.seconds * 1000).format(
                          'DD MMMM YYYY-HH:MM',
                        )
                  }
                  color="#6A8596"
                />
              </View>
            )}
            <CommonListItem
              style={{width: '100%'}}
              icon={
                <AvatarWithBadge
                  avatarDiameter={35 * em}
                  badgeDiameter={21 * em}
                  //  style={{ marginRight: 16 * em }}
                  onPress={() => props.onAvatarPress()}
                />
              }
              title={'Alerte ' + data.type.title}
              titleStyle={{
                fontSize: 20 * em,
                color: '#1E2D60',
                fontFamily: 'Lato-Bold',
              }}
              //  subTitle={data.address}
              subTitleStyle={styles.userDescTexts}
            />

            <CommonListItem
              style={{marginLeft: 10 * em, marginTop: 8 * hm}}
              icon={<LocationGray width={16 * em} height={19 * em} />}
              titleStyle={styles.locationText}
              title={data.address}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              marginLeft: 260 * em,
              marginTop: '25%',
            }}>
            {renderimgalertliste()}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};
const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20 * hm,
    width: 315 * em,
    paddingHorizontal: padding,
    minHeight: 36 * hm,
    elevation: 3,
    shadowColor: '#254D5612',
    shadowOffset: {
      width: 0,
      height: 12 * hm,
    },
    shadowRadius: 25 * em,
    paddingTop: 15 * hm,
    paddingBottom: 35 * hm,
  },
  containerIcon: {
    flexDirection: 'row-reverse',
    marginTop: 4 * em,
    marginLeft: 4 * em,
  },
  coverImage: {
    alignSelf: 'center',
    marginTop: 15 * hm,
    width: '100%',
    height: 115 * hm,
    borderRadius: padding,
  },
  textBox: {flex: 1},
  dateText: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    fontFamily: 'Lato-Medium',
    paddingRight: padding,
    paddingVertical: 5 * hm,
    marginTop: -12.5 * hm,
    borderTopRightRadius: 14 * hm,
  },
  bottomContent: {marginTop: padding, width: '100%'},
  userDesc: {flex: 1, justifyContent: 'space-between'},
  userDescText: {fontSize: 14 * em, color: '#1E2D60', fontFamily: 'Lato-Bold'},
  plan: {fontSize: 14 * em, color: '#1E2D60', fontFamily: 'lato-Medium'},
  userDescTexts: {
    fontSize: 12 * em,
    color: '#1E2D60',
    fontFamily: 'Lato-Medium',
  },
  organText: {
    marginLeft: textBoxMargin,
    marginTop: 15 * hm,
    fontSize: 14 * em,
    fontFamily: 'Lato-Bold',
  },
  priceText: {
    marginLeft: textBoxMargin,
    marginTop: 10 * hm,
    fontFamily: 'Lato-Medium',
  },
  locationContainer: {marginLeft: textBoxMargin, marginTop: 8 * hm},
  locationText: {
    color: '#6A8596',
    fontSize: 12 * em,
    marginRight: 75 * em,
    marginLeft: 10 * em,
    lineHeight: 14 * em,
  },
  dateTextCommon: {
    paddingVertical: 10 * hm,
    paddingHorizontal: padding,
    fontFamily: 'lato-Medium',
  },
  discountPrice: {
    marginLeft: 10 * em,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
};
export default FriendListCard;
