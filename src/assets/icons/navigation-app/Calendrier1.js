

import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="22.722" viewBox="0 0 21 22.722">
<g id="calendrier-20x22" transform="translate(0.5)">
  <g id="Group_1050" data-name="Group 1050" transform="translate(1132 -960)">
    <g id="Calendar" transform="translate(-1132 960)">
      <path id="Subtraction_4" data-name="Subtraction 4" d="M1159.291-792.841H1150.7a5.722,5.722,0,0,1-4.154-1.533,5.719,5.719,0,0,1-1.543-4.166V-807h20v8.527C1165-795,1162.812-792.841,1159.291-792.841Zm.274-6.672-.113.006a.771.771,0,0,0-.665.76.774.774,0,0,0,.779.768l.1-.007a.77.77,0,0,0,.665-.76.769.769,0,0,0-.769-.767Zm-4.551,0-.114.006a.771.771,0,0,0-.665.76.774.774,0,0,0,.778.768l.1-.007a.77.77,0,0,0,.665-.76.769.769,0,0,0-.77-.767Zm-4.56,0-.114.006a.771.771,0,0,0-.665.76.769.769,0,0,0,.769.768l.115-.007a.769.769,0,0,0,.664-.76.769.769,0,0,0-.769-.767Zm9.112-3.977-.113.007a.77.77,0,0,0-.665.76.774.774,0,0,0,.779.767l.1-.007a.769.769,0,0,0,.665-.76.769.769,0,0,0-.769-.768Zm-4.551,0-.114.007a.77.77,0,0,0-.665.76.774.774,0,0,0,.778.767l.1-.007a.769.769,0,0,0,.665-.76.77.77,0,0,0-.77-.768Zm-4.56,0-.114.007a.77.77,0,0,0-.665.76.769.769,0,0,0,.769.767l.115-.007a.769.769,0,0,0,.664-.76.769.769,0,0,0-.769-.768Z" transform="translate(-1145 815.063)" fill="#40cdde" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/>
      <path id="Fill_4" data-name="Fill 4" d="M0,6.408A17.617,17.617,0,0,1,.172,4.044,5.1,5.1,0,0,1,5.046,0h9.9a5.155,5.155,0,0,1,4.874,4.044,17.658,17.658,0,0,1,.171,2.363Z" transform="translate(0.003 1.655)" fill="#40cdde" opacity="0.4"/>
      <path id="Fill_6" data-name="Fill 6" d="M.845,5.1a.83.83,0,0,0,.845-.856V.857A.831.831,0,0,0,.845,0,.831.831,0,0,0,0,.857V4.244A.83.83,0,0,0,.845,5.1" transform="translate(5.049)" fill="#40cdde"/>
      <path id="Fill_9" data-name="Fill 9" d="M.845,5.1a.836.836,0,0,0,.845-.856V.857A.837.837,0,0,0,.845,0,.831.831,0,0,0,0,.857V4.244A.83.83,0,0,0,.845,5.1" transform="translate(13.26)" fill="#40cdde"/>
    </g>
  </g>
</g>
</svg>
`;
export default Calendrier1 = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}