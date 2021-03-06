import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `<svg id="fleche-gauche-20x18" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
<g id="Arrow_-_Down" data-name="Arrow - Down" transform="translate(20.001 0) rotate(90)">
  <path id="Arrow_-_Down-2" data-name="Arrow - Down" d="M8.91,20H8.9a1.014,1.014,0,0,1-.751-.435L.291,11.695a.994.994,0,0,1,1.3-1.5l.112.1L8,16.6V.909A.958.958,0,0,1,9,0a.973.973,0,0,1,.991.786L10,.909V16.595l6.295-6.3a1,1,0,0,1,1.508,1.291l-.1.112L9.872,19.541A1.016,1.016,0,0,1,9.048,20H9Q8.955,20,8.91,20Z" transform="translate(0 0.001)" fill="#1e2d60"/>
</g>
</svg>`;
export default Fleche = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}