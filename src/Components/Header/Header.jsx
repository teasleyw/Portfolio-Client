import React from "react";
import {useNavigate} from "react-router";
import {HeaderContainer, Logo, HeaderDiv, TabContainer, TabItem} from "./HeaderStyled";

function Header() {
    const navigate = useNavigate()
    return (
        <HeaderDiv>
            <HeaderContainer>
                <Logo onClick={() => {navigate('/Home')}}>      Frost Milano</Logo>
                <TabContainer>
                    <TabItem onClick={() => {navigate('/Events')}}> Upcoming Events </TabItem>
                    <TabItem onClick={() => {navigate('/Poetry')}}> Poetry          </TabItem>
                </TabContainer>
            </HeaderContainer>
        </HeaderDiv>
    )
}
export default Header