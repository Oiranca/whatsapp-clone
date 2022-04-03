import React from 'react';
import PropTypes from 'prop-types';

import './TextPreview.scss';

export const TextPreview = textPreview => {
  return <p className={'text-preview'}>{textPreview.text}</p>;
};

TextPreview.propTypes = {
  textPreview: PropTypes.string
};
