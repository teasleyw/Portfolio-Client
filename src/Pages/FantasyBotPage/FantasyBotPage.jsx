// src/components/FantasyBotPage.jsx

import React from 'react';
import { FantasyBotPageWrapper, Button } from './FantasyBotPageStyled';

function FantasyBotPage() {
  const handleButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:8080/automate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.text();
        alert(result);
      } else {
        throw new Error('Failed to execute script');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while executing the script');
    }
  };

  return (
    <FantasyBotPageWrapper>
      <h1>Fantasy Bot Page</h1>
      <p>Click the button below to run the automation script:</p>
      <Button onClick={handleButtonClick}>Run Automation Script</Button>
    </FantasyBotPageWrapper>
  );
}

export default FantasyBotPage;
