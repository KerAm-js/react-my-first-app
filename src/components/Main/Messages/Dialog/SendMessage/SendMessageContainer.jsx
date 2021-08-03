import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../../../../Redux/messages-reducer';
import SendMessage from './SendMessage';

const SendMessageContainer = (props) => {
  let onSendMessage = () => {
    props.store.dispatch(
      sendMessageActionCreator()
    );
  };

  let updateNewMessageText = (messageText) => {
    props.store.dispatch(
      updateNewMessageTextActionCreator(messageText)
    );
  };
  
  return (
    <SendMessage
      newMessageText={ props.store.getState().messagesPage.newMessageText }
      sendMessage={ onSendMessage }
      updateNewMessageText={ updateNewMessageText }
    />
  )
}

export default SendMessageContainer;