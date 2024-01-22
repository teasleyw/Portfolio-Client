// PinDiagram.js
 import React from 'react';
 import styled from 'styled-components';

 const PinDiagramContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   flex-direction: column;
   justify-content: center;
 `;

 const BowlingPinRectangle = styled.div`
   width: 40px;
   height: 100px;
   background-color: ${({ percentage }) => `rgba(255, 99, 132, ${percentage / 100})`};
   border: 1px solid #000000;
   margin: 5px;
   display: flex;
   flex-direction: column;
   align-items: center;
 `;

// const BowlingPinRectangle = styled.div`
//     margin: 5px;
//     height: 50px;
//     width: 30px;
//     border-radius: 50% 50% 40% 40%;
//     border: solid black;
//     background-color: ${({ percentage }) => `rgba(255, 99, 132, ${percentage / 100})`};
//     &::before{
//     display: block;
//     position: relative;
//     top: -32px;
//     left: 4px;
//     content: '';
//     height: 20px;
//     width: 20px;
//     border: solid black;
//     border-radius: 50%;
//     background: radial-gradient(white 0 50%, gray 90%);
// }
//
//    &::after{
//     display: block;
//     position: relative;
//     content: '';
//     top: -35px;
//     left: 8px;
//     width: 12px;
//     height: 14px;
//     background: linear-gradient(90deg, gray 2%, transparent 30% 70%, gray 96%), linear-gradient(white 0 30%, red 30% 40%, white 40% 60%, red 60% 70%, white 70%);
//     border: solid black;
//     border-top: none;
//     border-bottom: none;
// }
// `
  const BowlingPin = styled.div`
  margin: 5px;
  height: 50px;
  width: 30px;
  border-radius: 50% 50% 40% 40%;
  border: solid black;
  background: radial-gradient(white 0 50%, gray 90%);


  &::before {
    content: '';
    display: block;
    position: relative;
    top: -32px;
    left: 4px;
    height: 20px;
    width: 20px;
    border: solid black;
    border-radius: 50% 50% 30% 30%;
    background: radial-gradient(white 0 50%, gray 90%);
  }

  &::after {
    content: '';
    display: block;
    position: relative;
    top: -35px;
    left: 8px;
    width: 12px;
    height: 14px;

    background: linear-gradient(90deg, gray 2%, transparent 30% 70%, gray 96%),
      linear-gradient(white 0 30%, red 30% 40%, white 40% 60%, red 60% 70%, white 70%);
    border: solid black;
    border-top: none;
    border-bottom: none;

  }
`;



 const PinNumber = styled.span`
   color: #333;
   font-weight: bold;
   margin-top: 5px;
 `;

 const BowlingPinRow = styled.div`
   display: flex;
   justify-content: center;
   width: 240px; /* Adjust as needed */
 `;

//  const BowlingPin = ({ percentage, pinNumber }) => {
//    return (
//     <BowlingPinRectangle percentage={percentage}>
//          <PinNumber>{pinNumber}</PinNumber>
//     </BowlingPinRectangle>
//    );
//  };

 const PinDiagram = () => {
   const pinPercentages = [100, 80, 60, 40, 20, 40, 60, 80, 100, 50]; // Customize percentages as needed

   return (
     <PinDiagramContainer>
       <BowlingPinRow>
         <BowlingPin percentage={pinPercentages[0]} pinNumber={1} />
       </BowlingPinRow>
       <BowlingPinRow>
         <BowlingPin percentage={pinPercentages[1]} pinNumber={2} />
         <BowlingPin percentage={pinPercentages[2]} pinNumber={3} />
       </BowlingPinRow>
       <BowlingPinRow>
         <BowlingPin percentage={pinPercentages[3]} pinNumber={4} />
         <BowlingPin percentage={pinPercentages[4]} pinNumber={5} />
         <BowlingPin percentage={pinPercentages[5]} pinNumber={6} />
       </BowlingPinRow>
       <BowlingPinRow>
         <BowlingPin percentage={pinPercentages[6]} pinNumber={7} />
         <BowlingPin percentage={pinPercentages[7]} pinNumber={8} />
         <BowlingPin percentage={pinPercentages[8]} pinNumber={9} />
         <BowlingPin percentage={pinPercentages[9]} pinNumber={10} />
       </BowlingPinRow>

     </PinDiagramContainer>
   );
 };

 export default PinDiagram;