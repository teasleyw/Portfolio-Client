import React, { useState } from 'react';
import {FormContainer,LabelInput,FormTitle,FormGroup,SubmitButton,Form,ErrorMessage} from "./RegisterFormStyled.jsx"
import {updateEmail, updateRegisterConfirmPassword,updateRegisterPassword,updateRegisterUserName,updateFirstName,updateLastName} from "../../redux/app-state-slice";
import {request, setAuthHeader} from "../../axiosHelper";
import ErrorPopup from "../../Components/ErrorPopup/ErrorPopup.jsx"
import OutlineButton from "../../Components/Buttons/OutlineButton.jsx"
import CandidateRegisterPageOne from "./CandidateRegisterPageOne"
import axios from "axios";
const CandidateRegisterForm = ({dispatch,customerData}) => {
  const [page, setPage] = useState(1)
  const [showError, setShowError] = useState(false); // State to manage visibility of the error popup


  return (
    <>
    { page == 1 &&
        <CandidateRegisterPageOne dispatch={dispatch} customerData={customerData}/>
      }
    </>
  );
};


export default CandidateRegisterForm