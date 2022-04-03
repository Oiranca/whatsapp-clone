import React from 'react';
import PropTypes from 'prop-types';

import './titleProFile.scss';

export const TitleProfile = title => {
  return <h3 className={'title-profile'}>{title.title}</h3>;
};

TitleProfile.propTypes = {
  title: PropTypes.string
};
