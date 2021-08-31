

import React from 'react';
import { SvgXml } from 'react-native-svg';


export default Count = ({ width, height, count }) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 65 28">
  <g id="Time_Circle" data-name="Time Circle" transform="translate(40)">
    <rect id="Rectangle_1880" data-name="Rectangle 1880" width="65" height="28" rx="14" transform="translate(-40)" fill="#f9547b" opacity="0.2"/>
    <g id="Groupe_1646" data-name="Groupe 1646">
      <path id="Fill_1" data-name="Fill 1" d="M22,11A11,11,0,1,1,11,0,11,11,0,0,1,22,11" transform="translate(0 3)" fill="#f9547b"/>
      <path id="Fill_4" data-name="Fill 4" d="M6.545,12.445a1.058,1.058,0,0,1-.538-.147L.511,9.019A1.055,1.055,0,0,1,0,8.116V1.05a1.05,1.05,0,0,1,2.1,0V7.519l4.984,2.972a1.051,1.051,0,0,1-.539,1.953" transform="translate(9.458 6.896)" fill="#fff"/>
    </g>
    <text id="Dr._Melvin_send_you" data-name="Dr. Melvin send you" transform="translate(-5 20)" fill="#f9547b" font-size="15" font-family="HelveticaNeue-Medium, Helvetica Neue" font-weight="500"><tspan x="-24.465" y="0">${count!==undefined?count:30}s</tspan></text>
  </g>
</svg>
`;

  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}