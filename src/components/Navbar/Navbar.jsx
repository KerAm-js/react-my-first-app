import React from 'react';
// import {NavLink} from 'react-router-dom';
import s from './Navbar.module.scss';
import Item from './Item/Item';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.title}>
        <h2>Menu</h2>
      </div>
      <div className={s.items}>
      <Item text="Profile" link="/profile"/>
        <Item text="Messages" link="/messages"/>           
        <Item text="News" link="/news"/>
        <Item text="Liked" link="/liked"/>
        <Item text="Settings" link="/settings"/>
      </div>
    </nav>
  );
};

export default Navbar;