import React from 'react';
import ProfileData from './ProfileData';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    profileData: state.profilePage.profileData
  }
}

const ProfileDataContainer = connect(mapStateToProps)(ProfileData)

export default ProfileDataContainer;