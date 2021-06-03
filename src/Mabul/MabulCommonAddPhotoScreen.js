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
const MabulCommonAddPhotoScreen = ({ mabulService, process }) => {
  const dispatch = useDispatch()
  const conceptColor = mabulColors[mabulService];
  const { demandData } = useSelector((state) => state.demandReducer);
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

        });
      }),

    );


    setbuttonloading(false)

    submit(imagesBlob)
  };


  const imageSelect = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    }).then(images => {
      setimages({ images: images })


    }).catch(e => alert(e));
  }

  const removeByAttr = (arr, attr, value) => {

    const findIndex = arr.findIndex(a => a.id === value)
    findIndex !== -1 && arr.splice(findIndex, 1)
    setTimeout(() => {
      setimages({ images: arr });
    }, 50);
  }

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
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={process} isNoBackBtn={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={'Ajoute des photos'} style={styles.title} />
          <CommentText
            text="Les photos aident les utilisateurs à avoir une idée de ce que tu vends."
            style={styles.comment}
          />
          {/* {images.images.length > 0 ? <View style={styles.addButton}>
            <TouchableOpacity onPress={() => { imageSelect() }} >
              <CommentText text="add another set" style={[styles.commentAdd, { color: conceptColor }]} />
            </TouchableOpacity>
          </View> : null} */}
          {images.images.length < 1 ? loading ? <ActivityIndicator style={styles.photoZone} color={conceptColor} size={'small'} /> : <View style={styles.photoZone}>
            <TouchableOpacity onPress={() => { imageSelect() }} >
              <Image
                source={require('../assets/images/ic_addphotos_green.png')}
                style={[styles.icon, { tintColor: conceptColor, left: "5%" }]}
              />
              <CommentText text="3 maximum" style={styles.commentPhoto} />
            </TouchableOpacity>
          </View> :
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
            // <SafeAreaView style={styles.photoZone2}>
            //   <FlatList
            //     data={images.images}

            //     ListFooterComponent={() => {
            //       return (images.images.length >= 3 ? null : <View
            //         imageStyle={{ borderRadius: 15 * em }}

            //         style={[
            //           styles.photo,
            //           {
            //             borderWidth: 2 * em,
            //             borderColor: '#BFCDDB',
            //             borderStyle: 'dashed',
            //             justifyContent: 'center',
            //             alignItems: 'center',
            //             flexDirection: 'column',
            //           },
            //         ]}>
            //         <TouchableOpacity onPress={() => { imageSelect() }}>
            //           <View style={styles.addPhoto}>
            //             <EditAddPhoto width={32.86 * em} height={23 * em} />
            //           </View>
            //           <CommentText text="Clique ici" color="#40CDDE" />
            //         </TouchableOpacity>

            //       </View>)
            //     }}
            //     renderItem={({ item }) => {

            //       return (
            //         <View
            //           style={{
            //             marginHorizontal: "1%",
            //             marginVertical: '2%',
            //             backgroundColor: '#00000030'
            //           }}>

            //           <Image
            //             style={styles.imageThumbnail}
            //             source={{ uri: item.path === undefined ? item.uri : item.path }}
            //           />
            //           <TouchableOpacity style={{ position: 'absolute', right: 0, top: 0, }} onPress={() => { removeByAttr(images.images, id, item.id) }}>


            //             <Image
            //               style={{ height: 20, width: 20, resizeMode: 'contain' }}
            //               source={require('../assets/images/cross.jpg')}
            //             />
            //           </TouchableOpacity>
            //         </View>
            //       )
            //     }}
            //     numColumns={3}
            //     keyExtractor={(item, index) => index} />


            // </SafeAreaView>
          }
        </View>
        <MabulNextButton
          disabled={images.images.length >= 1 ? false : true}
          color={images.images.length >= 1 ? hexToRGB(conceptColor) : hexToRGB(conceptColor, 0.5)}
          style={styles.nextBtn}
          onPress={() => uploadeImage(images.images)}
          loading={buttonloading}
        />
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
    width: 315 * em,
    height: 121 * em,
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

export default MabulCommonAddPhotoScreen;
