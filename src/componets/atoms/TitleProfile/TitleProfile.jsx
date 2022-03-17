import React from "react";
import "./titleProFile.scss";

export const TitleProfile = (textProfile) => {
  const { title } = textProfile;
  return (<h3 className={'title-profile'}>{title}</h3>);
};
