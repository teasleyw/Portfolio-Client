// BowlingPage.jsx
import React, { useState } from 'react';
import {BowlingPageStyled,ScoreSection,FrameScoreInput,CalculateButton,FrameContainer,FrameNumber, BowlingPageContainer,HeroSection, HeroTitle, ThrowsContainer} from './BowlingPageStyled';
import PinDiagram from '../../Components/PinDiagram/PinDiagram'; // Make sure to adjust the path based on your project structure
import Header from "../../Components/Header/Header";
const BowlingPage = () => {
  // Dummy data for pin frequencies (replace it with actual data from your backend)
  const pinFrequencies = [100, 90, 18, 15, 12, 10, 8, 5, 3, 2];
  const [frameScores, setFrameScores] = useState(Array(10).fill(''));
  const [totalScore, setTotalScore] = useState(0);
    const isValidInput = (input, frameIndex, throwType) => {
        // Check if input is a valid score
        if (!/^$|^([0-9]|10|X|\/)$/.test(input)) {
          return false;
        }

        // Parse input value
        const inputValue = input === '' ? 0 : input === 'X' ? 10 : input === '/' ? 10 - getThrowValue(frameScores[frameIndex].firstThrow, frameIndex) : parseInt(input, 10);

        // Check if the spare ('/') is not allowed in the first throw
        if (throwType === 'firstThrow' && input === '/') {
          return false;
        }
        if (throwType === 'secondThrow' && input === 'X') {
                  console.log('here');
                  return false;
        }

        // Check if the total score for the frame doesn't exceed 10
        if (throwType === 'secondThrow' && frameIndex < 9) {
          const firstThrowValue = getThrowValue(frameScores[frameIndex].firstThrow, frameIndex);
          return firstThrowValue + inputValue <= 10 && firstThrowValue !== null;
        }

        return true;
      };

      const handleScoreChange = (index, throwType, value) => {
        if (isValidInput(value, index, throwType) || value === '') {
          const newFrameScores = [...frameScores];
          newFrameScores[index] = newFrameScores[index] || {};
          newFrameScores[index][throwType] = value;
          setFrameScores(newFrameScores);

          // Recalculate the total score
          const newTotalScore = calculateTotalScore();
          setTotalScore(newTotalScore);
        }
      };
  const calculateTotalScore = () => {
    let totalScore = 0;

    for (let i = 0; i < frameScores.length; i++) {
      const frame = frameScores[i];

      if (frame && frame.firstThrow !== null) {
        const firstThrowValue = getThrowValue(frame.firstThrow, i);
        totalScore += firstThrowValue;

        if (frame.secondThrow !== null) {
          const secondThrowValue = getThrowValue(frame.secondThrow, i);
          totalScore += secondThrowValue;

          // Check for a strike to calculate the strike bonus
          if ((frame.firstThrow === 'X' ||frame.firstThrow ==='10') && i < 9) {
            const nextFrame = frameScores[i + 1];
            if (nextFrame && nextFrame.firstThrow !== null) {
              const nextFirstThrowValue = getThrowValue(nextFrame.firstThrow, i + 1);
              totalScore += nextFirstThrowValue;

              if ((frame.firstThrow === 'X' ||frame.firstThrow ==='10') && i + 1 < 9) {
                const nextNextFrame = frameScores[i + 2];
                if (nextNextFrame && nextNextFrame.firstThrow !== null) {
                  const nextNextFirstThrowValue = getThrowValue(nextNextFrame.firstThrow, i + 2);
                  totalScore += nextNextFirstThrowValue;
                }
              } else {
                const nextSecondThrowValue = getThrowValue(nextFrame.secondThrow, i + 1);
                totalScore += nextSecondThrowValue;
              }
            }
          }

          // Check for a spare to calculate the spare bonus
          if (frame.secondThrow === '/' && i < 9) {
            const nextFrame = frameScores[i + 1];
            if (nextFrame && nextFrame.firstThrow !== null) {
              const nextFirstThrowValue = getThrowValue(nextFrame.firstThrow, i + 1);
              totalScore += nextFirstThrowValue;
            }
          }
        }
      }
    }

    return totalScore;
  };

    const calculateStrikeBonus = (frameIndex) => {
      const nextFrame = frameScores[frameIndex + 1] || {}; // Make sure nextFrame is an object
      const nextNextFrame = frameScores[frameIndex + 2] || {}; // Make sure nextNextFrame is an object
      const firstThrow = getThrowValue(nextFrame.firstThrow, frameIndex + 1);
      const secondThrow = getThrowValue(nextFrame.secondThrow, frameIndex + 1);
      const nextNextThrow = getThrowValue(nextNextFrame.firstThrow, frameIndex + 2);
      return firstThrow + secondThrow + nextNextThrow;
    };

    const calculateSpareBonus = (frameIndex) => {
      const nextFrame = frameScores[frameIndex + 1] || {}; // Make sure nextFrame is an object
      const firstThrow = getThrowValue(nextFrame.firstThrow, frameIndex + 1);
      return firstThrow;
    };

    const getThrowValue = (throwValue, currentIndex) => {
      switch (throwValue) {
        case 'X':
          return 10;
        case '/':
          return 10 - getThrowValue(frameScores[currentIndex].firstThrow, currentIndex);
        default:
          return parseInt(throwValue, 10) || 0;
      }
    };



  return (
    <BowlingPageStyled>
          <Header/>
          <HeroSection>
            <HeroTitle>Bowling Statistical Analysis </HeroTitle>
            <p> UNDER CONSTRUCTION </p>
          </HeroSection>
          <PinDiagram pinPercentage={pinFrequencies} />
          <ScoreSection>
                  {frameScores.map((_, index) => (
                    <FrameContainer key={index}>
                      <FrameNumber>{index + 1}</FrameNumber>
                      <ThrowsContainer>
                        <FrameScoreInput
                          type="text"
                          maxLength="2"
                          value={frameScores[index].firstThrow}
                          onChange={(e) => handleScoreChange(index, 'firstThrow', e.target.value)}
                        />
                        <span>/</span>
                        <FrameScoreInput
                          type="text"
                          maxLength="2"
                          value={frameScores[index].secondThrow}
                          onChange={(e) => handleScoreChange(index, 'secondThrow', e.target.value)}
                        />
                      </ThrowsContainer>
                    </FrameContainer>
                  ))}
                  <div>Total Score: {totalScore}</div>
                  <CalculateButton onClick={() => alert(`Total Score: ${calculateTotalScore()}`)}>
                    Calculate Total Score
                  </CalculateButton>
                </ScoreSection>
        </BowlingPageStyled>
  );
};

export default BowlingPage;