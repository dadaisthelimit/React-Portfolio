import React from 'react';
import './AboutMe.css';
import profilePicture from '../components/images/profpic.png';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <div className="about-me-left">
          <h2 className="about-me-name">Darwin Arajani</h2>
          <p className="about-me-paragraph">
          Hello and welcome to my portfolio webpage! I am a skilled software engineer with 5 years of experience creating user interfaces and 
          developing online applications. My interest in technology and problem solving has motivated me to consistently broaden my skill set and 
          stay current with industry developments. I seek to create intuitive and elegant solutions to complicated challenges by focusing on clean 
          code and user-centered design. Please check over my work and contact me if you have any questions or want to collaborate.
          </p>
        </div>
        <div className="about-me-right">
          <img src={profilePicture} alt="Darwin Arajani" className="about-me-picture" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
