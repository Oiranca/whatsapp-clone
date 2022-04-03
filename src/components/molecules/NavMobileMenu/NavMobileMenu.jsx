import React from "react";

import { MdPhotoCamera } from "react-icons/md";
import { TitleProfile } from "../../atoms/TitleProfile/TitleProfile";

import "./navMobileMenu.scss";

export const NavMobileMenu = () => {
  const iconsStyle = { size: "1.5rem", color: "#F0F8FFFF" };

  return (<article className={"menu-container"}>
    <section className={"icon-menu-button"}>
      <MdPhotoCamera size={iconsStyle.size} color={iconsStyle.color} />
    </section>
    <section className={"menu-mobile"}>
      <div className={"menu-mobile-link-active"}>
        <TitleProfile title={"CHATS"} />
      </div>
      <div className={"menu-mobile-link"}>
        <TitleProfile title={"STATUS"} />
      </div>
      <div className={"menu-mobile-link"}>
        <TitleProfile title={"CALLS"} />
      </div>
    </section>

  </article>);
};
