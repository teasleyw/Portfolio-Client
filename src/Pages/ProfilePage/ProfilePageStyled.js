import styled from 'styled-components';
const backgroundColor = "#f8f9fa";
// Container for the entire profile page
export const ProfilePageContainer = styled.div`
   background: ${backgroundColor};
   width: 100vw;
   color: white;
   height: fit-content;
   min-height: 140vh;
   overflow: hidden;
   position: absolute;
   align-items: center;
   top: 0;
   left: 0;
   opacity: ${props => props.opacity};
`;

// Container for the profile content
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
// Styled sign out button
export const SignOutButton = styled.button`
  background-color: transparent; /* Transparent background */
    color: black; /* Red text color */
    border: 4px solid #ff5555; /* Thick red border */
    padding: 10px 20px; /* Button padding */
    border-radius: 20px; /* Button border radius */
    cursor: pointer; /* Show pointer cursor on hover */

    /* Transition effect for hover */
    transition: background-color 0.3s, color 0.3s;

    /* Hover effect */
    &:hover {
      background-color: #ff5555; /* Change background color to red on hover */
      color: #fff; /* Change text color to white on hover */
    }
  `;

// Container for profile image and name
export const ProfileInfo = styled.div`
    background-color: #f0f0f0;
    border-radius: 8px; /* Rounded corners */
    display: flex;
    align-items: center;
      justify-content: center;
      flex-direction: column;

      padding: 20px;
      margin-top: 20px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4); /* Shadow effect */
`;

// Profile image
export const ProfileImage = styled.img`
  width: 100px; /* Adjust size as needed */
  height: 100px;
  border-radius: 50%; /* Make it circular */
  margin-right: 20px;
`;

// Header for the profile page
export const ProfileHeader = styled.h2`
  color: #333; /* Dark text color */
  margin-bottom: 20px;
`;

// Name heading
export const NameHeading = styled.h3`
  color: #555; /* Slightly darker text color */
`;
