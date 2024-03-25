import styled from 'styled-components';

export const ErrorPopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f44336; /* Red color */
  color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
`;

export const PopupContent = styled.div`
  position: relative;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: -15px;
  left: -1px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #fff; /* Change color on hover */
  }
`;