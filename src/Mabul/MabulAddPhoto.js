import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, NativeModules, StyleSheet, ScrollView, SafeAreaView, FlatList, Dimensions, ActivityIndicator, ImageBackground } from 'react-native';
import TitleText from '../text/TitleText';
import { em, hm, mabulColors, hexToRGB } from '../constants/consts';
import CommentText from '../text/CommentText';
import MabulCommonHeader from './MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from '../Components/button/MabulNextButton';
import { useSelector, useDispatch } from 'react-redux'
import { add_into_demand, update_into_demand } from '../redux/actions/demand'
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import { CrossGray, EditAddPhoto, Family } from '../assets/svg/icons';
// import ImagePicker from 'react-native-image-crop-picker';
var ImagePicker = NativeModules.ImageCropPicker;
let numColumns = 3;

const MabulAddPhoto = (props) => {
  // console.log('photos screens',props);
  const dispatch = useDispatch()
//   const conceptColor = mabulColors[mabulService];
  const { demandData } = useSelector((state) => state.demandReducer)
  const [images, setimages] = useState({ images: [] })
  const [loading, setloading] = useState(false)
  const [buttonloading, setbuttonloading] = useState(false)

  const uploadeImage = async (imageArray) => {
    const imagesBlob = [];

    if (imageArray.length > 3) {
      alert("You can only choose 3 max photos !!")
      return
    }
    setbuttonloading(true)
    await Promise.all(
      imageArray.map(async (image, index) => {
        const response = await fetch(image.path);
        const blob = await response.blob();
        const ref = storage().ref().child(`users/${auth().currentUser.uid}/demands/${Math.random().toString(36).substring(2, 12)}`)
        await ref.put(blob).then(async (result) => {
          await ref.getDownloadURL().then((result) => { imagesBlob.push({ uri: result, id: index }) })
          console.log('photos aa rhe he',uri,id)
          dispatch(update_into_demand({ uri: result, id: index  }))
        });
      }),
    );
    setbuttonloading(false)
    submit(imagesBlob)
  };



  // const imageSelect = () => {
  //   ImagePicker.openPicker({
  //     multiple: true,
  //     waitAnimationEnd: false,
  //     includeExif: true,
  //     forceJpg: true,
  //   }).then(images => {
  //     setimages({ images: images })
  //     uploadeImage(images.images)
  //     props.requiredPhoto()
      
  //   }).catch(e => alert(e));
  // }

  const imageSelect = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    }).then(images => {
      var img= [];
      img.push({id:1,uri:images[0].path})
      img.push({id:2,uri:images[1].path})
      img.push({id:3,uri:images[2].path})
      setimages({ images: images })
      props.requiredPhoto()
      // console.log('hello images',images.length)
      // console.log('hello images path',img)
      if(images.length>=3){
        dispatch(update_into_demand({ images:img }))
      }
      else{
        alert("You can  choose min 3 photos !!") 
      }
    }).catch(e => alert(e));
  }


  const removeByAttr = (arr, attr, value) => {

    const findIndex = arr.findIndex(a => a.id === value)
    findIndex !== -1 && arr.splice(findIndex, 1)
    setTimeout(() => {
      setimages({ images: arr });
    }, 50);
  }
  // console.log('photos screens for submit..',images);
  const submit = (images) => {
 
    // uploadeImage(images.images)
 
    setimages({ images: images })
    dispatch(update_into_demand({ images: images }))

    Actions.mabulCommonDateSetting({
      mabulService: mabulService,
      process: mabulService === 'need' ? 67 : mabulService === 'organize' ? 60 : 79,
    })
  }

  return (
      <View style={styles.body}>
        <View>
         
         
          {images.images.length < 1 ? loading ?
           <ActivityIndicator style={styles.photoZone} color={conceptColor} size={'small'} /> :
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={styles.photoZone}>
            <TouchableOpacity onPress={() => { imageSelect() }} >
              <Image
                source={require('../assets/images/ic_addphotos_green.png')}
                style={[styles.icon, { tintColor: props.conceptColor, left: "5%" }]}
              />
              <CommentText text="Clique ici" style={styles.commentPhoto} />
            </TouchableOpacity>
          </View>
          <View style={styles.photoZone}>
            <TouchableOpacity onPress={() => { imageSelect() }} >
              <Image
                source={require('../assets/images/ic_addphotos_green.png')}
                style={[styles.icon, { tintColor: props.conceptColor, left: "5%" }]}
              />
              <CommentText text="Clique ici" style={styles.commentPhoto} />
            </TouchableOpacity>
          </View>
          <View style={styles.photoZone}>
            <TouchableOpacity onPress={() => { imageSelect() }} >
              <Image
                source={require('../assets/images/ic_addphotos_green.png')}
                style={[styles.icon, { tintColor: props.conceptColor, left: "5%" }]}
              />
              <CommentText text="Clique ici" style={styles.commentPhoto} />
            </TouchableOpacity>
          </View>
          </View>
           :
            <SafeAreaView style={styles.photoZone2}>


              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}>

                {images.images.map((item) => {
                  return (<ImageBackground
                    imageStyle={{ borderRadius: 15 * em }}
                    source={{ uri: item.path === undefined ? item.uri : item.path }}
                    style={{
                      width: 95 * em,
                      height: 95 * em,
                      borderRadius: 15 * em,
                      resizeMode: 'cover',
                      flexDirection: 'row-reverse',
                      alignItems: 'flex-end',
                      marginLeft: '3%',
                      marginTop: '1%'
                    }}>
                    <TouchableOpacity style={{
                      width: 26 * em,
                      height: 26 * em,
                      borderRadius: 13 * em,
                      marginBottom: 4 * em,
                      marginRight: 4 * em,
                      backgroundColor: '#ffffff',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }} onPress={() => { removeByAttr(images.images, 'id', item.id) }}>
                      <CrossGray width={12 * em} height={12 * em} />
                    </TouchableOpacity>
                  </ImageBackground>)
                })}

                {images.images.length < 3 ? <TouchableOpacity
                  imageStyle={{ borderRadius: 15 * em }}
                  style={
                    {
                      width: 95 * em,
                      height: 95 * em,
                      // borderRadius: 15 * em,
                      resizeMode: 'cover',
                      flexDirection: 'row-reverse',
                      alignItems: 'flex-end',
                      // marginHorizontal: ',
                      // borderWidth: 2 * em,
                      // borderColor: '#BFCDDB',
                      // borderStyle: 'dashed',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',

                    }
                  }
                  onPress={() => { imageSelect() }}
                >
                  <View style={{ marginBottom: 5 * em, lineHeight: 21 * em }}>
                    <EditAddPhoto width={32.86 * em} height={23 * em} />
                  </View>
                  <CommentText text="Clique ici" color="#40CDDE" />
                </TouchableOpacity> : null}
              </View>
            </SafeAreaView>
          }
        </View>
     
      </View>
  );
};

const styles = {

  imageThumbnail: {

    width: 100, height: 100, resizeMode: 'contain'
  },
  addPhoto: { left: 10 * em, width: 33 * em, height: 23 * em, marginBottom: 5.5 * em },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    PaddingTop: 16 * hm,
  },
  imgContainer: {
    marginVertical: 20
  },
  header: {
    height: '12.45%',

  },
  imgView: {

    width: '50%',
    marginVertical: 10,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * em,
    lineHeight: 38 * em,
  },
  comment: { textAlign: 'left', lineHeight: 20 * em, textAlignVertical: 'center', marginTop: 10 * em },
  photoZone: {
    width: 95 * em,
    height: 95 * em,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 2 * em,
    borderColor: '#BFCDDB',
    borderRadius: 20 * em,
    marginTop: 20 * em,
  },
  photoZone2: {
    width: 315 * em,
    padding: '1%',
    flexGrow: 1,
    maxHeight: 415 * em,
    minHeight: 115 * em,
    borderStyle: 'dashed',
    borderWidth: 2 * em,
    borderColor: '#BFCDDB',
    borderRadius: 20 * em,
    marginTop: 10 * em,
  }, button: {
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  addButton: {
    width: 315 * em,
    height: 20 * em,

    marginBottom: 10,
    alignItems: 'flex-start',
    marginTop: 20 * em,
  },
  photo: {
    width: 95 * em,
    height: 95 * em,
    borderRadius: 15 * em,
    resizeMode: 'cover',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  commentPhoto: {
    fontSize: 12 * em,
    lineHeight: 14 * em,
    color: '#6A8596',
  },
  commentAdd: {
    fontSize: 14 * em,
    lineHeight: 14 * em,
    right: '2%',
    color: '#6A8596',
  },
  icon: {
    width: 40 * em,
    height: 28 * em,
  },
  nextBtn: {
    alignSelf: 'flex-end',
    marginBottom: 30 * hm,
  },
};

export default MabulAddPhoto;
