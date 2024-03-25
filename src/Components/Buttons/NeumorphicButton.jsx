import React from "react";
import {StyledButton} from "./NeumorphicButtonStyled.js"

function NeuMorphicButton({label,onClick}) {

    return (
        <StyledButton
            onClick={()=>onClick()}
            className="button primary">
            {label}
        </StyledButton>
    )
}
export default NeuMorphicButton