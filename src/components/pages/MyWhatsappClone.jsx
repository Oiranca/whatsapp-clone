import React from 'react';

import './myWhatsappClone.scss';
import { ListAndChat } from '../templates/ListAndChat/ListAndChat';

export const MyWhatsappClone = () => {
  return (
    <div className={'container-page'}>
      <header className={'header'} />
      <ListAndChat />
    </div>
  );
};
