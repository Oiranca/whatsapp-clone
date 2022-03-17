import React from "react";
import './TextPreview.scss'

export const TextPreview = (textProp) => {
  const {text}=textProp;
  return <p className={"text-preview"}>{text}</p>;
};
