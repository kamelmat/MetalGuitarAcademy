import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import img1 from "../assets/Compose.jpeg";

const StyledModal = styled(Modal)`
  .modal-content {
    background: #1e1e1e;
    color: #fff;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 40%;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

const TextContainer = styled.div`
  width: 60%;
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

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #d32f2f;
  cursor: pointer;
  margin-top: 10px;
  text-decoration: underline;

  &:hover {
    color: #b71c1c;
  }
`;

const AdditionalText = styled.div`
  margin-top: 10px;
  color: #ddd;
  font-size: 0.9rem;
`;

const FeatureModal = ({ feature, onClose }) => {
  const [showMore, setShowMore] = useState(false);

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
            <SectionTitle>Crafting Your Own Metal Masterpieces.</SectionTitle>
            <Description>Composing your own music is the ultimate form of self-expression, especially in a genre as versatile and intense as metal. Our program will teach you the techniques to create compelling riffs, powerful solos, and cohesive arrangements that make your music unforgettable. With these skills, you’ll be able to develop your unique voice in the metal world, shaping sounds that resonate with listeners.</Description>
            <SectionTitle>Building Riffs and Solos That Stand Out</SectionTitle>
            <Description>Creating memorable riffs and solos is at the core of metal composition. You’ll learn techniques like alternate picking, palm muting, string skipping, and sweep picking to build intricate riffs and blazing solos. We'll dive into phrasing, rhythm choices, and melodic development, allowing you to create solos that feel both technically impressive and emotionally impactful.</Description>
            <SectionTitle>Arranging for Different Metal Styles</SectionTitle>
            <Description>Metal is a diverse genre, encompassing styles from thrash and death metal to progressive and symphonic. You’ll learn to arrange and orchestrate for each style, understanding the characteristics that define them and how to craft compositions that are true to each subgenre. From aggressive breakdowns to epic, cinematic passages, our lessons cover the essential tools to arrange in the style that suits your artistic vision.</Description>
            <SectionTitle>Orchestrating for Full Band Dynamics</SectionTitle>
            <Description>Orchestration is about understanding each instrument's role within the band and creating arrangements that make the most of each player’s capabilities. We’ll teach you how to layer guitars, bass, drums, and vocals in ways that enhance your music’s power. You’ll explore harmonic layering, rhythmic coordination, and dynamics, ensuring that each section of your song has impact and cohesion.</Description>
            <ReadMoreButton onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Read Less' : 'Read More'}
            </ReadMoreButton>
            {showMore && (
                <AdditionalText>                               
                <SectionTitle>Using Plugins and Digital Tools Like a Pro</SectionTitle>
                <Description>In modern metal production, plugins and digital tools are indispensable. You’ll learn to use amp simulators, virtual instruments, and effect plugins to shape your tone and elevate your sound. We’ll guide you in using DAWs (Digital Audio Workstations) to record, edit, and mix your music, enabling you to polish your compositions to a professional level. From reverb and delay for atmospheric sounds to distortion and compression for aggressive tones, you'll master the tools that help bring your vision to life.</Description>
                <SectionTitle>Fully Understanding Each Instrument’s Role</SectionTitle>
                <Description>Metal is a genre where each instrument contributes uniquely to the overall sound. You’ll gain an in-depth understanding of guitar, bass, drums, and vocal techniques, and how they interact in a metal band. This knowledge will allow you to compose parts that complement each other, ensuring that each instrument has a purpose and presence in the mix, from bass-driven grooves to high-energy drum fills.</Description>
                <SectionTitle>Mastering Song Structure and Dynamics</SectionTitle>
                <Description>A great metal song isn't just about heavy riffs—it’s about storytelling through music. You’ll learn how to structure your songs with attention to dynamics, using tension and release to keep listeners engaged. We'll cover the use of breakdowns, climactic solos, and epic build-ups, giving you the skills to create compositions that feel both powerful and cohesive.</Description>
                <SectionTitle>Creating an Authentic and Unique Sound</SectionTitle>
                <Description>With the combination of composing techniques, arrangement skills, and production knowledge, you’ll have the tools to forge a sound that’s distinctively yours. Whether you’re aiming for crushing heaviness, melodic beauty, or technical precision, our program will help you bring it all together, producing music that embodies your artistic identity and leaves a lasting impression on your audience.</Description>
               
              </AdditionalText>
            )}
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

export default FeatureModal;
