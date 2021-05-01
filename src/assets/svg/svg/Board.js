import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="WD" height="HT" viewBox="0 0 429 124">
<defs>
  <filter id="Tracé_2265" x="0" y="0" width="429" height="124" filterUnits="userSpaceOnUse">
    <feOffset dy="3" input="SourceAlpha"/>
    <feGaussianBlur stdDeviation="9" result="blur"/>
    <feFlood flood-opacity="0.078"/>
    <feComposite operator="in" in2="blur"/>
    <feComposite in="SourceGraphic"/>
  </filter>
</defs>
<g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_2265)">
  <path id="Tracé_2265-2" data-name="Tracé 2265" d="M1107.423,504.038h-89.439A25.667,25.667,0,0,0,992.4,528.832c-.007.17-.015.34-.024.511a32.5,32.5,0,0,1-64.951-1.8c0-.092,0-.184,0-.277a22.809,22.809,0,0,0-22.686-23.223H812.423a40,40,0,0,0-40,40v30h375v-30A40,40,0,0,0,1107.423,504.038Z" transform="translate(-745.42 -480.04)" fill="#fff" opacity="0.97"/>
</g>
</svg>
`;

export default Board = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}