import React from "react";
import "./NeumorphicButton.scss"
function NeuMorphicButton({label,onClick}) {

    return (
        <button
            onClick={()=>onClick()}
            className="button primary">
            {label}
        </button>
    )
}
export default NeuMorphicButton