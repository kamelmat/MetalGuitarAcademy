// InstructorInfo.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import img1 from "../assets/JohnMetalson.jpg";
import img2 from "../assets/MatiasKamelman.png";
import img3 from "../assets/Instructor2.jpg";
import img4 from "../assets/Instructor3.jpg";
import backgroundImage from '../assets/Drums.jpeg';

/**
 * InstructorInfo component displays information about guitar instructors.
 * It cycles through instructors every 5 seconds, showing their name, bio, and image.
 */

const instructors = [
  {
    name: "John Metalson",
    bio: "John Metalson is a renowned guitarist with over 20 years of experience in the metal scene. He has toured worldwide and played with legendary bands, bringing deep knowledge of advanced guitar techniques and metal music theory.",
    image: img1,
  },
  {
    name: "Matias Kamelman",
    bio: "Matias Kamelman is a talented guitarist with worldwide gigs experience and over 20 years teaching music. Expert in 7 & 8 strings guitars with Berklee education and a solid background in Jazz and Classical music. Ideal for those wanting to explore Prog 6 Shred genres and approach guitarists such as John Petrucci, Vai, Tosin Abassi. Matt is also a Music Therapist and a Master in Japanese fencing and creator of our Zen - Guitar method",
    image: img2,
  },
  {
    name: "Dave Rickenbach",
    bio: "Dave Rickenbach has a rich background in music education and performance, specializing in metal guitar. With session collaborations with classic Metal guitar he is ideal if you are into Randy Rhoads, KK Downing or the riffs of Maiden, Judas, Purple, Exodus",
    image: img3,
  },
  {
    name: "Timo Sköl",
    bio: "Timo Sköl is an expert in metal guitar techniques and has been teaching for over a decade. This Thrash expert will guide you flawlessly through the dark riffing realms of Hetfield, Mustaine, King, Ian, Darrel and all the 90´s Metal",
    image: img4,
  },
];

const InstructorInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <InstructorContainer>
      <BackgroundImage />
      <InstructorImage src={instructors[currentIndex].image} alt="Instructor" />
      <InstructorDetails>
        <TextBackground>
          <InstructorName>{instructors[currentIndex].name}</InstructorName>
          <InstructorBio>{instructors[currentIndex].bio}</InstructorBio>
        </TextBackground>
      </InstructorDetails>
    </InstructorContainer>
  );
};

const InstructorContainer = styled.section`
  display: flex;
  gap: 2rem;
  padding: 4rem 2rem;
  position: relative;
  color: #000;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  z-index: -1;
`;

const InstructorImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const InstructorDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextBackground = styled.div`
  background-color: rgba(255, 255, 255, 0.4); // Light gray with transparency
  padding: 10px; // Add some padding
  border-radius: 5px; // Optional: add border radius for a softer look
`;

const InstructorName = styled.h2`
  font-size: 2rem;
  color: red; // Set the instructor name color to red
`;

const InstructorBio = styled.p`
  font-size: 1.2rem;
  color: #000;
`;

export default InstructorInfo;
