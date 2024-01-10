import React, {useEffect, useRef, useState} from "react";
import {InfoSectionContainer, InfoSectionOne, InfoSectionTwo, InfoSectionTwoImage, InfoHeader,InfoSectionText} from "./infoSectionStyled";

const InfoSection = (
    {
        inverse = false,
        sectionOne= "",
        sectionTwo = "",
        id="",
        Image = "",
        header = ""
    }

) => {
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
        <InfoSectionContainer id={id} inverse={inverse} ref={documentRef} animate={isVisible}>
            <InfoSectionOne>
                <InfoHeader > {header} </InfoHeader>
                <InfoSectionText>
                {sectionOne}
                </InfoSectionText>
            </InfoSectionOne>
            <InfoSectionTwo>
                <InfoSectionTwoImage src={Image}/>
{/*                 {sectionTwo} */}
            </InfoSectionTwo>
        </InfoSectionContainer>
    );
}

export default InfoSection;