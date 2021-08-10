import React from 'react';
import style from './Item.module.scss';

const Item = (props) => {
  return (
    <div className={ style['Item']}>
      <div className={ style['ava'] }>
        <img src={ props.ava } alt="Ava should be here"/>
      </div>
      <div className={ style['data'] }>
        <div className={ style['username']}>
          { props.name }
        </div>
        <div className={ style['status'] }>
          { props.status }
        </div>
        {/* <div className={ style['location'] }>
          <p>{ props.country },</p>
          <p>{ props.city }</p>
        </div> */}
      </div>
      <div className={ style['follow'] }>
        { props.followed
        ?<button className={ style['follow-button'] } onClick={ props.toUnFollow }>follow</button> 
        :<button className={ style['unfollow-button'] }onClick={ props.toFollow }>unfollow</button>
        }
      </div>
    </div>
  );
};

export default Item;