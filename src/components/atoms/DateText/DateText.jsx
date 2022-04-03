import React from 'react';
import PropTypes from 'prop-types';

import './dateText.scss';

export const DateText = text => {
  const { meridiem = '', date } = text;

  if (meridiem !== '') {
    return (
      <section className={'container-date-text'}>
        <p>{`${date.toLowerCase()} ${meridiem.toLowerCase()}`}</p>
      </section>
    );
  } else {
    return <p className={'date-style'}>{date.toLowerCase()}</p>;
  }
};
DateText.propTypes = {
  text: PropTypes.object
};
