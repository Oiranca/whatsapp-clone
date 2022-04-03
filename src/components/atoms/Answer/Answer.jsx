import React from 'react';

import './answer.scss';

export const Answer = answerText => {
  return (
    <article className={'answer-container'}>
      <p className={'answer-phrase'}>{answerText.answerText}</p>
    </article>
  );
};
