
// LoginPageStyled.js
import styled, { css, keyframes } from 'styled-components';

// Define variables for button colors and size
const pushColor = 'hsla(10, 90%, 40%, 1)';
const pushSize = '240px';

// Define a function to generate a random number within a range

export const ArcadeButton = styled.button`
  /* Arcade button styles */
  padding: 20px 40px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #ff0000; /* Red color */
  color: #ffffff; /* White text */
  border: 3px solid #000000; /* Black border */
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 5px 0px 0px #000000; /* Button shadow */

  /* Hover effect */
  &:hover {
    background-color: #ff3333; /* Lighter red on hover */
  }

  /* Active (pressed) state */
  &:active {
    box-shadow: 0px 2px 0px 0px #000000; /* Adjust shadow when pressed */
    transform: translateY(2px); /* Add slight downward movement when pressed */
  }
`;

export const LoginPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(to bottom, #cbe7ff, #a7d8ff); /* Icy blue gradient background */
`;

export const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

export const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-color: #007bff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  background-image: linear-gradient(135deg, #8ed6ff 0%, #0045ad 100%);
`;

// Keyframes for icicle animation
const shakeAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-.5deg);
  }
  50% {
    transform: rotate(.5deg);
  }
  75% {
    transform: rotate(-.25deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const fallAnimation = keyframes`
  0% {
    transform: translateY(0vh);
  }
  100% {
    transform: translateY(120vh);
  }
`;
const tearanime = keyframes `
  0% {top: 0; opacity: 0;}
  50% {opacity: 1;}
  80% { opacity: 1; top: 25%; }
  80%, 100% { top: 25%; opacity: 0; }
`

export const Tear = styled.div`
    position: absolute;
    opacity: 0;
      top: 0;
      left: 30px;
      width: 1.3vw;
      height: 1.3vw;
      border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
      background: #82b0e2;
      animation: ${tearanime} ${({ duration }) => duration}s infinite;
      animation-delay: ${({ delay }) => delay}s;
      transform: translateX(-50%) rotate(-45deg);
`;

// Styled component for the icicle
export const Icicle = styled.div`
  position: absolute;
  display: flex;
  height: 100vh;
  bottom: 0;
  top: 0;
  cursor: pointer;
  animation: ${({ isFalling }) => (isFalling ? fallAnimation : 'none')} 2s linear infinite;
  &:hover {
    animation: ${shakeAnimation} 0.5s ease-in-out infinite alternate;
  }
    &:after {
       left: ${({ width }) => width}px;
       border-style: solid;
       content: '';
       position: absolute;
       border-width: ${({ width }) => width * 5}px ${({ width }) => width}px 0 0; /* Adjust the border-width values as needed */
       border-color: #a6c4e6 transparent transparent transparent;
    }

    /* Border on the bottom half */
    &:before {
      border-style: solid;
      content: '';
      position: absolute;
      border-width: 0 ${({ width }) => width}px ${({ width }) => width * 5}px 0; /* Adjust the border-width values as needed */
      border-color: transparent #81abdb transparent transparent;
    }
`;
export const LoginFormContainer = styled.form`
  width: 300px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;
export const screenShakeAnimation = keyframes`
    0% {
        transform: rotate(0deg) translateX(0px);
      }
      25% {
        transform: rotate(-5deg) translateX(5px);
      }
      50% {
        transform: rotate(5deg) translateX(-5px);
      }
      75% {
        transform: rotate(-5deg) translateX(-3px);
      }
      100% {
        transform: rotate(0deg) translateX(0px);
      }
`;

export const Screen = styled.div`
  ${({ isShaking }) => isShaking && css`animation: ${screenShakeAnimation} 0.5s ease-in-out;`}
`;

const warningAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
export const AvalancheWarning = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Triangle = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-left: 200px solid transparent;
  border-right: 200px solid transparent;
  border-bottom: 400px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: black;
  z-index: 1000; /* Ensure it appears above other components */
  animation: ${warningAnimation} 1s ease-in-out forwards;

  &::before {
    content: '';
    position: absolute;
    top: -5px; /* Adjust to control the distance of the border inside the triangle */
    left: -5px; /* Adjust to control the distance of the border inside the triangle */
    width: 0;
    height: 0;
    border-left: 210px solid transparent; /* Adjust based on the border-width and triangle size */
    border-right: 210px solid transparent; /* Adjust based on the border-width and triangle size */
    border-bottom: 410px solid black; /* Adjust based on the border-width and triangle size */
    z-index: -1; /* Place the border below the triangle */
  }
`;