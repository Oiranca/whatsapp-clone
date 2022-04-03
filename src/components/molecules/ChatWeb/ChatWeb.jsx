import React from "react";
import { Response } from "../../atoms/Response/Response";
import { Answer } from "../../atoms/Answer/Answer";
import { conversation } from "../../../mock/data/chatConversation";

import "./chatWeb.scss";
export const ChatWeb = () => {
  return (
    <div className={'chat-web-container'}>
      {conversation.map(message =>
        message.from === 'me' ? (
          <Answer answerText={message.value} />
        ) : (
          <Response responseText={message.value} />
        )
      )}
    </div>
  );
};
