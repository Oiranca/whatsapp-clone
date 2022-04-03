import React from 'react';
import PropTypes from 'prop-types';

import './response.scss';

export const Response = text => {
  return (
    <article className={'response-container'}>
      <p className={'response-phrase'}>{text.text}</p>
    </article>
  );
};

Response.propTypes = {
  text: PropTypes.string
};
