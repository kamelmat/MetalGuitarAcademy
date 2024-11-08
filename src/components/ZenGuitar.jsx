import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import img1 from "../assets/ZenGuitar.jpg";

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

const ZenGuitar = ({ feature, onClose }) => {
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
            <SectionTitle>The Way of Zen Guitar: Mastery Through Mindfulness</SectionTitle>
            <Description>Zen Guitar is more than just playing notes; it’s a path to mastery that integrates the spirit of Japanese martial arts and Zen meditation. Inspired by the disciplined training of samurai with instruments like the shamisen, this practice combines precision, awareness, and deep mental focus. Through dedicated practice, you’ll learn to bring mindfulness and presence to every note you play, cultivating a state of inner calm and clarity on your journey.</Description>
            <SectionTitle>The Spirit of the Samurai in Your Playing</SectionTitle>
            <Description>Like the samurai, who pursued excellence in both battle and art, you’ll learn to treat your guitar practice with the same respect and dedication. This approach isn’t about rushing to perfection but about fully committing to each movement, each note, with the intention of refining your skill over time. By embracing this mindset, you transform each practice session into a moment of focused self-discipline and artistry.</Description>
            <SectionTitle>The Practice of Sanshin: Full Presence in Every Note</SectionTitle>
            <Description>Sanshin, meaning “three minds,” refers to a state of complete presence where mind, body, and spirit align. By adopting this Zen practice, you’ll learn to let go of distractions, immersing yourself fully in the experience of playing. Every movement becomes intentional, every note resonates with your attention, and the act of playing guitar transforms into a meditative practice, helping you reach a state of clarity and unity with your instrument.</Description>
            <SectionTitle>Mastering Precision with Technique and Metronome</SectionTitle>
            <Description>A central aspect of Zen Guitar is achieving technical precision without sacrificing awareness. Just as martial artists train relentlessly to master their form, you’ll focus on perfecting your technique with disciplined use of the metronome. This not only develops your timing and accuracy but also teaches you the importance of patience and consistency. Through this method, you’ll come to understand that true mastery lies in the balance between technical skill and mindful presence.</Description>
            
            <ReadMoreButton onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Read Less' : 'Read More'}
            </ReadMoreButton>
            {showMore && (
              <AdditionalText>
                <SectionTitle>
                Training the Mind and Body for Fluid Execution
                </SectionTitle>
                <Description>
                Zen Guitar training emphasizes the coordination between mind and body, enabling you to play with ease and grace. You’ll practice exercises that challenge your dexterity and mental focus, much like martial arts drills that build muscle memory and fluid motion. Over time, you’ll develop a deep connection between your thoughts and actions, allowing you to express yourself on the guitar with both strength and subtlety.
                </Description>
               
                <SectionTitle>
                Embracing Silence and Sound: The Power of Space
                </SectionTitle>
                <Description>
                In Zen, silence holds as much meaning as action, and this philosophy is essential in Zen Guitar. You’ll learn to use pauses and silence within your music, appreciating the spaces between notes as much as the notes themselves. By incorporating silence, you create a sense of rhythm and flow that mirrors the natural ebb and flow of life, bringing depth and richness to your playing.
                </Description>
            
                <SectionTitle>
                Cultivating Awareness Through Daily Practice
                </SectionTitle>
                <Description>
                Consistency is key to Zen Guitar, as it allows you to refine your skills gradually and deepen your awareness. Through daily practice, you’ll cultivate a calm, centered state of mind, turning each session into an opportunity for self-reflection and growth. This commitment to daily improvement embodies the Zen philosophy of Kaizen, or continuous, incremental progress, and leads you closer to mastery with each step.
                </Description>
                
                <SectionTitle>
                Achieving "Mushin": Playing Beyond Thought
                </SectionTitle>
                <Description>
                Mushin, or “no-mind,” is the state of flow where your mind is clear, and you play without conscious effort. By practicing presence, awareness, and discipline, you’ll eventually reach a place where your playing becomes effortless, guided by instinct rather than thought. This state of “no-mind” is the ultimate goal of Zen Guitar, where you and the instrument become one, and music flows freely from within.
                </Description>

                <SectionTitle>Finding Inner Peace Through Music</SectionTitle>
                <Description>Zen Guitar is not just a path to technical skill but also a journey to inner peace. By integrating Zen principles into your practice, you’ll find that playing guitar becomes a form of meditation, helping you cultivate tranquility and self-awareness. This practice encourages you to look inward, finding harmony both in your music and in yourself, as you walk the path of the mindful musician.</Description>
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

export default ZenGuitar;
