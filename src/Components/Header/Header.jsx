import React, {useState} from "react";
import {useNavigate} from "react-router";
import {HeaderContainer, Logo, HeaderDiv, TabContainer, TabItem, MobileIcon} from "./HeaderStyled";
import { FaBars, FaTimes } from 'react-icons/fa';
function Header() {
    const [click, setClick] = useState(false);

    const navigate = useNavigate()
    return (
        <HeaderDiv>
            <HeaderContainer>
                <Logo onClick={() => {navigate('/Home')}}>      Will Teasley</Logo>
                <MobileIcon onClick = {()=> { setClick(!click) }}>
                    {click ? <FaTimes color={"white"} /> : <FaBars color={"white"} />}
                </MobileIcon>
                <TabContainer onClick={()=> { setClick(!click) }} click={click}>
                    {/*<TabItem onClick={() => {navigate('/Events')}}> Upcoming Events </TabItem>*/}
                    <TabItem onClick={() => {navigate('/Poetry')}}> Poetry          </TabItem>
{/*                      <TabItem onClick={() => {navigate('/Bowling')}}> Bowling       </TabItem> */}
                     <TabItem onClick={() => {navigate('/Music')}}> Music        </TabItem>
                     <TabItem onClick={() => {navigate('/About')}}> About        </TabItem>
                </TabContainer>
            </HeaderContainer>
        </HeaderDiv>
    )
}
export default Header