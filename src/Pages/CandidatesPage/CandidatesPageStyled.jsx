import styled from 'styled-components';

export const CandidatesPageContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
`;

export const TopCandidatesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  flex-direction: row;
`;
export const CandidateDescription = styled.div`

`
export const TopCandidateButton = styled.button`
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
`
export const ProfilePicture = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
    background: ${({ color }) => (color ? color : 'none')};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
`
export const CandidateCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;

  border-radius: 8px;
  padding: 20px;
  width: 200px; /* Adjust the width as needed */
  text-align: center;
  display: flex;
  flex-direction: column;
  transition: background-color, height, width, 0.3s ease;
    &:hover {
      background-color: #e0e0e0;
      transform: scale(1.1); /* Increase the size of the list item on hover */
    }



  .profilePictureContainer {
    display: flex:
    width: 100%;
    justify-content: center;
    align-items: center;
  }


  h3 {
    margin-top: 0;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

export const OtherCandidatesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;


  th, td {
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;

  }
  tr{
  transition: background-color 0.2s ease;
  &:hover {

        background-color: #e0e0e0;
    }
  }

  th {
    background-color: #f2f2f2;

  }

  a {
    color: blue;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
export const ModalWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  position: relative;
`;
export const ModalHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    border-bottom: solid 3px blue;
`
export const LinkedInIconLink = styled.a`
  font-size: 24px; /* Set the font size to adjust the icon size */
  color: #0077b5; /* LinkedIn's brand color */
  text-decoration: none; /* Remove underline by default */
  transition: color 0.2s ease; /* Add a transition effect to color change */
  width: 5%;
  &:hover {
    color: #00405d; /* Darken the color on hover */
  }
`;

export const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  width: 5%;

  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
