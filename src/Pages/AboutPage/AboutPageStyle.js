import styled from 'styled-components'
import backgroundImage from "../../Assets/Images/Nineties.jpg"
import backgroundImageMobile from "../../Assets/Images/mobilePhoto.jpg"
const backgroundColor = "black"
const altBackgroundColor = "rgb(255, 253, 208)"
const nameColor = "white"
const percentage = "25%"

export const AboutPageContainer = styled.div`
  background: ${backgroundColor};
  width: 100vw;
  color: white;
  height: 140vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`
export const Icon = styled.div`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    transition: transform 1s ease-in-out,opacity 1s ease-in-out,background-size 1s ease-in-out;
    transform: translateY(${props => (props.animate ? '0' : '2vh')});
    background-size: ${props => props.animate ? "50%" : "60%"};
    opacity: ${props => props.animate ? "100%" : "0"};
    background-position: center;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 960px) {
    background-size: ${props => props.animate ? "25%" : "30%"};
    transform: translateY(${props => (props.animate ? '0' : '0')});

  }
`
export const HeroSection =  styled.div`
    background: ${altBackgroundColor};
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    z-index: -1;
      @media screen and (max-width: 960px) {
        flex-direction: column;
        height: 50vh;
      }

`

export const HeroSectionInfo = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: black;
      font-family: Textile-Regular;
      font-size: 2rem;
      align-items: center;
      width: 50%;
      transition: transform 1s ease-in-out,opacity 1s ease-in-out;
      transition-delay: 0.5s;
      transform: translateY(${props => (props.animate ? '0' : '2vh')});
      opacity: ${props => props.animate ? "100%" : "0"};
      flex-grow: 0;
      flex-basis: 50%;
      flex-shrink: 0;
      //opacity: 25%;
      @media screen and (max-width: 960px) {
        width: 100vw;
        flex-basis: 25%;
        margin-left: 0;
      }

`
export const CoverPhoto = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 100%;
  position: absolute;
  max-width: 200vw;
  max-height: 200vh;
  opacity: 30%;
  z-index: -1;
  @media screen and (max-width: 960px) {
    background-image: url(${backgroundImage});
    max-width: 100vw;
    height: 100vh;
  }
  @media screen and (max-width: 1215px) {
    background-size: cover;
  }
  
`
export const MainContentContainer = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  z-index: 999;
  @media screen and (max-width: 960px) {
    width: 100vw;
    justify-content: flex-start;
    align-content: center;
    margin-left: 0;
  }
  
`
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 960px) {
    width: 100vw;
    margin-left: 0;
  }
`
export const Name = styled.div`
  color: ${'white'};
  font-family: "Aboreto", sans-serif; //Title Font;
  font-size: 5.5vw;
  text-shadow: 0 0 0.6em hsl(0 0% 100% / 0.5), 0 0 0.6em ${nameColor};
  text-align: center;
  opacity: 100%;
  padding-left: 25%;
  @media screen and (max-width: 960px) {
    padding-left: 0;
    font-size: 4rem;
  }
`
export const Occupation = styled.div`
  color: ${'yellow'};
  font-family: "Aboreto", sans-serif; //Title Font;
  font-size: 2vw;
  text-shadow: 0 0 0.6em hsl(0 0% 100% / 0.5), 0 0 0.6em ${nameColor};
  text-align: left;
  padding-left: 25%;
  @media screen and (max-width: 960px) {
    padding-left: 0;
    font-size: 2rem;

  }
`

export const FooterLinks = styled.div`
`