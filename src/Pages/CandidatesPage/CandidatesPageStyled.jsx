import styled from 'styled-components';
export const PageContainer = styled.div`
    display: flex;
    justify-content: start;
    background-color: white;
    width: 100vw;
    overflow: hidden;


`

export const CandidatesPageContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  margin-left: 300px;
  max-width: 1000px;
  width: calc(100vw - 300px);
  overflow: hidden;
  min-height: 100vh;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 960px) {
        margin-left: 0;
        width: 100vw;
  }
`;

export const FilterSelect = styled.select`
    padding: 0.3em;
    font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
      max-width: 100px;

      background-color: white;
      background-image: linear-gradient(to bottom, #f9f9f9, #e9e9e9);
      background-size: 100% 2px;
      background-repeat: no-repeat;
      background-position: center bottom;
      cursor: pointer;

      &:focus {
        outline: none;
        border-color: #007bff;
      }

      /* Style the dropdown arrow */
      &::-ms-expand {
        display: none; /* Hide the default arrow icon for IE */
      }
      &::after {
        content: '\\25BC'; /* Unicode character for down arrow */
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        pointer-events: none; /* Ensure the arrow doesn't interfere with clicking */
      }

`
export const FilterContainer = styled.div`
    background-color: #003366;
    position: fixed;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    width: 300px;
    left: 0;
     @media screen and (max-width: 960px) {
            display: none;
          }
`
export const FilterInfoContainer = styled.div`
    width: 80%;
    height: 80%;
    justify-content: start;
    gap: 20px;
    align-items: start;
    display: flex;
    flex-direction: column;

`

export const FilterItem = styled.div`
display: flex;
`
export const FilterTitle = styled.div`
    text-align: center;
    color: white;
    width: 100%;
    font-size: 25px;
    border-bottom: 1px solid white;
`
export const FilterLabel = styled.div`
    width: 125px;
    font-size: 18px;
`
export const KeyLabel = styled.div`
    width: 150px;
    font-size: 18px;
`
export const KeyIcon = styled.div`
    background-color: #e0e0e0;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TopCandidatesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  text-align: left;
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
export const ilePicture = styled.div`
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
  width: 222px; /* Adjust the width as needed */
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

export const Shortlist = styled.div`
    display: flex;
    align-items: start;
    gap: 5px;
    width: 100%;
    text-align: left;
    justify-content: start;
    div {
        display: flex;

        label{
            min-width: 100px;
            margin-right: 5px;
        }

    }
    flex-direction: column;
`
export const OtherCandidatesTable = styled.table`
  width: 100%;
  overflow: hidden;
  border-collapse: collapse;
  margin-top: 20px;


  th, td {

    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;


  }
  td{
    div{
    display: flex;
    align-items: center;
    justify-content: start;
    }

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
export const RecentlyActive = styled.div`

    background-color: ${({ isLooking }) => (isLooking? 'green' : '#8888FF')};
    border-radius: 50%;
    height: 10px;
    width: 10px;

`

export const ModalWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 999;
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
  max-width: 800px;
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
