import React, { useState } from 'react';
import {FormContainer,FormTitle,FormGroup,SubmitButton,Form,ErrorMessage} from "./CreateJobFormStyled.jsx"
import {updateEmail, updateRegisterConfirmPassword,updateRegisterPassword,updateRegisterUserName,updateFirstName,updateLastName} from "../../redux/app-state-slice";
import {request, setAuthHeader} from "../../axiosHelper";
const CreateJobForm = ({dispatch,customerData}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    experience: '',
    workType: '',
    company: '',
    location: '',
  });
  const [isFormInvalid, setIsFormInvalid] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const checkValidity = () => {
        return setIsFormInvalid(customerData.registerConfirmPassword.hasError)
  }
   const onCreateJob = (event, firstName, lastName, username, password) => {
     event.preventDefault();

     request(
         "POST",
         "/jobs",
         {
             title: formData.title,
             experience: formData.experience,
             workType: formData.workType,
             company: formData.company,
             description: formData.description,
             location: formData.location
         }).then(
         (response) => {
             alert("Successfully created job")
         }).catch(
         (error) => {
            alert("Error Creating Job")
         }
     );
 };

  return (
    <FormContainer>
      <FormTitle>Create New Job Listing </FormTitle>
      <Form onSubmit={onCreateJob}>
        <FormGroup>
          <label htmlFor="title">Job Title</label>
          <input
            type="text"
            id="Title"
            name="Title"
            placeholder= {formData.title ? formData.title : "Title" }
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <ErrorMessage>{customerData.firstName.errorMessage}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <label htmlFor="experience">Experience</label>
          <input
            type="text"
            id="experience"
            name="experience"
            placeholder="Experience"
            value={formData.experience || ""}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            required
          />
          <ErrorMessage>{customerData.lastName.errorMessage}</ErrorMessage>
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description</label>
          <input
           type="text"
           id="description"
           name="description"
           placeholder="Description"
           value={formData.description || ""}
           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
           required
          />
           <ErrorMessage></ErrorMessage>
        </FormGroup>
        <FormGroup>
          <label htmlFor="Location">Location</label>
          <input
           type="text"
           id="location"
           name="location"
           placeholder="Location"
           value={formData.location || ""}
           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
           required
          />
           <ErrorMessage></ErrorMessage>
        </FormGroup>
        <FormGroup>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company"
            value={formData.company || ""}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            required
          />

        </FormGroup>
        <FormGroup>
          <label htmlFor="workType">Work Type</label>
          <select
            id="workType"
            name="workType"
            value={formData.workType || ""}
            onChange={(e) => setFormData({ ...formData, workType: e.target.value })}
            required
          >
            <option value="">Select Work Type</option>
            <option value="On-Site">On-Site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </FormGroup>


        <SubmitButton type="submit" >Create Job</SubmitButton>
      </Form>
    </FormContainer>
  );
};


export default CreateJobForm