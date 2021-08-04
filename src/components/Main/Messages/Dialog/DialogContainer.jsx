import React from 'react';
import Dialog from './Dialog';
import StoreContext from './../../../../contextAPI/Context';

const DialogContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          return (
            <Dialog messages={ store.getState().messagesPage.messages }/>
          )
        }
      }
    </StoreContext.Consumer>
  )
};

export default DialogContainer;