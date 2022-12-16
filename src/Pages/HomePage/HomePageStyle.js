import styled from 'styled-components'
import backgroundImage from "../../Assets/Images/coverPhoto.jpg"
import backgroundImageMobile from "../../Assets/Images/mobilePhoto.jpg"
const backgroundColor = "black"
const nameColor = "white"
export const HomePageContainer = styled.div`
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
export const CoverPhoto = styled.div`
  background-image: url(${backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  max-width: 200vw;
  max-height: 200vh;
  opacity: 30%;
  z-index: -1;
  @media screen and (max-width: 960px) {
    background-image: url(${backgroundImageMobile});
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 100vw;
    height: 100vh;
  }
  @media screen and (max-width: 1215px) {
    background-size: cover;
  }
  
`
export const MainContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  z-index: 999;
  @media screen and (max-width: 960px) {
    width: 100vw;
    justify-content: center;
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