import React from "react";

import "./dateText.scss";

export const DateText = (textDate) => {
  const { meridiem = "", date } = textDate;

  if (meridiem !== "") {
    return (<section className={"container-date-text"}>
      <p>{date.toLowerCase()}</p>
      <p>{meridiem.toLowerCase()}</p>
    </section>);
  } else {
    return (
      <p className={"date-style"}>{date.toLowerCase()}</p>
    );
  }
};
