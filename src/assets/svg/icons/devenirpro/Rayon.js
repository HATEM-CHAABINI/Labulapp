


import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 17 24">
<g id="rayon-17x24" transform="translate(0 0)">
  <path id="Path_34175" d="M8.551,20.4h0a1.008,1.008,0,0,1-.474-.143A22.3,22.3,0,0,1,2.2,14.8,10.989,10.989,0,0,1,0,8.561,8.58,8.58,0,0,1,4.288,1.124a8.451,8.451,0,0,1,8.542.069A8.77,8.77,0,0,1,17,8.714a12.554,12.554,0,0,1-3.876,8.13,22.707,22.707,0,0,1-4.079,3.384,1.435,1.435,0,0,1-.494.173ZM8.491,5.818a2.861,2.861,0,0,0-2.039.847,2.909,2.909,0,0,0-.631,3.169,2.877,2.877,0,0,0,2.668,1.8h.02a2.843,2.843,0,0,0,2.025-.842A2.928,2.928,0,0,0,9.6,6.042,2.857,2.857,0,0,0,8.491,5.818Z" transform="translate(0 0)" fill="#40cdde"/>
  <ellipse id="Ellipse_743" cx="6.072" cy="1.2" rx="6.072" ry="1.2" transform="translate(2.429 21.6)" fill="#40cdde" opacity="0.4"/>
</g>
</svg>
`;

export default Rayon = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}