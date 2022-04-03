import React from 'react';
import PropTypes from 'prop-types';

import './imageProfile.scss';

export const ImageProfile = srcAndAlt => {
  const { src, alt } = srcAndAlt;
  return <img className={'image-profile'} src={src} alt={alt} />;
};
ImageProfile.propTypes = {
  srcAndAlt: PropTypes.object
};
