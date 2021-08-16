import React from 'react';
import loader from '../../../img/2458ae_8803edf9dfbd4bd891cede37b99249be_mv2.gif';
import style from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={ style['Loader'] }>
      <img src={ loader } className={ style['Loader-img'] }/>
    </div>
  )
}

export default Loader;