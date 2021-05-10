
import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 30.001 32">
<g id="commerce-30x32" transform="translate(-172 -900)">
  <g id="Groupe_1688" data-name="Groupe 1688" transform="translate(-768.171 -34.019)">
    <path id="icons8-shop" d="M952.886,944.462a4.142,4.142,0,0,1-4.279,0,4.161,4.161,0,0,1-4.279,0,4.254,4.254,0,0,1-2.156.6v11.786a2.142,2.142,0,0,0,2.143,2.143h12.858V948.273H963.6v10.715h2.143a2.142,2.142,0,0,0,2.143-2.143V945.059a4.248,4.248,0,0,1-2.156-.59,4.161,4.161,0,0,1-4.28,0,4.142,4.142,0,0,1-4.279,0,4.149,4.149,0,0,1-4.286,0Zm-6.429,3.811h6.429V954.7h-6.429Z" transform="translate(0.143 0.031)" fill="#40cdde"/>
    <path id="Tracé_2485" data-name="Tracé 2485" d="M945.528,934.019a2.142,2.142,0,0,0-2.143,2.143v1.071l-3.214,4.286a2.143,2.143,0,0,0,4.286,0l2.143-4.286h3.214l-1.071,4.286a2.143,2.143,0,0,0,4.286,0v-4.286h4.286v4.286a2.143,2.143,0,0,0,4.286,0l-1.071-4.286h3.214l2.143,4.286a2.143,2.143,0,0,0,4.286,0l-3.214-4.286v-1.071a2.142,2.142,0,0,0-2.143-2.143Z" transform="translate(0 0)" fill="#40cdde" opacity="0.5"/>
  </g>
  <ellipse id="Ellipse_743" cx="15" cy="2" rx="15" ry="2" transform="translate(172 928)" fill="#40cdde" opacity="0.4"/>
</g>
</svg>
`;

export default Commerce = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}