
import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 14 13">
<path id="icons8-facebook_like" d="M8.774,2.18a.711.711,0,0,0-.629.546L7.757,4.416,5.86,6.5a1.369,1.369,0,0,0-.36.924V13.8a1.39,1.39,0,0,0,1.4,1.381h5.622a1.313,1.313,0,0,0,1.2-.769l2.1-4.666A1.993,1.993,0,0,0,16,8.921v-.65a1.4,1.4,0,0,0-1.4-1.381H9.7a9.1,9.1,0,0,0,.7-2.857A1.827,1.827,0,0,0,9.075,2.218.7.7,0,0,0,8.774,2.18ZM3.05,6.889A1.043,1.043,0,0,0,2,7.925v6.216a1.05,1.05,0,0,0,2.1,0V7.925A1.043,1.043,0,0,0,3.05,6.889Z" transform="translate(-2 -2.177)" fill="#fff"/>
</svg>`;

export default Up = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}