import styled, {keyframes} from 'styled-components';


const checkerColor = "#00B4FF"
const checkerColorTwo = "white"
const logoColor = "#00B4FF"
const textColor = "#00B4FF"
const backgroundColor = "#00B4FF"
const shadowOne = "#950101"
const shadowTwo = "#ffff23"
const floating = keyframes`
  0% { transform: translate(0,0); }
  50%  { transform: translate(0px, 12px); }
  100%   { transform: translate(0, 0); }
  
`
export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
`

export const ModalForm = styled.div`
  color: yellow;
  background-image: linear-gradient(45deg, ${checkerColor} 25%, transparent 25%),
  linear-gradient(-45deg, ${checkerColor} 25%, transparent 25%),
  linear-gradient(45deg, transparent 75%, ${checkerColor} 75%),
  linear-gradient(-45deg, ${checkerColorTwo} 75%, ${checkerColor} 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  background-color: ${backgroundColor} ;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  width: 75vw;
  opacity: 100%;
  z-index: 999;
  border-radius: 10px;
  @media screen and (max-width: 960px) {
    width: 100vw;
    padding-top: 110px;
    height: 100vh;
  }
`
export const SubmitFormButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    height: 100px;
    @media screen and (max-width: 960px) {
      flex-direction: column;
      height: 50%;
    
    }
`
export const FormButton = styled.button`
  color: ${checkerColorTwo};
  background: ${checkerColor};
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  opacity: 100%;
  z-index: 999;
  align-self: center;
  &:hover{
    color: ${checkerColor};
    background: ${checkerColorTwo};
    width: 30%;
    height: 30%;
  }
  &:disabled,
  &[disabled]{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
  @media screen and (max-width: 960px) {
    width: 75%;
    &:hover{
      color: ${checkerColorTwo};
      background: ${checkerColor};
      width: 75%;
      height: 75%;
    }
    &:focus{
      color: ${checkerColor};
      background: ${checkerColorTwo};
      width: 100%;
      height: 80%;
    }
    &:active{
    }
    
  }
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 10%;
    
`
export const InputBox = styled.input`
  outline: none;
  font-size: 30px;
  width: 100%;
  background: #323232;
  border-radius: 10px;
  border: none;
  color: #61dafb;
  border-bottom: 4px solid yellow;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${checkerColor};
    text-shadow: 1px 1px ${shadowOne},-1px -1px ${shadowTwo};
  }
  @media screen and (max-width: 960px) {
    ::placeholder,
    ::-webkit-input-placeholder {
      font-size: 75%;
      color: ${checkerColor};
      text-shadow: 1px 1px ${shadowOne},-1px -1px ${shadowTwo};
    }
  }

`
export const InputLabels = styled.label`
  font-weight: 900;
  font-size: 2rem;
  color: ${textColor};
  text-shadow: 1px 1px #950101,-1px -1px #ffff23;
  padding-left: 20px;
`
export const Dimmer = styled.div`
  background-color: black;
  color: black;
  opacity: 66%;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 999;
`
export const LogoContainer = styled.div`
  text-align: center;
  animation-name: ${floating};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  border-bottom: #61dafb solid 5px;
  padding-bottom: 10px;
  border-radius: 50%;
`
export const Logo = styled.div`
  position: relative;
  color: ${logoColor};
  font-family: LetterMagic, sans-serif; //Title Font;
  padding-left: 1px;
  padding-top: 1px;
  font-size: 3rem;
  text-shadow: 1px 1px red,-1px -1px yellow;
  
`
export const FormContainer = styled.div`
  background-color: black;
  width: 95%;
  height: 95%;
  
`
export const FormContentContainer = styled.div`
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`