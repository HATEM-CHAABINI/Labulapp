import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `<svg id="type-demande-20x20" xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 20 20">
<path id="Fill_1" data-name="Fill 1" d="M2.539,0H5.924A2.549,2.549,0,0,1,8.463,2.56V5.975a2.549,2.549,0,0,1-2.539,2.56H2.539A2.549,2.549,0,0,1,0,5.975V2.56A2.549,2.549,0,0,1,2.539,0" transform="translate(11.537)" fill="#40cdde" opacity="0.4"/>
<path id="Combined_Shape" data-name="Combined Shape" d="M14.075,20a2.549,2.549,0,0,1-2.538-2.56V14.026a2.549,2.549,0,0,1,2.538-2.561h3.387A2.549,2.549,0,0,1,20,14.026V17.44A2.549,2.549,0,0,1,17.462,20ZM2.539,20A2.55,2.55,0,0,1,0,17.44V14.026a2.55,2.55,0,0,1,2.539-2.561H5.925a2.549,2.549,0,0,1,2.538,2.561V17.44A2.549,2.549,0,0,1,5.925,20Zm0-11.465A2.549,2.549,0,0,1,0,5.974V2.56A2.549,2.549,0,0,1,2.539,0H5.925A2.548,2.548,0,0,1,8.463,2.56V5.974A2.549,2.549,0,0,1,5.925,8.535Z" fill="#40cdde"/>
</svg>
`;
export default Typedemande = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}

