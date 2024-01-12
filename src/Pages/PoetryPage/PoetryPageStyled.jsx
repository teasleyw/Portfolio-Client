import styled from 'styled-components';


const backgroundColor = "#D8D8D8";
const poemColor = "#000"

export const PoetryPageContainer = styled.div`
  background: ${backgroundColor};
  width: 100vw;
  color: white;
  height: fit-content;
  min-height: 140vh;
  overflow: hidden;
  position: absolute;
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
`
export const Poem = styled.h1`
    color: ${poemColor};
    font-size: 44px;
    text-align: center;
    z-index: 1;
    outline: none;
    font-family: 'Maitree', serif;
    white-space: pre;
`
export const ButtonContainer = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`