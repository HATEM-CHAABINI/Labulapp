import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 22 21">
<path id="visibilite-22x21" d="M13.057,19.76l5.5,3.315a1.145,1.145,0,0,0,1.707-1.239L18.8,15.588l4.858-4.2a1.143,1.143,0,0,0-.653-2l-6.395-.542-2.5-5.9A1.146,1.146,0,0,0,12,2.94l-2.5,5.9-6.395.542a1.143,1.143,0,0,0-.653,2l4.858,4.2L5.853,21.836A1.145,1.145,0,0,0,7.56,23.075Z" transform="translate(-2.057 -2.243)" fill="#fdc641"/>
</svg>
`;

export default Visibilite = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}