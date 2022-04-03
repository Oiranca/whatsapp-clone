import React from 'react';
import { ListAndChat } from '../templates/ListAndChat/ListAndChat';
import { useWindowWidth } from '../../method/resize';
import { ChatMobileView } from '../views/ChatMobileView/ChatMobileView';
import './myWhatsappClone.scss';

export const MyWhatsappClone = () => {
  return (
    <div className={'container-page'}>
      <header className={'header'} />
      {useWindowWidth() >= 960 ? <ListAndChat /> : <ChatMobileView />}
    </div>
  );
};
