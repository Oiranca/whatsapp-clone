import React from 'react';
import { ChatListView } from '../../views/ChatListView/ChatListView';
import { ChatView } from '../../views/ChatView/ChatView';

import './listAndChat.scss';


export const ListAndChat = () => {
  return (
    <div className={'list-and-chat-container'}>
      <ChatListView />
      <ChatView />
    </div>
  );
};
