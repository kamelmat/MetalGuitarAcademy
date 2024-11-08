import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import img1 from "../assets/Background1.jpeg";

const StyledModal = styled(Modal)`
  .modal-content {
    background: #1e1e1e;
    color: #fff;
    overflow: hidden;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

const TextContainer = styled.div`
  width: 50%;
  padding: 20px;
  overflow-y: auto;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #d32f2f;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  color: #d32f2f;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #ddd;
  white-space: pre-line;
  text-align: justify;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the buttons */
  margin-top: 20px; /* Add some margin for spacing */
`;

const CloseButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #d32f2f;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  width: 33%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #b71c1c;
  }
`;

const SignUpButton = styled.button`
  padding: 0.75rem 2rem;
  background-color: #d32f2f;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  width: 33%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  margin-left: 20px;

  &:hover {
    background-color: #b71c1c;
  }
`;

const TechniquesModal = ({ feature, onClose }) => {
  return (
    <StyledModal 
      show={true} 
      onHide={onClose} 
      centered
      dialogClassName="modal-90w"    
    >
      <StyledModal.Header closeButton>
        <StyledModal.Title>{feature.title}</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>
        <ModalContainer>
          <Image src={img1} alt={feature.title} />
          <TextContainer>
            <Description>{feature.detailedText}</Description>
            <SectionTitle>Personalized Practice Routine:</SectionTitle>
            <Description>Your path to guitar mastery starts with a personalized routine, built around your background and desired outcome. Our program divides your practice schedule into strategic, manageable sessions spanning over weeks. These routines adapt based on progress and feedback, ensuring steady improvement without burnout.</Description>
            <SectionTitle>Core Techniques and Exercises:</SectionTitle>
            <Description>Daily Breakdown: Each day focuses on specific aspects:
              Day 1-3: Warm-up drills, alternate picking exercises, rhythm training.
              Day 4-5: Sweep picking techniques, chord progressions, finger independence drills.
              Day 6-7: Hybrid picking patterns, speed building exercises, melodic phrasing.
              Practice Hours: Flexible to your needs, from 1-hour foundational sessions to intensive 3-hour pro-level drills.</Description>
            <SectionTitle>Exercise Regimen:</SectionTitle>
            <Description>String Skipping and Legato Runs: Expand your reach and fluidity across the fretboard.
              Progressive Scales: Practice ascending and descending scales with dynamic timing to boost musicality.
              Arpeggio Exploration: Move from basic shapes to advanced 7-string arpeggios with sweep and economy picking.</Description>
            <SectionTitle>Incorporating DAWs and Plugins:</SectionTitle>
            <Description>Utilize industry-standard Digital Audio Workstations (DAWs) to record and analyze your playing. Gain proficiency in using plugins to shape your tone and experiment with effects, ensuring your practice sessions mimic real-world recording and live performance settings. From amp simulators to virtual pedalboards, we guide you in setting up your gear for optimal practice.</Description>
            <ButtonContainer>
              <CloseButton onClick={onClose}>Close</CloseButton>
              <SignUpButton>Sign Up</SignUpButton>
            </ButtonContainer>
          </TextContainer>
        </ModalContainer>
      </StyledModal.Body>
    </StyledModal>
  );
};

export default TechniquesModal;
