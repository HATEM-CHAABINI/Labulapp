import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";
import User from '../model/user/User';
import NeedService from '../model/service/NeedService';
import NeedServiceType from '../model/service/NeedServiceType';
import NeedStatusType from '../model/service/NeedStatusType';

let fireKey = firestore().collection("users");

export const getUserProfile = (id) => {
    // const dispatch = useDispatch()

    return firestore().collection('users').doc(id).get().then((snapshot) => {
        console.log("snapshot ", snapshot.data());
        return snapshot.data()
    });

}

export const deleteUserAlerts = async (id, alertType, alertId) => {
    return firestore().collection('userAlerts').doc(id).collection(alertType).doc(alertId).delete().then((snapshot) => {
        return true
    });
}
export const fetchAlerts = async () => {
    let alerts = []
    const responseAlert = firestore().collection('userAlerts').doc(auth().currentUser.uid).collection('alerts')
    const dataAlert = await responseAlert.get();

    dataAlert.docs.forEach(async item => {
        if (item.data() !== undefined) {
            //    alerts.push(item.data()) 
            alerts.push({ docId: item.id, data: item.data() })
        }

    })
    return alerts
}



export const regleCoordinate = (latitude, longitude) => {
    verif = true
    fetchcoordinate(latitude, longitude).then((res) => {
        if (res == true) {

            latitude = latitude - 0.001
            console.log("2= ", latitude)
        }
        else {
            verif = false
            console.log("3= ", latitude)
        }

    })

}


export const fetchcoordinate = async (latitude, longitude) => {
    let RefNeed = firestore().collectionGroup("need").where("coordinate.latitude", "==", latitude).where("coordinate.logitude", "==", longitude);
    let allNeeds = await RefNeed.get();
    if (!allNeeds.empty) {
        return true
    }
    let Reforganize = firestore().collectionGroup("organize").where("coordinate.latitude", "==", latitude).where("coordinate.logitude", "==", longitude);
    let allorganize = await Reforganize.get();
    if (!allorganize.empty) {
        return true
    }
    let Refgive = firestore().collectionGroup("give").where("coordinate.latitude", "==", latitude).where("coordinate.logitude", "==", longitude);
    let allgive = await Refgive.get();
    if (!allgive.empty) {
        return true
    }
    let Refsell = firestore().collectionGroup("sell").where("coordinate.latitude", "==", latitude).where("coordinate.logitude", "==", longitude);
    let allsell = await Refsell.get();
    if (!allsell.empty) {
        return true
    }
    return false
}
export const fetchAlertFiltre = async (filtre,filtreD) => {

    
}

export const fetchDemandFiltre = async (filtre,filtreD) => {
    console.log("waaaaaaaaa",(filtreD!="Toutes" && filtreD.length!=0 && filtreD !==undefined));
    if(filtreD!="Toutes" && filtreD.length!=0 && filtreD !==undefined){
    var d1 = filtreD[0].d1;
    var d2 = filtreD[0].d2;
    }
    const data = [];
    for(const elem of filtre){
        if (elem =="vends"){
            let RefSell ;
            if(filtreD!="Toutes" && filtreD.length!=0 && filtreD !==undefined){
                RefSell = firestore().collectionGroup("sell").where("demandStartDate", ">", d1).where("demandStartDate", "<", d2);
            }
            else{
     RefSell = firestore().collectionGroup("sell");}
    let allSell = await RefSell.get();
    for (const doc of allSell.docs) {
        if ((doc.data().coordinate.latitude !== undefined)) {
                console.log("1. ",doc.data().demandStartDate.seconds,"2. ", d1," 3. ",d2);
            let cc = firestore().collection('users').doc(doc.ref.parent.parent.id);
            let res = await cc.get();
            if (res.data() !== undefined) {
                data.push({
                    ...doc.data(),
                    key: doc.id,
                    user: res.data()
                });
            }
        }
    }
}
if (elem =="besoin"){
    let RefSell ;
    if(filtreD!="Toutes" && filtreD.length!=0 && filtreD !==undefined){
        RefSell = firestore().collectionGroup("need").where("demandStartDate", ">", d1).where("demandStartDate", "<", d2);
    }
    else{
RefSell = firestore().collectionGroup("need");}
    let allSell = await RefSell.get();
    for (const doc of allSell.docs) {
        if ((doc.data().coordinate.latitude !== undefined)) {

            let cc = firestore().collection('users').doc(doc.ref.parent.parent.id);
            let res = await cc.get();
            if (res.data() !== undefined) {
                data.push({
                    ...doc.data(),
                    key: doc.id,
                    user: res.data()
                });
            }
        }
    }
}
if (elem =="organise"){
    let RefSell ;
    if(filtreD!="Toutes" && filtreD.length!=0 && filtreD !==undefined){
        RefSell = firestore().collectionGroup("organize").where("demandStartDate", ">", d1).where("demandStartDate", "<", d2);
    }
    else{
RefSell = firestore().collectionGroup("organize");}
    let allSell = await RefSell.get();
    for (const doc of allSell.docs) {
        if ((doc.data().coordinate.latitude !== undefined)) {
            let cc = firestore().collection('users').doc(doc.ref.parent.parent.id);
            let res = await cc.get();
            if (res.data() !== undefined) {
                data.push({
                    ...doc.data(),
                    key: doc.id,
                    user: res.data()
                });
            }
        }
    }
}
if (elem =="donne"){
    let RefSell ;
    if(filtreD!="Toutes" && filtreD.length!=0 && filtreD !==undefined){
        RefSell = firestore().collectionGroup("give").where("demandStartDate", ">", d1).where("demandStartDate", "<", d2);
    }
    else{
RefSell = firestore().collectionGroup("give");}
    let allSell = await RefSell.get();
    for (const doc of allSell.docs) {
        if ((doc.data().coordinate.latitude !== undefined)) {

            let cc = firestore().collection('users').doc(doc.ref.parent.parent.id);
            let res = await cc.get();
            if (res.data() !== undefined) {
                data.push({
                    ...doc.data(),
                    key: doc.id,
                    user: res.data()
                });
            }
        }
    }
}

}
return data


}


export const fetchallDemand = async () => {
    const data = [];
    let RefNeed = firestore().collectionGroup("need").get();
    let RefSell = firestore().collectionGroup("sell").get();
    let RefOrganize = firestore().collectionGroup("organize").get();
    let RefGive = firestore().collectionGroup("give").get();
    const [allNeedssnap, allSellsnap,allOrganizesnap,allGivesnap] = await Promise.all([
        RefNeed,
        RefSell,
        RefOrganize,
        RefGive
      ]);

      const allNeed = allNeedssnap.docs;
      const allSell = allSellsnap.docs;
      const allOrganize = allOrganizesnap.docs;
      const allGive = allGivesnap.docs;

      const citiesArray = allNeed.concat(allSell).concat(allOrganize).concat(allGive);
    for (const doc of citiesArray) {
        if ((doc.data().coordinate.latitude !== undefined)) {

            let cc = firestore().collection('users').doc(doc.ref.parent.parent.id);
            let res = await cc.get();
            if (res.data() !== undefined) {

                data.push({
                    ...doc.data(),
                    key: doc.id,
                    user: res.data()
                });
            }
        }

    }

    // let RefSell = firestore().collectionGroup("sell");
    // let allSell = await RefSell.get();
    // for (const doc of allSell.docs) {
    //     if ((doc.data().coordinate.latitude !== undefined)) {

    //         let cc = firestore().collection('users').doc(doc.ref.parent.parent.id);
    //         let res = await cc.get();
    //         if (res.data() !== undefined) {
    //             data.push({
    //                 ...doc.data(),
    //                 key: doc.id,
    //                 user: res.data()
    //             });
    //         }
    //     }
    // }

    // let RefOrganize = firestore().collectionGroup("organize");
    // let allOrganize = await RefOrganize.get();
    // for (const doc of allOrganize.docs) {
    //     if ((doc.data().coordinate.latitude !== undefined)) {

    //         let cc = firestore().collection('users').doc(doc.ref.parent.parent.id);
    //         let res = await cc.get();
    //         if (res.data() !== undefined) {
    //             data.push({
    //                 ...doc.data(),
    //                 key: doc.id,
    //                 user: res.data()
    //             });
    //         }
    //     }
    // }

    // let RefGive = firestore().collectionGroup("give");
    // let allGive = await RefGive.get();
    // for (const doc of allGive.docs) {
    //     if ((doc.data().coordinate.latitude !== undefined)) {

    //         let cc = firestore().collection('users').doc(doc.ref.parent.parent.id);
    //         let res = await cc.get();
    //         if (res.data() !== undefined) {

    //             data.push({
    //                 ...doc.data(),
    //                 key: doc.id,
    //                 user: res.data()
    //             });
    //         }
    //     }
    // }

    return data
}





export const fetchallneed = async () => {
    const data = [];
    let citiesRef = firestore().collectionGroup("needs");
    let allCities = await citiesRef.get();
    for (const doc of allCities.docs) {
        let cc = firestore().collection('users').doc(doc.ref.parent.parent.id);
        let res = await cc.get();
        data.push({
            ...doc.data(),
            key: doc.id,
            user: res.data()
        });

    }
    return data
}

export const fetchallsell = async () => {
    const data = [];
    let citiesRef = firestore().collectionGroup("sell");
    let allCities = await citiesRef.get();
    for (const doc of allCities.docs) {
        let cc = firestore().collection('users').doc(doc.ref.parent.parent.id);
        let res = await cc.get();
        data.push({
            ...doc.data(),
            key: doc.id,
            user: res.data()
        });

    }
    return data
}

export const fetchallorganize = async () => {
    const data = [];
    let citiesRef = firestore().collectionGroup("organize");
    let allCities = await citiesRef.get();
    for (const doc of allCities.docs) {
        let cc = firestore().collection('users').doc(doc.ref.parent.parent.id);
        let res = await cc.get();
        data.push({
            ...doc.data(),
            key: doc.id,
            user: res.data()
        });

    }
    return data
}

export const fetchallgive = async () => {
    const data = [];
    let citiesRef = firestore().collectionGroup("give");
    let allCities = await citiesRef.get();
    for (const doc of allCities.docs) {
        let cc = firestore().collection('users').doc(doc.ref.parent.parent.id);
        let res = await cc.get();
        data.push({
            ...doc.data(),
            key: doc.id,
            user: res.data()
        });

    }
    return data
}




export const fetchDemands = async () => {
    let demands = []

    const responseNeed = firestore().collection('userDemands').doc(auth().currentUser.uid).collection('need')
    const dataNeed = await responseNeed.get();

    dataNeed.docs.forEach(async item => {
        if (item.data() !== undefined) {
            demands.push({ docId: item.id, data: item.data() })
        }

    })
    const responseGive = firestore().collection('userDemands').doc(auth().currentUser.uid).collection('give')
    const dataGive = await responseGive.get();

    dataGive.docs.forEach(async item => {
        if (item.data() !== undefined) {
            demands.push({ docId: item.id, data: item.data() })
        }
    })
    const responseOrganize = firestore().collection('userDemands').doc(auth().currentUser.uid).collection('organize')
    const dataOrganize = await responseOrganize.get();

    dataOrganize.docs.forEach(async item => {
        if (item.data() !== undefined) {
            demands.push({ docId: item.id, data: item.data() })
        }
    })
    const responseSell = firestore().collection('userDemands').doc(auth().currentUser.uid).collection('sell')
    const dataSell = await responseSell.get();

    dataSell.docs.forEach(async item => {
        if (item.data() !== undefined) {
            demands.push({ docId: item.id, data: item.data() })
        }
    })

    return demands
}

export const updateUserProfile = (id, data) => {
    return firestore().collection('users').doc(id).update(data).then((res) => {
        return true
    }).catch((error) => {
        return { error: error }
    })
}

export const updateUserDemands = (id, data) => {
    return firestore().collection('userDemands').doc(id).update(data).then((res) => {
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

export const deleteUserDemands = async (id, demandType, demandId) => {
    return firestore().collection('userDemands').doc(id).collection(demandType).doc(demandId).delete().then((snapshot) => {
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

// export const createUser = async (signupData, activeNotification) => {

//     return auth()
//         .createUserWithEmailAndPassword(signupData.email, signupData.password)
//         .then(userCredential => {
//             var userCreated = userCredential.user;
//             let { nom, mobile, prenom, adresse, email, coordinate } = signupData;
//             if (userCreated) {
//                 let DataToBeSet = { firstName: prenom, lastName: nom, uid: userCreated.uid, address: adresse, mobile: mobile, email: email, activeNotification: activeNotification, coordinate: coordinate }
//                 return { userCreated, DataToBeSet }
//                 // return setUserData(DataToBeSet, userCreated.uid, signupData.password)
//             }
//         })
//         .catch(error => {
//             return { error: error }
//         });


// }
export const createUser = async (signupData) => {

    return auth()
        .createUserWithEmailAndPassword(signupData.email, signupData.password)
        .then(userCredential => {
            var userCreated = userCredential.user;
            let {firstName,lastName, email,activeLocation,activeNotification} = signupData;
            if (userCreated) {
                let DataToBeSet = { firstName: firstName, lastName:lastName, uid: userCreated.uid, email: email, activeNotification: activeNotification,activeLocation:activeLocation }
                return { userCreated, DataToBeSet }
                // return setUserData(DataToBeSet, userCreated.uid, signupData.password)
            }
        })
        .catch(error => {
            return { error: error }
        });


}