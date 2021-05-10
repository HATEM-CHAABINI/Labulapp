


import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 22 20">
<g id="contact-22x20" transform="translate(-895.972 -915.463)">
  <path id="icons8-chat" d="M898.172,915.463a2.206,2.206,0,0,0-2.2,2.2v11.872a.55.55,0,0,0,.939.389l2.361-2.362h9.9a2.206,2.206,0,0,0,2.2-2.2v-7.7a2.206,2.206,0,0,0-2.2-2.2Z" transform="translate(0 0)" fill="#34d9b8"/>
  <path id="Tracé_2498" data-name="Tracé 2498" d="M912.972,920.463v4.4a4.4,4.4,0,0,1-4.4,4.4h-6.6v1.1a2.206,2.206,0,0,0,2.2,2.2h9.9l2.361,2.361a.55.55,0,0,0,.939-.388V922.663a2.206,2.206,0,0,0-2.2-2.2Z" transform="translate(0.6 0.378)" fill="#34d9b8" opacity="0.5"/>
</g>
</svg>
`;

export default Contact = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}