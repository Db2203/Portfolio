import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../assets/images/Aboutme.jpg'; // Path to your image

function About() {
  return (
    <MainContainer>
      <TextContainer>
        <h1>About Me</h1>
        <br />
        <p>
          Hi! I'm Dhruv Bajpai, a Computer Science and Engineering student at Manipal University with a passion for coding and problem-solving. I enjoy staying active through badminton, basketball, and chess, and I’m also an avid gamer. When it comes to tech, I’m always driven to tackle challenges and find creative solutions, whether it’s debugging code or strategizing in a game.
        </p>
        <br />
        <p>
          In my free time, I love to travel and explore new places, cultures, and ideas. I believe in constantly learning and growing—whether through personal hobbies or professional development. I’m excited about applying what I learn and solving problems in both the tech world and everyday life.
        </p>
      </TextContainer>
      
      <ImageContainer>
        <ProfileImageStyled src={ProfileImage} alt="Dhruv Bajpai" />
      </ImageContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const TextContainer = styled.div`
  position: relative;
  top: 100px;
  font-size: 20px;
  width: 40rem;

  h1 {
    color: white;
  }

  p {
    margin-top: 20px;
  }

  @media(max-width: 700px) {
    position: relative;
    top: 0;
    font-size: 15px;
    width: 100%;
    padding: 10px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 100px;

  /* Adjust the positioning here */
  /* Move image down by 50px */
  margin-top: 50px;

  /* Move image to the right by 50px */
  margin-left: 50px;
`;

const ProfileImageStyled = styled.img`
  width: 100%; /* Makes the image responsive */
  height: auto;
  max-width: 500px; /* Adjust max-width as per your needs */
  object-fit: contain; /* Ensures the full image appears without cropping */

  /* You can also add more positioning if needed */
  /* Adjust image position further */
  position: relative;
  top: -100px;  /* Move the image down */
  left: 20px; /* Move the image to the right */
`;

export default About;
