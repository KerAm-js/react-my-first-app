import React from 'react';
import Item from './Item/Item';
import style from './Items.module.scss';
import userDefaultAva from '../../../../img/User_Avatar_2.png'
import * as axios from 'axios';


class Items extends React.Component {
  
  constructor(props) {
    super(props)
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      this.props.getUsersList(response.data.items);
    });
  }

  // getUsers = () => {
  //   if (this.props.usersList.length === 0) {
  //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
  //       this.props.getUsersList(response.data.items);
  //     });
  //   };
  // };

  render() {
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
          // country={ user.country }
          // city={ user.city }
          followed={ user.followed }
          toFollow={ () => { this.props.toFollow(index)} }
          toUnFollow={ () => { this.props.toUnFollow(index)} }
        />
      ) 
    });

    return (
      <div className={ style['Items'] }>
        {/* <button onClick={ this.getUsers }>Get users</button> */}
        { items }
      </div>
    );
  }
}

export default Items;