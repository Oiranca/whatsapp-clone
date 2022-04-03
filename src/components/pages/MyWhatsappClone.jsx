import React from 'react';
import { ListAndChat } from '../templates/ListAndChat/ListAndChat';

import './myWhatsappClone.scss';

export const MyWhatsappClone = () => {
  return (
    <div className={'container-page'}>
      <header className={'header'} />
      <ListAndChat />
    </div>
  );
};
