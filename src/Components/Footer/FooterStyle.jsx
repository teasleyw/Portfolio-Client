import styled from "styled-components";
const titleColor = "rgb(180,242,242)"

export const FooterContainer = styled.div`
  background: rgb(0,0,0,0.7);
  height: 40vh;
  width: 100vw;
  font-size: 1.2rem;
  position: absolute;
  z-index: 999;
  bottom: -40vh;
  left: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
`
export const FooterInfoContainer = styled.div`
    display: flex;
    width: 50vw;
    justify-content: center;
    align-content: center;
    text-align: center;
    align-items: center;
`
export const FooterLogoContainer = styled.div`
    position: relative;
    width: 15%;
    height: 40%;
    margin: 2vh;
    
`
export const Logo = styled.div`
    color: ${titleColor};
    font-family: "IceCaps", sans-serif; //Title Font;
    font-size: 3rem;
    text-shadow: 0 0 0.6em hsl(0 0% 100% / 0.5), 0 0 0.6em ${titleColor};
`
export const FooterIcon = styled.div`
    color: ${props => props.GlowColor};
    text-shadow: 0 0 0.6em hsl(0 0% 100% / 0.5), 0 0 0.6em  ${props => props.GlowColor};
    box-shadow:  0 0 1em hsl(0 0% 100% / 0.5), 0 0 0.6em  ${props => props.GlowColor};
    border-radius:50%;
    margin: 1vw
`