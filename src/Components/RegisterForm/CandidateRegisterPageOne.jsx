import React, { useState } from 'react';
import {FormContainer,Input,LabelInput,FormTitle, LinkedInButton, Label,FormGroup,SubmitButton,Form,ErrorMessage} from "./RegisterFormStyled.jsx"
import {updateEmail,login,updateIsLoggedIn,updateUserId, updateRegisterConfirmPassword,updateRegisterPassword,updateRegisterUserName,updateFirstName,updateLastName} from "../../redux/app-state-slice";
import {request, setAuthHeader} from "../../axiosHelper";
import ErrorPopup from "../../Components/ErrorPopup/ErrorPopup.jsx"
import OutlineButton from "../../Components/Buttons/OutlineButton.jsx"
import {useNavigate} from "react-router";
import axios from "axios";
const CandidateRegisterPageOne = ({dispatch,customerData}) => {
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
    jobTitle: '',
    experience: ''
  });
  const [isFormInvalid, setIsFormInvalid] = useState(false)
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message
  const [showError, setShowError] = useState(false); // State to manage visibility of the error popup
  const navigate = useNavigate();
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
           } catch (error) {
             console.error('Error exchanging authorization code for access token:', error);
             throw error;
           }
           }
     }

  const handleSubmit = () => {
    onRegister(formData.firstName,formData.lastName,formData.userName,formData.password)
  };

  const checkValidity = () => {
        return setIsFormInvalid(customerData.registerConfirmPassword.hasError)
  }
   const onRegister = (firstName, lastName, username, password) => {
   console.log("here")
     request(
         "POST",
         "/register",
         {
             email: formData.email,
             firstName: formData.firstName,
             lastName: formData.lastName,
             login: formData.email,
             role: "Candidate",
             job: formData.jobTitle,
             password: formData.password,
             experience: formData.experience
         },{}).then(
         (response) => {
             const userData = response.data;
              // Save user data in localStorage
             localStorage.setItem('userData', JSON.stringify(userData));

             // Dispatch login action to set all user data
             dispatch(login(userData));

             // Additional updates if necessary
             dispatch(updateFirstName(userData.firstName));
             dispatch(updateLastName(userData.lastName));
             dispatch(updateEmail(userData.email));
             dispatch(updateUserId(userData.id));
             dispatch(updateIsLoggedIn(true));

             // Set auth header for axios
             setAuthHeader(userData.token);

             // Navigate to profile
             alert("Successful register");
             navigate("/Profile")
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
            id="firstName"
            name="firstName"
            onChange={(e) => handleChange("firstName", e.target.value)}
            value={formData.firstName}
            placeholder= {"First Name" }
            required
          />
          <ErrorMessage>{customerData.firstName.errorMessage}</ErrorMessage>
          </LabelInput>
          <LabelInput>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder= {"Last Name" }

                      onChange={(e) => handleChange("lastName", e.target.value)}
                      value={formData.lastName}
                      required
                    />
                    <ErrorMessage>{customerData.lastName.errorMessage}</ErrorMessage>
          </LabelInput>
        </FormGroup>
        <FormGroup>


        </FormGroup>
        <FormGroup>
         <Input
           type="password"
           id="password"
           name="password"
           onChange={(e) => handleChange("password", e.target.value)}
           value={formData.password}
           placeholder= {"Password" }
           required
         />
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            value={formData.confirmPassword}
            onInput={(e) => dispatch(updateRegisterConfirmPassword(e.target.value))}
            placeholder= {"Confirm Password" }

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
            onChange={(e) => handleChange("email", e.target.value)}
            value={formData.email}
            placeholder= {"Email Address" }
            required
          />
          </LabelInput>
        </FormGroup>
         <FormGroup>
          <LabelInput>
          <Label htmlFor="profilePicture">Profile Picture</Label>
          <Input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={checkValidity}
            value={formData.profilePicture}
          />
           </LabelInput>
        </FormGroup>
        <FormGroup>
        <LabelInput>
          <Input
            type="text"
            id="jobTitle"
            name="JobTitle"
            onChange={(e) => handleChange("jobTitle", e.target.value)}
            value={formData.jobTitle}
            placeholder= {"Job Title"}
            required
          />
          </LabelInput>
          <LabelInput>
            <Input
              type="text"
              id="Experience"
              name="Experience"
              onInput={(e) => handleChange("experience", e.target.value)}
              placeholder= { "Years of Experience" }
              value={formData.experience}
              required
            />
          </LabelInput>
        </FormGroup>


      </Form>
      <LabelInput>
      <OutlineButton onClick={onRegister}  disabled={false}>
                       Register
                     </OutlineButton>

       <LinkedInButton onClick={handleLinkedInRegister}>  </LinkedInButton>
       </LabelInput>

    </FormContainer>
  );
};


export default CandidateRegisterPageOne