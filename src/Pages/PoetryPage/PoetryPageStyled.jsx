import styled from 'styled-components';


//const backgroundColor = "#D8D8D8";
const backgroundColor = "#272727";
//const poemColor = "#000"
const poemColor = "#D8D8D8"
const poemTitleColor = "rgb(255, 253, 208)"
const poemAuthorColor = "rgb(255, 253, 208)"


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
  opacity: ${props => props.opacity};
`
export const PoemContainer = styled.div`
  height: fit-content;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
  @media screen and (max-width: 960px) {
      font-size: 25px;
  }
  @media screen and (max-width: 350px) {
  }
`
export const PoemTitle = styled.div`
    color: ${poemTitleColor};
    font-size: 35px;
    text-align: center;
    @media screen and (max-width: 960px) {
          font-size: 25px;
      }
      @media screen and (max-width: 350px) {
                     font-size: 18px;
           }
`
export const PoemAuthor = styled.div`
    color: ${poemAuthorColor};
    font-size: 35px;
    text-align: center;
    @media screen and (max-width: 960px) {
          font-size: 25px;
      }
      @media screen and (max-width: 350px) {
                     font-size: 18px;
           }
`
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
    white-space: pre;
    white-space: pre-wrap;
    @media screen and (max-width: 960px) {
          font-size: 20px;
          width: 90vw;
     }
     @media screen and (max-width: 350px) {
               font-size: 13px;
               width: 90vw;
     }
`
export const ButtonContainer = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`