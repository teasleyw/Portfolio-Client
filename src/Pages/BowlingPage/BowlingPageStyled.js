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