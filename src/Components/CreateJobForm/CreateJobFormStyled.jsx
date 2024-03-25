import styled from 'styled-components';

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
`;

export const FormGroup = styled.div`
   display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
      margin-bottom: 0.25rem;
    }

    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
    }
`;
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