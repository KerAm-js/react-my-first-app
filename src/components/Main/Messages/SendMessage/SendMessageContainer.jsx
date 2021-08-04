import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../../../Redux/messages-reducer';
import SendMessage from './SendMessage';
import StoreContext from '../../../../contextAPI/Context';

const SendMessageContainer = () => {
  
  return (
    <StoreContext.Consumer>
      {
        store => {

          let onSendMessage = () => {
            store.dispatch(
              sendMessageActionCreator()
            );
          };
        
          let updateNewMessageText = (messageText) => {
            store.dispatch(
              updateNewMessageTextActionCreator(messageText)
            );
          };

          return (
            <SendMessage
              newMessageText={ store.getState().messagesPage.newMessageText }
              sendMessage={ onSendMessage }
              updateNewMessageText={ updateNewMessageText }
            />
          )
        }
      }
    </StoreContext.Consumer>
    
  )
}

export default SendMessageContainer;