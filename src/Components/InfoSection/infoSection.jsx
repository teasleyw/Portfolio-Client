import React, {useEffect, useRef, useState} from "react";
import {InfoSectionContainer, InfoSectionOne, InfoSectionTwo, InfoSectionTwoImage, InfoHeader,InfoSectionText, InfoSectionVideo} from "./infoSectionStyled";

const InfoSection = (
    {
        inverse = false,
        hasVideo = false,
        video = "",
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
            <InfoSectionOne inverse={inverse}>
                <InfoHeader > {header} </InfoHeader>
                <InfoSectionText>
                {sectionOne}
                </InfoSectionText>
            </InfoSectionOne>
            <InfoSectionTwo inverse={inverse}>
             {hasVideo == true &&
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/WgX-RpJUQaY?si=j6EWLdrJC1c6kIIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             }

             {hasVideo == false &&
                <InfoSectionTwoImage src={Image}/>
             }
{/*                 {sectionTwo} */}
            </InfoSectionTwo>
        </InfoSectionContainer>
    );
}

export default InfoSection;