import React from 'react';
import ItemsContainer from './Items/ItemsContainer';
import style from './FindUser.module.scss'

const FindUser = () => {
  return (
    <div className={style['FindUser']}>
      <h1>Find User</h1>
      <ItemsContainer/>
    </div>
  )
} 

export default FindUser;