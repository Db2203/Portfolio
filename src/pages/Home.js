import React from 'react'
import styled from 'styled-components';
import Logo from '../assets/images/Db.png'

function Home() {
  return (
    <Container>
        <h1>Hello! I'm Dhruv!</h1>
        <h2>Tech Enthusiast | Problem Solver</h2>
        <img src={Logo} alt="Dhruv's Avatar" />
    </Container>
  )
}

const Container = styled.div`
    h1{
        position:relative;
        top:400px;
        left:150px;

        @media(max-width:700px){
            left:50px;
            top:100px;
        }
    }
    h2{
        position:relative;
        top:400px;
        left:150px;

        @media(max-width:700px){
            left:50px;
            top:100px;
        }

    }

    img{
        position: absolute;  /* Position the image absolutely */
        top: 200px;          /* Moves the image 100px down from the top */
        left: 620px;          /* Moves the image 50px from the left */
        width: 400px;        /* Adjust width */
        height: 400px;       /* Adjust height */
        object-fit: cover;  /* Ensures the image fits proportionally without distortion */

        @media(max-width:700px){
            left:50px;
            height: 250px;  /* Adjust image height for mobile */
            width: 250px;   /* Adjust image width for mobile */
            top:100px;
        }
    }
`;

export default Home
