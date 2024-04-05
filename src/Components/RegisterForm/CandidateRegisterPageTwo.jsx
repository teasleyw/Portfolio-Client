import React, { useState } from 'react';
import {FormContainer,FormTitle,FormGroup,SubmitButton,Form,ErrorMessage} from "./RegisterFormStyled.jsx"
import {updateEmail, updateRegisterConfirmPassword,updateRegisterPassword,updateRegisterUserName,updateFirstName,updateLastName} from "../../redux/app-state-slice";
import {request, setAuthHeader} from "../../axiosHelper";
import ErrorPopup from "../../Components/ErrorPopup/ErrorPopup.jsx"
const CandidateRegisterPageTwo = ({dispatch,customerData}) => {
  const [formData, setFormData] = useState({
    profilePicture: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    linkedIn: '',
    role: '',
    email: '',
    job: ''
  });
  const [isFormInvalid, setIsFormInvalid] = useState(false)
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message
  const [showError, setShowError] = useState(false); // State to manage visibility of the error popup

    const handleShowError = (message) => { // Function to show error popup
      setErrorMessage(message);
      setShowError(true);
    };
     const handleCloseError = () => { // Function to close error popup
        setShowError(false);
      };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const checkValidity = () => {
        return setIsFormInvalid(customerData.registerConfirmPassword.hasError)
  }
   const onRegister = (event, firstName, lastName, username, password) => {
     event.preventDefault();
     request(
         "POST",
         "/register",
         {
             email: customerData.email.value,
             firstName: customerData.firstName.value,
             lastName: customerData.lastName.value,
             login: customerData.registerUserName.value,
             role: formData.role,
             job: formData.job,
             password: customerData.registerPassword.value
         },{}).then(
         (response) => {
             setAuthHeader(response.data.token);
         }).catch(
         (error) => {
             setAuthHeader(null);
             if(error.response === undefined){
                handleShowError("Error Creating User")
             }
             else{
                handleShowError(error.response.data.message)
             }
         }
     );
 };
    const handleRoleChange = (event) => {
    setFormData({
    ...formData,
    role: event.target.value
    });
    };
    const handleChange = (fieldName, value) => {
      setFormData({ ...formData, [fieldName]: value });
    };

  return (
    <FormContainer>
          {/* Render the ErrorPopup component conditionally */}
          {showError && <ErrorPopup message={errorMessage} onClose={handleCloseError} />}
          {/* Your other components */}
      <FormTitle>Register</FormTitle>
      <Form onSubmit={onRegister}>
        <FormGroup>
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={checkValidity}
            value={formData.profilePicture}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="firstName">Work History</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onInput={(e) => dispatch(updateFirstName(e.target.value))}
            placeholder= {customerData?.firstName?.value ? customerData.firstName.value : "First Name" }
            value={customerData?.firstName?.value ? customerData.firstName.value : ""}
            required
          />
          <ErrorMessage></ErrorMessage>
        </FormGroup>

        <SubmitButton type="submit" disabled={!customerData.isRegisterValid.value}>Register</SubmitButton>
      </Form>
    </FormContainer>
  );
};


export default RegisterForm