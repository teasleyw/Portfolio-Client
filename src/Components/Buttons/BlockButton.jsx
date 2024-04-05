import React from "react";
import {BlockButton} from "./ButtonStyled.jsx"

function NeuMorphicButton({label,onClick,primaryColor,secondaryColor}) {

    return (
        <BlockButton
            onClick={()=>onClick()}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            className="button primary">
            {label}
        </BlockButton>
    )
}
export default BlockButton