import React, { useState } from 'react';
import {FormContainer,Input,LabelInput,FormTitle, ModalTitle, LinkedInButton, Label,FormGroup,SubmitButton,Form,ErrorMessage} from "./CreateCandidateFormStyled.jsx"
import {updateEmail,updateIsLoggedIn,updateUserId, updateRegisterConfirmPassword,updateRegisterPassword,updateRegisterUserName,updateFirstName,updateLastName} from "../../redux/app-state-slice";
import {request, setAuthHeader} from "../../axiosHelper";
import ErrorPopup from "../../Components/ErrorPopup/ErrorPopup.jsx"
import OutlineButton from "../../Components/Buttons/OutlineButton.jsx"
import {useNavigate} from "react-router";
import axios from "axios";
const CreateWorkHistoryItem = ({dispatch,customerData, addWorkHistoryItem,setModalOpen}) => {
  const [formData, setFormData] = useState({
        company: '',
        jobTitle: '',
        beginDate: '',
        endDate: ''
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
    addWorkHistoryItem(formData);
    // Clear form fields if needed
    setFormData({
      company: '',
      jobTitle: '',
      startDate: '',
      endDate: ''
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
            type="company"
            id="company"
            name="company"
            onChange={(e) => handleChange("company", e.target.value)}
            value={formData.email}
            placeholder= {"Company" }
            required
          />
          </LabelInput>
        </FormGroup>
        <FormGroup>
        <LabelInput>
          <Input
            type="jobTitle"
            id="jobTitle"
            name="jobTitle"
            onChange={(e) => handleChange("jobTitle", e.target.value)}
            value={formData.email}
            placeholder= {"Job Title" }
            required
          />
          </LabelInput>
        </FormGroup>
        <FormGroup>
        <LabelInput>
                  <Input
                    type="startDate"
                    id="startDate"
                    name="startDate"
                    onChange={(e) => handleChange("startDate", e.target.value)}
                    value={formData.email}
                    placeholder= {"Start Date" }
                    required
                  />

        </LabelInput>
        <LabelInput>
              <Input
                type="endDate"
                id="endDate"
                name="endDate"
                onChange={(e) => handleChange("endDate", e.target.value)}
                value={formData.endDate}
                placeholder= {"End Date" }
                required
              />
         </LabelInput>
        </FormGroup>
    </FormContainer>
    <OutlineButton onClick={(e) => {handleSubmit()}}> Submit </OutlineButton>
    </>

  );
};


export default CreateWorkHistoryItem