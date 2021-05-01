
import React from 'react';
import { SvgXml } from 'react-native-svg';
const xml = `<svg id="messagerie-22x18" xmlns="http://www.w3.org/2000/svg" width="22" height="21.999" viewBox="0 0 22 21.999">
  <g id="Iconly_Light-outline_Chat" data-name="Iconly/Light-outline/Chat" transform="translate(-2 -2)">
    <g id="Chat" transform="translate(2 2)">
      <path id="Chat-2" data-name="Chat" d="M5.85,20.731l-.05-.018a.019.019,0,0,1-.011-.013l-.75-.426a.825.825,0,0,0-.3-.059.511.511,0,0,0-.124.013,19.45,19.45,0,0,1-2.388.69l-.148.018H2.03a1.23,1.23,0,0,1-.971-.39,1.513,1.513,0,0,1-.325-1.012l.022-.18A20.267,20.267,0,0,1,1.5,16.931a.582.582,0,0,0-.048-.445l-.2-.394A11.005,11.005,0,0,1,11.021,0h.043A11,11,0,1,1,5.85,20.731Zm-.188-1.857c.1.049.23.118.407.217l.464.267.007,0,.316.16A9.494,9.494,0,0,0,17,18.31l.243-.206a9.466,9.466,0,0,0-6.193-16.57l-.309,0A9.462,9.462,0,0,0,2.614,15.386l.2.388a2.138,2.138,0,0,1,.139,1.655,19.512,19.512,0,0,0-.7,2.288l.1-.4.435-.114c.314-.087.609-.176.9-.273l.46-.158a2.25,2.25,0,0,1,.595-.08A2.4,2.4,0,0,1,5.661,18.874ZM14.683,11a1.255,1.255,0,1,1,1.255,1.255A1.255,1.255,0,0,1,14.683,11ZM9.8,11a1.255,1.255,0,1,1,1.255,1.255A1.255,1.255,0,0,1,9.8,11Zm-4.88,0a1.255,1.255,0,1,1,1.255,1.255A1.255,1.255,0,0,1,4.922,11Z" transform="translate(0 0)" fill="#6a8596"/>
    </g>
  </g>
</svg>`;
export default Messagerie2 = ({width, height}) => {
  return(
      <SvgXml xml={xml.replace('WD', width).replace('HT', height)} />
  )
}