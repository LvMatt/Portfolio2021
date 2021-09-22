import React, { useEffect } from 'react';
import style from './ButtonComp.module.scss';
import {Row, 
    Col,
    Container, 
    Button, } from 'reactstrap';

const ButtonComp = (props) => {
    return(
        
            <Button className={style.ButtonComp}>
                {props.ButtonText}
            </Button>
    );
}

export default ButtonComp;