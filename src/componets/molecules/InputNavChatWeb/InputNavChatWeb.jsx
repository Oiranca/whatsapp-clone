import React from "react";
import { InputText } from "../../atoms/InputText/InputText";

import { BiHappy } from "react-icons/bi";
import { BsMicFill } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import './inputNavChatWeb.scss'


export const InputNavChatWeb = () => {
  const iconsStyle = { size: "1.5rem", color: "#3b4a54" };

  return(
    <article className={'chat-web-container'}>
      <BiHappy size={iconsStyle.size} color={iconsStyle.color}/>
      <MdAttachFile size={"2rem"} color={iconsStyle.color} id={'attach-icon'}/>
      <InputText placeHolder={'Type a message'} />
      <BsMicFill size={iconsStyle.size} color={iconsStyle.color}/>
    </article>
  )
}
