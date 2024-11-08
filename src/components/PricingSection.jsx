// PricingSection.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import EnrollNow from './EnrollNow'; // Import the EnrollNow modal

/**
 * PricingSection component displays pricing options for courses.
 * It allows users to enroll in courses through a modal.
 */

const PricingSection = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false); // State for EnrollNow modal

  const openEnroll = () => {
    setIsEnrollOpen(true); // Open the EnrollNow modal
  };

  const closeEnroll = () => {
    setIsEnrollOpen(false); // Close the EnrollNow modal
  };

  return (
    <PricingContainer>
      <SectionTitle>Pricing & Enrollment</SectionTitle>
      <PricingGrid>
        <PricingOption>
          <PriceTitle>Monthly Plan</PriceTitle>
          <Price>$29.99/month</Price>
          <PriceDescription>Access to all course content and updates.</PriceDescription>
          <EnrollButton onClick={openEnroll}>Enroll Now</EnrollButton> {/* Trigger EnrollNow modal */}
        </PricingOption>
        <PricingOption>
          <PriceTitle>Lifetime Access</PriceTitle>
          <Price>$199.99</Price>
          <PriceDescription>One-time payment for lifetime access to the course.</PriceDescription>
          <EnrollButton onClick={openEnroll}>Enroll Now</EnrollButton> {/* Trigger EnrollNow modal */}
        </PricingOption>
      </PricingGrid>
      {isEnrollOpen && <EnrollNow show={isEnrollOpen} onClose={closeEnroll} />} {/* Render EnrollNow modal */}
    </PricingContainer>
  );
};

const PricingContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #121212;
  color: #fff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const PricingGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const PricingOption = styled.div`
  background-color: #2b2b2b;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  width: 300px;
`;

const PriceTitle = styled.h3`
  font-size: 1.8rem;
`;

const Price = styled.p`
  font-size: 2rem;
  margin: 1rem 0;
`;

const PriceDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

const EnrollButton = styled.button`
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

export default PricingSection;
