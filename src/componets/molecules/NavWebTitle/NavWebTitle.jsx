import React from 'react';

import { TitleProfile } from '../../atoms/TitleProfile/TitleProfile';
import { BsChatLeftTextFill, BsThreeDotsVertical } from 'react-icons/bs';
import { ImageProfile } from '../../atoms/ImageProfile/ImageProfile';

import './navWebTitle.scss';
import { profilePhoto } from '../../../mock/data/userDataMock';

const iconsStyle = { size: '1.5rem', color: ' #667781' };

export const NavWebTitle = () => {
  return (
    <article className={'nav-container-web'}>
      <section className={'profile-text-web'}>
        <ImageProfile src={profilePhoto.src} alt={'Profile Photo'} />
        <TitleProfile title={'Beta'} />
      </section>
      <section className={'nav-bar-button-web'}>
        <div className={'top-circle'} />
        <BsChatLeftTextFill size={iconsStyle.size} color={iconsStyle.color} />
        <BsThreeDotsVertical size={iconsStyle.size} color={iconsStyle.color} />
      </section>
    </article>
  );
};
