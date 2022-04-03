import React from 'react';
import { ImageProfile } from '../../atoms/ImageProfile/ImageProfile';
import { users } from '../../../mock/data/userDataMock';
import { TitleProfile } from '../../atoms/TitleProfile/TitleProfile';
import { TextPreview } from '../../atoms/TextPreview/TextPreview';

import { AiOutlineSearch } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

import './navChatWeb.scss';

export const NavChatWeb = () => {
  const iconsStyle = { size: '1.5rem', color: ' #667781' };
  return (
    <article className={'nav-chat-web'}>
      <section className={'profile-web-chat'}>
        <ImageProfile src={users[0].photo} alt={'Profile Photo'} />
        <section className={'title-chat-web'}>
          <TitleProfile title={users[0].name} />
          <TextPreview text={'online'} />
        </section>
      </section>

      <section className={'icon-chat-web'}>
        <AiOutlineSearch size={iconsStyle.size} color={iconsStyle.color} />
        <BsThreeDotsVertical size={iconsStyle.size} color={iconsStyle.color} />
      </section>
    </article>
  );
};
