import styled from 'styled-components';

const ruler = '16';
const white = '#feeeee';
const colorBg = 'rgb(255, 253, 208)';  // Very light grayish-beige
const colorShadow = '#272727';  // Dark shadow color
const colorWhite = '#272727';  // Main color for text, interpreted as a dark grayish-black
const textColor = '#272727';  // Off black color for text, a very dark gray


export const NeumorphicButton = styled.button`
  border: 0;
  outline: 0;
  font-family: Textile-Regular;
  font-size: ${ruler}px;
  border-radius: ${(ruler * 20)}px;
  padding: ${ruler}px;
  background-color: ${colorBg};
  color: ${textColor};  // Text color for the button
  font-weight: bold;
  box-shadow: -5px -5px 20px ${colorWhite}, 5px 5px 20px ${colorShadow};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    box-shadow: -2px -2px 5px ${colorWhite}, 2px 2px 5px ${colorShadow};
  }

  &:active {
    box-shadow: inset 1px 1px 2px ${colorShadow}, inset -1px -1px 2px ${colorWhite};
  }

  .icon {
    margin-right: ${ruler / 2}px;
  }

  &.unit {
    border-radius: ${ruler / 2}px;
    line-height: 0;
    width: ${ruler * 3}px;
    height: ${ruler * 3}px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 ${ruler / 2}px;
    font-size: ${ruler * 1.2}px;

    .icon {
      color: #5372fe;
      margin-right: 0;
    }
  }

  &.red {
    display: block;
    width: 100%;
    color: ${white};  // Red button text color
  }
`;
