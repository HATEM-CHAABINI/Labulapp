import { View, Image,Text } from 'react-native';
import React,{useState,useEffect} from 'react';
import { em, hm } from '../constants/consts';
import CommonListItem from './CommonListItem';
import ProfileCommonSpecView from '../Components/view/ProfileCommonSpecView';
import { RightArrow } from '../assets/svg/icons';
import Flechedroite from '../assets/icons/navigation-app/Flechedroite';
const ProfileInformationListItem = (props) => {
  const [state, setstate] = useState(props.options !== undefined && props.options.length > 0 && (
    <>
      {props.options.map((val, index) => (
        <ProfileCommonSpecView text={val.name} key={index} style={{ marginTop: 10 * hm }} />
      ))}
    </>
  ))
  useEffect(() => {
    if (props.options !== undefined && props.options.length > 0) {
      setstate((
        <>
          {props.options.map((val, index) => (
            <ProfileCommonSpecView text={val.name} key={index} style={{ marginTop: 10 * hm }} />
          ))}
        </>
      ))
    }
  }, [props.options])

  //, { textTransform: props.titleUpperCase ? 'uppercase' : null } titleStyle uppercase not needed for now
  return (
    
    <CommonListItem
      style={[styles.container, props.style]}
      onPress={props.onPress}
      title={props.caption}
      conceptcolor={props.color}
      require={props.require}
      titleStyle={[styles.textTitle]}
      subTitle={props.value}
      subTitleStyle={
        props.placeholder
          ? { color: '#1E2D60',fontFamily:'Lato-Medium',fontSize:16*em, lineHeight: 20 * em, marginRight: 30 * em }
          : { color: '#1E2D60', fontSize: 16 * em, lineHeight: 19 * em, marginRight: 30 * em, fontFamily: 'Lato-Medium' }
      }
      comment={props.commentText}
      commentStyle={styles.commentStyle}
      rightView={
        props.flech && (
          <Flechedroite width={14 * em} height={14 * hm} />
       
          )||
        !props.noClick && (
          <View style={styles.rightView}>
                <Text style={[{ fontFamily: 'Lato-Regular', fontSize: 14 * em, color: '#40CDDE' },props.color]}>
                
                  
                  {props.value ==null ? '+ Ajouter': 'Modifier'}
                  

                  </Text>
          </View>
        )
       
   
      
 
  
      }
      textAddView={props.circleText}
      commentView={state}
    />
  );
};
export default ProfileInformationListItem;
const styles = {
  container: { backgroundColor: '#ffffff' },
  textTitle: {
    lineHeight: 16 * em,
    textAlignVertical: 'center',
    fontSize: 14 * em,
    fontFamily: 'Lato-Medium',
    marginBottom: 10 * em,
    color: '#A0AEB8',
  },
  rightView: { justifyContent: 'center'},
  commentStyle: { textAlign: 'left', fontSize: 12 * em, color: '#A0AEB8', marginTop: 10 * em, marginRight: 30 * em },
};
