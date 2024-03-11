import React from 'react';
import liveChatFunction from './liveChatFunction/liveChatFunction';

export default function SpeedlyAnswer(props) {

  const prepareMesssageToSend = mess => {
    liveChatFunction.sendNewMessage(
      mess,
      props.activeCom,
      props.setActiveCom,
      props.comList,
      props.setComList,
      props.setNewMessage,
      props.currentOperatorId,
      props.setMessageLength,
      props.comLimit,
      props.getActiveCom,
      props.pseudo,
    );
  };

  return (
    <>
      <button
        className="fastAnswerBut"
        style={{'--newMesButBackground': 'lightgrey'}}
        onClick={() => prepareMesssageToSend('Oui')}>
          Oui
      </button>
      <button
        className="fastAnswerBut"
        style={{'--newMesButBackground': 'lightgrey'}}
        onClick={() => prepareMesssageToSend('Peut-être')}>
          Peut-être
      </button>
      <button
        className="fastAnswerBut"
        style={{'--newMesButBackground': 'lightgrey'}}
        onClick={() => prepareMesssageToSend('Non')}>
          Non
      </button>
      <button
        className="fastAnswerBut"
        style={{'--newMesButBackground': 'lightgrey'}}
        onClick={() => prepareMesssageToSend('Merci')}>
          Merci
      </button>
      <button
        className="fastAnswerBut"
        style={{'--newMesButBackground': 'lightgrey'}}
        onClick={() => prepareMesssageToSend('Un instant svp')}>
          Un instant svp
      </button>
    </>
  )
}
