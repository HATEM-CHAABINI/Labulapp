import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
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
import ConnexionEmail from '../Components/ConnexionEmail'
//import RegisterNameScreen from 'view/screens/account/RegisterNameScreen';
//import RegisterFamilyNameScreen from 'view/screens/account/RegisterFamilyNameScreen';
//import RegisterMobileScreen from 'view/screens/account/RegisterMobileScreen';
//import RegisterAddressScreen from 'view/screens/account/RegisterAddressScreen';
//import ActivateLocationScreen from 'view/screens/account/ActivateLocationScreen';
//import ActivateNotificationScreen from 'view/screens/account/ActivateNotificationScreen';
//import MabulHomeScreen from 'view/screens/main/mabul/MabulHomeScreen';
import MabulOrganizeScreen from '../Mabul/organize/MabulOrganizeScreen';

//import MabulSearchScreen from 'view/screens/main/mabul/search/MabulSearchScreen';
/*import ProfileOverviewScreen from 'view/screens/main/profile/ProfileOverviewScreen';
import FriendsFilterScreen from 'view/screens/main/friends/FriendsFilterScreen';
import MyInformationScreen from 'view/screens/main/profile/MyInformationScreen';
import MySettingScreen from 'view/screens/main/profile/MySettingScreen';
import PremiumSubscriptionScreen from 'view/screens/main/profile/PremiumSubscriptionScreen';
import PremiumPurchasedScreen from 'view/screens/main/profile/PremiumPurchasedScreen';
import CreateAccountMenuScreen from 'view/screens/main/profile/proProfile/CreateAccountMenuScreen';
import CreateProfessionalAccountScreen from 'view/screens/main/profile/proProfile/CreateProfessionalAccountScreen';
import CreateCommunityAccountScreen from 'view/screens/main/profile/proProfile/CreateCommunityAccountScreen';
import CreateAssociationAccountScreen from 'view/screens/main/profile/proProfile/CreateAssociationAccountScreen';
import FriendSellScreen from 'view/screens/main/friends/FriendSellScreen';

import InputLocationScreen from 'view/screens/main/friends/InputLocationScreen';
import PrivacyPolicyScreen from 'view/screens/main/profile/PrivacyPolicyScreen';
import TermsOfServiceScreen from 'view/screens/main/profile/TermsOfServiceScreen';
import ProRegisterMobilScreen from 'view/screens/main/profile/proProfile/ProRegisterMobilScreen';
import ProRegisterAddressScreen from 'view/screens/main/profile/proProfile/ProRegisterAddressScreen';
import ProRegisterEmailScreen from 'view/screens/main/profile/proProfile/ProRegisterEmailScreen';
import UserProfileScreen from 'view/screens/main/friends/UserProfileScreen';
import FriendNeedScreen from 'view/screens/main/friends/FriendNeedScreen';
import AlertCircleSelectionScreen from 'view/screens/main/alert/AlertCircleSelectionScreen';
import AlertClassOptionScreen from 'view/screens/main/alert/AlertClassOptionScreen';
import AlertAddressScreen from 'view/screens/main/alert/AlertAddressScreen';
import AlertAddNoteScreen from 'view/screens/main/alert/AlertAddNoteScreen';
import AlertShareScreen from 'view/screens/main/alert/AlertShareScreen';*/
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
class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          {/* <Scene key="loading" hideNavBar component={LoadingScreen} /> */}
          <Scene key="home" hideNavBar component={HomeScreen} />

          <Scene key="myNeed" hideNavBar component={MyNeedScreen} />
          <Scene key="myAlert" hideNavBar component={MyAlertScreen} />
          <Scene key="proSell" hideNavBar component={ProSellScreen} />
          <Scene key="groupDetail" hideNavBar component={GroupDetailScreen} />

          <Scene key="myOrganize" hideNavBar component={MyOrganizeScreen} />

          <Scene key="editNeed" hideNavBar component={EditNeedScreen} />

         
          {/* <Scene key="loginMenu" hideNavBar component={LoginMenuScreen} /> */}
          <Scene key="loginMenu" hideNavBar component={Connexion} />

          {/* <Scene key="signupMenu" hideNavBar component={SignupMenuScreen} /> */}
          <Scene key="signupMenu" hideNavBar component={Inscription} />

          <Scene key="main" hideNavBar component={MainScreen} />
          {/* <Scene key="login" hideNavBar component={LoginScreen} /> */}
          {/* <Scene key="forgotPassword" hideNavBar component={ForgotPasswordScreen} /> */}

          {/* <Scene key="registerEmail" hideNavBar component={RegisterEmailScreen} /> */}
          <Scene key="registerEmail" hideNavBar component={ConnexionEmail} />
          <Scene key="mabulOrganize" hideNavBar component={MabulOrganizeScreen} />
          <Scene key="mabulCommonRequestDetail" hideNavBar component={MabulCommonRequestDetailScreen} />
          {/* <Scene key="registerName" hideNavBar component={RegisterNameScreen} />
          <Scene key="registerFamilyName" hideNavBar component={RegisterFamilyNameScreen} />
          <Scene key="registerMobile" hideNavBar component={RegisterMobileScreen} />
          <Scene key="registerAddress" hideNavBar component={RegisterAddressScreen} />
          <Scene key="activateLocation" hideNavBar component={ActivateLocationScreen} />
          <Scene key="activateNotification" hideNavBar component={ActivateNotificationScreen} />

          <Scene key="friendsSearch" hideNavBar component={FriendsSearchScreen} />
          <Scene key="friendsFilter" hideNavBar component={FriendsFilterScreen} />
          <Scene key="userProfile" hideNavBar component={UserProfileScreen} />
          <Scene key="inputLocation" hideNavBar component={InputLocationScreen} />

          

          <Scene key="alertCircles" hideNavBar component={AlertCircleSelectionScreen} />
          <Scene key="alertClass" hideNavBar component={AlertClassOptionScreen} />
          <Scene key="alertAddress" hideNavBar component={AlertAddressScreen} />
          <Scene key="alertAddNote" hideNavBar component={AlertAddNoteScreen} />
          <Scene key="alertShare" hideNavBar component={AlertShareScreen} />



          
          <Scene key="mabulSearch" hideNavBar component={MabulSearchScreen} />


          <Scene key="profileOverview" hideNavBar component={ProfileOverviewScreen} />
          <Scene key="myInformation" hideNavBar component={MyInformationScreen} />
          <Scene key="editProfile" hideNavBar component={EditProfileScreen} />

          <Scene key="createAccountMenu" hideNavBar component={CreateAccountMenuScreen} />
          <Scene key="createProfessionalAccount" hideNavBar component={CreateProfessionalAccountScreen} />
          <Scene key="createAssociationAccount" hideNavBar component={CreateAssociationAccountScreen} />
          <Scene key="createCommunityAccount" hideNavBar component={CreateCommunityAccountScreen} />
          <Scene key="proRegisterMobile" hideNavBar component={ProRegisterMobilScreen} />
          <Scene key="proRegisterAddress" hideNavBar component={ProRegisterAddressScreen} />
          <Scene key="proRegisterEmail" hideNavBar component={ProRegisterEmailScreen} /> */}
          <Scene key="proProfileHome" hideNavBar component={ProProfileHomeScreen} />
          <Scene key="profileHome" hideNavBar component={ProfileHomeScreen} />
          <Scene key="proNeedsHome" hideNavBar component={ProNeedsHomeScreen} />
          <Scene key="editProNeed" hideNavBar component={EditProNeedScreen} />

          <Scene key="proInformation" hideNavBar component={ProInformationScreen} />
          <Scene key="proSetting" hideNavBar component={ProSettingScreen} />

          <Scene key="editProProfile" hideNavBar component={EditProProfileScreen} />
          <Scene key="proProfileOverview" hideNavBar component={ProProfileOverviewScreen} />
          <Scene key="mabulCommonShare" hideNavBar component={MabulCommonShareScreen} />

          {/* <Scene key="mySetting" hideNavBar component={MySettingScreen} />
          <Scene key="premiumSubscription" hideNavBar component={PremiumSubscriptionScreen} />
          <Scene key="premiumPurchased" hideNavBar component={PremiumPurchasedScreen} />
          <Scene key="mabulHome" hideNavBar component={MabulHomeScreen} /> */}
          <Scene key="myNeedsHome" hideNavBar component={MyNeedsHomeScreen} />

          <Scene key="myCirclesHome" hideNavBar component={MyCirclesHomeScreen} />
          <Scene key="createGroup" hideNavBar component={CreateGroupScreen} />
          <Scene key="nameGroup" hideNavBar component={NameGroupScreen} />
          <Scene key="Filtre" hideNavBar component={Filtre} />
          <Scene key="friendsSearch" hideNavBar component={FriendsSearchScreen} />
          <Scene key="friendOrganize" hideNavBar component={FriendOrganizeScreen} />
          <Scene key="mabulCommonAddPhoto" hideNavBar component={MabulCommonAddPhotoScreen} />
          <Scene key="mabulCommonDateSetting" hideNavBar component={MabulCommonDateSettingScreen} />
          <Scene key="mabulOrganizeParticipation" hideNavBar component={MabulOrganizeParticipationScreen} />
          <Scene key="mabulGive" hideNavBar component={MabulGiveScreen} />
          <Scene key="mabulSell" hideNavBar component={MabulSellScreen} />
          <Scene key="mabulSellService" hideNavBar component={MabulSellServiceScreen} />
          <Scene key="mabulSellObject" hideNavBar component={MabulSellObjectScreen} />
          <Scene key="mabulSellEnvironment" hideNavBar component={MabulSellEnvironmentScreen} />
          <Scene key="mabulSellPrice" hideNavBar component={MabulSellPriceScreen} />
          <Scene key="mabulNeed" hideNavBar component={MabulNeedScreen} />
          <Scene key="mabulDailyNeed" hideNavBar component={MabulDailyNeedScreen} />
          <Scene key="mabulNeedSort" hideNavBar component={MabulNeedSortScreen} />
          <Scene key="mabulFamilyNeed" hideNavBar component={MabulFamilyNeedScreen} />
          <Scene key="mabulCommonParticipate" hideNavBar component={MabulCommonParticipateScreen} />
          <Scene key="InscriptionEmail" hideNavBar component={InscriptionEmail} />
          <Scene key="InscriptionPrenom" hideNavBar component={InscriptionPrenom} />
          <Scene key="InscriptionNom" hideNavBar component={InscriptionNom} />
          <Scene key="InscriptionMobile" hideNavBar component={InscriptionMobile} />
          <Scene key="InscriptionAdresse" hideNavBar component={InscriptionAdresse} />
          <Scene key="ActiverLocalisation" hideNavBar component={ActiverLocalisation} />
          <Scene key="ActiverLaNotif" hideNavBar component={ActiverLaNotif} />
 <Scene key="friendSell" hideNavBar component={FriendSellScreen} />
          <Scene key="friendNeed" hideNavBar component={FriendNeedScreen} />
           <Scene key="friendGiveBadge" hideNavBar component={FriendGiveBadgeScreen} />
           <Scene key="activityMessage" hideNavBar component={ActivityMessageScreen} />
          <Scene key="activityDial" hideNavBar component={ActivityDialScreen} />

          {/* <Scene key="privacyPolicy" hideNavBar component={PrivacyPolicyScreen} />
          <Scene key="termsOfService" hideNavBar component={TermsOfServiceScreen} /> */}
        </Scene>
      </Router>
    );
  }
}

export default Routes;
