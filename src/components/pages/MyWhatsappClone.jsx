import React from 'react';
import { ListAndChat } from '../templates/ListAndChat/ListAndChat';
import { useWindowWidth } from '../../method/resize';

import './myWhatsappClone.scss';
import { ChatMobileView } from '../views/ChatMobileView/ChatMobileView';

console.log(window.innerWidth);
export const MyWhatsappClone = () => {
  return (
    <div className={'container-page'}>
      <header className={'header'} />
      {useWindowWidth() >= 960 ? <ListAndChat /> : <ChatMobileView />}
    </div>
  );
};
