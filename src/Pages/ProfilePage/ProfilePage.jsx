
import React from 'react';
import { connect } from 'react-redux'; // Import connect if using Redux
import { ProfilePageContainer, ProfileContainer,SignOutButton, ProfileInfo, ProfileImage, ProfileHeader, NameHeading } from './ProfilePageStyled';
import Header from "../../Components/Header/Header";
import JohnnyCash from "../../Assets/Images/JohnnyCash.jpg"
import {updateIsLoggedIn} from "../../redux/app-state-slice";
import {useNavigate} from "react-router";
// Profile page component
const ProfilePage = ({ customerData,dispatch }) => {
  const { name, profilePictureUrl } = { name: "Johnny Cash", profilePictureUrl: JohnnyCash };
  const navigate = useNavigate();
  const handleSignOut = () =>{
  dispatch(updateIsLoggedIn(false))
  navigate('/Home')
  }


  return (
       <ProfilePageContainer>
         <Header customerData={customerData} dispatch={dispatch} />
         <ProfileContainer>
           <ProfileHeader>Profile Page</ProfileHeader>
           <ProfileInfo>
             <ProfileImage src={profilePictureUrl} alt="Profile" />
             <div>
             <NameHeading>Your Name: {name}</NameHeading>
             <NameHeading>Location: Saginaw, Michigan</NameHeading>
             <NameHeading>Hobbies: Guitar </NameHeading>
             <NameHeading>Occupation: Saginaw Fisherman</NameHeading>
             </div>
             <SignOutButton onClick={() => handleSignOut()}>
                   Sign Out
             </SignOutButton>

           </ProfileInfo>
         </ProfileContainer>
       </ProfilePageContainer>
  );
};
export default ProfilePage
