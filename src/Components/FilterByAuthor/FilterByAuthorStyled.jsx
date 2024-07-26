// src/Components/Modal/FilterByAuthorModalStyled.jsx
import styled from 'styled-components';
import { AccentColor } from '../../utils/constants';

const darkGray = '#333333';
const lightGray = '#d3d3d3';
const borderColor = '#444444';
export const Title = styled.h2`
  margin-bottom: 10px;
  font-family: 'Textile-Regular';
  color: ${AccentColor};
`;

export const MultiSelect = styled.select`
  width: 100%;
  height: 150px;
  border: 1px solid ${borderColor};
  border-radius: 5px;
  padding: 10px;
  background-color: ${darkGray};
  color: ${lightGray};
  margin-bottom: 20px;
  &:focus {
    border-color: ${AccentColor};
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${AccentColor};
  color: ${darkGray};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${lightGray};
    color: ${darkGray};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${darkGray};
  &:hover {
    color: ${lightGray};
  }
`;

export const CheckboxContainer = styled.div`
    width: 100%;
  height: 150px;
  border: 1px solid ${borderColor};
  border-radius: 5px;
  padding: 10px;
  background-color: ${darkGray};
  color: ${lightGray};
  margin-bottom: 20px;
  overflow: auto;
  &:focus {
    border-color: ${AccentColor};
    outline: none;
  }
`
export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
`;

export const CheckboxLabel = styled.label`
  color: ${AccentColor};
  cursor: pointer;
  font-family: 'Textile-Regular';
  &:hover {
    text-decoration: underline;
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${darkGray};
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 16px;
  color: ${darkGray};
  background-color: ${lightGray};

  &::placeholder {
    color: ${darkGray};
  }

  &:focus {
    outline: none;
    border-color: ${darkGray};
  }
`;