import React from 'react';
import ProfileData from './ProfileData';
import StoreContext from './../../../../contextAPI/Context';


const ProfileDataContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          let profileData = store.getState().profilePage.profileData
          return <ProfileData profileData={ profileData }/>
        }
      }
    </StoreContext.Consumer>
  );
};

export default ProfileDataContainer;