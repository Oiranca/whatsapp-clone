import React from 'react';
import { ChatList } from '../../organisms/ChatList/ChatList';
import { NavWebTitle } from '../../molecules/NavWebTitle/NavWebTitle';
import { NavWebMenu } from '../../molecules/NavWebMenu/NavWebMenu';
import './chatListView.scss';

export const ChatListView = () => {
  return (
    <article className={'list-view-container'}>
      <section className={'nav-menu'}>
        <NavWebTitle />
        <NavWebMenu />
      </section>
      <ChatList />
    </article>
  );
};
