import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpeg';
import logo2 from '../assets/logo2.jpeg';
import StartJourney from './StartJourney';

const Enroll = () => {
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);

  const openJourney = () => {
    setIsJourneyOpen(true);
  };

  const closeJourney = () => {
    setIsJourneyOpen(false);
  };

  return (
    <EnrollContainer>
      <BackgroundOverlay />
      <ImageContainer>
        <ImageWrapper>
          <Image src={logo} alt="Enroll in Course 1" />
          <EnrollButton onClick={openJourney}>Enroll</EnrollButton>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={logo2} alt="Enroll in Course 2" />
          <EnrollButton onClick={openJourney}>Enroll</EnrollButton>
        </ImageWrapper>
      </ImageContainer>
      {isJourneyOpen && <StartJourney onClose={closeJourney} />} {/* Journey Modal */}
    </EnrollContainer>
  );
};

const EnrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0; // Add margin for spacing
  position: relative; // Allow absolute positioning of the background overlay
  width: 100%; // Ensure it takes full width
  min-height: 300px; // Set a minimum height to avoid collapsing
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000; // Set the background color to match the rest of the app
  opacity: 0.8; // Optional: adjust opacity for a darker overlay effect
  z-index: -1; // Ensure it stays behind other content
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 20px; // Space between images
  z-index: 1; // Ensure images and buttons are above the background
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 200px; // Set the width of the images
  height: auto; // Maintain aspect ratio
  border-radius: 10px; // Optional: add some border radius
`;

const EnrollButton = styled.button`
  margin-top: 10px; // Space between image and button
  padding: 10px 20px;
  background-color: #d32f2f;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #b71c1c;
  }
`;

export default Enroll;
