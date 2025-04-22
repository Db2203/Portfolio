import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Portfolio() {
  return (
    <div>
      <Container>
        <Box className="box">
          {/* Row 1 */}
          <div className='row-1'>
            <ProjectCard
              projectName="Smart Attendance System"
              description="An AI-powered application that automates student attendance using facial recognition. Built with Tkinter for the user interface, the system identifies students from images and logs attendance in a CSV file. Features include adding new students, updating facial encodings, and downloading attendance records for easy tracking.

Technologies Used:
Python, Tkinter, Face Recognition (OpenCV)

Pandas, Pickle

This project showcases the power of AI in simplifying administrative tasks in educational environments."
              githubLink="https://github.com/Db2203/Smart_Attendance"
            />
            <ProjectCard
              projectName="Movie & TV Watchlist Application"
              description="A Flask-based web app that allows users to manage a watchlist for movies, TV shows, and anime. Users can sign up, log in, search by genre, get recommendations, and add media to their watchlist. The app integrates with TMDb and Jikan APIs for data and features a personalized experience.

Technologies Used:
Flask, SQLAlchemy, TMDb API, Jikan API

"
              githubLink="https://github.com/Db2203/movie_recommendation"
            />
          </div>

          {/* Row 2 */}
          <div className='row-2'>
            <ProjectCard
              projectName="Job Match AI - Resume to Job Fit Checker"
              description="An AI-powered tool that compares a resume to a job description, extracting common keywords and skills. The application uses PDF extraction to analyze the resume and compares it to the job description, generating a downloadable PDF report highlighting the match.

Tech Used: Python, Streamlit, spaCy, PDFPlumber, ReportLab"
              githubLink="https://github.com/Db2203/job_match_ai"
            />
            <ProjectCard
              projectName="My Portfolio Website"
              description="A customized portfolio website showcasing my skills, projects, and achievements. Built with React, styled-components, and HTML/CSS, the website provides an interactive and visually appealing user experience. It serves as a personal branding tool and demonstrates my web development abilities.

Technologies Used: React, styled-components, HTML/CSS"
              githubLink="https://github.com/nseraj11/PetStop"
            />
          </div>
        </Box>
      </Container>
    </div>
  );
}

// Reusable ProjectCard Component to display each project
const ProjectCard = ({ projectName, description, githubLink }) => (
  <ProjectCardContainer>
    <h3>{projectName}</h3>
    <p>{description}</p>
    <Link to={githubLink} target="_blank" className="github-link">View on GitHub</Link>
  </ProjectCardContainer>
);

const Container = styled.div`
  width: 1350px;
  position: relative;
  left: 45px;
  top: 45px;
`;

const Box = styled.div`
  .row-1,
  .row-2 {
    display: flex;
    justify-content: space-between;
    @media(max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const ProjectCardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 15px;
  width: 45%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
  h3 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    color: #555;
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .github-link {
    color: #0073e6;
    font-size: 1rem;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  @media(max-width: 700px) {
    width: 80%;
  }
`;

export default Portfolio;
