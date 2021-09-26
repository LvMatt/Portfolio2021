import React, { useEffect, useState } from 'react';
import style from './Navigation.module.scss';
import  '../../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
const Navigation = (props) => {
 /*  const [isNavActive, setNavBackg] = useState(true);
  const toggle = () => setNavBackg(!isNavActive); */
 
  useEffect(() => {
    $(document).ready(function() {
      /*
      ################
      Add navbar background color when scrolled
      */
      $(window).scroll(function() {
        if ($(window).scrollTop() > 140) {
          
          $("nav").addClass("active");

        } else {
          $("nav").removeClass("active");
        }
      });
      // If Mobile, add background color when toggler is clicked
     
      // ############
    
      // document ready
    });
  })

  return (
    <div className={style.Container}>
      <Router>

        <nav>
            <div className={style.NavbarContent}>
            <a href="#" className="icon" onClick={props.toggle}>
                <FontAwesomeIcon className={style.IconBars} icon={faBars} />
              </a>
              <ul  className={props.isOpen ?  style.InActive : style.Active } >
                <li onClick={props.toggle}>
                  <FontAwesomeIcon className={style.IconTimes} icon={faTimes} />
                </li>
                <li className={style.NavItem}>
                  <a href="#about">About</a>
                </li>
              <li className={style.NavItem}>
              <a href="#portfolio">Portfolio</a>
              </li>
              <li className={style.NavItem}>
                <a href="#contact">Contact</a>
              </li>
              </ul>
              
            </div>
        </nav>
        </Router>
    </div>
    
  );
}

export default Navigation;


{/* <Container>
       <Navbar className={style.Navbar} dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse   className={style.Collapse} isOpen={isOpen} navbar>
          <Nav  className={style.NavigationContentSection} navbar>
              <NavItem  className={style.AboutLink}>
                  <div className={style.OrangeBox}>
                  <NavLink href="/components/">About</NavLink>
                  </div>
              </NavItem>
            <NavItem>
              <NavLink href="/">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container> */}