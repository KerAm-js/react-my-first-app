import { connect } from 'react-redux';
import { 
  toFollowAC,
  toUnFollowAC,
  setUsersListAC,
  setTotalCountAC,
  setCurrentPageAC,
  setCurrentPageNumbersAC,
  setPageNumbersAC,
  setNextCurrentPageNumbersAC,
  setPreviousCurrentPageNumbersAC,
 } from './../../../../Redux/users-reducer'; 
import Items from './Items';

const mapStateToProps = (state) => {
  return {
    usersList: state.usersPage.usersList,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    currentPageNumbers: state.usersPage.currentPageNumbers,
    pageNumbers: state.usersPage.pageNumbers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toFollow: userId => {
      dispatch(toFollowAC(userId));
    },
    toUnFollow: userId => {
      dispatch(toUnFollowAC(userId));
    },
    setUsersList: users => {
      dispatch(setUsersListAC(users));
    },
    setTotalCount: totalCount => {
      dispatch(setTotalCountAC(totalCount))
    },
    setCurrentPage: currentPage => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setCurrentPageNumbers: currentPageNumbers => {
      dispatch(setCurrentPageNumbersAC(currentPageNumbers));
    },
    setPageNumbers: pageNumbers => {
      dispatch(setPageNumbersAC(pageNumbers));
    },
    setNextCurrentPageNumbers: () => {
      dispatch(setNextCurrentPageNumbersAC());
    },
    setPreviousCurrentPageNumbers: () => {
      dispatch(setPreviousCurrentPageNumbersAC());
    },
  };
};
const ItemsContainer = connect(mapStateToProps,mapDispatchToProps)(Items);

export default ItemsContainer;