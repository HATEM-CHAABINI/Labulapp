import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `<svg id="inscrire-20x20" xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 20 20">
<path id="Fill_1" data-name="Fill 1" d="M7.446,0H1.119A1.13,1.13,0,0,0,0,1.137,1.129,1.129,0,0,0,1.119,2.274H7.446A1.129,1.129,0,0,0,8.566,1.137,1.13,1.13,0,0,0,7.446,0" transform="translate(11.434 17.726)" fill="#40cdde" opacity="0.4"/>
<path id="Fill_3" data-name="Fill 3" d="M8.121.074l6,4.845a.344.344,0,0,1,.056.477L7.065,14.657a2.333,2.333,0,0,1-1.811.908l-3.88.048a.442.442,0,0,1-.435-.346L.058,11.432A2.375,2.375,0,0,1,.5,9.437L7.647.131A.332.332,0,0,1,8.121.074" transform="translate(0 4.264)" fill="#40cdde"/>
<path id="Fill_5" data-name="Fill 5" d="M7.752,6.295,6.6,7.738a.331.331,0,0,1-.47.054c-1.405-1.137-5-4.055-6-4.864a.343.343,0,0,1-.048-.48L1.191,1.063a2.858,2.858,0,0,1,4.2-.287l1.634,1.3a3.407,3.407,0,0,1,1.27,1.947,2.674,2.674,0,0,1-.541,2.269" transform="translate(9.049)" fill="#40cdde" opacity="0.4"/>
</svg>
`;
export default Inscrire = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}

