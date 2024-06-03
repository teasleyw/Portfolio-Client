import React, { useState } from 'react';
import {FormContainer,Input,LabelInput,FormTitle, ModalTitle, LinkedInButton, Label,FormGroup,SubmitButton,Form,ErrorMessage} from "./CreateCandidateFormStyled.jsx"
import {updateEmail,updateIsLoggedIn,updateUserId, updateRegisterConfirmPassword,updateRegisterPassword,updateRegisterUserName,updateFirstName,updateLastName} from "../../redux/app-state-slice";
import {request, setAuthHeader} from "../../axiosHelper";
import ErrorPopup from "../../Components/ErrorPopup/ErrorPopup.jsx"
import OutlineButton from "../../Components/Buttons/OutlineButton.jsx"
import {useNavigate} from "react-router";
import axios from "axios";
const CreateCandidateQuestionItem = ({dispatch,customerData, addQuestionAnswerItem,setModalOpen}) => {
  const [formData, setFormData] = useState({
        question: '',
        answer: '',
  });
  const [isFormInvalid, setIsFormInvalid] = useState(false)
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message
  const [showError, setShowError] = useState(false); // State to manage visibility of the error popup
  const navigate = useNavigate();

  const handleChange = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
      };
const handleSubmit = () => {
    // Validate formData if needed
    // For now, assuming the formData is valid
    addQuestionAnswerItem(formData);
    // Clear form fields if needed
    setFormData({
      question: '',
      answer: '',
    });
     setModalOpen(false)
  };

  return (
  <>
  <ModalTitle>   Create Work History Item  </ModalTitle>
    <FormContainer>
    <FormGroup>
            <LabelInput>
              <Input
                type="question"
                id="question"
                name="question"
                onChange={(e) => handleChange("question", e.target.value)}
                value={formData.question}
                placeholder= {"Question" }
                required
              />
              </LabelInput>
            </FormGroup>
        <FormGroup>
        <LabelInput>
          <Input
            type="answer"
            id="answer"
            name="answer"
            onChange={(e) => handleChange("answer", e.target.value)}
            value={formData.answer}
            placeholder= {"Answer" }
            required
          />
          </LabelInput>
        </FormGroup>
    </FormContainer>
    <OutlineButton onClick={(e) => {handleSubmit()}}> Submit </OutlineButton>
    </>

  );
};


export default CreateCandidateQuestionItem