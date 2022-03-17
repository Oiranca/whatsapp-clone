import React from "react";

import './inputText.scss'
export const InputText = (placeHolderProps) => {
  const { placeHolder  } = placeHolderProps;

    return <input className={"text-input"} type={"text"} placeholder={placeHolder} />;

};
