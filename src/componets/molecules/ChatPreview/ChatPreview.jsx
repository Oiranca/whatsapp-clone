import React from 'react';
import { BsCheckAll } from 'react-icons/bs';
import { ImageProfile } from '../../atoms/ImageProfile/ImageProfile';
import { TitleProfile } from '../../atoms/TitleProfile/TitleProfile';
import { TextPreview } from '../../atoms/TextPreview/TextPreview';
import { DateText } from '../../atoms/DateText/DateText';

import './chatPreview.scss';

export const ChatPreview = chatPreviewProps => {
  const { indexNumber, src, alt, title, text, date, meridiem } = chatPreviewProps;
  const iconsStyle = { size: '1.5rem', color: '#3b4a54' };

  return (
    <article className={'container-chat-menu'}>
      <ImageProfile src={src} alt={alt} />
      <section className={'title-and-textPreview'}>
       <header className={'header-preview'}>
         <TitleProfile title={title} />
         <DateText date={date} meridiem={meridiem} />

       </header>

        {indexNumber.index % 2 === 0 ? (
          <section className={'text-with-check'}>
            <BsCheckAll size={iconsStyle.size} color={iconsStyle.color} />
            <TextPreview text={text} />
          </section>
        ) : (
          <TextPreview text={text} />
        )}
      </section>
    </article>
  );
};
