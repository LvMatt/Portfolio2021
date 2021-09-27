import React, {useState} from 'react';
import style from './Portfolio.module.scss';
import ButtonComp from '../../Components/Button/ButtonComp';
import {Row, 
    Col,
    Container,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText, 
    Button, } from 'reactstrap';

const Portfolio = (props) => {
    
    return (
    <div className={style.PortfolioWrapper} id="portfolio">
        <Container>
            <div className={style.ContentSection}>
                <Row>
                <Col sm="12">
                    <div className={style.HeadlineSection}>
                        <div className={style.OrangeCircle}></div>
                        <h1 className={style.Headline}>Portfolio</h1>
                    </div>
                </Col>
                
                </Row>
                <div className={style.PortfolioCardsWrapper}>
                    <Row>
                        <Col>
                            <Card className={style.CardWrapper}>
                                <Row className="no-gutters">
                                <Col  lg="3" md="12">
                                <div className={style.PortfolioRectangleWrapper}>
                                <div  className={` ${style.PortfolioRectangle} ${style.ImageRight} `}></div>
                                </div>
                                    {/* <CardImg
                                    top
                                    width="100%"
                                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                    alt="Card image cap"
                                    /> */}
                                </Col>
                                <Col lg="9">
                                    <CardBody className={`${style.CardContentSection} ${style.CardContentSectionRight}` }>
                                    <CardTitle className={`${style.CardTitle} ${style.CardTitleRight}`}>Sport Store</CardTitle>
                                    <CardText className={style.CardText}>
                                    An e-commerce website for selling sports equipment. The project is primarily server-based, built-in ASP.NET Core and focused on IT security.                                    </CardText>
                                    <Button className={style.ButtonCheck}><a href="https://github.com/LvMatt/SportStoreAspNet">Check Github</a></Button>
                                    </CardBody>
                                </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card className={`${style.CardWrapper} ${style.CardWrapperLeft}`}>
                                <Row className={style.CardLeft}>
                                <Col lg="9">
                                <CardBody className={`${style.CardContentSection} ${style.CardContentSectionLeft}`}>
                                    <CardTitle className={`${style.CardTitle} ${style.CardTitleLeft}`}>Card reader</CardTitle>
                                    <CardText style={{textAlign: 'left'}} className={style.CardText}>
                                        Our team made the Card-Reader project connecting IoT with a database and frontend, which was evaluated as 'The Most Innovative Real-World Project' by the Microsoft jury.                                    </CardText>
                                    <Button className={style.ButtonCheck}><a href="https://github.com/JSMB-Zealand">Check Github</a></Button>
                                </CardBody>
                                </Col>
                                <Col className={style.PortfolioRectangleWrapper} lg="3">
                                <div className={`${style.PortfolioRectangle} ${style.ImageLeft}`}></div>
                                </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                   {/*  <Row>
                        <Col className={style.ButtonWrapper}>
                            <Button className={style.ButtonMain}>Read More</Button>
                        </Col>
                    </Row> */}
                </div>
            </div>
        </Container>
    </div>
  );
}

export default Portfolio;
