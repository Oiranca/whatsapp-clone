import React from 'react';

import './response.scss';

export const Response = responseText => {
  return (
    <article className={'response-container'}>
        <p className={'response-phrase'}>
          {responseText.responseText}
        </p>
    </article>
  );
};
