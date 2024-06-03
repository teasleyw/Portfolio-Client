import React, { useState } from 'react';
import {FormContainer,Input,LabelInput,FormTitle, LinkedInButton, Label,FormGroup,SubmitButton,Form,ErrorMessage} from "./CreateCandidateFormStyled.jsx"
import {updateEmail,updateIsLoggedIn,updateUserId, updateRegisterConfirmPassword,updateRegisterPassword,updateRegisterUserName,updateFirstName,updateLastName} from "../../redux/app-state-slice";
import {request, setAuthHeader,getAuthToken} from "../../axiosHelper";
import {FaPlus,FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import ErrorPopup from "../../Components/ErrorPopup/ErrorPopup.jsx"
import OutlineButton from "../../Components/Buttons/OutlineButton.jsx"
import CreateWorkHistoryItem from "./CreateWorkHistoryItem"
import CreateCandidateQuestionItem from "./CreateCandidateQuestionItem"
import CreateCandidateMetrics from "./CreateCandidateMetrics"
import MetricsTable from "../../Components/MetricsTable/MetricsTable"
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
  const [isQuestionFormOpen, setIsQuestionFormOpen] = useState(false);
  const [isMetricFormOpen, setIsMetricFormOpen] = useState(false);
  const [workHistoryList, setWorkHistoryList] = useState([]);
  const [QuestionAnswerList, setQuestionAnswer] = useState([]);
  const [metricList, setMetricList] = useState([]);
  const navigate = useNavigate();
    const addWorkHistoryItemToList = (workHistoryData) => {
      // Generate a unique ID for the new item using the current length of the list
      const newItem = { id: workHistoryList.length, ...workHistoryData };

      // Add the new item to the workHistoryList
      setWorkHistoryList([...workHistoryList, newItem]);
    };
    const addQuestionAnswerItemToList = (questionAnswerData) => {
          // Generate a unique ID for the new item using the current length of the list
          const newItem = { id: QuestionAnswerList.length, ...questionAnswerData};

          // Add the new item to the workHistoryList
          setQuestionAnswer([...QuestionAnswerList, newItem]);
        };

    const addMetricItemToList= (metricData) => {

              // Generate a unique ID for the new item using the current length of the list
              const newItem = { id: metricList.length, ...metricData};

              // Add the new item to the workHistoryList
              setMetricList([...metricList, newItem]);
            };

  const updateWorkHistoryList = (updatedItem) => {

    const updatedList = workHistoryList.map(item => {
      if (item.id === updatedItem.id) {
        return updatedItem; // Replace the updated item
      }
      return item;
    });
    setWorkHistoryList(updatedList.filter(item => item !== null)); // Remove null entries (deleted items)
    console.log(workHistoryList)
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
    onRegister(formData.firstName,formData.lastName,formData.userName,"PASSWORD")
  };

  const handleWorkHistoryItemSubmit = (formData) => {
    setWorkHistoryList([...workHistoryList, formData]);
    setIsWorkHistoryOpen(false); // Close the modal
  };
   const handleQuestionAnswerItemSubmit = (formData) => {
      setQuestionAnswer([...workHistoryList, formData]);
      setIsQuestionFormOpen(false); // Close the modal
    };

  const checkValidity = () => {
        return setIsFormInvalid(customerData.registerConfirmPassword.hasError)
  }
  const workHistoryRequest = (userId,company,startDate,endDate,jobTitle) =>{
  request(
       "POST",
       "/workhistory",
       {
           userId: userId,
           startDate: startDate,
           endDate: endDate,
           company: company,
           jobTitle: jobTitle,
       },{"Authorization" : `Bearer ${getAuthToken()}`}).then(
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
   )
   }
   const questionAnswerRequest = (userId,question,answer) =>{
      request(
           "POST",
           "/QandA",
           {
               userId: userId,
               question: question,
               answer: answer,
           },{"Authorization" : `Bearer ${getAuthToken()}`}).then(
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
       )
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
             password: "PASSWORD",
             experience: "42"
         },{}).then(
         (response) => {
            const tempUserId = response.data.id
            // Loop through workHistoryList and call workHistoryRequest
                workHistoryList.forEach((workHistoryItem) => {
                    workHistoryRequest(
                        tempUserId,
                        workHistoryItem.company,
                        workHistoryItem.startDate,
                        workHistoryItem.endDate,
                        workHistoryItem.jobTitle
                    );
                });
                QuestionAnswerList.forEach((questionAnswerItem) => {
                        questionAnswerRequest(
                            tempUserId,
                            questionAnswerItem.question,
                            questionAnswerItem.answer,
                        );
                    });

         }).catch(
         (error) => {
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
              <CreateWorkHistoryItem setModalOpen={setIsWorkHistoryOpen} addWorkHistoryItem={addWorkHistoryItemToList} customerData={customerData} dispatch={dispatch}/>
         </ModalContent>
   </ModalWrapper>

   <ModalWrapper isOpen={isQuestionFormOpen}>
        <ModalContent>
             <CloseButton onClick={e => {setIsQuestionFormOpen(false)}}>&times;</CloseButton>
             <CreateCandidateQuestionItem setModalOpen={setIsQuestionFormOpen} addQuestionAnswerItem={addQuestionAnswerItemToList}  customerData={customerData} dispatch={dispatch}/>
        </ModalContent>
   </ModalWrapper>
   <ModalWrapper isOpen={isMetricFormOpen}>
           <ModalContent>
                <CloseButton onClick={e => {setIsMetricFormOpen(false)}}>&times;</CloseButton>
                <CreateCandidateMetrics setModalOpen={setIsMetricFormOpen} addMetricItem={addMetricItemToList}  customerData={customerData} dispatch={dispatch}/>
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
                   editable={true}
                   id={item.id}
                   company={item.company}
                   startDate={item.startDate}
                   endDate={item.endDate}
                   jobTitle={item.jobTitle}
                   updateWorkHistoryList={updateWorkHistoryList}
                   key={index} />
               ))}

        </div>
        {QuestionAnswerList.map((item, index) => (
                           <div style={{display: "flex", flexDirection:"column"}}>
                                <h3>
                                    {item.question}
                                </h3>
                                <div>
                                    {item.answer}
                                </div>
                           </div>
                           ))}

        <MetricsTable metrics={metricList}/>


      </Form>
      <LabelInput>

      <OutlineButton onClick={(e) => {setIsWorkHistoryOpen(true)}} disabled={false}>
        Create Work History Item <FaPlus/>
      </OutlineButton>
      <OutlineButton onClick={(e) => {setIsQuestionFormOpen(true)}} disabled={false}>
        Create Q&A Item    <FaPlus/>
      </OutlineButton>
      <OutlineButton onClick={(e) => {setIsMetricFormOpen(true)}} disabled={false}>
        Create Metric Data <FaPlus/>
      </OutlineButton>
      <OutlineButton onClick={(e) => {handleSubmit()}} disabled={false}>
              Submit Candidate
      </OutlineButton>
      <LinkedInButton onClick={handleLinkedInRegister}>  </LinkedInButton>
      </LabelInput>

    </FormContainer>
    </>
  );
};


export default CreateCandidateForm