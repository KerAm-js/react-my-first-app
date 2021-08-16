import React from 'react';
import { connect } from 'react-redux';
import { 
  toFollow,
  toUnFollow,
  toggleIsFetching,
  setUsersList,
  setTotalCount,
  setCurrentPage,
  setCurrentPageNumbers,
  setPageNumbers,
  setNextCurrentPageNumbers,
  setPreviousCurrentPageNumbers,
 } from '../../../../Redux/users-reducer'; 
import Items from './Items/Items';
import * as axios from 'axios';
import Loader from '../../../common/Loader/Loader';

class ItemsAPIComponent extends React.Component {
  
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&${ this.props.pageSize }`
    ).then((response) => {
      this.onGetResponse(response);
      this.props.toggleIsFetching(false);
    });
  };



  onGetResponse(response) {
    this.props.setUsersList(response.data.items);
    this.props.setTotalCount(response.data.totalCount);
    
    const totalPagesAmount = Math.ceil(this.props.totalCount / this.props.pageSize);
      
    let pageNumbers = [];
    for (let i = 1; i <= totalPagesAmount; i++) {
      pageNumbers.push(i);
    };
    this.props.setPageNumbers(pageNumbers)

    if (this.props.currentPageNumbers.length === 0) {
      if (totalPagesAmount <= 10) {
        this.props.setCurrentPageNumbers([...this.props.pageNumbers]);;
      } else {
        this.props.setCurrentPageNumbers([...this.props.pageNumbers.slice(0,10)]);
      };
    };
  };



  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsFetching(true);
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${ page }&${ this.props.pageSize }`
    ).then((response) => {
      this.onGetResponse(response);
      this.props.toggleIsFetching(false);
    });
  };



  render() {
    return (
      <>
        { this.props.isFetching
        ? <Loader/> 
        : <Items 
            currentPageNumbers={ this.props.currentPageNumbers }
            currentPage={ this.props.currentPage }
            usersList={ this.props.usersList }
            toFollow={ this.props.toFollow }
            toUnFollow={ this.props.toUnFollow }
            setNextCurrentPageNumbers={ this.props.setNextCurrentPageNumbers }
            setPreviousCurrentPageNumbers={ this.props.setPreviousCurrentPageNumbers } 
            onPageChanged={ this.onPageChanged }
          />
        }
      </>   
    )
  }
}


const mapStateToProps = (state) => {
  return {
    usersList: state.usersPage.usersList,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    currentPageNumbers: state.usersPage.currentPageNumbers,
    pageNumbers: state.usersPage.pageNumbers,
    isFetching: state.usersPage.isFetching,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     toFollow: userId => {
//       dispatch(toFollowAC(userId));
//     },
//     toUnFollow: userId => {
//       dispatch(toUnFollowAC(userId));
//     },
//     toggleIsFetching: isFetching => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//     setUsersList: users => {
//       dispatch(setUsersListAC(users));
//     },
//     setTotalCount: totalCount => {
//       dispatch(setTotalCountAC(totalCount))
//     },
//     setCurrentPage: currentPage => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setCurrentPageNumbers: currentPageNumbers => {
//       dispatch(setCurrentPageNumbersAC(currentPageNumbers));
//     },
//     setPageNumbers: pageNumbers => {
//       dispatch(setPageNumbersAC(pageNumbers));
//     },
//     setNextCurrentPageNumbers: () => {
//       dispatch(setNextCurrentPageNumbersAC());
//     },
//     setPreviousCurrentPageNumbers: () => {
//       dispatch(setPreviousCurrentPageNumbersAC());
//     },
//   };
// };
const ItemsContainer = connect(mapStateToProps,{ 
  toFollow,
  toUnFollow,
  toggleIsFetching,
  setUsersList,
  setTotalCount,
  setCurrentPage,
  setCurrentPageNumbers,
  setPageNumbers,
  setNextCurrentPageNumbers,
  setPreviousCurrentPageNumbers,
 })(ItemsAPIComponent);

export default ItemsContainer;