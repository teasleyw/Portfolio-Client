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
    margin: 0 auto;
    padding: 20px;
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


