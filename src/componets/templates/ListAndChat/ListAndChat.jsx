import React from 'react';

import './listAndChat.scss';
import { ChatListView } from '../../views/ChatListView/ChatListView';
import { ChatView } from '../../views/ChatView/ChatView';

export const ListAndChat = () => {
  return (
    <div className={'list-and-chat-container'}>
      <ChatListView />
      <ChatView />
    </div>
  );
};
