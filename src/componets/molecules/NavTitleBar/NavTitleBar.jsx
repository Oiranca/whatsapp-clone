import React from "react";

import "./navTitleBar.scss";
import { TitleProfile } from "../../atoms/TitleProfile/TitleProfile";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

const iconsStyle = { size: "1.5rem", color: "#F0F8FFFF" };

export const NavTitleBar = () => {
  return (<article className={"nav-container"}>
    <TitleProfile title={"Whatsapp"} />
    <section className={"nav-bar-button"}>
      <AiOutlineSearch size={iconsStyle.size} color={iconsStyle.color} />
      <BsThreeDotsVertical size={iconsStyle.size} color={iconsStyle.color} />
    </section>
  </article>);
};
