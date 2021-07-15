
import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `
<svg id="cta" xmlns="http://www.w3.org/2000/svg" width="WD" height="HT" viewBox="0 0 WD HT">
<rect id="Rectangle_Copy_2" data-name="Rectangle Copy 2" width="50" height="50" rx="16" fill="#f0f5f7"/>
<path id="icons8-cancel" d="M31.647,28.677l6.915,6.915a2.1,2.1,0,0,1-2.969,2.969c-.323-.321-6.915-6.915-6.915-6.915l-6.915,6.915a2.1,2.1,0,0,1-2.969-2.969c.321-.323,6.915-6.915,6.915-6.915l-6.915-6.915a2.1,2.1,0,0,1,2.969-2.969c.323.321,6.915,6.915,6.915,6.915l6.915-6.915a2.1,2.1,0,0,1,2.969,2.969C38.24,22.086,31.647,28.677,31.647,28.677Z" transform="translate(-3.677 -3.677)" fill="#a0aeb8"/>
</svg>
`;
export default Usercreat = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}


// import React from 'react';
// import { SvgXml } from 'react-native-svg';
// import { em, hm } from '../../../../constants';
// const WD=50*em
// const HT=50*hm

// const xml = `
// <svg id="cta" xmlns="http://www.w3.org/2000/svg" width=`+WD+` height=`+HT+` viewBox="0 0 `+WD+` `+HT+`">
// <rect id="Rectangle_Copy_2" data-name="Rectangle Copy 2" width=`+WD+` height=`+HT+` rx="16" fill="#f0f5f7"/>
// <path id="icons8-cancel" d="M31.647,28.677l6.915,6.915a2.1,2.1,0,0,1-2.969,2.969c-.323-.321-6.915-6.915-6.915-6.915l-6.915,6.915a2.1,2.1,0,0,1-2.969-2.969c.321-.323,6.915-6.915,6.915-6.915l-6.915-6.915a2.1,2.1,0,0,1,2.969-2.969c.323.321,6.915,6.915,6.915,6.915l6.915-6.915a2.1,2.1,0,0,1,2.969,2.969C38.24,22.086,31.647,28.677,31.647,28.677Z" transform="translate(-3.677 1)" fill="#a0aeb8"/>
// </svg>
// `;
// export default Usercreat = ({width, height}) => {
//   return(
//       <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
//   )
// }

