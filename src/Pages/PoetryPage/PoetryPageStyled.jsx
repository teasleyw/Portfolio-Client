import styled from 'styled-components';
import {AccentColor, MobileSize} from "../../utils/constants"

//const backgroundColor = "#D8D8D8";
const backgroundColor = "#272727";
//const poemColor = "#000"
const poemColor = "#D8D8D8"
const poemTitleColor = "rgb(255, 253, 208)"
const poemAuthorColor = "rgb(255, 253, 208)"
const titleColor = "rgb(180,242,242)"



export const PoetryPageContainer = styled.div`
  background: ${backgroundColor};
  width: 100vw;
  color: white;
  height: fit-content;
  min-height: 140vh;
  overflow: hidden;
  position: absolute;
  align-items: center;
  top: 0;
  left: 0;
  opacity: ${props => props.opacity || 1};
`
// Poem Container
export const PoemContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
`;
export const PoemOfTheDay= styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    justify-self: flex-start;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${titleColor};
    font-family: "IceCaps", sans-serif; //Title Font;
    font-size: 3rem;
    text-shadow: 0 0 0.2em hsl(0 0% 100% / 0.5), 0 0 0.6em ${titleColor};
    cursor: pointer;
    transform-origin: right;
    transform: scaleX(1);
    background: linear-gradient(to right, white 20%, #0AF 40%, #0AF 60%, #0AF 80%);
    background-size: 200% auto;

    color: #000;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 1.5s linear infinite;
    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
    &:after {
      transition: all .4s ease-out;
      right: 100%;
      }
   @media screen and (max-width: ${MobileSize}) {
       font-size: 2.5rem;
   }
    @media screen and (max-width: ${"400px"}) {
          font-size: 2.3rem;
      }


`
export const PoemTitle = styled.div`
    color: ${AccentColor};
    font-size: 35px;

    text-align: center;
    @media screen and (max-width: ${MobileSize}) {
          font-size: 25px;
      }
`
export const PoemAuthor = styled.div`
    color: ${AccentColor};
    font-size: 35px;
    text-align: center;
    @media screen and (max-width: ${MobileSize}) {
          font-size: 25px;
      }
`
export const PoemText = styled.div`
    margin-top: 30px;
    white-space: pre-wrap;
`
export const PoemItemContainer = styled.div``
export const Poem = styled.div`
    background: #303030;
    border-radius: 25px;
    padding: 2rem;
    color: ${poemColor};
    font-size: 26px;
    z-index: 1;
    outline: none;
    line-height: 1.8rem;
    font-family: 'Maitree', serif;
     @media screen and (max-width: ${MobileSize}) {
               font-size: 20px;
               padding: none;
               width: 90vw;
     }
`
export const ButtonContainer = styled.div`
  width: 100vw;
  height: 10vh;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${MobileSize}) {
         gap: 0;
  }
`