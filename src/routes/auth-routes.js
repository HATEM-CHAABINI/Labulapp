import React, {useState, useEffect} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoadingScreen from '../screens/LoadingScreen';
import HomeScreen from '../screens/HomeScreen';
// import LoginMenuScreen from 'view/screens/account/LoginMenuScreen';
import Connexion from '../Components/Connexion';
// import SignupMenuScreen from 'view/screens/account/SignupMenuScreen';
import MainScreen from '../topbar/MainScreen';
//import LoginScreen from 'view/screens/account/LoginScreen';
import Inscription from '../Components/Inscription';
//import ForgotPasswordScreen from 'view/screens/account/ForgotPasswordScreen';
//import RegisterEmailScreen from 'view/screens/account/RegisterEmailScreen';
import ConnexionEmail from '../Components/ConnexionEmail';
//import RegisterNameScreen from 'view/screens/account/RegisterNameScreen';
//import RegisterFamilyNameScreen from 'view/screens/account/RegisterFamilyNameScreen';
//import RegisterMobileScreen from 'view/screens/account/RegisterMobileScreen';
//import RegisterAddressScreen from 'view/screens/account/RegisterAddressScreen';
//import ActivateLocationScreen from 'view/screens/account/ActivateLocationScreen';
//import ActivateNotificationScreen from 'view/screens/account/ActivateNotificationScreen';
//import MabulHomeScreen from 'view/screens/main/mabul/MabulHomeScreen';
import MabulOrganizeScreen from '../Mabul/organize/MabulOrganizeScreen';

//import MabulSearchScreen from 'view/screens/main/mabul/search/MabulSearchScreen';
import ProfileOverviewScreen from '../topbar/profile/ProfileOverviewScreen';
import FriendsFilterScreen from '../topbar/friends/FriendsFilterScreen';
import MyInformationScreen from '../topbar/profile/MyInformationScreen';
import MySettingScreen from '../topbar/profile/MySettingScreen';
import PremiumSubscriptionScreen from '../topbar/profile/PremiumSubscriptionScreen';
import PremiumPurchasedScreen from '../topbar/profile/PremiumPurchasedScreen';
import CreateAccountMenuScreen from '../topbar/profile/proProfile/CreateAccountMenuScreen';
import CreateProfessionalAccountScreen from '../topbar/profile/proProfile/CreateProfessionalAccountScreen';
import CreateCommunityAccountScreen from '../topbar/profile/proProfile/CreateCommunityAccountScreen';
import CreateAssociationAccountScreen from '../topbar/profile/proProfile/CreateAssociationAccountScreen';
//import FriendSellScreen from '../topbar/friends/FriendSellScreen';

import InputLocationScreen from '../topbar/friends/InputLocationScreen';
import PrivacyPolicyScreen from '../topbar/profile/PrivacyPolicyScreen';
import TermsOfServiceScreen from '../topbar/profile/TermsOfServiceScreen';
import ProRegisterMobilScreen from '../topbar/profile/proProfile/ProRegisterMobilScreen';
import ProRegisterAddressScreen from '../topbar/profile/proProfile/ProRegisterAddressScreen';
import ProRegisterEmailScreen from '../topbar/profile/proProfile/ProRegisterEmailScreen';
import UserProfileScreen from '../topbar/friends/UserProfileScreen';
//import FriendNeedScreen from 'view/screens/main/friends/FriendNeedScreen';
import AlertCircleSelectionScreen from '../topbar/alert/AlertCircleSelectionScreen';
import AlertClassOptionScreen from '../topbar/alert/AlertClassOptionScreen';
import AlertAddressScreen from '../topbar/alert/AlertAddressScreen';
import AlertAddNoteScreen from '../topbar/alert/AlertAddNoteScreen';
import AlertShareScreen from '../topbar/alert/AlertShareScreen';
import EditProfileScreen from '../topbar/profile/EditProfileScreen';
import EditProProfileScreen from '../topbar/profile/proProfile/EditProProfileScreen';
import ProProfileOverviewScreen from '../topbar/profile/proProfile/ProProfileOverviewScreen';
import ProfileHomeScreen from '../topbar/profile/ProfileHomeScreen';
import MyNeedScreen from '../topbar/profile/myNeeds/MyNeedScreen';
import EditNeedScreen from '../topbar/profile/myNeeds/EditNeedScreen';
import MabulCommonRequestDetailScreen from '../Mabul/MabulCommonRequestDetailScreen';

import MyOrganizeScreen from '../topbar/profile/myNeeds/MyOrganizeScreen';
import MyNeedsHomeScreen from '../topbar/profile/myNeeds/MyNeedsHomeScreen';
import MyCirclesHomeScreen from '../topbar/profile/myCircles/MyCirclesHomeScreen';
import CreateGroupScreen from '../topbar/profile/myCircles/CreateGroupScreen';
import ProNeedsHomeScreen from '../topbar/profile/proProfile/proNeeds/ProNeedsHomeScreen';

import MyAlertScreen from '../topbar/profile/myNeeds/MyAlertScreen';
import ProSellScreen from '../topbar/profile/proProfile/proNeeds/ProSellScreen';
import GroupDetailScreen from '../topbar/profile/myCircles/GroupDetailScreen';
import ProProfileHomeScreen from '../topbar/profile/proProfile/ProProfileHomeScreen';
import ProInformationScreen from '../topbar/profile/proProfile/ProInformationScreen';
import NameGroupScreen from '../topbar/profile/myCircles/NameGroupScreen';
import ProSettingScreen from '../topbar/profile/proProfile/ProSettingScreen';
import EditProNeedScreen from '../topbar/profile/proProfile/proNeeds/EditProNeedScreen';
import Filtre from '../Components/Filtre';
import FriendsSearchScreen from '../Components/FriendSearchScreen';
import FriendOrganizeScreen from '../ServiceScrenns/FriendOrganizeScreen';
import MabulCommonAddPhotoScreen from '../Mabul/MabulCommonAddPhotoScreen';
import MabulCommonDateSettingScreen from '../Mabul/MabulCommonDateSettingScreen';
import MabulOrganizeParticipationScreen from '../Mabul/organize/MabulOrganizeParticipationScreen';
import MabulCommonShareScreen from '../Mabul/MabulCommonShareScreen';
import MabulGiveScreen from '../Mabul/give/MabulGiveScreen';
import MabulSellScreen from '../Mabul/sell/MabulSellScreen';
import MabulSellServiceScreen from '../Mabul/sell/MabulSellServiceScreen';
import MabulSellObjectScreen from '../Mabul/sell/MabulSellObjectScreen';
import MabulSellEnvironmentScreen from '../Mabul/sell/MabulSellEnvironmentScreen';
import MabulSellPriceScreen from '../Mabul/sell/MabulSellPriceScreen';
import MabulNeedScreen from '../Mabul/need/MabulNeedScreen';
import MabulDailyNeedScreen from '../Mabul/need/MabulDailyNeedScreen';
import MabulNeedSortScreen from '../Mabul/need/MabulNeedSortScreen';
import MabulFamilyNeedScreen from '../Mabul/need/MabulFamilyNeedScreen';
import MabulCommonParticipateScreen from '../Mabul/MabulCommonParticipateScreen';
import InscriptionEmail from '../Components/InscriptionEmail';
import InscriptionPrenom from '../Components/InscriptionPrenom';
import InscriptionNom from '../Components/InscriptionNom';
import InscriptionMobile from '../Components/InscriptionMobile';
import InscriptionAdresse from '../Components/InscriptionAdresse';
import ActiverLocalisation from '../Components/ActiverLocalisation';
import ActiverLaNotif from '../Components/ActiverLaNotif';
import FriendSellScreen from '../ServiceScrenns/FriendSellScreen';
import FriendNeedScreen from '../ServiceScrenns/FriendNeedScreen';
import FriendGiveBadgeScreen from '../ServiceScrenns/FriendGiveBadgeScreen';
import ActivityMessageScreen from '../activity/ActivityMessageScreen';
import ActivityDialScreen from '../activity/ActivityDialScreen';
import MotdePasseOublie from '../Components/MotdePasseOublie';
import {useSelector} from 'react-redux';
import InscriptionMdp from '../Components/InscriptionMdp';
import auth, {firebase as fire} from '@react-native-firebase/auth';
import {firebase} from '../setup';
// import * as Firebase from 'firebase';
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';
import { addProfile } from '../redux/actions/profile';

export default () => { 
    
    return(
        <Router>
        <Scene key="root">
          <Scene key="loading"  hideNavBar component={LoadingScreen} />
          <Scene key="home" hideNavBar component={HomeScreen} />
          {/* landing page */}
          <Scene key="loginMenu" hideNavBar component={Connexion} />
          {/* Login start page  google , facebook , button for login*/}
          <Scene key="registerEmail" hideNavBar component={ConnexionEmail} />
          {/* Login with email and password  */}
          <Scene
            key="MotdePasseOublie"
            hideNavBar
            component={MotdePasseOublie}
          />
          {/* forget password  */}
          <Scene key="signupMenu" hideNavBar component={Inscription} />
          {/* signup start page  google , facebook , button for login*/}
          <Scene
            key="InscriptionEmail"
            hideNavBar
            component={InscriptionEmail}
          />
          {/* Enter Email first  */}
          <Scene
            key="InscriptionPrenom"
            hideNavBar
            component={InscriptionPrenom}
          />
          {/* Enter password  */}
          <Scene key="InscriptionMdp" hideNavBar component={InscriptionMdp} />
          {/* Enter First name  */}
          <Scene key="InscriptionNom" hideNavBar component={InscriptionNom} />
          {/* Enter family name  */}
          <Scene
            key="InscriptionMobile"
            hideNavBar
            component={InscriptionMobile}
          />
          {/* Enter mobile */}
          <Scene
            key="InscriptionAdresse"
            hideNavBar
            component={InscriptionAdresse}
          />
          {/* Enter address  */}
          <Scene
            key="ActiverLocalisation"
            hideNavBar
            component={ActiverLocalisation}
          />
          {/* active notification and localisation view */}
          <Scene key="ActiverLaNotif" hideNavBar component={ActiverLaNotif} />
          {/*Activ notification or not */}
        </Scene>
        </Router>
    )
}