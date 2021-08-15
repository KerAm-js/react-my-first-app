import React from 'react';
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
 } from '../../../../Redux/users-reducer'; 
import Items from './Items/Items';
import * as axios from 'axios';


class ItemsAPIComponent extends React.Component {
  
  componentDidMount() {
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&${ this.props.pageSize }`
    ).then((response) => this.onGetResponse(response));
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
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${ page }&${ this.props.pageSize }`
    ).then((response) => this.onGetResponse(response));
  };



  render() {
    return (
      <Items 
        currentPageNumbers={ this.props.currentPageNumbers }
        currentPage={ this.props.currentPage }
        usersList={ this.props.usersList }
        toFollow={ this.props.toFollow }
        toUnFollow={ this.props.toUnFollow }
        setNextCurrentPageNumbers={ this.props.setNextCurrentPageNumbers }
        setPreviousCurrentPageNumbers={ this.props.setPreviousCurrentPageNumbers } 
        onPageChanged={ this.onPageChanged }
      />
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
const ItemsContainer = connect(mapStateToProps,mapDispatchToProps)(ItemsAPIComponent);

export default ItemsContainer;