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
<g id="Filtres" transform="translate(-35 -58)">
  <g transform="matrix(1, 0, 0, 1, 35, 58)" filter="url(#Rectangle_1697)">
    <rect id="Rectangle_1697-2" data-name="Rectangle 1697" width="46" height="46" rx="23" transform="translate(36 20)" fill="#fff"/>
  </g>
  <g id="filtre" transform="translate(84 93)">
    <g id="Filter" transform="translate(0 -3)">
      <path id="Filter-2" data-name="Filter" d="M12.475,15.286A3.763,3.763,0,1,1,16.237,19,3.742,3.742,0,0,1,12.475,15.286Zm1.765,0a2,2,0,1,0,2-1.972A1.987,1.987,0,0,0,14.24,15.286ZM.883,16.157a.871.871,0,1,1,0-1.742H8.117a.871.871,0,1,1,0,1.742ZM0,6.713A3.742,3.742,0,0,1,3.762,3a3.714,3.714,0,1,1,0,7.428A3.742,3.742,0,0,1,0,6.713Zm1.765,0a2,2,0,1,0,2-1.972A1.987,1.987,0,0,0,1.765,6.713Zm10.118.872a.871.871,0,1,1,0-1.742h7.235a.871.871,0,1,1,0,1.742Z" fill="#1e2d60"/>
    </g>
  </g>
</g>
</svg>
`;
export default Filtre = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}