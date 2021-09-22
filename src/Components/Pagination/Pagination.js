import React, { useEffect } from 'react';
import style from './Pagination.module.scss';

const Pagination = (props) => {
 
  return (
    <div className={style.Container}>
        <div className={style.PaginationSection}>
            <div className={style.BlueCircle}>
            </div>
            <ul   className={style.PaginationNumbers} >
                <li ><a  className={style.Active} href="A">01</a>
                        <div className={style.BorderSlash}>
                        </div>
                </li>
                <li><a href="#about">02</a>
                        <div className={style.BorderSlash}>
                        </div>
                </li>
                <li><a href="#portfolio">03</a>
                        <div className={style.BorderSlash}>
                        </div>
                </li>
                <li><a href="#contact">04</a>
                        <div className={style.BorderSlash}>
                        </div>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Pagination;
