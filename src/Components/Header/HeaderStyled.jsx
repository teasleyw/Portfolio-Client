import styled from 'styled-components';

//Constants
const nameColor = "white"
const titleColor = "rgb(180,242,242)"

export const HeaderDiv = styled.div`
  background: rgb(0,0,0, 0.7);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`
export const MobileIcon= styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 95vw;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`
export const TabContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    padding-inline-start: 0;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? 0 : '-120%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: rgb(0,0,0);
  }
  
`
export const TabItem = styled.li`
  color: ${nameColor};
  font-family: "Aboreto", sans-serif; //Title Font;
  font-size: 25px;
  text-shadow: 0 0 0.6em hsl(0 0% 100% / 0.5), 0 0 0.6em ${nameColor};
  padding: 0.5rem 1rem;
  overflow: hidden;
  text-decoration: none;
  transition: transform .3s ease-in-out;
  &:after {
    content: '';
    width: 20%;
    height: 100%;
    position: absolute;
    transform-origin: left;
    left: auto;
    top: 0;
    bottom: 0;
    right: -20%;
    background-image:
            linear-gradient(135deg,
            rgba(255,255,255,0),
            rgba(255,255,255,0),
            rgba(255,255,255,0)
            );
  }
  &:hover {
    cursor: pointer;
    transform-origin: right;
    transform: scaleX(1);
    border-bottom: 2px solid #ffff;
    &:after {
      background-image:
              linear-gradient(135deg,
              rgba(255,255,255,0),
              rgba(255,255,255,.8),
              rgba(255,255,255,0)
              );
      display: block;
      transition: all .4s ease-out;
      right: 100%;
    }
  }
`
export const Logo = styled.a`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${titleColor};
    font-family: "IceCaps", sans-serif; //Title Font;
    font-size: 3rem;
    text-shadow: 0 0 0.6em hsl(0 0% 100% / 0.5), 0 0 0.6em ${titleColor};
  &:hover {
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
`