// BowlingPage.jsx
import React, { useState } from 'react';
import {BowlingPageStyled,ScoreSection,FrameScoreInput,CalculateButton,FrameContainer,FrameNumber, BowlingPageContainer,HeroSection, HeroTitle, ThrowsContainer,TanSquare,NumberSquare,SecondNumberSquare,TotalSquare, FrameThrowsContainer,FrameContainerTwo,ScoreContainer,FrameLabel, FinalFrame} from './BowlingPageStyled';
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
        if (throwType === 'firstThrow' && frameIndex != 9 ) {
            if ((input === '/' || Number(input) > 10)){
                return false;
            }
            if (( Number(input) + Number(frameScores[frameIndex]['secondThrow']))> 10){
                return false;
            }
        }
        if (throwType === 'secondThrow' && frameIndex != 9) {
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
    let strikeBonus = 0;

    for (let i = 0; i < frameScores.length; i++) {

      const frame = frameScores[i];
      console.log(frame)



      if (frame === ""){
        continue
      }
      else if (frame['firstThrow'] === '' || frame['secondThrow'] === '') {
        frame['frameTotal'] = ""
        continue
      }
      else if (!('secondThrow' in frame) && frame['firstThrow'] !== 'X' ){
        frame['frameTotal'] = ""
        continue;
      }
//       else if (i == 9){
//          //Strike Logic
//          if (!('firstThrow' in frame) || !('secondThrow' in frame)){
//              frame['frameTotal'] = ""
//              continue;
//          }
//          else {
//               if (frame['firstThrow'] == 'X'){
//                   let firstThrow = 10
//                   frame['frameTotal'] += firstThrow
//                   totalScore += firstThrow
//               }
//               else if (frame['secondThrow'] == '/'){
//                     let firstThrow = 10
//                       frame['frameTotal'] += firstThrow
//                       totalScore += firstThrow
//                     if (frame['thirdThrow'] == 'X'){
//                          let thirdThrow = 10
//                           frame['frameTotal'] += thirdThrow
//                           totalScore += thirdThrow
//                     }
//                     else{
//                          let thirdThrow = Number(frame['thirdThrow'])
//                          frame['frameTotal'] += thirdThrow
//                          totalScore += thirdThrow
//                     }
//               }
//
//               else{
//                     let firstThrow = Number(frame['firstThrow'])
//                     frame['frameTotal'] += firstThrow
//                     totalScore += firstThrow
//                     let secondThrow = Number(frame['secondThrow'])
//                     frame['frameTotal'] += secondThrow
//                     totalScore += secondThrow
//               }
//               if (frame['secondThrow'] == 'X'){
//                     let secondThrow = 10
//                     frame['frameTotal'] += secondThrow
//                     totalScore += secondThrow
//               }
//               else{
//                   let secondThrow = Number(frame['secondThrow'])
//                   frame['frameTotal'] += secondThrow
//                   totalScore += secondThrow
//                   if (frame['thirdThrow'] == '/'){
//                      frame['frameTotal'] += 10
//                      totalScore += 10
//                   }
//                   else{
//                        let thirdThrow = Number(frame['thirdThrow'])
//                        frame['frameTotal'] += thirdThrow
//                        totalScore += thirdThrow
//                   }
//               }
//               if (frame['thirdThrow'] == 'X'){
//                   let thirdThrow = 10
//                   frame['frameTotal'] += thirdThrow
//                   totalScore += thirdThrow
//               }
//
//
//          }
//
//
//       }
      //Strike Logic
      else if (frame['firstThrow'] ==='X' || frame['firstThrow'] ==='10'){
        frame['frameTotal'] = totalScore + 10;
        totalScore += 10;
        if (Object.keys(frameScores[i+1]).length === 0){
            frame['frameTotal'] = ""
            continue;
        }
        else if (frameScores[i+1]['firstThrow'] === ''){
            frame['frameTotal'] = ""
            continue;
        }
        else if (frameScores[i+1]['firstThrow'] !== 'X'){
             let firstBonus = Number(frameScores[i+1]['firstThrow'])
             frame['frameTotal'] += firstBonus
             totalScore += firstBonus
             if ('secondThrow' in frameScores[i+1]){
                 if (frameScores[i+1]['secondThrow'] === ''){
                      frame['frameTotal'] = ""
                      continue;
                 }
                 else if (frameScores[i+1]['secondThrow'] === '/'){
                    frame['frameTotal'] += 10 - firstBonus
                    totalScore += 10 - firstBonus
                 }
                 else{
                    frame['frameTotal'] += Number(frameScores[i+1]['secondThrow'])
                    totalScore += Number(frameScores[i+1]['secondThrow'])
                 }
             }
             else{
                frame['frameTotal'] = ""
                continue;
             }
        }
        else{
            frame['frameTotal'] += 10
            totalScore += 10
            if (frameScores[i+2]['firstThrow'] === 'X'){
                frame['frameTotal'] += 10
                totalScore += 10
            }
            else{
                 let secondBonus = Number(frameScores[i+2]['firstThrow'])
                 frame['frameTotal'] += secondBonus
                 totalScore += secondBonus
            }
        }

        continue
      }
      //Spare Logic
      else if (frame['secondThrow'] ==='/'){
          frame['frameTotal'] = totalScore + 10;
          totalScore += 10;
          if (Object.keys(frameScores[i+1]).length === 0){
              frame['frameTotal'] = ""
              continue;
          }
          else if (frameScores[i+1]['firstThrow'] === ''){
              frame['frameTotal'] = ""
              continue;
          }
          else if (frameScores[i+1]['firstThrow'] !== 'X'){
               let firstBonus = Number(frameScores[i+1]['firstThrow'])
               frame['frameTotal'] += firstBonus
               totalScore += firstBonus
          }
          else{
              frame['frameTotal'] += 10
              totalScore += 10
          }
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
                 <>
                 {index == 9 &&
                  <FrameContainerTwo>
                            <FrameLabel> {index+1} </FrameLabel>
                                <FinalFrame>
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
                                       <SecondNumberSquare
                                          type="text"
                                          maxLength="2"
                                          value={frameScores[index].thirdThrow}
                                          onChange={(e) => handleScoreChange(index, 'thirdThrow', e.target.value)}
                                     />
                                   </FrameThrowsContainer>
                                   <TotalSquare> {frameScores[index].frameTotal} </TotalSquare>
                                </FinalFrame>
                            </FrameContainerTwo>
                 }
                 {index != 9 &&
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
                   }
                   </>

                 ))}
                 </ScoreContainer>

        </BowlingPageStyled>
  );
};

export default BowlingPage;