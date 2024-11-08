// Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

/**
 * Footer component displays the footer of the application.
 * It includes copyright information and social media links.
 */

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Metal Guitar Course. All rights reserved.</FooterText>
      <SocialIcons>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={30} />
        </a>
      </SocialIcons>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  background-color: #121212;
  color: #fff;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 1rem 0;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: #fff;
    transition: color 0.3s;

    &:hover {
      color: #d32f2f;
    }
  }
`;

export default Footer;
