
import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 22 22">
<g id="bon-plan-22x22" transform="translate(-32 -791)">
  <g id="Iconly_Bold_Graph" data-name="Iconly/Bold/Graph" transform="translate(30 789)">
    <g id="Graph" transform="translate(2 2)">
      <path id="Graph-2" data-name="Graph" d="M18.1,11.954l-7.322.469a1.127,1.127,0,0,1-1.106-.694,2.065,2.065,0,0,1-.11-.694C9.415,8.768,9.256,6.5,9.106,4.194a1.231,1.231,0,0,0-.139-.283,1.212,1.212,0,0,0-1.315-.655A9.564,9.564,0,0,0,0,12.53a6.551,6.551,0,0,0,.07,1.085A9.036,9.036,0,0,0,1.2,17.065a9.73,9.73,0,0,0,10.555,4.713,9.538,9.538,0,0,0,7.566-8.622,1.151,1.151,0,0,0-.333-.828,1.2,1.2,0,0,0-.832-.354h0Z" transform="translate(0 0)" fill="#fdc641"/>
    </g>
  </g>
  <path id="Graph_-_Bd" data-name="Graph - Bd" d="M.936,0a.907.907,0,0,0-.646.23A.873.873,0,0,0,0,.841V.978l.568,8.3A.969.969,0,0,0,.891,10a1.008,1.008,0,0,0,.763.253h0L10.1,9.7a.893.893,0,0,0,.61-.3.859.859,0,0,0,.217-.633h0a.269.269,0,0,0,0-.088A10.363,10.363,0,0,0,.936,0Z" transform="translate(43.069 791)" fill="#fdc641" opacity="0.5"/>
</g>
</svg>
`;

export default Bonplan = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}