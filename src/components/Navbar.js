import React from "react";
import styled from 'styled-components'
import {Link, NavLink} from 'react-router-dom';
import Logo from "../assets/images/logo.png"
import {faHome, faUser, faEnvelope, faFolderOpen} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

function Navbar() {

  return (
    <Nav>
        <Link>
            <img src={Logo} alt="logo" />
        </Link>
        <p>Dhruv Bajpai</p>
        <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="white" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="white" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
            <FontAwesomeIcon icon={faFolderOpen} color="white" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="white" />
        </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    href="https://github.com/Db2203" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} color='white' />
                </a>
            </li>
        </ul>
    </Nav>
  )
}

const Nav = styled.div`
    background:black;
    width:10rem;
    height:100vh;

    img{
        width:10rem;
        position:relative;
        top:-10px;
        left:-2px;
    }

    p{
        color:white;
        font-size:20px;
        position:relative;
        top:-10px;
        left:20px;
    }
    nav{
        display:block;
        text-align:center;
        position:absolute;
        height:210px;
        top:50%;
        margin-top:-120px;
        width:10%;
    
        a{
            font-size:25px;
            color:white;
            display:block;
            line-height:51px;
            height:51px;
            position:relative;
            margin:10px;
            text-decoration:none;
    
        i {
        transition: all 0.3s ease-out;
        }

        &:hover {
            color:#38726C;
         svg{
            opacity:0
            }
        &:after{
            opacity:1
            }

        }
        &:after {
        content: '';
        font-size: 15px;
        letter-spacing: 2px;
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        text-align: center;
        opacity: 0;
        -webkit-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
      }
      &:first-child {
        &:after {
          content: 'HOME';
        }
    }
}
a.about-link {
      &:after {
        content: 'ABOUT';
      }
    }

a.portfolio-link {
      &:after {
        content: 'PORTFOLIO';
      }
    }

a.contact-link {
      &:after {
        content: 'CONTACT';
      }
    }

a.active{
    svg{
        color:#38726C;
    }
}
}
ul {
    position:absolute;
    bottom:20px;
    width: 10%;
    display:block;
    padding:0;
    list-style:none;
    text-align:center;
    margin:0;

    li{
        a{
            padding:7px 0;
            display:block;
            font-size:15px;
            line-height:16px;
            font-size:20px;

            &:hover svg{
                color:#38726C;
            }
        }
    }
}
`;

export default Navbar;
