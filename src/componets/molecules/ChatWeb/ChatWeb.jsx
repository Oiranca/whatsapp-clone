import React from 'react';
import { Response } from '../../atoms/Response/Response';
import { Answer } from '../../atoms/Answer/Answer';
import {
  answerConversation,
  responseConversation
} from '../../../mock/data/chatConversation';
import './chatWeb.scss';

export const ChatWeb = () => {
  return (
    <div className={'chat-web-container'}>
      <Answer answerText={answerConversation[0]} />
      <Response responseText={responseConversation[0]} />
      <Answer answerText={answerConversation[1]} />
      <Response responseText={responseConversation[1]} />
      <Response responseText={responseConversation[2]} />
      <Answer answerText={answerConversation[2]} />
      <Answer answerText={answerConversation[3]} />
      <Answer answerText={answerConversation[4]} />
      <Response responseText={responseConversation[3]} />
      <Response responseText={responseConversation[4]} />
      <Answer answerText={answerConversation[5]} />
      <Answer answerText={answerConversation[6]} />
      <Response responseText={responseConversation[5]} />
      <Response responseText={responseConversation[6]} />
      <Answer answerText={answerConversation[7]} />
    </div>
  );
};
