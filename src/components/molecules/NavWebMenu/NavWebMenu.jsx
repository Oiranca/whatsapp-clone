import React from 'react';
import { InputText } from '../../atoms/InputText/InputText';
import { AiOutlineSearch } from 'react-icons/ai';

import './navWebMenu.scss';

export const NavWebMenu = () => {
  const iconsStyle = { size: '1rem', color: '#3b4a54' };
  return (
    <section className={'menu-web-container'}>
      <div className={'menu-web-button'}>
        <AiOutlineSearch size={iconsStyle.size} color={iconsStyle.color} />
        <InputText placeHolder={'Search or start new chat'} />
      </div>
    </section>
  );
};
