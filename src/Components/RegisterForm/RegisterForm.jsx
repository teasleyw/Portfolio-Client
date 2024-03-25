import React, { useState } from 'react';
import {FormContainer,FormTitle,FormGroup,SubmitButton,Form,ErrorMessage} from "./RegisterFormStyled.jsx"
import {updateEmail, updateRegisterConfirmPassword,updateRegisterPassword,updateRegisterUserName,updateFirstName,updateLastName} from "../../redux/app-state-slice";
import {request, setAuthHeader} from "../../axiosHelper";
import ErrorPopup from "../../Components/ErrorPopup/ErrorPopup.jsx"
const RegisterForm = ({dispatch,customerData}) => {
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
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onInput={(e) => dispatch(updateFirstName(e.target.value))}
            placeholder= {customerData?.firstName?.value ? customerData.firstName.value : "First Name" }
            value={customerData?.firstName?.value ? customerData.firstName.value : ""}
            required
          />
          <ErrorMessage>{customerData.firstName.errorMessage}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onInput={(e) => dispatch(updateLastName(e.target.value))}
            placeholder= {customerData?.lastName?.value ? customerData.lastName.value : "Last Name" }
            value={customerData?.lastName?.value ? customerData.lastName.value : ""}
            required
          />
          <ErrorMessage>{customerData.lastName.errorMessage}</ErrorMessage>
        </FormGroup>
         <FormGroup>
            <label>Account Type</label>
            <div>
              <input
                type="radio"
                id="candidate"
                name="accountType"
                value="candidate"
                checked={formData.role === "candidate"}
                onChange={handleRoleChange}
              />
              <label htmlFor="candidate">Candidate</label>
            </div>
            <div>
              <input
                type="radio"
                id="company"
                name="accountType"
                value="company"
                checked={formData.role === "company"}
                onChange={handleRoleChange}
              />
              <label htmlFor="company">Company</label>
            </div>
          </FormGroup>
        <FormGroup>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onInput={(e) => dispatch(updateRegisterUserName(e.target.value))}
            placeholder= {customerData?.registerUserName?.value ? customerData.registerUserName.value : "User Name" }
            value={customerData?.registerUserName?.value ? customerData.registerUserName.value : ""}
            required
          />
           <ErrorMessage>{customerData.registerUserName.errorMessage}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onInput={(e) => dispatch(updateRegisterPassword(e.target.value))}
            placeholder= {customerData?.registerPassword?.value ? customerData.registerPassword.value : "Password" }
            value={customerData?.registerPassword?.value ? customerData.registerPassword.value : ""}
            onChange={checkValidity}
            required
          />

        </FormGroup>
        <FormGroup>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onInput={(e) => dispatch(updateRegisterConfirmPassword(e.target.value))}
            placeholder= {customerData?.registerConfirmPassword?.value ? customerData.registerConfirmPassword.value : "Confirm Password" }
            value={customerData?.registerConfirmPassword?.value ? customerData.registerConfirmPassword.value : ""}

            required
          />
          <ErrorMessage>{customerData.registerConfirmPassword.errorMessage}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <label htmlFor="linkedIn">LinkedIn (optional)</label>
          <input
            type="text"
            id="linkedIn"
            name="linkedIn"
            onChange={checkValidity}
            value={formData.linkedIn}
          />
        </FormGroup>
         <FormGroup>
              <label htmlFor="job">Job</label>
              <input
                type="text"
                id="job"
                name="job"
                onChange={(e) => handleChange("job", e.target.value)}
                value={formData.job}
              />
         </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onInput={(e) => dispatch(updateEmail(e.target.value))}
            placeholder= {customerData?.email?.value ? customerData.email.value : "Email Address" }
            value={customerData?.email?.value ? customerData.email.value : ""}
            required
          />
        </FormGroup>
        <SubmitButton type="submit" disabled={!customerData.isRegisterValid.value}>Register</SubmitButton>
      </Form>
    </FormContainer>
  );
};


export default RegisterForm