import React, { useState } from 'react';
import {FormContainer,Input,LabelInput,FormTitle, LinkedInButton, Label,FormGroup,SubmitButton,Form,ErrorMessage} from "./CreateCandidateFormStyled.jsx"
import {updateEmail,updateIsLoggedIn,updateUserId, updateRegisterConfirmPassword,updateRegisterPassword,updateRegisterUserName,updateFirstName,updateLastName} from "../../redux/app-state-slice";
import {request, setAuthHeader} from "../../axiosHelper";
import {FaPlus,FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import ErrorPopup from "../../Components/ErrorPopup/ErrorPopup.jsx"
import OutlineButton from "../../Components/Buttons/OutlineButton.jsx"
import CreateWorkHistoryItem from "./CreateWorkHistoryItem"
import WorkHistoryItem from "../../Components/WorkHistoryItem/WorkHistoryItem"
import {ModalContent,ModalHeader,ModalWrapper,CloseButton} from '../../Components/ModalAlt/ModalAltStyled.jsx'
import {useNavigate} from "react-router";
import axios from "axios";
const CreateCandidateForm = ({dispatch,customerData}) => {
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
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const itemsPerPage = 2; // Number of items visible per page
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message
  const [showError, setShowError] = useState(false); // State to manage visibility of the error popup
  const [isWorkHistoryOpen, setIsWorkHistoryOpen] = useState(false);
  const [workHistoryList, setWorkHistoryList] = useState([]);
  const navigate = useNavigate();
  const addWorkHistoryItemToList = (workHistoryData) => {
        // Add formData to the workHistoryList
        setWorkHistoryList([...workHistoryList, workHistoryData]);
  };

    const handleShowError = (message) => { // Function to show error popup
      setErrorMessage(message);
      setShowError(true);
    };
     const handleCloseError = () => { // Function to close error popup
        setShowError(false);
      };
       const handleNextPage = () => {
          setCurrentPage(currentPage + 1);
        };

        const handlePrevPage = () => {
          setCurrentPage(currentPage - 1);
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

  const handleWorkHistoryItemSubmit = (formData) => {
    setWorkHistoryList([...workHistoryList, formData]);
    setIsWorkHistoryOpen(false); // Close the modal
  };

  const checkValidity = () => {
        return setIsFormInvalid(customerData.registerConfirmPassword.hasError)
  }
   const onRegister = (firstName, lastName, username, password) => {
     request(
         "POST",
         "/register",
         {
             email: formData.email,
             firstName: formData.firstName,
             lastName: formData.lastName,
             login: formData.email,
             role: "candidate",
             job: formData.jobTitle,
             password: formData.password,
             experience: formData.experience
         },{}).then(
         (response) => {

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
  <>
  <ModalWrapper isOpen={isWorkHistoryOpen}>

         <ModalContent>
              <CloseButton onClick={e => {setIsWorkHistoryOpen(false)}}>&times;</CloseButton>
              <CreateWorkHistoryItem addWorkHistoryItem={addWorkHistoryItemToList} customerData={customerData} dispatch={dispatch}/>
         </ModalContent>
   </ModalWrapper>

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
        </FormGroup>
        <div>
        {workHistoryList.length > itemsPerPage &&
                    <div style={{width: "100%",display: "flex", gap: "25px",justifyContent: "center"}}>
                      <OutlineButton onClick={handlePrevPage} disabled={currentPage === 1}><FaArrowLeft /></OutlineButton>
                      <OutlineButton onClick={handleNextPage} disabled={currentPage === Math.ceil(workHistoryList.length / itemsPerPage)}><FaArrowRight /></OutlineButton>
                    </div>
                  }
                {workHistoryList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
                 <WorkHistoryItem
                   companyName={item.company}
                   startDate={item.startDate}
                   endDate={item.endDate}
                   positionTitle={item.jobTitle}
                   key={index} />
               ))}
        </div>


      </Form>
      <LabelInput>
      Create Work History Item
      <OutlineButton onClick={(e) => {setIsWorkHistoryOpen(true)}} disabled={false}>
        <FaPlus/>
      </OutlineButton>
      <LinkedInButton onClick={handleLinkedInRegister}>  </LinkedInButton>
      </LabelInput>

    </FormContainer>
    </>
  );
};


export default CreateCandidateForm