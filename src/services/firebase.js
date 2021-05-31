import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";
let fireKey = firestore().collection("users");

export const getUserProfile = (id) => {
    // const dispatch = useDispatch()

    return firestore().collection('users').doc(id).get().then((snapshot) => {
        return snapshot.data()
    });

}

export const updateUserProfile = (id, data) => {
    return firestore().collection('users').doc(id).update(data).then((res) => {
        return true
    }).catch((error) => {
        return { error: error }
    })
}

export const getassest = () => {
    firestore().collection('assets').doc("123").get().then((res) => {

        return res.data().assets

    }).catch(e => { return { error: error } })
}


export const userSignIn = async (email, password) => {

    let response = await auth().signInWithEmailAndPassword(email, password)
    if (response && response.user) {

        fireKey.doc(response.user.uid).get().then((res) => {
            return res.data()
            // Object.assign(res._data, response.user)
            // dispatch(addProfile({ activeNotification: activeNotification, firstName: firstName, lastName: lastName, uid: response.user.uid, address: address, mobile: mobile, email: email }))
        }).catch((error) => {
            return { error: error }
            // setloading(false);
            // console.log(e)
        })
    }

}

export const deleteUser = async () => {


    return auth().currentUser.delete().then(function () {
        return "L'utilisateur a bien été supprimé"
    }).catch(function (error) {
        return { error: error }
        // An error happened.
    });
}
export const deleteUserData = async (id) => {
    return firestore().collection('users').doc(id).delete().then((snapshot) => {
        return true
    });
}

export const verifyUserEmail = async (email) => {

    return auth().sendEmailVerification()
        .then((res) => {
            return "Verification mail send"
        })
        .catch((error) => {

            return { error: 'somthing went wrong' }
        });

}

export const changeEmail = async (email) => {
    var user = auth().currentUser;

    user.updateEmail(email).then((res) => {
        return res
    }).catch((error) => {
        return { error: error }
    });


}

export const setUserData = async (data) => {
    return firestore()
        .collection('users')
        .doc(data.uid)
        .set(data)
        .then(async (res) => {
            return { res }
        })
        .catch(error => {
            return { error: error }
        });

}

export const createUser = async (signupData, activeNotification) => {

    return auth()
        .createUserWithEmailAndPassword(signupData.email, signupData.password)
        .then(userCredential => {
            var userCreated = userCredential.user;
            let { nom, mobile, prenom, adresse, email, coordinate } = signupData;
            if (userCreated) {
                let DataToBeSet = { firstName: prenom, lastName: nom, uid: userCreated.uid, address: adresse, mobile: mobile, email: email, activeNotification: activeNotification, coordinate: coordinate }
                return { userCreated, DataToBeSet }
                // return setUserData(DataToBeSet, userCreated.uid, signupData.password)
            }
        })
        .catch(error => {
            return { error: error }
        });


}