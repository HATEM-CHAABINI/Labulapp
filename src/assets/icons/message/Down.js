
import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg id="refuser-14x13" xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 14 13">
<path id="icons8-facebook_like" d="M9.226,15.174a.711.711,0,0,0,.629-.546l.388-1.689,1.9-2.08a1.369,1.369,0,0,0,.36-.924V3.559a1.39,1.39,0,0,0-1.4-1.381H5.478a1.313,1.313,0,0,0-1.2.769l-2.1,4.666A1.993,1.993,0,0,0,2,8.434v.65a1.4,1.4,0,0,0,1.4,1.381H8.3a9.1,9.1,0,0,0-.7,2.857,1.827,1.827,0,0,0,1.325,1.814A.7.7,0,0,0,9.226,15.174Zm5.724-4.709A1.043,1.043,0,0,0,16,9.429V3.213a1.05,1.05,0,0,0-2.1,0V9.429A1.043,1.043,0,0,0,14.95,10.465Z" transform="translate(-2 -2.177)" fill="#fff"/>
</svg>`;

export default Down = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}