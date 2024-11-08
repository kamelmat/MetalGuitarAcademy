import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import img1 from "../assets/Harmony.jpeg";

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
            <SectionTitle>Mastering Metal Through Harmony</SectionTitle>
            <Description>Understanding harmony is essential for mastering the complex and powerful world of metal music. By diving deep into harmonic principles, you gain insight into the intricate patterns and structures that define the genre. Drawing inspiration from Berklee College of Music's comprehensive approach to harmony, our lessons focus on equipping you with the knowledge to analyze and create compelling musical pieces.</Description>
            <SectionTitle>Exploring Modes and Modal Interchange</SectionTitle>
            <Description>You'll explore melody and harmony patterns derived from various modes, such as Dorian for dark, progressive riffs and Phrygian for aggressive, tension-filled passages. We'll guide you through the use of modal interchange, seamlessly shifting between major and minor tonalities to inject unpredictability and depth into your compositions. Rare and exotic scales, such as the Hungarian minor and Byzantine scales, will broaden your creative palette, adding unique tonal flavors that stand out in your music.</Description>
            <SectionTitle>Broadening Your Palette with Exotic Scales</SectionTitle>
            <Description>Our program also covers chord inversions and their application in building dynamic harmonic movement, enabling you to compose riffs and progressions that sound full and rich. Delve into modulations that shift keys smoothly or abruptly, enhancing the drama and tension of your pieces. Learn to employ hybrid chords—combinations of chords that blend modal qualities or borrow notes from outside the scale—to craft truly distinctive sounds.</Description>
            <Description>By mastering these elements, you'll unlock the ability to not only learn and dissect complex metal songs but also compose your own pieces that embody the raw intensity and melodic complexity of the genre. Whether you're creating galloping riffs, atmospheric breakdowns, or intricate solos, a solid foundation in metal harmony and theory will push your playing and songwriting to the next level.</Description>
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
