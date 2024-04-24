import React, {useState,useRef, useEffect , useContext} from "react";
import {useNavigate} from "react-router";
import {HeaderContainer, Logo, HeaderDiv, TabContainer, TabItem, MobileIcon, DropdownItem, DropdownMenu,DropdownMenuJobs} from "./HeaderStyled";
import { FaBars, FaTimes } from 'react-icons/fa';
import LionLogo from '../../Assets/Images/lionseye.jpeg'
import {updateIsLoggedIn} from "../../redux/app-state-slice";
import { useMediaQuery } from 'react-responsive';
function Header({customerData,dispatch}) {
      const [click, setClick] = useState(false);
      const [isDropdownVisible, setIsDropdownVisible] = useState(false);
      const [isDropdownJobsVisible, setIsDropdownJobsVisible] = useState(false);
      const isDesktopOrLaptop = useMediaQuery({ minWidth: 960 });
      const isTabletOrMobileDevice = useMediaQuery({ maxWidth: 960 });
      const navigate = useNavigate();
      const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
      const toggleRef = useRef(null);

        useEffect(() => {
          if (toggleRef.current) {
            const { top, left } = toggleRef.current.getBoundingClientRect();
            setDropdownPosition({ top, left });
          }
        }, [isDropdownJobsVisible]);

        const handleLogout = () => {
        console.log('here')
        console.log(customerData)
           dispatch(updateIsLoggedIn(false))
           console.log(customerData.IsLoggedIn)
        }
        const handleTabItemClick = () => {
            if (isDesktopOrLaptop) {
              setIsDropdownVisible(!isDropdownVisible); // Toggle dropdown visibility on click
            } else if (isTabletOrMobileDevice) {
              navigate("/Profile")
            }
          };
           const handleJobBoardClick = () => {
              if (isDesktopOrLaptop) {
                setIsDropdownJobsVisible(!isDropdownJobsVisible); // Toggle dropdown visibility on click
              } else if (isTabletOrMobileDevice) {
                navigate("/Jobs")
              }
            };

        return (
            <HeaderDiv>
                <HeaderContainer>
                    <Logo onClick={() => { navigate('/') }}><img style={{width: '75px',height: '75px', marginRight: '10px'}}src={LionLogo} />LionsEye Jobs</Logo>
                    <MobileIcon onClick={() => { setClick(!click) }}>
                        {click ? <FaTimes color={"white"} /> : <FaBars color={"white"} />}
                    </MobileIcon>
                    <TabContainer onClick={() => { setClick(!click) }} click={click}>
{/*                         <TabItem  ref={toggleRef} onClick={handleJobBoardClick }>Job Board</TabItem> */}
                        <TabItem onClick={() => { navigate('/Jobs') }}>Job Board</TabItem>
{/*                         <DropdownMenuJobs style={{ left: dropdownPosition.left }} show={isDropdownJobsVisible}> */}
{/*                                  */}

{/*                         </DropdownMenuJobs> */}
                        <TabItem onClick={() => { navigate('/Candidates') }}>Sourcing</TabItem>
{/*                         <TabItem onClick={() => { navigate('/Inbox') }}>Inbox</TabItem> */}
                         <TabItem onClick={() => { navigate('/Manage') }}>Manage Jobs</TabItem>
                        {customerData.isLoggedIn.value == true ? ( // Render "My Profile" tab if logged in
                        <>
                            <TabItem
                           onClick={handleTabItemClick}
                                    >
                                My Profile
                            </TabItem>
                            <DropdownMenu show={isDropdownVisible}>
                                <DropdownItem onClick={handleLogout}>Sign out</DropdownItem>
                                <DropdownItem onClick={() => { navigate('/Profile') }}>Profile Information</DropdownItem>
{/*                                 <DropdownItem onClick={() => { navigate('/Settings') }}>Settings</DropdownItem> */}
                            </DropdownMenu>

                            </>
                        ) : ( // Render "Login" tab if not logged in
                            <TabItem onClick={() => { navigate('/Login') }}>Login</TabItem>
                        )}
                    </TabContainer>
                </HeaderContainer>
            </HeaderDiv>
        );
    }
export default Header