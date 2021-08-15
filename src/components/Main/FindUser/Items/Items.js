import React from 'react';
import Item from './Item/Item';
import style from './Items.module.scss';
import userDefaultAva from '../../../../img/User_Avatar_2.png'
import * as axios from 'axios';


class Items extends React.Component {
  
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
    console.log(this.props)
    const currentPageNumbers = this.props.currentPageNumbers.map( (page,index) => {
      return (
        <span
          className={
            this.props.currentPage === page 
            ? style['current'] 
            : style['span']
          } 
          key={ index } 
          onClick={ () => this.onPageChanged(page) }
        >
          { page }
        </span>
      )
    });
    
    const items = this.props.usersList.map( (user,index) => {
      return ( 
        <Item 
          key={ index }
          id={ user.id }
          ava={ 
            user.photos.small 
            ? 
            user.photos.small 
            : 
            userDefaultAva 
          }
          name={ user.name }
          status={ user.status }
          followed={ user.followed }
          toFollow={ () => { this.props.toFollow(index)} }
          toUnFollow={ () => { this.props.toUnFollow(index)} }
        />
      ) 
    });

    return (
      <div className={ style['Items'] }>
        <div className={ style['page-numbers'] }>
          <button 
            onClick={ this.props.setPreviousCurrentPageNumbers }
          >
            back
          </button>
          { currentPageNumbers }
          <button
            onClick={ this.props.setNextCurrentPageNumbers }
          >
            next
          </button>
        </div>
        { items }
      </div>
    );
  }
}

export default Items;