import styled from 'styled-components';
// Styled sign out button
export const SignOutButton = styled.button`
  background-color: ${props => props.secondaryColor || 'transparent'}; /* Transparent background or secondaryColor */
  color: ${props => props.primaryColor || 'black'}; /* Default text color is black or primaryColor */
  border: 4px solid ${props => props.primaryColor || '#003366'}; /* Thick dark blue border */
  padding: 10px 20px; /* Button padding */
  border-radius: 20px; /* Button border radius */
  cursor: pointer; /* Show pointer cursor on hover */
  font-size: 1rem;
  /* Transition effect for hover */
  transition: background-color 0.3s, color 0.3s;
  /* Hover effect */
  &:hover {
    background-color: ${props => props.primaryColor || '#003366'}; /* Change background color to dark blue on hover */
    color: #fff; /* Change text color to white on hover */
  }
`;
export const BlockButton = styled.button`
  background-color: ${props => props.secondaryColor || 'black'}; /* Transparent background or secondaryColor */
  color: ${props => props.primaryColor || 'black'}; /* Default text color is black or primaryColor */
  border: 4px solid ${props => props.primaryColor || '#003366'}; /* Thick dark blue border */
  padding: 10px 20px; /* Button padding */
  width: 100%;
  cursor: pointer; /* Show pointer cursor on hover */
  font-size: 1rem;
  /* Transition effect for hover */
  transition: background-color 0.3s, color 0.3s;
  /* Hover effect */
  &:hover {
    background-color: ${props => props.primaryColor || '#003366'}; /* Change background color to dark blue on hover */
    color: #fff; /* Change text color to white on hover */
  }
`;