import React from 'react';
import Item from '../Item/Item';
import style from './Items.module.scss';
import userDefaultAva from '../../../../../img/User_Avatar_2.png'


const Items = props => {
  
  console.log(props)
  const currentPageNumbers = props.currentPageNumbers.map( (page,index) => {
    return (
      <span
        className={
          props.currentPage === page 
          ? style['current'] 
          : style['span']
        } 
        key={ index } 
        onClick={ () => props.onPageChanged(page) }
      >
        { page }
      </span>
    )
  });
    
  const items = props.usersList.map( (user,index) => {
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
        toFollow={ () => { props.toFollow(index)} }
        toUnFollow={ () => { props.toUnFollow(index)} }
      />
    ) 
  });


  return (
    <div className={ style['Items'] }>
      <div className={ style['page-numbers'] }>
        <button 
          onClick={ props.setPreviousCurrentPageNumbers }
        >
          back
        </button>
        { currentPageNumbers }
        <button
          onClick={ props.setNextCurrentPageNumbers }
        >
          next
        </button>
      </div>
      { items }
    </div>
  );
};


export default Items;