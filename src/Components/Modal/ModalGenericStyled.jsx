import styled from 'styled-components';
import { AccentColor,MobileSize } from '../../utils/constants';
const white = '#fefefe';
const darkGray = '#2e2e2e';
const mediumGray = '#3e3e3e';
const lightGray = '#d3d3d3';
const borderColor = '#444';

export const ModalWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Darker overlay */
  overflow: auto;
`;

export const ModalContent = styled.div`
  background-color: ${mediumGray};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  border: 1px solid ${borderColor};
  width: 80%;

  max-width: 800px;
  position: relative;
  color: ${white}; /* Text color for the modal content */

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 20px;
    overflow-x: auto;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  border-bottom: solid 3px ${borderColor}; /* Use dark color for border */
  color: ${white}; /* Text color for the header */
`;

export const CloseButton = styled.button`
  top: 25%;
  right: 50%;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${AccentColor}; /* Color for the close button */
  &:hover {
    color: ${lightGray}; /* Slightly lighter color on hover */
  }
`;
