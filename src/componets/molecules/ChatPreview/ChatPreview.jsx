import React from "react";
import { ImageProfile } from "../../atoms/ImageProfile/ImageProfile";
import { TitleProfile } from "../../atoms/TitleProfile/TitleProfile";
import { TextPreview } from "../../atoms/TextPreview/TextPreview";
import { DateText } from "../../atoms/DateText/DateText";

import "./chatPreview.scss";

export const ChatPreview = (chatPreviewProps) => {
  const { src, alt, title, text, date, meridiem } = chatPreviewProps;


  return (<article className={"container-chat-menu"}>
    <ImageProfile src={src} alt={alt} />
    <section className={"title-and-textPreview"}>
      <TitleProfile title={title} />
      <TextPreview text={text} />
    </section>
    <DateText date={date} meridiem={meridiem} />
  </article>);
};
