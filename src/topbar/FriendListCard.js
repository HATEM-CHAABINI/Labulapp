import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { em, hm,WIDTH } from '../constants/consts';
import CommentText from '../text/CommentText';
import SmallText from '../text/SmallText';
import ServiceType from '../model/service/ServiceType';
import { getUserBadge } from '../constants/icons';
import CommonListItem from '../adapter/CommonListItem';
import AvatarWithBadge from './AvatarWithBadge';
import { CrossGray, LocationRed } from '../assets/svg/icons';
const padding = 15 * em;
const textBoxMargin = 52 * em;
const userPhotoSize = 36 * em;

const FriendListCard = (props) => {
  const { data } = props;
  const userBadge = getUserBadge(data.type, data.subType);
  if (data.type === ServiceType.SELL) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.container, props.style]}>
          <View style={styles.containerIcon}>
            <CrossGray width={12 * em} height={12 * em} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={data.coverImage} style={styles.coverImage} />
            <Image
              source={userBadge}
              style={{ position: 'absolute', width: 64 * em, height: 64 * em, bottom: -32 * em }}
            />
          </View>
          {data.date && (
            <SmallText
              style={styles.dateTextCommon}
              text={data.type === ServiceType.ORGANIZE ? '01 Mar · 13h00' : '04 Fév · 08h00'}
              color="#6A8596"
            />
          )}
          <View style={{ marginTop: 10 * hm }}>
            <CommentText text={data.title} color="#1E2D60" style={{ fontFamily: 'Lato-Black' }} />
            <SmallText style={[styles.plan, { marginTop: 15 * hm }]} text={data.slogan} />
            <CommentText
              align="left"
              text={data.comment}
              color="#1E2D60"
              style={{ fontFamily: 'Lato-Black', marginTop: 5 * hm }}
            />
            <View style={{ flexDirection: 'row', marginTop: 17 * hm }}>
              <CommentText align="left" text={data.price} color="#1E2D60" style={{ fontFamily: 'Lato-Medium' }} />
              <CommentText align="left" text={data.discountPrice} color="#6A8596" style={styles.discountPrice} />
              <CommentText align="left" text={data.discountInfo} color="#6A8596" style={{ marginLeft: 10 * em ,color:"#A0AEB8"}} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <View style={styles.containerIcon}>
          <CrossGray width={12 * em} height={12 * em} />
        </View>
        {typeof data.coverImage === 'number' ? (
          <Image source={data.coverImage} style={styles.coverImage} />
        ) : (
          data.coverImage
        )}
        <View style={styles.textBox}>
          {data.date && (
            <View style={styles.dateText}>
            <SmallText
              
              text={data.type === ServiceType.ORGANIZE ? '01 Mar · 13h00' : '04 Fév · 08h00'}
              color="#6A8596"
            /></View>
          )}
          <CommonListItem
            style={styles.bottomContent}
            icon={
              <AvatarWithBadge
                avatar={data.user.photo}
                badge={userBadge}
                avatarDiameter={35 * em}
                badgeDiameter={21 * em}
                style={{ marginRight: 16 * em }}
                onPress={() => props.onAvatarPress()}
              />
            }
            title={data.user.name}
            titleStyle={styles.userDescText}
            subTitle={data.organName}
            subTitleStyle={styles.userDescTexts}
          />
          {data.type === ServiceType.GIVE && (
            <CommonListItem
              style={styles.locationContainer}
              icon={<LocationRed width={16 * em} height={19 * em} />}
              titleStyle={styles.locationText}
              title={data.location}
            />
          )}
          {data.type !== ServiceType.GIVE && (
            <CommentText align="left" color="#1E2D60" style={styles.organText} text={data.title} />
          )}
          {data.price && <CommentText align="left" color="#1E2D60" style={styles.priceText} text={data.price} />}
        </View>
      </View>
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
  containerIcon: { flexDirection: 'row-reverse' },
  coverImage: {
    alignSelf: 'center',
    marginTop: 15 * hm,
    width: '100%',
    height: 115 * hm,
    borderRadius: padding,
  },
  textBox: { flex: 1 },
  dateText: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',fontFamily:"lato-Medium" ,
    paddingRight: padding,
    paddingVertical: 5 * hm,
    marginTop: -12.5 * hm,
    borderTopRightRadius: 14 * hm,
  },
  bottomContent: { marginTop: padding, width: '100%' },
  userDesc: { flex: 1, justifyContent: 'space-between' },
  userDescText: { fontSize: 14 * em, color: '#1E2D60',fontFamily:'lato-bold' },
  plan: { fontSize: 14 * em, color: '#1E2D60',fontFamily:'lato-Medium' },
  userDescTexts: { fontSize: 12 * em, color: '#1E2D60',fontFamily:"lato-Medium" 
},
  organText: { marginLeft: textBoxMargin, marginTop: 15 * hm,fontSize:14*em
    , fontFamily: 'Lato-Bold'
   },
  priceText: { marginLeft: textBoxMargin, marginTop: 10 * hm,
     fontFamily: 'Lato-Medium' 
    },
  locationContainer: { marginLeft: textBoxMargin, marginTop: 8 * hm },
  locationText: { color: '#6A8596', fontSize: 12 * em, marginRight: 75 * em, marginLeft: 10 * em, lineHeight: 14 * em },
  dateTextCommon: { paddingVertical: 10 * hm, paddingHorizontal: padding ,fontFamily:"lato-Medium"},
  discountPrice: { marginLeft: 10 * em, textDecorationLine: 'line-through', textDecorationStyle: 'solid' },
};
export default FriendListCard;
