import styled, {keyframes} from 'styled-components';


const backgroundColor = "black";
const eventColor = "yellow"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const EventPageBackgroundContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  background: ${backgroundColor};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute;
  top: 0;
  left: 0;
`
export const BackgroundYinYang = styled.img`
  height: auto;
  width: auto;
  max-width: 50px;
  max-height: 50px;
  animation: ${rotate} 5s linear infinite;
  opacity: 50%;
`;
export const EventTitle = styled.div`
  color: ${eventColor};
  font-family: "Aboreto", sans-serif; //Title Font;
  font-size: 6rem;
  text-shadow: 0 0 0.6em hsl(0 0% 100% / 0.5), 0 0 0.6em ${eventColor};
`;
export const EventTitleContainer = styled.div`
  margin: auto;
  width: 50vw;
  height: 10vh;
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
`;
export const EventTitleUnderline = styled.div`
  margin: auto;
  width: 75vw;
  height: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  border: 2px solid ${eventColor};
  box-shadow:  0 0 0.6em hsl(0 0% 100% / 0.5), 0 0 0.6em ${eventColor};
`;

export const EventsContainer = styled.div`
  color: ${eventColor};
  font-family: "Aboreto", sans-serif; //Title Font;
  font-size: 6rem;
  text-shadow: 0 0 0.6em hsl(0 0% 100% / 0.5), 0 0 0.6em ${eventColor};
`;
export const Events = styled.div`
  color: ${eventColor};
  font-family: "Aboreto", sans-serif; //Title Font;
  font-size: 6rem;
  text-shadow: 0 0 0.6em hsl(0 0% 100% / 0.5), 0 0 0.6em ${eventColor};
`;