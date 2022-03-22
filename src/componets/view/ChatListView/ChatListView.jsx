import React, { useEffect, useState } from 'react';
import { NavMobileTitle } from '../../molecules/NavMobileTitle/NavMobileTitle';
import { NavMobileMenu } from '../../molecules/NavMobileMenu/NavMobileMenu';
import { ChatList } from '../../organims/ChatList/ChatList';
import { NavWebTitle } from '../../molecules/NavWebTitle/NavWebTitle';
import { NavWebMenu } from '../../molecules/NavWebMenu/NavWebMenu';
import { SiGooglemessages } from 'react-icons/si';
import './chatListView.scss';

export const ChatListView = () => {
  const [widthWindows, setWidthWindows] = useState(innerWidth);
  const iconsStyle = { size: '1.5rem'};

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidthWindows(innerWidth);
    });
  }, []);
  return (
    <article className={'chatView-container'}>
      {widthWindows >= 600 ? (
        <section>
          <NavWebTitle />
          <NavWebMenu />
        </section>
      ) : (
        <section>
          <NavMobileTitle />
          <NavMobileMenu />
        </section>
      )}
      <ChatList />
      {widthWindows < 600 && (
        <section className={'chat-icon-container'}>
          <SiGooglemessages
            size={iconsStyle.size}
            id={'chat-icon'}
          />
        </section>
      )}
    </article>
  );
};
