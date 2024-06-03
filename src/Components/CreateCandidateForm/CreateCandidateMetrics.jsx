import React, { useState } from 'react';
import {FormContainer,Input,LabelInput,FormTitle, ModalTitle, LinkedInButton, Label,FormGroup,SubmitButton,Form,ErrorMessage} from "./CreateCandidateFormStyled.jsx"
import {updateEmail,updateIsLoggedIn,updateUserId, updateRegisterConfirmPassword,updateRegisterPassword,updateRegisterUserName,updateFirstName,updateLastName} from "../../redux/app-state-slice";
import {request, setAuthHeader} from "../../axiosHelper";
import ErrorPopup from "../../Components/ErrorPopup/ErrorPopup.jsx"
import OutlineButton from "../../Components/Buttons/OutlineButton.jsx"
import {useNavigate} from "react-router";
import axios from "axios";
const CreateCandidateMetricsItem = ({ addMetricItem, setModalOpen }) => {
  const [formData, setFormData] = useState({
    year: '',
    salesCycle: '',
    targetVerticals: '',
    buyerPersona: '',
    avgDeal: '',
    attainment: '',
    quota: '',
  });

  const handleChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = () => {
    // Validate formData if needed
    // For now, assuming the formData is valid
    addMetricItem(formData);
    // Clear form fields if needed
    setFormData({
      year: '',
      salesCycle: '',
      targetVerticals: '',
      buyerPersona: '',
      avgDeal: '',
      attainment: '',
      quota: '',
    });
    setModalOpen(false);
  };

  return (
    <>
      <ModalTitle>Create Metric Item</ModalTitle>
      <FormContainer>
        <FormGroup>
          <LabelInput>
            <Input
              type="text"
              id="year"
              name="year"
              onChange={(e) => handleChange('year', e.target.value)}
              value={formData.year}
              placeholder="Year"
              required
            />
          </LabelInput>
        </FormGroup>
        <FormGroup>
          <LabelInput>
            <Input
              type="text"
              id="salesCycle"
              name="salesCycle"
              onChange={(e) => handleChange('salesCycle', e.target.value)}
              value={formData.salesCycle}
              placeholder="Sales Cycle"
              required
            />
          </LabelInput>
        </FormGroup>
        <FormGroup>
          <LabelInput>
            <Input
              type="text"
              id="targetVerticals"
              name="targetVerticals"
              onChange={(e) => handleChange('targetVerticals', e.target.value)}
              value={formData.targetVerticals}
              placeholder="Target Verticals"
              required
            />
          </LabelInput>
        </FormGroup>
        <FormGroup>
          <LabelInput>
            <Input
              type="text"
              id="buyerPersona"
              name="buyerPersona"
              onChange={(e) => handleChange('buyerPersona', e.target.value)}
              value={formData.buyerPersona}
              placeholder="Buyer Persona"
              required
            />
          </LabelInput>
        </FormGroup>
        <FormGroup>
          <LabelInput>
            <Input
              type="text"
              id="avgDeal"
              name="avgDeal"
              onChange={(e) => handleChange('avgDeal', e.target.value)}
              value={formData.avgDeal}
              placeholder="Avg Deal"
              required
            />
          </LabelInput>
        </FormGroup>
        <FormGroup>
          <LabelInput>
            <Input
              type="text"
              id="attainment"
              name="attainment"
              onChange={(e) => handleChange('attainment', e.target.value)}
              value={formData.attainment}
              placeholder="Attainment"
              required
            />
          </LabelInput>
        </FormGroup>
        <FormGroup>
          <LabelInput>
            <Input
              type="text"
              id="quota"
              name="quota"
              onChange={(e) => handleChange('quota', e.target.value)}
              value={formData.quota}
              placeholder="Quota"
              required
            />
          </LabelInput>
        </FormGroup>
      </FormContainer>
      <OutlineButton onClick={handleSubmit}>Submit</OutlineButton>
    </>
  );
};

export default CreateCandidateMetricsItem;