import React from "react";
import {FooterContainer, FooterIcon, FooterInfoContainer, FooterLogoContainer,Logo} from "./FooterStyle"
import {SocialIcon} from "react-social-icons";

function Footer() {
    return (
        <FooterContainer>
            <FooterLogoContainer>
                <Logo> Will</Logo>
                <Logo> Teasley </Logo>
            </FooterLogoContainer>
            <FooterInfoContainer>
                <FooterIcon as={SocialIcon} url="https://www.linkedin.com/in/william-teasley-77149a20a/"
                            bgColor="rgb(75, 97, 235)" GlowColor="rgb(75, 97, 235)"/>
            </FooterInfoContainer>
        </FooterContainer>
    )
}
export default Footer