import React from 'react';
import PropTypes from 'prop-types';

import './inputText.scss';

export const InputText = placeHolderText => {
  const { placeHolder } = placeHolderText;

  return (
    <input
      className={'text-input'}
      type={'text'}
      placeholder={placeHolder}
      disabled={true}
    />
  );
};

InputText.propTypes = {
  placeHolderText: PropTypes.string
};
