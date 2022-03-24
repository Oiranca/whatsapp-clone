import React from 'react';
import { InputNavChatWeb } from '../../molecules/InputNavChatWeb/InputNavChatWeb';

import './chatView.scss';
import { NavChatWeb } from '../../molecules/NavChatWeb/NavChatWeb';

export const ChatView = () => {
  return (
    <article className={'chat-view-container'}>
      <header>
        <NavChatWeb />
      </header>
      <article className={'chat-conversation-container'}>
        <div className={'response'}>
          <p className={'response-phrase'}>
            Buenos días sin problema luego te dijo algo del
            lunesluneslunesluneslunesluneslunesluneslunesluneslunesluneslunes
          </p>
        </div>
        <div className={'answers'}>
          <p className={'answers-phrase'}>
            Buenos días, hoy no voy a poder ir a tu oficina. El problema es que no sé a
            que hora sale Jenny de la operación y además me ha surgido una prueba técnica
            para un puesto, lo siento. Podría ir el lunes que ya estoy de vacaciones y
            puedo ir a cualquier hora? Un saludo Un saludo
          </p>
        </div>
      </article>
      <footer>
        <InputNavChatWeb />
      </footer>
    </article>
  );
};
