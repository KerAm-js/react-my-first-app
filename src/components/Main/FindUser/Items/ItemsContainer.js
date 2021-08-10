import { connect } from 'react-redux';
import { toFollowAC,toUnFollowAC,getUsersListAC } from './../../../../Redux/users-reducer'; 
import Items from './Items';

const mapStateToProps = (state) => {
  return {
    usersList: state.usersPage.usersList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toFollow: userId => {
      dispatch(toFollowAC(userId));
    },
    toUnFollow: userId => {
      dispatch(toUnFollowAC(userId));
    },
    getUsersList: (users) => {
      dispatch(getUsersListAC(users));
    },
  };
};
const ItemsContainer = connect(mapStateToProps,mapDispatchToProps)(Items);

export default ItemsContainer;