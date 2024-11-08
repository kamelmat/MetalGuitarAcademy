import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

// Import your background images
import img1 from '../assets/comments1.jpg';
import img2 from '../assets/comments2.jpg';
import img3 from '../assets/comments3.jpg';
import img4 from '../assets/comments4.jpg';
import img5 from '../assets/comments5.jpg';
import img6 from '../assets/comments.jpg';

// Array of background images
const backgroundImages = [img1, img2, img3, img4, img5, img6];

// Comments data
const commentsData = [
    { id: 1, student: 'Emily Rockwell', instructor: 'John Metalson', comment: 'This course changed my entire approach to metal guitar. I can finally nail those complex riffs!' },
    { id: 2, student: 'Jake Thunder', instructor: 'Matias Kamelman', comment: 'Thanks to Matias, my finger speed and accuracy have drastically improved. Total game changer!' },
    { id: 3, student: 'Nina Slade', instructor: 'Dave Rickenbach', comment: 'Dave’s guidance took my shredding to the next level. Can’t believe the progress I’ve made!' },
    { id: 4, student: 'Chris Blaze', instructor: 'Timo Sköl', comment: 'Learning from Timo was a dream! His exercises have made me a much better thrash player.' },
    { id: 5, student: 'Sophia Loudon', instructor: 'John Metalson', comment: 'John’s personalized routine has helped me master the core techniques so much faster.' },
    { id: 6, student: 'Liam Thunder', instructor: 'Matias Kamelman', comment: 'Every lesson with Matias is packed with actionable tips. My progress has skyrocketed!' },
    { id: 7, student: 'Elena Crash', instructor: 'Dave Rickenbach', comment: 'Dave’s attention to detail in rhythm exercises made me a true rhythm guitarist.' },
    { id: 8, student: 'Mark Flame', instructor: 'Timo Sköl', comment: 'Timo’s thrash techniques are absolutely amazing. I’ve never played with such power.' },
    { id: 9, student: 'Jenna Volt', instructor: 'John Metalson', comment: 'John’s practice routines are legendary. I finally feel like a real guitarist.' },
    { id: 10, student: 'Oscar Fury', instructor: 'Matias Kamelman', comment: 'Matias has a true passion for prog metal that’s infectious. I’ve never been more motivated.' },
    { id: 11, student: 'Lara Rage', instructor: 'Dave Rickenbach', comment: 'My alternate picking speed has doubled thanks to Dave. Couldn’t be happier.' },
    { id: 12, student: 'Alex Fire', instructor: 'Timo Sköl', comment: 'Timo’s harmonic theories blew my mind. My compositions are so much more complex now.' }
];

// Define styles for the component
const CarouselContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    background-color: #2c2c2c; /* Dark grey background for the container */
    padding: 20px 0;
`;

const CarouselWrapper = styled.div`
    display: flex;
    transition: transform 0.8s ease-in-out;
    transform: ${({ translateX }) => `translateX(-${translateX}%)`};
`;

const Card = styled.div`
    flex: 1 0 33.33%; /* Shows 3 cards at a time */
    padding: 20px;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(128, 128, 128, 0.5); /* Grey overlay with 50% opacity */
        z-index: 1;
    }
`;

const CardContent = styled.div`
    position: relative;
    z-index: 2; /* Ensures content is above the overlay */
`;

const StudentName = styled.h3`
    font-size: 1.5em;
    margin-bottom: 10px;
`;

const QuoteIcon = styled(FontAwesomeIcon)`
    color: red;
    font-size: 2em;
    margin-bottom: 5px;
`;

const CommentText = styled.p`
    font-size: 1em;
    line-height: 1.5;
`;

const AlumniComments = () => {
    const [index, setIndex] = useState(0);
    const commentsPerPage = 3; // Number of comments per page
    const totalPages = Math.ceil(commentsData.length / commentsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % totalPages);
        }, 10000); // Changes every 10 seconds

        return () => clearInterval(interval);
    }, [totalPages]);

    // Calculate the translateX value based on the index
    const translateX = index * (100 / totalPages) * 3; // Moves by 33.33% per page

    // Helper function to get a random background image
    const getRandomBackgroundImage = () => {
        return backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    };

    return (
        <CarouselContainer>
            <CarouselWrapper translateX={translateX}>
                {commentsData.map((comment, idx) => (
                    <Card key={comment.id} backgroundImage={getRandomBackgroundImage()}>
                        <CardContent>
                            <StudentName>{comment.student}</StudentName>
                            <QuoteIcon icon={faQuoteLeft} />
                            <CommentText>{comment.comment}</CommentText>
                            <p><em>Instructor: {comment.instructor}</em></p>
                        </CardContent>
                    </Card>
                ))}
            </CarouselWrapper>
        </CarouselContainer>
    );
};

export default AlumniComments;
