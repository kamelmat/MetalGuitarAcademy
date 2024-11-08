// CourseFeatures.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGuitar, FaMusic, FaBrain, FaRegStar } from 'react-icons/fa';
import FeatureModal from './TechniquesModal';
import HarmonyModal from './HarmonyModal';
import ComposeModal from './ComposeModal';
import ZenGuitar from './ZenGuitar';
import StartJourney from './StartJourney';

const CourseFeatures = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [modalType, setModalType] = useState(null);
    const [isJourneyOpen, setIsJourneyOpen] = useState(false);

    const features = [
        {
            title: 'Master Advanced Techniques',
            description: 'Alternate picking, sweep picking, and hybrid picking.',
            detailedText: `
  Step into the world of advanced metal guitar techniques with a structured, supportive approach that sets you on a course toward your unique sound and skill mastery.
            `,
            image: '/Background1.jpeg',
            modal: 'TechniquesModal',
        },
        {
            title: 'Metal Harmony & Theory',
            description: 'Learn progressions, scales, and harmonies unique to metal.',
            detailedText: 'Detailed information about Metal Harmony & Theory.',
            image: 'path/to/harmony-theory.jpg',
            modal: 'HarmonyModal',
        },
        {
            title: 'Compose Your Own Music',
            description: 'Techniques to create compelling riffs and solos.',            
            image: 'path/to/compose-music.jpg',
            modal: 'ComposeModal',
        },
        {
            title: 'Zen Guitar Techniques',
            description: 'Practice mindfulness to enhance your playing and focus.',            
            image: 'path/to/zen-techniques.jpg',
            modal: 'ZenGuitar',
        },
    ];

    const openModal = (feature) => {
        setSelectedFeature(feature);
        setModalType(feature.modal);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedFeature(null);
        setModalType(null);
    };

    const openJourney = () => {
        setIsJourneyOpen(true);
    };

    const closeJourney = () => {
        setIsJourneyOpen(false);
    };

    return (
        <FeaturesContainer>
            <SectionTitle>Course Features</SectionTitle>
            <FeaturesGrid>
                {features.map((feature, index) => (
                    <Feature key={index} onClick={() => openModal(feature)}>
                        {index === 0 && <FaGuitar size={40} />}
                        {index === 1 && <FaMusic size={40} />}
                        {index === 2 && <FaRegStar size={40} />}
                        {index === 3 && <FaBrain size={40} />}
                        <FeatureTitle>{feature.title}</FeatureTitle>
                        <FeatureDescription>{feature.description}</FeatureDescription>
                    </Feature>
                ))}
            </FeaturesGrid>
            <Button onClick={openJourney}>Start Your Journey</Button>
            {isModalOpen && (
                modalType === 'HarmonyModal' ? (
                    <HarmonyModal feature={selectedFeature} onClose={closeModal} />
                ) : modalType === 'ComposeModal' ? (
                    <ComposeModal feature={selectedFeature} onClose={closeModal} />
                ) : modalType === 'ZenGuitar' ? (
                    <ZenGuitar feature={selectedFeature} onClose={closeModal} />
                ) : (
                    <FeatureModal feature={selectedFeature} onClose={closeModal} />
                )
            )}
            {isJourneyOpen && <StartJourney onClose={closeJourney} />}
        </FeaturesContainer>
    );
};

const FeaturesContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #1e1e1e;
  color: #fff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Feature = styled.div`
  background-color: #2b2b2b;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #3b3b3b;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  transition: color 0.3s;

  ${Feature}:hover & {
    color: #d32f2f;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #ddd;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #d32f2f;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  transition: background 0.3s;

  &:hover {
    background-color: #b71c1c;
  }
`;

export default CourseFeatures;
