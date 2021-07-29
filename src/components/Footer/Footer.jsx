import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.author}>
        <a 
          className={s.link} 
          href="https://www.instagram.com/amir_gendargenoevskiy/"
        >
          Amir Kerimov
        </a>
      </div>
    </footer>
  );
};

export default Footer;