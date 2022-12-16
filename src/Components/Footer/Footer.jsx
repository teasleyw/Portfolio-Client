import React from "react";
import {FooterContainer, FooterIcon, FooterInfoContainer, FooterLogoContainer,Logo} from "./FooterStyle"
import {SocialIcon} from "react-social-icons";

function Footer() {
    return (
        <FooterContainer>
            <FooterLogoContainer>
                <Logo> Frost Milano </Logo>
            </FooterLogoContainer>
            <FooterInfoContainer>
                <FooterIcon as={SocialIcon} url="https://www.linkedin.com/in/william-teasley-77149a20a/"
                            bgColor="rgb(75, 97, 235)" GlowColor="rgb(75, 97, 235)"/>
                <FooterIcon as={SocialIcon} url="https://www.instagram.com/will_teas/"
                            bgColor='rgb(224, 54, 54)' GlowColor='rgb(224, 54, 54)'/>
                <FooterIcon as={SocialIcon} url="https://www.tiktok.com/@frost_milano"
                            bgColor='white' GlowColor='white'/>
            </FooterInfoContainer>
        </FooterContainer>
    )
}
export default Footer