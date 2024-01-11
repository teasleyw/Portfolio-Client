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
                    <InfoSectionVideo controls autoplay>
                        <source src = {video} type={"video/mp4"}/>
                    </InfoSectionVideo>
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