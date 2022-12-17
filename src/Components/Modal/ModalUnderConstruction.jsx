import React from "react";
import "./ModalStyled"
import {
    Dimmer,
    FormButton, FormContainer,
    InputLabels,
    Logo,
    LogoContainer,
    ModalContainer,
    ModalForm,
} from "./ModalStyled";
function Modal({exitModal}) {

    return (
        <>
            <Dimmer/>
           <ModalContainer>
               <ModalForm>
                   <FormContainer>
                       <LogoContainer>
                           <Logo>
                               Checkered Poems
                           </Logo>
                       </LogoContainer>
                       <InputLabels>
                           Poems Is currently Under Construction sorry for the Inconvenience
                       </InputLabels>
                       <FormButton onClick={() => exitModal()}>
                           EXIT
                       </FormButton>
                   </FormContainer>
               </ModalForm>
           </ModalContainer>
        </>
    )
}
export default Modal