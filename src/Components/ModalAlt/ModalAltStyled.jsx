import styled from 'styled-components';

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
