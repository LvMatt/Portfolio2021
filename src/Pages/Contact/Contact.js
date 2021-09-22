import React, {useState} from 'react';
import style from './Contact.module.scss';
import {Row, 
    Col,
    Container,
    Input, 
    Progress,
    Button,
    Form, } from 'reactstrap';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'

const Contact = (props) => {
    return (
    <div className={style.ContactWrapper} id="contact">
        <Container className={style.Container}>
            <div className={style.ContentSection}>
                <Row >
                    <Col md="12">
                        <div className={style.HeadlineWrapper}>
                            <h1 className={style.Headline}>
                                Contact
                            </h1>
                            <div className={style.BlueCircle}></div>
                        </div>
                    </Col>
                </Row>
                <Row className={style.ContactContentWrapper}>
                    <Col>
                        <div className={style.FormWrapper}>
                            <Form action="/">
                            <Row>
                                <Col lg="12">
                                    <Input type="email" name="email" id="email" placeholder="E-mail" />
                                </Col>
                                <Col lg="6">
                                    <Input type="name" name="name" id="name" placeholder="Name" />
                                </Col>
                                
                                <Col lg="6">
                                    <Input type="name" name="surname" id="surname" placeholder="Surname" />
                                </Col>
                                <Col lg="12">
                                    <Input type="textarea" name="message" id="message" placeholder="Message" />
                                </Col>
                                <Col lg="12">
                                    <div className={style.ButtonSection}>
                                        <Button>
                                            Send
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            </Form>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className={style.InformationWrapper}>
                            <div className={style.OrangeCircle}></div>
                            <div className={style.InformationSection}>
                            <h5>Find me on</h5>
                            <div className={style.IconsWrapper}>
                                <FontAwesomeIcon className={style.IconBars} icon={faGithub} />
                                <FontAwesomeIcon className={style.IconBars} icon={faLinkedin} />
                                <FontAwesomeIcon className={style.IconBars} icon={faInstagram} />

                            </div>
                            <div className={style.PhoneWrapper}>
                                <FontAwesomeIcon className={style.IconBars} icon={faPhone} />
                                <h4>+45 50 15 73 83</h4>
                            </div>
                            <div className={style.MailWrapper}>
                                <FontAwesomeIcon className={style.IconBars} icon={faMailBulk} />
                                <h4>mato.kalanin@gmail.com</h4>
                            </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
            <footer>
                <div className={style.FooterContent}>
                    <h5>All rights reserved</h5>
                </div>
            </footer>

    </div>

  );
}

export default Contact;
