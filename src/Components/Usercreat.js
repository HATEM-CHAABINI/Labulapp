import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `<svg id="icon-profile-20x25" xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 20 25">
<path id="Fill_1" data-name="Fill 1" d="M10,0C4.607,0,0,.85,0,4.25S4.578,8.531,10,8.531c5.393,0,10-.849,10-4.25S15.423,0,10,0" transform="translate(0 16.469)" fill="#40cdde"/>
<path id="Fill_4" data-name="Fill 4" d="M6.617,13.23A6.615,6.615,0,1,0,0,6.615,6.593,6.593,0,0,0,6.617,13.23" transform="translate(3.383)" fill="#40cdde" opacity="0.4"/>
</svg>
`;
export default Usercreat = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}

