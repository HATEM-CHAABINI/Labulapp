
import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `<svg id="carte-active-22x22" xmlns="http://www.w3.org/2000/svg" width="21.998" height="22" viewBox="0 0 21.998 22">
  <path id="Path_53" data-name="Path 53" d="M268.264-125.748a1.092,1.092,0,0,0-.649-1.005,6.184,6.184,0,0,0-2.212-.589,3.589,3.589,0,0,0-3.6,3.56v12.53a4.711,4.711,0,0,0,2.945,4.377s1.061.42,2.022.793a1.1,1.1,0,0,0,1.5-1.027Z" transform="translate(-261.802 127.343)" fill="#40cdde" opacity="0.4"/>
  <path id="Path_54" data-name="Path 54" d="M279.432-125.866s-1.361-.543-2.368-.937a.768.768,0,0,0-1.047.719v19.092a1.1,1.1,0,0,0,.678,1.018l.768.319h.008a3.575,3.575,0,0,0,1.339.263,3.567,3.567,0,0,0,3.569-3.567v-12.525A4.712,4.712,0,0,0,279.432-125.866Z" transform="translate(-260.38 127.392)" fill="#40cdde" opacity="0.4"/>
  <path id="Path_55" data-name="Path 55" d="M274.143-127.2c-1.114.21-2.982.581-4.082.8a1.1,1.1,0,0,0-.884,1.08V-106.7a1.1,1.1,0,0,0,1.306,1.083c1.232-.239,3.019-.595,3.951-.781a.768.768,0,0,0,.617-.755v-19.292A.767.767,0,0,0,274.143-127.2Z" transform="translate(-261.064 127.356)" fill="#40cdde"/>
</svg>`;
export default Carte = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}