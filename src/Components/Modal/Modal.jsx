import React from "react";
import "./ModalStyled"
import {
    Dimmer,
    ExitButton, FormContainer,
    InputBox,
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
                           Poem Title:
                       </InputLabels>
                       <InputBox placeholder="Enter the title of your masterpiece">

                       </InputBox>
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