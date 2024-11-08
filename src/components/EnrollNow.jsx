import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import logo from '../assets/logo.jpeg';
import img1 from "../assets/JohnMetalson.jpg";
import img2 from "../assets/MatiasKamelman.png";
import img3 from "../assets/Instructor2.jpg";
import img4 from "../assets/Instructor3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * EnrollNow component provides a modal for users to enroll in courses.
 * It includes input fields for user data and options for course selection.
 */


const StyledModal = styled(Modal)`
  .modal-content {
    background: #1e1e1e;
    color: #fff;
    overflow: hidden;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
`;

const Input = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  height: 100px;
`;

const BasicInfoInput = styled(Input)`
  height: 40px;
  margin: 10px 0;
`;

const InstructorList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  margin: 10px 0;
`;

const InstructorOption = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const InstructorImage = styled.img`
  width: 50px;
  height: auto;
  border-radius: 50%;
  margin-right: 10px;
`;

const InstructorName = styled.span`
  color: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CloseButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #d32f2f;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;

  &:hover {
    background-color: #b71c1c;
  }
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #d32f2f;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;

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

const EnrollNow = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    city: '',
    musicBackground: '',
    gear: '',
    practiceTime: '',
    selectedInstructor: '',
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const instructors = [
    { id: 1, name: 'John Metalson', expertise: 'Metal Guitar', image: img1 },
    { id: 2, name: 'Matias Kamelman', expertise: 'Prog 6 Shred', image: img2 },
    { id: 3, name: 'Dave Rickenbach', expertise: 'Classic Metal', image: img3 },
    { id: 4, name: 'Timo Sköl', expertise: 'Thrash Metal', image: img4 },
  ];

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

  return (
    <StyledModal show={show} onHide={onClose} centered dialogClassName="modal-90w">
      <StyledModal.Header closeButton>
        <StyledModal.Title>Enroll Now</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>
        <ModalContainer>
          <BasicInfoInput
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <BasicInfoInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <BasicInfoInput
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <BasicInfoInput
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          <BasicInfoInput
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
          <BasicInfoInput
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <Input
            placeholder="Tell us about your music background (none, amateur, pro)"
            name="musicBackground"
            value={formData.musicBackground}
            onChange={handleChange}
            style={{ height: '60px' }}
          />
          <Input
            placeholder="Tell us about your Gear"
            name="gear"
            value={formData.gear}
            onChange={handleChange}
            style={{ height: '60px' }}
          />
          <Input
            placeholder="How much time do you think you can practice a week?"
            name="practiceTime"
            value={formData.practiceTime}
            onChange={handleChange}
            style={{ height: '60px' }}
          />

          <Title>Which instructor better suits your needs?</Title>
          <InstructorList>
            {instructors.map((instructor, index) => (
              <InstructorOption key={index}>
                <InstructorImage src={instructor.image} alt={instructor.name} />
                <InstructorName>{instructor.name}</InstructorName>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{
                    color: formData.selectedInstructor === instructor.name ? 'green' : '#ccc', // Shows an empty checkmark icon when unselected
                    cursor: 'pointer',
                    marginLeft: '10px',
                    fontSize: '24px',  // Ensures icon is large enough to see clearly
                    position: 'relative',
                    zIndex: 1 // Keeps icon in the foreground
                  }}
                  onClick={() => setFormData({ ...formData, selectedInstructor: instructor.name })}
                />
              </InstructorOption>
            ))}
          </InstructorList>
          {showThankYou && (
            <ThankYouModal>
              Thanks, the hounds of hell guitar will contact you soon ... (no special rite needed 😉)
            </ThankYouModal>
          )}
          {errorModalVisible && (
            <ThankYouModal>
              Please fill out the missing data.
            </ThankYouModal>
          )}

          <ButtonContainer>
            <CloseButton onClick={onClose}>Close</CloseButton>
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
          </ButtonContainer>
        </ModalContainer>
      </StyledModal.Body>
    </StyledModal>
  );
};

export default EnrollNow;
