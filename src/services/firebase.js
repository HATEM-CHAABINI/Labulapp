import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from "@react-native-firebase/auth";
import { useDispatch } from 'react-redux';
import { addProfile } from '../redux/actions/profile';
let fireKey = firestore().collection("users");


export const updateUserProfile = () =>{
    // const dispatch = useDispatch()
    let user = auth().currentUser;
  
    return firestore().collection('users').doc(user.uid).get().then((snapshot)=>{
        //  dispatch(addProfile(snapshot.data()))
        return snapshot.data()

   });
   
}

export const getassest = () =>{
   firestore().collection('assets').doc("123").get().then((res)=>{
      
      return res.data().assets
     
    }).catch(e =>{console.log(e)})
}