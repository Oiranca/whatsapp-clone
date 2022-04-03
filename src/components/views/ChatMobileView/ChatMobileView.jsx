import React from 'react';
import { NavMobileTitle } from '../../molecules/NavMobileTitle/NavMobileTitle';
import { NavMobileMenu } from '../../molecules/NavMobileMenu/NavMobileMenu';
import { ChatList } from '../../organisms/ChatList/ChatList';
import { SiGooglemessages } from 'react-icons/si';
import './chatMobileView.scss';

export const ChatMobileView = () => {
  const iconsStyle = { size: '1.5rem' };

  return (
    <article className={'list-mobile-container'}>
      <section>
        <NavMobileTitle />
        <NavMobileMenu />
      </section>

      <ChatList />

      <section className={'chat-icon-container'}>
        <SiGooglemessages size={iconsStyle.size} id={'chat-icon'} />
      </section>
    </article>
  );
};
