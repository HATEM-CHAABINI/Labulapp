import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `<svg id="lieu-16x22" xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 16 22">
<path id="Path_34175" d="M8.048,18.7h0a.968.968,0,0,1-.446-.131,20.787,20.787,0,0,1-5.53-5A9.909,9.909,0,0,1,0,7.848,7.83,7.83,0,0,1,4.036,1.031a8.138,8.138,0,0,1,8.04.063,8.117,8.117,0,0,1,2.886,2.941A7.92,7.92,0,0,1,16,7.987a11.383,11.383,0,0,1-3.648,7.453,21.256,21.256,0,0,1-3.839,3.1,1.375,1.375,0,0,1-.465.158ZM7.992,5.333a2.729,2.729,0,0,0-1.919.776,2.616,2.616,0,0,0-.594,2.9A2.709,2.709,0,0,0,7.99,10.661h.019a2.712,2.712,0,0,0,1.906-.772,2.648,2.648,0,0,0-.877-4.351A2.751,2.751,0,0,0,7.992,5.333Z" fill="#40cdde"/>
<ellipse id="Ellipse_743" cx="5.714" cy="1.1" rx="5.714" ry="1.1" transform="translate(2.286 19.8)" fill="#40cdde" opacity="0.4"/>
</svg>`;
export default Lieu = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}