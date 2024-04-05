import styled from 'styled-components';
import buttonDefault from "../../Assets/Images/Sign-In-Large---Default.png"
import buttonActive from "../../Assets/Images/Sign-In-Large---Active.png"
import buttonHover from "../../Assets/Images/Sign-In-Large---Hover.png"

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

export const FormTitle = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 3rem;
`;
// Define the styled component for the button
export const LinkedInButton = styled.button`
  background: url(${buttonDefault}) no-repeat;
  border: none;
  background-size: contain;
  width: 100%; /* Set the width of the button */
  height: 60px; /* Set the height of the button */
  margin-top: 10px;
  border-radius: 23px;
  cursor: pointer;

  /* Specify the hover state */
  &:hover {
    background: url(${buttonHover}) no-repeat;
    background-size: contain;
  }

  /* Specify the active state */
  &:active {
    background: url(${buttonActive}) no-repeat;
    background-size: contain;
  }
`;


export const FormGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: 100%;
`;
export const Input = styled.input`
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;

`
export const LabelInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`
export const Label = styled.label`
    font-size: 12px;
`
export const ErrorMessage = styled.div`
    color: red;
    font-size: 12px;
`

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
  /* Button styles when disabled */
    &:disabled {
      background-color: #ccc;
      color: #666;
      cursor: not-allowed;
    }
`;