import React from "react";
import {SignOutButton} from "./ButtonStyled.jsx"

function NeuMorphicButton({label,onClick}) {

    return (
        <SignOutButton
            onClick={()=>onClick()}
            className="button primary">
            {label}
        </SignOutButton>
    )
}
export default SignOutButton