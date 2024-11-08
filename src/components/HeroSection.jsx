// HeroSection.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from "../assets/bestbackground.png"
import StartJourney from './StartJourney';

/**
 * HeroSection component displays the main hero section of the application.
 * It includes a background image, a headline, a subheadline, and a call-to-action button.
 * The StartJourney modal is triggered when the button is clicked.
 */

const HeroSection = () => {
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);

  const openJourney = () => {
    setIsJourneyOpen(true);
  };

  const closeJourney = () => {
    setIsJourneyOpen(false);
  };

  return (
    <HeroContainer>
      <BackgroundImage src={backgroundImage} alt="Metal concert background" />
      <Overlay />
      <Content>
        <Headline>Unleash Your Inner Metal God</Headline>
        <Subheadline>Master the Art of Metal Guitar with Our Expert-Led Course</Subheadline>
        <CTAButton onClick={openJourney}>Start Your Journey</CTAButton>
      </Content>
      {isJourneyOpen && <StartJourney onClose={closeJourney} />}
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const Content = styled.div`
  z-index: 2;
`;

const Headline = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const Subheadline = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const CTAButton = styled.button`
  padding: 0.75rem 2rem;
  background-color: #d32f2f;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #b71c1c;
  }
`;

export default HeroSection;
