import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;

  z-index: 999;
  left: 0;
  top:0;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  @media screen and (max-width: 960px) {

     }
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  position: relative;

  @media screen and (max-width: 960px) {
        max-width: 1200px;
        width: 100%;
        padding: 0;
        overflow-x: auto;
   }

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

export const CloseButton = styled.span`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  width: 5%;
  position: absolute;

  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
