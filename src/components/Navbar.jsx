import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.title}>
        <h2>Menu</h2>
      </div>
      <div className={s.items}>
        <div className={`${s.item} ${s.active}`}>
          <a className={s.link} href="#">Profile</a>
        </div>
        <div className={s.item}>
          <a className={s.link} href="#">Messages</a>
        </div>                 
        <div className={s.item}>
          <a className={s.link} href="#">News</a>
        </div>
        <div className={s.item}>
          <a className={s.link} href="#">Music</a>
        </div>
        <div className={s.item}>
          <a className={s.link} href="#">Settings</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;