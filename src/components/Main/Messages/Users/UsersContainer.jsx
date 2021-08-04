import React from 'react';
import Users from './Users';
import StoreContext from './../../../../contextAPI/Context';


const UsersContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          let messagesPage = store.getState().messagesPage;
          return(
            <Users 
              users={ messagesPage.users }
              searchImage={ messagesPage.images.searchImage }
            />
          )
        }
      }
    </StoreContext.Consumer>
  );
};

export default UsersContainer;