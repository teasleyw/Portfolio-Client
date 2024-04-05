import React from "react";
import {SignOutButton} from "./ButtonStyled.jsx"

function NeuMorphicButton({label,onClick,primaryColor,secondaryColor}) {

    return (
        <SignOutButton
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            className="button primary">
            {label}
        </SignOutButton>
    )
}
export default SignOutButton