import styled, { css } from 'styled-components';
import { AccentColor,MobileSize } from '../../utils/constants';

const textColor = '#272727';
const darkGray = '#333333';
const lightGray = '#d3d3d3';
const backgroundColor = "#272727";
// CSS for Neumorphic Button
const NeuMorphicButtonCss = css`
  border: 0;
  outline: 0;
  font-family: 'Textile-Regular';
  font-size: 16px;
  border-radius: 20px;
  padding: 10px;
  background-color: ${AccentColor};
  color: ${backgroundColor};
  font-weight: 600;
  box-shadow: -5px -5px 20px ${backgroundColor}, 5px 5px 20px ${backgroundColor};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: -2px -2px 5px ${lightGray}, 2px 2px 5px ${lightGray};
  }

  &:active {

    box-shadow: inset 1px 1px 2px ${darkGray}, inset -1px -1px 2px ${lightGray};
  }

  .icon {
    margin-right: 8px; // adjust if necessary
  }

  &.unit {
    border-radius: 10px; // replace with your ruler value if necessary
    line-height: 0;
    width: 48px; // replace with your ruler value if necessary
    height: 48px; // replace with your ruler value if necessary
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px; // adjust if necessary
    font-size: 19.2px; // replace with your ruler value if necessary

    .icon {
      color: #5372fe;
      margin-right: 0;
    }
  }

  &.red {
    display: block;
    width: 100%;
    color: ${textColor}; // Red button text color
  }
`;

// CSS for Block Button
const BlockButtonCss = css`
  background-color: ${AccentColor};
  color: ${textColor};
  border: 1px solid ${textColor};
  border-radius: 0;
  height: 100%;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: none;

  &:hover {
    background-color: ${AccentColor};

    box-shadow: none
  }


    &:active {
      box-shadow: none;
    }

  &:focus {
    outline: none;
    border-color: ${lightGray};
  }

  @media (max-width: ${MobileSize}) {
    font-size: 14px;
  }
`;

// Styled Button combining both styles
export const StyledButton = styled.button`
  ${NeuMorphicButtonCss}

  @media (max-width: ${MobileSize}) {
    ${BlockButtonCss}
  }
`;

