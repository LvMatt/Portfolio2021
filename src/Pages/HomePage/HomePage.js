import React, {useState, useEffect} from 'react';
import style from './HomePage.module.scss';
import {Row, 
    Col,
    Container, 
    Button, } from 'reactstrap';
import ProfileImage from '../../img/profile_picture.png';
import Navigation from '../../Components/Navigation/Navigation';
import ButtonComp from '../../Components/Button/ButtonComp';
import Pagination from '../../Components/Pagination/Pagination';
import BackgroundImage from '../../img/background_picture.png'
const HomePage = (props) => {
    useEffect(() => {
        const words = ['Back-end developer', 'C# developer', 'Front-end developer', 'Full-stack developer', ]
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';
        (function writing(){
        if(count === words.length){
          count = 0
        }
        currentText = words[count]
        console.log(words.length)
        letter = currentText.slice(0, ++index)
        let write = document.querySelector('.HomePage_IntroWorkPosition__3kqt5')
        if(write)
        {
            write.textContent = letter
        }
        
        if(letter.length === currentText.length){
          count++
          index = 0
        }
        setTimeout(writing, 200)
        }())
        
      });
   
    return (
    <div className={style.Wrapper}>
{/*             <Navigation toggle={toggle} isOpen={isOpen}/>
 */}
        <Container>
        
            <Row className={style.ContentSection}>
                <div className={style.BackgroundImage}>
                    <img src={BackgroundImage}>
                    </img>
                </div>
                <Col sm="12" md="6">
                   {/*  <div className={style.OrangeCircle}>
                    </div> */}
                    <div className={style.ContentTextSection}>
                        <h5 className={style.IntroText}>
                            Hello I am
                        </h5>
                        <h1 className={style.IntroName}>
                            MATUS KALANIN
                        </h1>
                        <h2 className={style.IntroWorkPosition}>
                            Full-stack developer
                            <span className={style.WorkText}></span>
                        </h2>
                    </div>
                        <div className={style.ButtonSection}>
                            <Button>
                                Download CV
                            </Button>
                            <img className={style.ProfilePictureIcon}  
                            src={ProfileImage} alt="profile_picture">
                            </img>
                        </div>
                </Col>
                <Col sm="12" md="5">
                    <div className={style.ProfilePictureSection}>
                        <div className={style.OrangeCircleBig}></div>
                        <div className={style.ProfilePictureWrapper}>
                            <img className={style.ProfilePicture} src={ProfileImage} alt="profile_picture">
                            </img>
                        </div>
                    </div>
                   
                </Col>
                <Col sm="12" md="1">
                    <div className={style.PaginationSection}>
                        <Pagination numberOfPages={4}/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default HomePage;
