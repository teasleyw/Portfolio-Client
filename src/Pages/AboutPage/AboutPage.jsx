import React, {useEffect, useRef, useState} from "react";
import {
    CoverPhoto,
    AboutPageContainer, MainContentContainer,
    Name,
    NameContainer,
    Occupation, HeroSection, HeroSectionInfo, Icon
} from "./AboutPageStyle";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import InfoSection from "../../Components/InfoSection/infoSection"
import AboutPictureOne from "../../Assets/Images/AboutPictureOne.jpg"
import guitar from "../../Assets/Images/guitar-emoji.png"
import coding from "../../Assets/Images/Coding.png"
import {CareerText, GuitarText} from "../../utils/constants"
import Folsom from "../../Assets/Videos/Folsom.MOV"

function AboutPage({customerData, dispatch}) {
    const [isVisible, setVisible] = useState(false);
    const documentRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(enteries => {
            enteries.forEach(entry => {
                if(entry.isIntersecting ){
                    setVisible(true)
                    observer.unobserve(documentRef.current)
                }
            });
        });
        if (documentRef.current) observer.observe(documentRef.current);
        return () => observer.disconnect()
    }, []);
    return (
        <>
            <AboutPageContainer>
                <Header customerData={customerData} dispatch={dispatch} />
                <CoverPhoto/>
                <MainContentContainer>
                <HeroSection>
                    <Icon src={guitar} ref={documentRef} animate={isVisible}/>
                    <HeroSectionInfo ref={documentRef} animate={isVisible}>
                        About William Teasley
                    </HeroSectionInfo>
                    <Icon src={coding} ref={documentRef} animate={isVisible}/>
                 </HeroSection>
                 <InfoSection inverse={true} sectionOne={CareerText} header="Career" Image= {AboutPictureOne}/>
                 <InfoSection inverse={false} hasVideo={true} sectionOne={GuitarText} header="Hobbies" video= {Folsom}/>


{/*                     <NameContainer> */}
{/*                         <Name> William Teasley </Name> */}
{/*                         <Occupation> Full-Stack-Developer </Occupation> */}
{/*                     </NameContainer> */}
                </MainContentContainer>
            </AboutPageContainer>
{/*             <Footer/> */}
        </>
    );
}


export default AboutPage;