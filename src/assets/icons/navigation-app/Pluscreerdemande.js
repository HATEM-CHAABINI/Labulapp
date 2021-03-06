
import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `<svg id="plus-creer-demande-46x46" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
<g id="Group_437" data-name="Group 437" transform="translate(-162.5 -687.5)">
  <circle id="Oval" cx="23" cy="23" r="23" transform="translate(162.5 687.5)" fill="#40cdde"/>
</g>
<path id="Path_34201" d="M18.3,11.771H11.874v6.372a1.874,1.874,0,0,1-3.748,0V11.771H1.7a1.876,1.876,0,0,1,0-3.735H8.106V1.684a1.9,1.9,0,0,1,3.768,0V8.036H18.3a1.876,1.876,0,0,1,0,3.735Z" transform="translate(13 13)" fill="#fff"/>
</svg>
`;
export default Pluscreerdemande = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}