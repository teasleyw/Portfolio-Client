import styled from 'styled-components';
import {AccentColor} from "../../utils/constants"
const LightBlue = '#add8e6';
const white = '#fefefe';
const darkGray = '#333333';
const mediumGray = '#555555';
const borderColor = '#444444';
const lightGray = '#d3d3d3';

export const SubmitContainer = styled.div`
  width: 80%;
  background-color: #1e1e1e;  // Dark background for the container
  padding: 20px;
  border-radius: 10px;
`;

export const InfoText = styled.p`
  font-size: 16px;
  color: ${lightGray}; /* General text color */
  margin-bottom: 20px;

  a {
    color: ${AccentColor}; /* Email link color */
    text-decoration: none;
    &:hover {
      color: ${LightBlue}; /* Lighter color on hover */
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: ${AccentColor};
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid ${borderColor};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  resize: none;
  font-size: 16px;
  color: ${white};
  background-color: ${darkGray};
  &:focus {
    border-color: ${white};
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${mediumGray};
  color: ${white};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${darkGray};
  }
`;


export const EmailDisplay = styled.div`
  margin-top: 20px;
  color: ${white};
  font-size: 14px;
  font-style: italic;
`;