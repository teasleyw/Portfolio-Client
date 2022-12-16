import styled from 'styled-components';
const backgroundColor = "black";
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
`
export const CoverPhoto = styled.img`
  height: auto;
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 200vw;
  max-height: 200vh;
  opacity: 30%;
`
export const NameContainer = styled.div`
  margin-left: 15vw;
  width: 25vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
`
export const Name = styled.div`
  color: ${'white'};
  font-family: "Aboreto", sans-serif; //Title Font;
  font-size: 6rem;
  text-shadow: 0 0 0.6em hsl(0 0% 100% / 0.5), 0 0 0.6em ${nameColor};
`
export const Occupation = styled.div`
  color: ${'yellow'};
  font-family: "Aboreto", sans-serif; //Title Font;
  font-size: 2rem;
  text-shadow: 0 0 0.6em hsl(0 0% 100% / 0.5), 0 0 0.6em ${nameColor};
`

export const FooterLinks = styled.div`
`