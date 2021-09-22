import React, { useState } from 'react';
import style from './Headline.module.scss';

const Headline = (props) => {
  return (
    <h1 className={style.Headline}>{props.text}</h1>    
  );
}

export default Headline;