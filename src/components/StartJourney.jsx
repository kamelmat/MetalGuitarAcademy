import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpeg';
import logo2 from "../assets/logo2.jpeg";
import logo3 from "../assets/newlogo.png";

/**
 * StartJourney component provides a form for users to enroll in courses.
 * It includes input fields for user data and options for course selection.
 */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
  z-index: 1000;
`;

const Logo = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
`;

const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #d32f2f;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #b71c1c;
  }
`;

const ThankYouModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
  width: 90%;
  max-width: 600px;
`;

const PricingModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #444;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
  width: 90%;
  max-width: 600px;
`;

const PricingOption = styled.div`
  margin: 10px 0;
  padding: 10px;
  background-color: #555;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OptionImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

const StartJourney = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    address: '',
    phone: '',
    country: '',
    city: '',
    preferredMode: 'Live Classes',
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    return Object.values(formData).every((value) => value.trim() !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrorModalVisible(true);
      return; // Stop further execution if validation fails
    }

    // Show the Thank You modal first, then close the Start Journey component
    showThankYouModal();
    setTimeout(() => {
      onClose(); // Close the Start Journey component after 3 seconds
    }, 3000);
  };

  const showThankYouModal = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000); // Hide after 3 seconds
  };

  const openPricingModal = () => {
    setShowPricingModal(true);
  };

  const closePricingModal = () => {
    setShowPricingModal(false);
  };

  const handleSelectCourse = (course) => {
    console.log(`Selected course: ${course}`);
    closePricingModal(); // Close the pricing modal
    showThankYouModal(); // Show thank you message
    setTimeout(() => {
      onClose(); // Close the Start Journey component after 3 seconds
    }, 3000);
  };

  return (
    <Container>
      <Logo src={logo} alt="Heavy Metal Guitar Academy" />
      <h2>Start Your Journey</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <Select
          name="preferredMode"
          value={formData.preferredMode}
          onChange={handleChange}
        >
          <option value="Live Classes">Live Classes</option>
          <option value="AI Generated Course">AI Generated Course</option>
          <option value="Pick the material yourself">Pick the material yourself</option>
        </Select>
        <Button type="button" onClick={openPricingModal}>Be Contacted by an Instructor</Button>
        <Button type="button" onClick={onClose}>Cancel</Button>
        <Button type="submit">Sign Up</Button>
      </Form>
      {showThankYou && (
        <ThankYouModal>
          Thanks, the hounds of hell guitar will contact you soon ... (no special rite needed 😉)
        </ThankYouModal>
      )}
      {showPricingModal && (
        <PricingModal>
          <h3>Select Your Course</h3>
          <PricingOption>
            <OptionImage src={logo} alt="Live Classes" />
            <h4>Live Classes - $19.99/month</h4>
            <p>Personalized instruction with expert teachers.</p>
            <Button onClick={() => handleSelectCourse('Live Classes')}>Pick</Button>
          </PricingOption>
          <PricingOption>
            <OptionImage src={logo2} alt="AI Generated Course" />
            <h4>AI Generated Course - $14.99/month</h4>
            <p>AI-generated lessons tailored to your skill level.</p>
            <Button onClick={() => handleSelectCourse('AI Generated Course')}>Pick</Button>
          </PricingOption>
          <PricingOption>
            <OptionImage src={logo3} alt="Pick the Material Yourself" />
            <h4>Pick the Material Yourself - $5.99/month</h4>
            <p>Choose your own materials and learn at your own pace.</p>
            <Button onClick={() => handleSelectCourse('Pick the Material Yourself')}>Pick</Button>
          </PricingOption>
          <Button onClick={closePricingModal}>Close</Button>
        </PricingModal>
      )}
      {errorModalVisible && (
        <ThankYouModal>
          Please fill out the missing data.
        </ThankYouModal>
      )}
    </Container>
  );
};

export default StartJourney;
