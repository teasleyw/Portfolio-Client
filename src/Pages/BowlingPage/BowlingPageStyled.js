// BowlingPageStyled.js
import styled from 'styled-components';

export const BowlingPageStyled = styled.div`
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;

  h1 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }

  /* Add more styling as needed */
`;

export const HeroSection = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 40px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;


export const ScoreSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  overflow: hidden;
  flex-wrap: wrap;

`;

export const FrameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const FrameNumber = styled.div`
  font-size: 1.2em;
  margin-right: 10px;
`;

export const ThrowsContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 5px;
  }
`;


export const FrameScoreInput = styled.input`
  width: 40px;
  height: 40px;
  margin: 5px;
  color:white;
  text-align: center;
  font-size: 1.2em;
  border: 1px solid #000;
  border-radius: 5px;
  outline: none;
`;

export const CalculateButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1.2em;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;

  &:hover {
    background-color: #218838;
  }
`;

export const TanSquare = styled.div`
  color: white;

  display: flex;
  flex-direction: column;
  width: 100px; /* Adjust the width as needed */
  height: 100px;
  align-items: flex-start;
  justify-content: right;
  background-color: #272727;
  border: 2px solid tan; /* Add a black border with 2 pixels width */
`;
export const FinalFrame = styled.div`
  color: white;

  display: flex;
  flex-direction: column;
  width: 150px; /* Adjust the width as needed */
  height: 100px;
  align-items: flex-start;
  justify-content: right;
  background-color: #272727;
  border: 2px solid tan; /* Add a black border with 2 pixels width */
`;

export const FrameThrowsContainer = styled.div`
  width: 100%; /* Adjust the width of the number square */
  height: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: right;
//  padding-top: 20%; /* Maintain aspect ratio, adjust if needed */
  background-color: #272727; /* Set background color for the number square */
  //border: 1px solid black; /* Add a black border to the number square */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
export const NumberSquare = styled.input`
  width: 50%; /* Adjust the width of the number square */
  height: 100%;
  color: white;
  text-shadow: none;
  border-radius: 0;
  box-sizing: border-box;
//  padding-top: 20%; /* Maintain aspect ratio, adjust if needed */
  background-color: #272727; /* Set background color for the number square */
  //border: 1px solid black; /* Add a black border to the number square */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`;

export const SecondNumberSquare = styled.input`
  width: 50%; /* Adjust the width of the number square */
  height: 100%;
  color: white;
  text-shadow: none;
  border-radius: 0;
  box-sizing: border-box;
  border: 3px solid white; /* Add a black border to the second number square */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`;
export const TotalSquare = styled.div`
  width: 100%; /* Adjust the width of the number square */
  height: 50%;
  background-color: #272727; /* Set background color for the second number square */
  box-sizing: border-box;
  font-size: 20px;
  //border: 3px solid black; /* Add a black border to the second number square */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
export const ScoreContainer =  styled.div`
    display: flex;
`
export const FrameLabel =  styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    border: 1px solid black;
`
export const FrameContainerTwo =  styled.div`
    display: flex;
    flex-direction: column
`
