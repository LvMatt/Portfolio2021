import React, {useState} from 'react';
import style from './About.module.scss';
import {Row, 
    Col,
    Container, 
    Progress,
    Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Comp1 from '../../img/Comp1.png';
import Comp2  from '../../img/Comp2.png';
import Comp3 from '../../img/Comp3.png';


const About = (props) => {
    return (
    <div className={style.AboutWrapper} id="about">
        <Container className={style.Container}>
            <div className={style.ContentSection}>
                <Row >
                    <Col sm="12">
                        <div className={style.HeadlineSection}>
                            <h1 className={style.Headline}>
                                About Me
                            </h1>
                            <div className={style.BlueCircle}>
                            </div>
                        </div>
                    </Col>
                    <Col lg="8" md="12">
                        <div className={style.TextSection}>
                            <p>
                                Hello, I am Matus, programmer based in Copenhagen, Denmark. I have been solving technical issues, creating my own applications and websites for over 4 years.
                            </p>
                            <p>
                                As a full-stack developer, I have an experience in variety technologies. 
                            </p>
                        </div>
                    </Col>
                    <Row>
                        <Col sm="12" lg="12" lg="4">
                            <div className={style.SkillSection}>
                                <div className={style.BarWrapper}>
                                    <div className={style.BarText}>Asp.Net</div>
                                    <Progress animated className={style.Bar} value="80" />
                                </div>

                                <div className={style.BarWrapper}>
                                    <div className={style.BarText}>HTML&CSS</div>
                                    <Progress animated  className={style.Bar}value="94" />
                                </div>

                                <div className={style.BarWrapper}>
                                    <div className={style.BarText}>React</div>
                                    <Progress animated className={style.Bar} value="90" />
                                </div>

                                <div className={style.BarWrapper}>
                                    <div className={style.BarText}>PHP (Laravel)</div>
                                    <Progress animated className={style.Bar} value="55" />
                                </div>

                                <div className={style.BarWrapper}>
                                    <div className={style.BarText}>Node.Js</div>
                                    <Progress animated className={style.Bar} value="60" />
                                </div>
                                <div className={style.BarWrapper}>
                                    <div className={style.BarText}>Typescript</div>
                                    <Progress animated className={style.Bar} value="80" />
                                </div>
                                <div className={style.BarWrapper}>
                                    <div className={style.BarText}>Docker - Kubernetes</div>
                                    <Progress animated className={style.Bar} value="60" />
                                </div>
                                <div className={style.BarWrapper}>
                                    <div className={style.BarText}>SQL, NoSQL</div>
                                    <Progress animated className={style.Bar} value="75" />
                                </div>
                            </div>
                        </Col>
                        <Col lg="2" md="0" >
                            </Col>
                        <Col style={{marginTop: '-200px'}} sm="3" md="6">
                            <div className={style.TimelineWrapper}>
                                <div className={style.Comp1Wrapper}>
                                <img className={style.Comp1Img} src={Comp1} id="PopoverComp1">
                                </img>
                                <UncontrolledPopover placement="bottom" target="PopoverComp1">
                                    <PopoverHeader>2030 Builders</PopoverHeader>
                                    <PopoverBody>
                                        <ul>
                                            <li>System architecture</li>
                                            <li>Developing and implementing prototypes in React </li>
                                            <li>Managing API endpoints  in Node.JS (Nest.Js)</li>
                                            <li>Software testing</li>
                                        </ul>
                                    </PopoverBody>
                                </UncontrolledPopover>
                                </div>
                                <div className={style.Comp2Wrapper}>
                                    <img className={style.Comp2Img}  id="PopoverComp2"  src={Comp2}></img>
                                    <UncontrolledPopover children="hover" placement="bottom" target="PopoverComp2">
                                        <PopoverHeader>MQS</PopoverHeader>
                                        <PopoverBody>
                                            <ul>
                                                <li>Creating prototypes</li>
                                                <li>Developing responsive Web Application in React (Typescript)</li>
                                                <li>Writing unit tests in React</li>
                                                <li>Integration of chat protocol Matrix</li>
                                                <li>Improving API in Python</li>
                                                <li>Working with distributed systems and Docker containers</li>
                                            </ul>
                                        </PopoverBody>
                                    </UncontrolledPopover>
                                </div>
                                <div className={style.Comp3Wrapper}>
                                    <img className={style.Comp3Img}  id="PopoverComp3" src={Comp3}></img>
                                    <UncontrolledPopover placement="bottom" target="PopoverComp3">
                                        <PopoverHeader>Strømlin</PopoverHeader>
                                        <PopoverBody>
                                            <ul>
                                                <li>Developing systems in Asp.Net</li>
                                                <li>Configuring and deploying Microsoft Azure</li>
                                                <li>Managing project solutions in Umbraco (CMS) </li>
                                                <li>Maintaining and fixing legacy systems.</li>
                                            </ul>
                                        </PopoverBody>
                                    </UncontrolledPopover>
                                </div>


                                <svg width="549" height="482" viewBox="0 0 549 482" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d)">
                                    <path d="M495.841 22.7377L482.52 111.297C480.198 126.734 468.586 140.018 452.269 145.905L351.349 182.313" stroke="white" stroke-width="3"/>
                                    <path d="M214.118 343.926L157.648 418.125C149.268 429.135 135.408 435.43 120.393 435.046L11.0005 432.246" stroke="white" stroke-width="3"/>
                                    <ellipse rx="11.2728" ry="10.8985" transform="matrix(0.844745 0.535169 -0.522377 0.852715 15.9164 432.242)" fill="white"/>
                                    <ellipse rx="12.651" ry="11.7336" transform="matrix(0.791054 0.611746 -0.634317 0.773073 495.655 16.8101)" fill="white"/>
                                    <path d="M360.76 179.457L265.957 210.308C249.432 215.685 237.312 228.61 234.383 243.978L216.266 339.031" stroke="#F95F2A" stroke-width="3"/>
                                    <ellipse rx="12.651" ry="11.7336" transform="matrix(0.791051 0.61175 -0.634321 0.77307 211.187 341.966)" fill="#F95F2A"/>
                                    <ellipse rx="12.651" ry="11.7336" transform="matrix(0.791051 0.61175 -0.634321 0.77307 351.947 182.432)" fill="#F95F2A"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d" x="0.820038" y="4.88599" width="511.308" height="446.437" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>
                            </div>
                        </Col>
                    </Row>
                    <Col sm="12">
                        <div className={style.ButtonSection}>
                            <Button>
                                Read more
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  );
}

export default About;
