import React from "react";
import "./ModalStyled"
import {
    Dimmer,
    ExitButton, FormContainer,
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
                       <ExitButton onClick={() => exitModal()}>
                           EXIT
                       </ExitButton>
                   </FormContainer>
               </ModalForm>
           </ModalContainer>
        </>
    )
}
export default Modal