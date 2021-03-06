import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `<svg id="google-icon-18x18" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <path id="Path_40" data-name="Path 40" d="M21.825,11.237H21.1V11.2H13v3.6h5.086a5.4,5.4,0,1,1-1.5-5.832l2.546-2.546A8.991,8.991,0,1,0,22,13,9.061,9.061,0,0,0,21.825,11.237Z" transform="translate(-4 -4)" fill="#ffc107"/>
  <path id="Path_41" data-name="Path 41" d="M6.306,8.811l2.957,2.169a5.389,5.389,0,0,1,8.588-2.012L20.4,6.422A8.982,8.982,0,0,0,6.306,8.811Z" transform="translate(-5.268 -4)" fill="#ff3d00"/>
  <path id="Path_42" data-name="Path 42" d="M14.207,35.23a8.958,8.958,0,0,0,6.034-2.336l-2.785-2.357A5.386,5.386,0,0,1,9.13,28.054L6.2,30.315A8.993,8.993,0,0,0,14.207,35.23Z" transform="translate(-5.207 -17.23)" fill="#4caf50"/>
  <path id="Path_43" data-name="Path 43" d="M32.825,20.037H32.1V20H24v3.6h5.086a5.418,5.418,0,0,1-1.839,2.507h0l2.785,2.357A8.706,8.706,0,0,0,33,21.8,9.061,9.061,0,0,0,32.825,20.037Z" transform="translate(-15 -12.8)" fill="#1976d2"/>
</svg>
`;
export default Usercreat = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}

