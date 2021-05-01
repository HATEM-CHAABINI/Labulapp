import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="118" height="118" viewBox="0 0 118 90">
  <defs>
    <filter id="Rectangle_1697" x="0" y="0" width="118" height="118" filterUnits="userSpaceOnUse">
      <feOffset dy="16" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feFlood flood-color="#254d56" flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Recherche" transform="translate(11 -58)">
    <g transform="matrix(1, 0, 0, 1, -11, 58)" filter="url(#Rectangle_1697)">
      <rect id="Rectangle_1697-2" data-name="Rectangle 1697" width="46" height="46" rx="23" transform="translate(36 20)" fill="#fff"/>
    </g>
    <g id="lupe-20x20" transform="translate(38 91)">
      <path id="Search" d="M18.82,19.859l-.083-.07-3.128-3.05a9.7,9.7,0,0,1-6,2.06A9.518,9.518,0,0,1,0,9.4,9.518,9.518,0,0,1,9.611,0a9.518,9.518,0,0,1,9.612,9.4,9.25,9.25,0,0,1-2.531,6.349l3.091,3.014a.713.713,0,0,1,0,1.024.753.753,0,0,1-.964.071ZM1.48,9.4a8.052,8.052,0,0,0,8.131,7.952A8.052,8.052,0,0,0,17.743,9.4,8.052,8.052,0,0,0,9.611,1.448,8.052,8.052,0,0,0,1.48,9.4Z" fill="#1e2d60"/>
    </g>
  </g>
</svg>
`;
export default Lupe1 = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}