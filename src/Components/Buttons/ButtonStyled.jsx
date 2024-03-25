import styled from 'styled-components';
// Styled sign out button
export const SignOutButton = styled.button`
    background-color: transparent; /* Transparent background */
    color: black; /* White text color */
    border: 4px solid #003366; /* Thick dark blue border */
    padding: 10px 20px; /* Button padding */
    border-radius: 20px; /* Button border radius */
    cursor: pointer; /* Show pointer cursor on hover */
    font-size: 1rem;
    /* Transition effect for hover */
    transition: background-color 0.3s, color 0.3s;
    /* Hover effect */
    &:hover {
      background-color: #003366; /* Change background color to dark blue on hover */
      color: #fff; /* Change text color to white on hover */
    }
`;