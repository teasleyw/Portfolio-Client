import React from 'react';
import { ErrorPopupContainer, PopupContent, CloseButton } from './ErrorPopupStyled.jsx'; // Import the styled components
const ErrorPopup = ({ message, onClose }) => {
  return (
    <ErrorPopupContainer className="error-popup">
      <PopupContent>
        <CloseButton className="close-btn" onClick={onClose}>&times;</CloseButton>
        <p>{message}</p>
      </PopupContent>
    </ErrorPopupContainer>
  );
};

export default ErrorPopup;