import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Item.module.scss';
import withClass from './../../../hoc/withClass';

const Item = (props) => {
  return (
    <React.Fragment>
      <NavLink 
        to={ props.link } 
        activeClassName={ style.active }
      > 
        { props.text } 
      </NavLink>
    </React.Fragment>
  );
};

export default withClass(Item, style.item);