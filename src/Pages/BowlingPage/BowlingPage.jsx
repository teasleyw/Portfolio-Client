// BowlingPage.jsx
import React, { useState } from 'react';
import {BowlingPageStyled,ScoreSection,FrameScoreInput,CalculateButton,FrameContainer,FrameNumber, BowlingPageContainer,HeroSection, HeroTitle, ThrowsContainer,TanSquare,NumberSquare,SecondNumberSquare,TotalSquare, FrameThrowsContainer,FrameContainerTwo,ScoreContainer,FrameLabel} from './BowlingPageStyled';
import PinDiagram from '../../Components/PinDiagram/PinDiagram'; // Make sure to adjust the path based on your project structure
import Header from "../../Components/Header/Header";
const BowlingPage = () => {
  // Dummy data for pin frequencies (replace it with actual data from your backend)
  const pinFrequencies = [100, 90, 18, 15, 12, 10, 8, 5, 3, 2];
  const [frameScores, setFrameScores] = useState(Array(10).fill(''));
  const [totalScore, setTotalScore] = useState(0);
    const isValidInput = (input, frameIndex, throwType) => {
        console.log(input)
        // Check if input is a valid score
        if (!/^$|^([0-9]|10|X|\/)$/.test(input)) {
          return false;
        }
        // Check if the spare ('/') is not allowed in the first throw
        if (throwType === 'firstThrow' ) {
            if ((input === '/' || Number(input) > 10)){
                return false;
            }
            if (( Number(input) + Number(frameScores[frameIndex]['secondThrow']))> 10){
                return false;
            }
        }
        if (throwType === 'secondThrow' ) {
            if (frameScores[frameIndex]['firstThrow'] === 'X' && input !== '0'){
                return false
            }
            if ((input === 'X' || Number(input) > 10)){
                return false;
            }
            if (( Number(input) + Number(frameScores[frameIndex]['firstThrow']))> 10){
                return false;
            }
            console.log(( Number(input) + Number(frameScores[frameIndex]['firstThrow'])))
        }




        return true;
      };

      const handleScoreChange = (index, throwType, value) => {
        if (isValidInput(value, index, throwType) || value === '') {
          const newFrameScores = [...frameScores];
          newFrameScores[index] = newFrameScores[index] || {};
          if (value === '10'){
            if (throwType === 'firstThrow'){
                value = 'X';
            }
            else
            {
                value = '/';
            }
           }
          if (throwType === 'secondThrow'){
            if ((Number(newFrameScores[index]['firstThrow'] )+ Number(value) === 10)){
                value = '/'
            }

          }


          newFrameScores[index][throwType] = value;
          setFrameScores(newFrameScores);

          // Recalculate the total score
          const newTotalScore = calculateTotalScore();
          setTotalScore(newTotalScore);
        }
        else{
            const newFrameScores = [...frameScores];
              newFrameScores[index] = newFrameScores[index] || {};
              newFrameScores[index][throwType] = "";
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
      console.log(frame)

      //Strike Logic
      if (frame === ""){
        continue
      }
      else if (frame['firstThrow'] ==='X' || frame['firstThrow'] ==='10'){
        frame['frameTotal'] = totalScore + 10;
        totalScore += 10;
        console.log('in strike')
        continue
      }
      //Spare Logic
      else if (frame['secondThrow'] ==='/'){
          frame['frameTotal'] = totalScore + 10;
          totalScore += 10;
          continue
      }
      else{
         const frameTotal = Number(frame['firstThrow']) + Number(frame['secondThrow'])
         console.log('in else')
         frame['frameTotal'] = totalScore + frameTotal
         totalScore += frameTotal;
      }

     }

    return totalScore;
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
                <ScoreContainer>
                 {frameScores.map((_, index) => (
                 <FrameContainerTwo>
                 <FrameLabel> {index+1} </FrameLabel>
                     <TanSquare>
                        <FrameThrowsContainer>
                            <NumberSquare
                               type="text"
                               maxLength="2"
                               value={frameScores[index].firstThrow}
                               onChange={(e) => handleScoreChange(index, 'firstThrow', e.target.value)}
                               />
                            <SecondNumberSquare
                                 type="text"
                                 maxLength="2"
                                 value={frameScores[index].secondThrow}
                                 onChange={(e) => handleScoreChange(index, 'secondThrow', e.target.value)}
                            />
                        </FrameThrowsContainer>
                        <TotalSquare> {frameScores[index].frameTotal} </TotalSquare>
                     </TanSquare>
                 </FrameContainerTwo>
                 ))}
                 </ScoreContainer>

        </BowlingPageStyled>
  );
};

export default BowlingPage;