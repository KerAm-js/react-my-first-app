import React from 'react';
import MyPosts from './MyPosts';
import StoreContext from './../../../../contextAPI/Context';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          let profilePage = store.getState().profilePage;
          return (
            <MyPosts 
              myPosts={ profilePage.myPosts }
              avaLink={ profilePage.profileData.ava }
            />
          )
        }
      }
      
    </StoreContext.Consumer>
    
  )
};

export default MyPostsContainer;