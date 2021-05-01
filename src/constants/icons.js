import React from 'react';
import { View } from 'react-native';
import NeedServiceType from '../model/service/NeedServiceType';
import ServiceType from '../model/service/ServiceType';
import SellService from '../model/service/SellService';
import SellServiceType from '../model/service/SellServiceType';
import { ComputerIcon, BricologeIcon, WorkshpIcon, AlertRed } from '../assets/svg/icons/';
import { em, WIDTH } from '../constants/consts';
import {
  Ambianceur,
  Aperitif,
  Benevolent,
  Bricologe,
  Confidence,
  Discret,
  Dishes,
  Helpful,
  GoodNeighbor,
  GoodHost,
  HandHeart,
  Hypersociable,
  Resourceful,
  WellLiving,
  SwissKnife,
} from '../assets/svg/icons';

const iconSize = { width: 33 * em, height: 33 * em };
const feedbackIcons = [
  { id: 0, name: 'Le discret/ pas intrusif', icon: Discret(iconSize) },
  { id: 1, name: 'Le pro du bricolage', icon: Bricologe(iconSize) },
  { id: 2, name: 'Le pro des p’tits plats', icon: Dishes(iconSize) },
  { id: 3, name: 'Dingue de confiance', icon: Confidence(iconSize) },
  { id: 4, name: 'Hypersociable', icon: Hypersociable(iconSize) },
  { id: 5, name: 'Bon hôte', icon: GoodHost(iconSize) },
  { id: 6, name: 'Pro des Apèros', icon: Aperitif(iconSize) },
  { id: 7, name: 'La main sur le coeur', icon: HandHeart(iconSize) },
  { id: 8, name: 'Le débrouillard', icon: Resourceful(iconSize) },
  { id: 9, name: 'Le bon vivant', icon: WellLiving(iconSize) },
  { id: 10, name: 'Le bon voisin', icon: GoodNeighbor(iconSize) },
  { id: 11, name: 'Le serviable', icon: Helpful(iconSize) },
  { id: 12, name: 'L’ambianceur', icon: Ambianceur(iconSize) },
  { id: 13, name: 'Le couteau suisse', icon: SwissKnife(iconSize) },
  { id: 14, name: 'Le bienveillant­­­', icon: Benevolent(iconSize) },
];
const getUserBadge = (type, subType, size = 21 * em) => {
  const badgeSize = { width: size, height: size };

  let userBadge = WorkshpIcon(badgeSize);
  if (type === ServiceType.NEED) {
    if (subType === NeedServiceType.REPAIR) {
      userBadge = BricologeIcon(badgeSize);
    } else if (subType === NeedServiceType.CARPOOL) {
      userBadge = require('../assets/images/ic_sample3.png');
    } else if (subType === NeedServiceType.REPAIR_DEVICE) {
      userBadge = ComputerIcon(badgeSize);
    } else if (subType === NeedServiceType.VEGAN_FOOD) {
      userBadge = require('../assets/images/ic_sample6.png');
    }
  } else if (type === ServiceType.GIVE) {
    userBadge = (
      <View
        style={{
          backgroundColor: '#FBEAEE',
          width: 21 * em,
          height: 21 * em,
          borderRadius: 10.5 * em,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {AlertRed({ width: 11 * em, height: 9 * em })}
      </View>
    );
  } else if (type === ServiceType.SELL) {
    if (subType === SellServiceType.PLANT) {
      userBadge = require('../assets/images/sample_ic_plant.png');
    } else {
      userBadge = require('../assets/images/sample_ic_hair.png');
    }
  }
  return userBadge;
};
export { feedbackIcons, getUserBadge };
