import React, {useState, useEffect} from 'react';
import style from './PageUnderConstruction.module.scss';
import { Link } from "react-router-dom";

import {Row, 
    Col,
    Container, 
    Button, } from 'reactstrap';
const PageUnderConstruction = (props) => {
   
    return (
    <div className={style.UnderConstructionWrapper}>
        <Container>
            <Row className={style.UnderConstructionSection}>
                <h2>Section is under construction</h2>
                <Link to="/">
                <Button> Back to menu </Button>
                </Link>
            </Row>
        </Container>
    </div>
  );
}

export default PageUnderConstruction;
