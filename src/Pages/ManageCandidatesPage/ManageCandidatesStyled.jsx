import styled from 'styled-components';

export const ManageCandidatesPageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    flex-direction: column;
    display: flex;

`
export const StatusSelectContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 50px;
    background: #999999;

`
export const StatusItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid black 1px;
    &:hover {
        background: #FFFF00
    }


`
export const CandidatesContainer = styled.div`
    background-color: #f0f0f0;
    width: 100vw;
    height: 100%;
    display: flex;
    gap: 25px;
    flex-direction: column;



`
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
export const CandidatesIconContainer = styled.div`
    width: 100vw;
    display: flex;
    align-items: start;
    justify-content: start;

`
export const StatusColumn = styled.div`
    display: flex;
    border: 1px black solid;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    height: 100vh;
    width: 100%;

`
export const CandidateCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  height: 250px;

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

export const CandidatesTitleContainer = styled.div`
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;


`
export const CandidatesTitle= styled.div`
    font-size: 30px;
    text-align: center;
    width: 300px;
    border-bottom: solid black 2px;

`