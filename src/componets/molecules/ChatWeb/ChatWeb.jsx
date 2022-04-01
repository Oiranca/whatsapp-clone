import React from "react";
import { Response } from "../../atoms/Response/Response";
import { Answer } from "../../atoms/Answer/Answer";
import "./chatWeb.scss";

const mockText = {
  text:
    'Buenos días, hoy no voy a poder ir a tu oficina.' +
    'El problema es que no sé a que hora sale Jenny de la operación ' +
    'y además me ha surgido una prueba técnica para un puesto, lo siento.' +
    'Podría ir el lunes que ya estoy de vacaciones ypuedo ir a cualquier hora? Un saludo Un saludo'
};
export const ChatWeb = () => {

  return(
    <div className={'chat-web-container'}>
      <Response responseText={mockText.text} />
      <Answer answerText={mockText.text} /><Response responseText={mockText.text} />
      <Answer answerText={mockText.text} /><Response responseText={mockText.text} />
      <Answer answerText={mockText.text} /><Response responseText={mockText.text} />
      <Answer answerText={mockText.text} /><Response responseText={mockText.text} />
      <Answer answerText={mockText.text} /><Response responseText={mockText.text} />
      <Answer answerText={mockText.text} /><Response responseText={mockText.text} />
      <Answer answerText={mockText.text} /><Response responseText={mockText.text} />
      <Answer answerText={mockText.text} /><Response responseText={mockText.text} />
      <Answer answerText={mockText.text} /><Response responseText={mockText.text} />
      <Answer answerText={mockText.text} /><Response responseText={mockText.text} />
      <Answer answerText={mockText.text} /><Response responseText={mockText.text} />
      <Answer answerText={mockText.text} /><Response responseText={mockText.text} />
      <Answer answerText={mockText.text} /><Response responseText={mockText.text} />
      <Answer answerText={mockText.text} />
    </div>
  )
}

