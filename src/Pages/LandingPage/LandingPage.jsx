import React from 'react';
import {
    LandingPageContainer,
    BackgroundFlower,
    Frost,
    Milano,
    NeonBtn,
    LogoContainer
} from "./LandingPageStyle";

import flower from "../../Assets/Images/flower.png"
import {useNavigate} from "react-router";
import AudioPlayer from 'react-h5-audio-player';
function LandingPage() {
    const navigate = useNavigate()
    return (
        <>

        <LandingPageContainer>
            {Array.from({ length: 630}, (_, i) => <BackgroundFlower key={i} src={flower}/>)}
        </LandingPageContainer>
        <LogoContainer>
            <Frost>
                Will
            </Frost>
            <Milano>
                Teasley
            </Milano>
            <NeonBtn onClick={() => {navigate("/Home")}} NeonColor={"rgb(180,242,242)"}>
                Enter
            </NeonBtn>
        </LogoContainer>
            </>
    );
}


export default LandingPage;