import React, {useState} from 'react';
import {
    LandingPageContainer,
    BackgroundFlower,
    Frost,
    Milano,
    NeonBtn,
    LogoContainer,
    WelcomeText,
    LandingPageContent,
    ButtonContainer,
    HeroSection,
    InfoSection,
    LoginButtonContainer
} from "./LandingPageStyle";

import flower from "../../Assets/Images/flower.png"
import Logo from "../../Assets/Images/gtm_team_logo.jpeg"
import {useNavigate} from "react-router";
import AudioPlayer from 'react-h5-audio-player';
import OutlineButton from "../../Components/Buttons/OutlineButton"
import BlockButton from "../../Components/Buttons/BlockButton"
import CandidateRegisterForm from "../../Components/RegisterForm/CandidateRegisterForm"
import CompanyRegisterForm from "../../Components/RegisterForm/CompanyRegisterForm"
import {ModalContent,ModalHeader,ModalWrapper,CloseButton} from '../../Components/ModalAlt/ModalAltStyled.jsx'
import Header from "../../Components/Header/Header"
function LandingPage({customerData, dispatch}) {
    const [isCandidateModalOpen,setIsCandidateModalOpen] = useState(false)
    const [isCompanyModalOpen,setIsCompanyModalOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <>

        <LandingPageContainer>
        <Header customerData={customerData} dispatch={dispatch}/>
        <HeroSection>
         <img src={Logo} alt={"GTM Team"}/>
         GTM TEAM
         </HeroSection>
        <InfoSection>
        <LandingPageContent>

            <WelcomeText>
             To get started select Candidate or Company or Login
            </WelcomeText>

            <ButtonContainer>
                <OutlineButton primaryColor={"#003366"} secondaryColor={"white"} onClick={e => {setIsCandidateModalOpen(true)}}> Candidate </OutlineButton>
                <OutlineButton primaryColor={"#003366"} secondaryColor={"white"} onClick={e => {setIsCompanyModalOpen(true)}} > Company </OutlineButton>

            </ButtonContainer>
            <LoginButtonContainer>
            <BlockButton onClick={() => { navigate('/Login') }} primaryColor={"#003366"} secondaryColor={"white"} > Login </BlockButton>
            </LoginButtonContainer>
        </LandingPageContent>
        </InfoSection>


        </LandingPageContainer>
            <ModalWrapper isOpen={isCandidateModalOpen}>
                        <ModalContent>
              <CloseButton onClick={e=> {setIsCandidateModalOpen(false)}}>&times;</CloseButton>
               <CandidateRegisterForm customerData={customerData} dispatch={dispatch}/>
            </ModalContent>
          </ModalWrapper>

          <ModalWrapper isOpen={isCompanyModalOpen}>
                      <ModalContent>
            <CloseButton onClick={e=> {setIsCompanyModalOpen(false)}}>&times;</CloseButton>
            <CompanyRegisterForm customerData={customerData} dispatch={dispatch}/>
          </ModalContent>
        </ModalWrapper>


            </>
    );
}


export default LandingPage;