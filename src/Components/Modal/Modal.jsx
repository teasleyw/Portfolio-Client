import React from "react";
import "./ModalStyled"
import {
    Dimmer,
    FormButton, FormContainer, FormContentContainer,
    InputBox, InputContainer,
    InputLabels,
    Logo,
    LogoContainer,
    ModalContainer,
    ModalForm, SubmitFormButtonContainer,
} from "./ModalStyled";
import {updateEmail, updateFirstName, updateLastName, updatePoemTitle} from "../../redux/app-state-slice";
import {submitPoemService} from "../../Services/SubmitPoemService";
import {checkIfPoemInfoIsValid} from "../../validation/FormValidation";
function Modal({exitModal, dispatch,customerData}) {
    const submitPoem = (customerData) => {
        console.log(customerData)
        submitPoemService(customerData, "").then((result) => console.log(result))
            .catch((error) => console.log(error));
        exitModal();
    }

    return (
        <>
            <Dimmer/>
           <ModalContainer>
               <ModalForm>
                   <FormContainer>
                       <FormContentContainer>
                       <LogoContainer>
                           <Logo>
                               Checkered Poems
                           </Logo>
                       </LogoContainer>
                       <InputContainer>
                           <InputLabels> Poem Title:</InputLabels>
                           <InputBox
                               onInput={(e) => dispatch(updatePoemTitle(e.target.value))}
                               placeholder= {customerData?.poemTitle?.value ? customerData.poemTitle.value : "Enter the title of your masterpiece" }
                               value={customerData?.poemTitle?.value ? customerData.poemTitle.value : ""}>
                           </InputBox>
                           {customerData.poemTitle.hasError &&
                               <>
                                   {customerData.poemTitle.errorMessage}
                               </>
                           }
                       </InputContainer>
                       <InputContainer>
                           <InputLabels> Email:</InputLabels>
                           <InputBox
                               onInput={(e) => dispatch(updateEmail(e.target.value))}
                               placeholder= {customerData?.email?.value ? customerData.email.value : "Enter your email" }
                               value={customerData?.email?.value ? customerData.email.value : ""}>
                           </InputBox>
                           {customerData.email.hasError &&
                               <>
                                   {customerData.email.errorMessage}
                               </>
                           }

                       <InputLabels>
                           First Name:
                       </InputLabels>
                       <InputBox
                           onInput={(e) => dispatch(updateFirstName(e.target.value))}
                           placeholder="First Name (optional)"
                           value={customerData?.firstName?.value ? customerData.firstName.value : ""}>
                       </InputBox>
                           {customerData.firstName.hasError &&
                               <>
                                   {customerData.firstName.errorMessage}
                               </>
                           }
                       <InputLabels>
                           Last Name:
                       </InputLabels>
                       <InputBox
                           onInput={(e) => dispatch(updateLastName(e.target.value))}
                           placeholder="Enter Your Last Name (optional)"
                           value={customerData?.lastName?.value ? customerData.lastName.value : ""}>
                       </InputBox>
                           {customerData.lastName.hasError &&
                               <>
                                   {customerData.lastName.errorMessage}
                               </>
                           }
                           </InputContainer>
                           <SubmitFormButtonContainer>
                               <FormButton onClick={() => exitModal()}>
                                   EXIT
                               </FormButton>
                               <FormButton disabled={checkIfPoemInfoIsValid(customerData)} onClick={() => submitPoem(customerData)}>
                                   Submit
                               </FormButton>
                           </SubmitFormButtonContainer>

                       </FormContentContainer>
                   </FormContainer>
               </ModalForm>
           </ModalContainer>
        </>
    )
}
export default Modal