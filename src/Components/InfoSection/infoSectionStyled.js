import styled from 'styled-components';
const primaryDark = "black";
const secondaryLight = "rgb(255, 253, 208)";
const white = "rgb(255,255,255)";
export const InfoSectionContainer = styled.div`
    scroll-margin: 80px;
    background-color: ${props => props.inverse ? primaryDark : secondaryLight};
    color: ${props => props.inverse ? secondaryLight: primaryDark};
    min-height: 50vh;
    padding-top: 20px;
//    z-index: 998;
    position: relative;
    padding-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    transition: all 1s ease-in-out;
    transform: translateX(${props => (props.animate ? '0' : '-50vw')});
    opacity: ${props => props.animate ? '100%' : '0'};
      @media screen and (max-width: 960px) {
        flex-direction: column;
        height: 100vh;
      }
  & > * {
    flex-grow: 0;
    flex-basis: 50%;
    flex-shrink: 0;
  }
`
export const InfoHeader = styled.div`
//    display: flex:
//    justify-content: center;
//    align-items: center;
//    flex-direction: column;
    font-family: "Textile-Regular";
    font-size: 3em;
    flex-basis: 25%;
    flex-grow: 0;
    flex-shrink: 0;

`
export const InfoSectionOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    order: ${props => props.inverse ? 0 : 1};
`
export const InfoSectionTwo = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    order: ${props => props.inverse ? 1 : 0};
`
export const InfoSectionTwoImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 0 8px 8px black inset;
    background-image: url(${props => props.src});
    order: ${props => props.inverse ? 1 : 0};
`
export const InfoSectionText = styled.div`
    width: 80%;
`