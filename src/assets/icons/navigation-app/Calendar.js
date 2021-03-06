import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `<svg id="Calendar-20x20" xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 18 20">
  <path id="Fill_1" data-name="Fill 1" d="M5.127,12.743A4.776,4.776,0,0,1,0,7.613V0H18V7.674c0,3.138-1.976,5.069-5.137,5.069Z" transform="translate(0 7.257)" fill="#40cdde"/>
  <path id="Fill_4" data-name="Fill 4" d="M0,5.767A15.855,15.855,0,0,1,.155,3.64,4.591,4.591,0,0,1,4.541,0h8.911a4.639,4.639,0,0,1,4.386,3.64,15.892,15.892,0,0,1,.154,2.127Z" transform="translate(0.003 1.49)" fill="#40cdde" opacity="0.4"/>
  <path id="Fill_6" data-name="Fill 6" d="M.761,4.59a.747.747,0,0,0,.761-.77V.771A.748.748,0,0,0,.761,0,.748.748,0,0,0,0,.771V3.82a.747.747,0,0,0,.761.77" transform="translate(4.544)" fill="#40cdde"/>
  <path id="Fill_9" data-name="Fill 9" d="M.761,4.59a.753.753,0,0,0,.761-.77V.771A.754.754,0,0,0,.761,0,.748.748,0,0,0,0,.771V3.82a.747.747,0,0,0,.761.77" transform="translate(11.934)" fill="#40cdde"/>
</svg>`;
export default Calendar = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}