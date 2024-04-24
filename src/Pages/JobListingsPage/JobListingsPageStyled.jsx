// JobListingsPageStyled.js
import styled from 'styled-components';
export const JobListingsPageWrapper = styled.div`
     background-color: white;
     width: 100vw;

     height: fit-content;
     min-height: 100vh;
`;
export const JobListing = styled.div`
    border-radius: 20px;
    background: white;
    width: 30%;
    min-width: 300px;
    height 40vh;
    &:hover{
        background: #f0f0f0;
    }
     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add box shadow */
        transition: box-shadow 0.3s; /* Add transition effect for box shadow */

        &:hover {
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Change box shadow on hover */
        }

    @media screen and (max-width: 700px) {
            width: 100%; /* Adjust width to 100% on smaller screens */
        }
`
export const JobListingContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: none;
    gap: 10px;
    padding: 10px;
    overflow: hidden;

    label {
        text-align: center;
        font-size: 25px;
    }

`
export const CenterFlex = styled.div`
    display: flex;
    justify-content: center;

`
export const JobListingsContentWrapper = styled.div`
    max-width: 66%;
    margin-left: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    min-height: 100vh;
    unicode-bidi: normal !important; /* !important to ensure it takes precedence */
    background: #f6f6f6;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);


    input[type="text"],
    select {
        padding: 5px;
        border: 1px solid #ccc;
    }
    @media screen and (max-width: 960px) {
       max-width: 100%;
      }

`;
export const JobListingWrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap; /* Allow job listings to wrap to the next line */
    justify-content: center; /* Center job listings horizontally */
`

export const ModalOverlay = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
      align-items: center;
      justify-content: center;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.4);
`;
export const FilterSelect = styled.select`
    padding: 0.3em;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 100px;

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
export const FilterInput = styled.input`
    padding: 0.3em;
    background-size: 100% 2px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 90px;
    &:focus {
    outline: none;
    border-color: #007bff;
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
    gap: 40px;
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


