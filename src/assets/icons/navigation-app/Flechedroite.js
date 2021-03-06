
import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `<svg id="fleche-droite-11x18" xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 11 18">
  <path id="Fill_4" data-name="Fill 4" d="M18,1.653a1.677,1.677,0,0,1-.467,1.167l-7.4,7.694a1.565,1.565,0,0,1-2.266,0L.466,2.821a1.694,1.694,0,0,1,0-2.339,1.563,1.563,0,0,1,2.262,0L9,7,15.269.486a1.561,1.561,0,0,1,2.26,0A1.669,1.669,0,0,1,18,1.653" transform="translate(0 18) rotate(-90)" fill="#bfcddb"/>
</svg>
`;
export default Flechedroite = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}

