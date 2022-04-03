import React from 'react';
import PropTypes from 'prop-types';

import './answer.scss';

export const Answer = text => {
  return (
    <article className={'answer-container'}>
      <p className={'answer-phrase'}>{text.text}</p>
    </article>
  );
};

Answer.propTypes = {
  text: PropTypes.string
};
