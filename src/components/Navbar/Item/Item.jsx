import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Item.module.css';

const Item = (props) => {
  return (
    <div className={`${s.item}`}>
      <NavLink to={props.link} activeClassName={s.active}> {props.text} </NavLink>
    </div>
  );
};

export default Item;