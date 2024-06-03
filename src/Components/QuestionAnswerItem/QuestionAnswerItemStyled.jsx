import styled from 'styled-components';
export const QuestionsWrapper= styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 960px) {
           width:100%;
           text-align: center;

    }
`
export const Info = styled.div`
    width: 100%;
    display: flex;

    flex-direction: column;
    @media screen and (max-width: 960px) {
           width:100%;
           text-align: center;

    }

`
export const Question =  styled.h2`
    @media screen and (max-width: 960px) {
        font-size: 20px;
    }
`
export const Answer =  styled.div`
    font-size: 14px;
    width: 90%;
     @media screen and (max-width: 960px) {
        text-align: left;
        padding-left: 20px;
     }
`
export const DeleteIcon = styled.div`
  margin-top: 10%;
  opacity: ${({ isDeleteVisible }) => (isDeleteVisible ? 1 : 0)};
  margin-left: ${({ isDeleteVisible }) => (isDeleteVisible ? '0' : '-30px')};
  width: 25px;
  height: 25px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  transition: all 0.3s ease; /* Added transition */
  &:hover {
      background-color: darkred;
    }
    &:active {
      transform: scale(0.9);
    }
`;
