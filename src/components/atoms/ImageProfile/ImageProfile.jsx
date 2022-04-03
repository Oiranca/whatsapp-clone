import React from "react";

import './imageProfile.scss'

export const ImageProfile = (imageInformation) => {
  const { src,alt } = imageInformation;
  return (<img className={'image-profile'} src={src} alt={alt} />);
};
