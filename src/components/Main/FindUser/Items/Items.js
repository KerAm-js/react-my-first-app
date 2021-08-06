import React from 'react';
import Item from './Item/Item';
import style from './Items.module.scss';

const Items = (props) => {
  if (props.usersList.length === 0) {
    props.getUsersList([
      {
        username: "Jao",
        ava: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png",
        status: "I'm very cool programmer",
        country: "Portugal",
        city: "Portu",
        followed: true, 
      },
      {
        username: "Jao",
        ava: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png",
        status: "I'm very cool programmer",
        country: "Portugal",
        city: "Portu",
        followed: true, 
      },
      {
        username: "Jao",
        ava: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png",
        status: "I'm very cool programmer",
        country: "Portugal",
        city: "Portu",
        followed: false, 
      },
    ])
  };

  const items = props.usersList.map( (user,index) => {
    return (
      <Item 
        key={ index }
        ava={ user.ava }
        username={ user.username }
        status={ user.status }
        country={ user.country }
        city={ user.city }
        followed={ user.followed }
        toFollow={ () => { props.toFollow(index)} }
        toUnFollow={ () => { props.toUnFollow(index)} }
      />
    ) 
  })
  return (
    <div className={ style['Items'] }>
      { items }
    </div>
  )
} 

export default Items;