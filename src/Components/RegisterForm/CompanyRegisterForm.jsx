import React, { useState } from 'react';
import {FormContainer,Input,LabelInput,FormTitle, LinkedInButton, Label,FormGroup,SubmitButton,Form,ErrorMessage} from "./RegisterFormStyled.jsx"
import {updateEmail, updateRegisterConfirmPassword,updateRegisterPassword,updateRegisterUserName,updateFirstName,updateLastName} from "../../redux/app-state-slice";
import {request, setAuthHeader} from "../../axiosHelper";
import ErrorPopup from "../../Components/ErrorPopup/ErrorPopup.jsx"
import OutlineButton from "../../Components/Buttons/OutlineButton.jsx"

import axios from "axios";
const CompanyRegisterForm = ({dispatch,customerData}) => {
  const [formData, setFormData] = useState({
    profilePicture: '',
    companyName: '',
    password: '',
    confirmPassword: '',
    linkedIn: '',
    role: 'company',
    email: '',
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
      const handleLinkedInRegister = async () => {
         {
//            const params = new URLSearchParams({
//              grant_type: 'authorization_code',
//              code: authorizationCode,
//              redirect_uri: 'your_redirect_uri',
//            });


           try {
             // Construct the authorization URL
                  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?` +
                    `response_type=code` +
                    `&client_id=86mi7uhgg05ymd` +
                    `&redirect_uri=http://localhost:3000/auth/linkedin/callback` +
                    `&scope=openid,profile,email`;

             window.location.href = authUrl;
//              return response;
           } catch (error) {
             console.error('Error exchanging authorization code for access token:', error);
             throw error;
           }
           }
     }

  const handleSubmit = () => {
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
        <LabelInput>
          <Input
            type="text"
            id="companyName"
            name="companyName"
            placeholder= {"Company Name" }
            value={formData?.companyName ? formData?.companyName : ""}
            required
          />
          <ErrorMessage>{customerData.firstName.errorMessage}</ErrorMessage>
          </LabelInput>
        </FormGroup>
        <FormGroup>
         <Input
           type="password"
           id="password"
           name="password"
           onInput={(e) => dispatch(updateRegisterPassword(e.target.value))}
           placeholder= {customerData?.registerPassword?.value ? customerData.registerPassword.value : "Password" }
           value={customerData?.registerPassword?.value ? customerData.registerPassword.value : ""}
           onChange={checkValidity}
           required
         />
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onInput={(e) => dispatch(updateRegisterConfirmPassword(e.target.value))}
            placeholder= {customerData?.registerConfirmPassword?.value ? customerData.registerConfirmPassword.value : "Confirm Password" }
            value={customerData?.registerConfirmPassword?.value ? customerData.registerConfirmPassword.value : ""}

            required
          />
{/*           <ErrorMessage>{customerData.registerConfirmPassword.errorMessage}</ErrorMessage> */}
        </FormGroup>
        <FormGroup>
        <LabelInput>
          <Input
            type="email"
            id="email"
            name="email"
            onInput={(e) => dispatch(updateEmail(e.target.value))}
            placeholder= {customerData?.email?.value ? customerData.email.value : "Email Address" }
            value={customerData?.email?.value ? customerData.email.value : ""}
            required
          />
          </LabelInput>
        </FormGroup>
         <FormGroup>
          <LabelInput>
          <Label htmlFor="profilePicture">Company Logo</Label>
          <Input
            type="file"
            id="companyLogo"
            name="companyLogo"
            onChange={checkValidity}
            value={formData.profilePicture}
          />
           </LabelInput>
        </FormGroup>

      </Form>
      <LabelInput>
       <OutlineButton onClick={handleSubmit()} disabled={!customerData.isRegisterValid.value}>Register</OutlineButton>
       <LinkedInButton onClick={handleLinkedInRegister}>  </LinkedInButton>
       </LabelInput>

    </FormContainer>
  );
};


export default CompanyRegisterForm