// JobListingsPageStyled.js
import styled from 'styled-components';
export const JobListingsPageWrapper = styled.div`
     background-color: white;
     width: 100vw;
     heightL 100vh;
`;
export const JobListing = styled.div`

    &:hover{
        background: #f0f0f0;
    }
`
export const JobListingsContentWrapper = styled.div`
    max-width: 66%;
    margin: 0 auto;
    padding: 20px;
    background: #f6f6f6;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

    div {
        margin-bottom: 10px;
    }

    label {
        margin-right: 10px;
    }

    input[type="text"],
    select {
        padding: 5px;
        border: 1px solid #ccc;
    }

    button {
        padding: 5px 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
`;
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


