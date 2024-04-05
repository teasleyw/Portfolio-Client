import styled, {keyframes} from 'styled-components';
import "../../Assets/Fonts/ice_caps/IceCaps.ttf"
import mountains from "../../Assets/Images/Mountains.jpg"
//Turquoise
const titleColor = "rgb(180,242,242)"
const backgroundColor = "black";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const LandingPageContainer = styled.div`
  background: black;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  background: #f4f4f4;
`
export const LandingPageContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 50px;
    max-width: 600px;
`
export const LoginButtonContainer = styled.div`
    width: 100%;

`


export const HeroSection =  styled.div`
//    background-image: url(${mountains});
//     background-size: cover; /* Cover the entire container */
//     background-position: center; /* Center the image */
    background: #f4f4f4;
    opacity:100%;
    color:black;

    font: TimeBurner-bold;
    font-size: 50px;
    align-items: center;
    justify-content: center;
    height: 33vh;
    width: 100vw;
    display: flex;
    gap: 20px;
    flex-direction: column;
    z-index: 0;
      @media screen and (max-width: 960px) {
        flex-direction: column;
        height: 50h;
      }

`
export const ButtonContainer = styled.div`
    display: flex;
    opacity 100%;
    flex-direction: row;
    justify-content: center;;
    gap: 10%;
    width: 100%;
`
export const WelcomeText = styled.div`
    font-size: 25px;
    color: black;
    text-align: center;
    width: 100%;
`
export const InfoSection = styled.div`
    background: #f4f4f4;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: start;

`
export const BackgroundFlower = styled.img`
  height: auto;
  width: auto;
  max-width: 50px;
  max-height: 50px;
  animation: ${rotate} 5s linear infinite;
  opacity: 50%;

`;
export const BackgroundFlowerTransparent = styled.img`
  opacity: 0;
  height: auto;
  width: auto;
  max-width: 250px;
  max-height: 250px;
  animation: ${rotate} 2s linear infinite;

`;

export const NeonBtn = styled.a`
   &{
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
  transition: background-color 100ms linear;
   }
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
    transform: perspective(1em) rotateX(40deg) translateZ(0em) scale(1,0.35);
    filter: blur(1em);
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

