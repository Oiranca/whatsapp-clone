import React from 'react';
import { InputNavChatWeb } from '../../molecules/InputNavChatWeb/InputNavChatWeb';
import { NavChatWeb } from '../../molecules/NavChatWeb/NavChatWeb';
import { ChatWeb } from '../../molecules/ChatWeb/ChatWeb';
import './chatView.scss';


export const ChatView = () => {
  return (
    <article className={'chat-view-container'}>
      <header>
        <NavChatWeb />
      </header>

        <ChatWeb />

      <footer>
        <InputNavChatWeb />
      </footer>
    </article>
  );
};
