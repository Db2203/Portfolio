import React from 'react';
import styled from 'styled-components';

function ContactMe() {
  return (
    <ContactForm>
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p>Email: <br /><a href="mailto:dhruvbajpai22@gmail.com?subject=Inquiry">dhruvbajpai22@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Db2203" target="_blank" rel="noopener noreferrer">https://github.com/Db2203</a></p>
      </div>
    </ContactForm>
  );
}

const ContactForm = styled.div`
  position: relative;
  top: 200px;
  left: 150%;
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
  
  h1 {
    font-size: 3rem;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
  }

  .contact-info {
    font-size: 1.4rem;
    color: #fff;
    text-align: center;

    a {
      color:rgb(255, 255, 255);
      text-decoration: none;
      font-weight: bold,italic;
      &:hover {
        text-decoration: underline;
      }
    }

    p {
      margin-bottom: 15px;
    }
  }

  @media(max-width: 700px) {
    .contact-info {
      font-size: 1rem;
    }
  }
`;

export default ContactMe;
