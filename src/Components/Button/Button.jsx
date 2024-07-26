import React from "react";
import {StyledButton} from "./ButtonStyled"

function Button({label,onClick}) {

    return (
        <StyledButton
            onClick={()=>onClick()}
            className="button primary">
            {label}
        </StyledButton>
    )
}
export default Button