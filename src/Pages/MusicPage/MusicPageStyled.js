import styled, { css }  from 'styled-components';
import { darken } from 'polished'; // Import the darken function from polished
import starsBackground from '../../Assets/Images/starsBackground.png'

export const CloseButton = styled.button`
    Color: Red;
    outline: none;
    height 100%;
    width: 100%;
`
export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${({ theme }) => theme.themeStyles && theme.themeStyles}; // Apply theme-specific styles if available
`;
export const ThemeButton = styled.button`
  background-color: transparent;
  color: ${({ fontColor }) => fontColor}; /* Use the font color */
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ fontColor }) => darken(0.1, fontColor)}; /* Darken the font color on hover */
  }
`;

export const VideoList = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center; /* Center the list horizontally */
    flex-wrap: wrap;
`;

export const VideoListItem = styled.li`
    cursor: pointer;
    margin: 0 1%; /* Add margin between list items */
    background-color: #f2f2f2;
    flex: 0 0 20%; /* Each list item takes up 20% of the available width */
    max-width: 200px; /* Set a maximum width for each list item */
    aspect-ratio: 1; /* Ensure the list items maintain a 1:1 aspect ratio */
    color: white;
    display: flex;
    text-align: center;
    border-radius: 20%;
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    transition: background-color, height, width, 0.3s ease;
    background-image: url(${props => props.backgroundImage});
  /* Adjust background properties */
  background-size: cover;
  background-position: center;

  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.1); /* Increase the size of the list item on hover */
  }
   @media (max-width: 768px) {
      flex-basis: 40%; /* Each list item takes up 40% of the available width */
      margin-bottom: 2%; /* Add margin between items when wrapping */
    }

    @media (max-width: 576px) {
      flex-basis: 100%; /* Each list item takes up 100% of the available width */
      margin-bottom: 2%; /* Add margin between items when wrapping */
    }
    span {
       background-color: rgba(0, 0, 0, 0.5); /* Background color for text */
       width: 100%;
           border-radius: 0; /* Add border radius for rounded corners */
           color: white; /* Set the color of the text */
    }
`;

export const VideoPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50vw;
  transform: translate(-50%, -50%);
  background-color: transparent;
  padding: 20px;
  border-radius: 8px;
  z-index: 999;
  @media (max-width: 768px) {
    width: 100vw; /* Each list item takes up 40% of the available width */
    margin-bottom: 2%; /* Add margin between items when wrapping */
  }

`;

export const ThemeNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 24px;
  color: ${({ themeColor }) => themeColor}; /* Text color matches the theme color */
  background-color: ${({ backgroundColor }) => backgroundColor}; /* Matches the background color */
`;

export const ThemeName = styled.span`
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: ${({ slideDirection }) => (slideDirection ? '0' : '1')};
  transform: ${({ slideDirection }) =>
    slideDirection === 'left' ? 'translateX(-200%)' : slideDirection === 'right' ? 'translateX(200%)' : 'none'};
  color: ${({ fontColor }) => fontColor}; /* Set font color */
  text-shadow: 0 0 0.6em ${({ fontColor }) => fontColor}, 0 0 0.6em ${({ fontColor }) => fontColor};
    &:hover {
      cursor: pointer;
      transform-origin: right;
      transform: scaleX(1);
      background: linear-gradient(to right, white 20%, ${({ fontColor }) => fontColor} 40%, ${({ fontColor }) => fontColor} 60%, ${({ fontColor }) => fontColor} 80%);
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
`;

  export const GifTitle = styled.img`
    max-width: 100%;
    height: auto;
  `;
  export const GifMusicNote = styled.img`
      position: Absolute;
      max-width: 100%;
      height: auto;
    `;
export const NinetiesHeader = styled.header`
  background-color: #000; /* Black background */
    color: #fff; /* White text */
    padding: 10px;
    text-align: center;
    font-family: Arial, sans-serif; /* Use Arial font */
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.5;
    border-bottom: 3px solid #ff0000; /* Red border */
    position: relative;
    background-image: url(${starsBackground});

    /* Noisy background effect */
    &:before {
      content: '';
      background-image: url(${starsBackground}); /* Noisy background image */
      opacity: 1;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }

    /* Blinking effect */
    ${({ blink }) =>
      blink &&
      css`
        animation: blink 1s infinite;
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

      `}


`;