import styled, { keyframes } from 'styled-components';
import "../../Assets/Fonts/ice_caps/IceCaps.ttf";

// Turquoise
const titleColor = "rgb(180,242,242)";
const backgroundColor = "black";

const rotate = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const LandingPageContainer = styled.div`
  display: -webkit-grid;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  background: ${backgroundColor};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LogoContainer = styled.div`
  margin: auto;
  width: 100vw;
  height: 100vh;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
`;

export const Frost = styled.div`
  color: ${titleColor};
  font-family: 'IceCaps', sans-serif;
  font-size: 90px;
  text-shadow: 0 0 0.6em hsl(0 0% 100% / 0.5), 0 0 0.6em ${titleColor};
`;

export const Milano = styled.div`
  color: ${titleColor};
  font-family: 'IceCaps', sans-serif;
  font-size: 90px;
  text-shadow: 0 0 0.4em hsl(0 0% 100% / 0.5), 0 0 0.25em ${titleColor};
`;

export const BackgroundFlower = styled.img`
  height: auto;
  width: auto;
  max-width: 50px;
  max-height: 50px;
  animation: ${rotate} 5s linear infinite;
  -webkit-animation: ${rotate} 5s linear infinite;
  opacity: 50%;
`;

export const BackgroundFlowerTransparent = styled.img`
  opacity: 0;
  height: auto;
  width: auto;
  max-width: 250px;
  max-height: 250px;
  animation: ${rotate} 2s linear infinite;
  -webkit-animation: ${rotate} 2s linear infinite;
`;

export const NeonBtn = styled.a`
  color: ${props => props.NeonColor};
  font-size: 2rem;
  font-family: IceCaps;
  display: inline-block;
  cursor: pointer;
  border: ${props => props.NeonColor} 0.125em solid;
  padding: 0.25em 1.25em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.5), 0 0 0.25em ${props => props.NeonColor};
  position: relative;
  box-shadow: inset 0 0 0.5em ${props => props.NeonColor}, 0 0 0.5em ${props => props.NeonColor};
  -webkit-box-shadow: inset 0 0 0.5em ${props => props.NeonColor}, 0 0 0.5em ${props => props.NeonColor};
  -webkit-transition: background-color 100ms linear;
  transition: background-color 100ms linear;

  &:before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: ${props => props.NeonColor};
    top: 120%;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: perspective(1em) rotateX(40deg) translateZ(0em) scale(1,0.35);
    transform: perspective(1em) rotateX(40deg) translateZ(0em) scale(1,0.35);
    filter: blur(1em);
    -webkit-filter: blur(1em);
    opacity: 0.7;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 1em 0.5em ${props => props.NeonColor};
    -webkit-box-shadow: 0 0 1em 0.5em ${props => props.NeonColor};
    -webkit-transition: opacity 100ms linear;
    transition: opacity 100ms linear;
    opacity: 0;
  }

  &:hover {
    background-color: ${props => props.NeonColor};
    color: ${backgroundColor};
    text-shadow: 0 0 0.05em hsl(0 0% 100% / 0.5), 0 0 0.25em ${backgroundColor};
  }

  &:focus {
    background-color: ${props => props.NeonColor};
    color: ${backgroundColor};
    text-shadow: none;
  }

  &:hover::after {
    opacity: 1;
  }

  &:focus::after {
    opacity: 1;
  }

  &:hover::before {
    opacity: 1;
  }
`;
