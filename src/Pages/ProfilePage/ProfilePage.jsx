
import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux'; // Import connect if using Redux
import { ProfilePageContainer, ProfileContainer,SignOutButton, ProfileInfo, ProfileImage, ProfileHeader, NameHeading } from './ProfilePageStyled';
import Header from "../../Components/Header/Header";
import JohnnyCash from "../../Assets/Images/JohnnyCash.jpg"
import {updateIsLoggedIn} from "../../redux/app-state-slice";
import {useNavigate} from "react-router";
import axios from 'axios';
// Profile page component
const ProfilePage = ({ customerData,dispatch }) => {
  const { name } = { name: "Johnny Cash"};
  const navigate = useNavigate();
  const [profilePictureUrl, setProfilePictureUrl] = useState(JohnnyCash);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [tempFirstName, setTempFirstName] = useState(customerData.firstName.value);
  const [tempLastName, setTempLastName] = useState(customerData.lastName.value);

  useEffect(() => {
      if (!isEditMode) {
        setTempFirstName(customerData.firstName.value);
        setTempLastName(customerData.lastName.value);
      }
    }, [isEditMode, customerData.firstName.value, customerData.lastName.value]);

     const handleFirstNameChange = (event) => {
        setTempFirstName(event.target.value);
      };

      const handleLastNameChange = (event) => {
        setTempLastName(event.target.value);
      };


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleProfilePhotoClick = () => {
    document.getElementById('fileInput').click();
  };
  const handleSignOut = () =>{
  dispatch(updateIsLoggedIn(false))
  navigate('/Home')
  }
   const handleToggleEditMode = () => {
      setIsEditMode(prevEditMode => !prevEditMode);
    };

    const fetchProfilePictureUrl = async () => {
      axios.get(`1/profile-picture`,{responseType:'blob'})
        .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
        setProfilePictureUrl(imageUrl);
        })
        .catch(error => {
          console.log(error)
        });
    };
    const uploadImage = async (userId) => {
      try {
        const formData = new FormData();
        formData.append('profilePicture', selectedFile);

        // Make a POST request to your backend endpoint
        const response = await axios.post(userId + "/profile-picture", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log('Image uploaded successfully:', response.data);
        axios.get(`1/profile-picture`,{responseType:'blob'})
        .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
        setProfilePictureUrl(imageUrl);
        })
        .catch(error => {
          console.log(error)
        });
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };


  return (
       <ProfilePageContainer>
         <Header customerData={customerData} dispatch={dispatch} />
         <ProfileContainer>
           <ProfileHeader>Profile Page</ProfileHeader>
           <ProfileInfo>
             <ProfileImage src={profilePictureUrl} alt="Profile" onClick={handleProfilePhotoClick} />
             <input id="fileInput" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
             <div>
            <NameHeading>
               {isEditMode ? (
                <>
                   <label>
                   First Name:
                   </label>
                  <input type="text" value={tempFirstName} onChange={handleFirstNameChange} />
                  <label>
                  Last Name:
                  </label>
                  <input type="text" value={tempLastName} onChange={handleLastNameChange} />
                </>
              ) : (
                <>
                  Your Name:
                  {customerData.firstName.value} {customerData.lastName.value}
                </>
              )}
            </NameHeading>
             <NameHeading>Location: Saginaw, Michigan</NameHeading>
             <NameHeading>Hobbies: Guitar </NameHeading>
             <NameHeading>Email: {customerData.email.value}</NameHeading>
             <NameHeading>Occupation: Saginaw Fisherman</NameHeading>
             </div>
             <SignOutButton onClick={() => handleSignOut()}>
                   Sign Out
             </SignOutButton>
             <SignOutButton onClick={() => fetchProfilePictureUrl()}>
                    Get Picture
              </SignOutButton>
              <SignOutButton onClick={() => uploadImage("1")}>
                  Save Picture
              </SignOutButton>

           </ProfileInfo>
           <SignOutButton onClick={handleToggleEditMode}>
             {isEditMode ? 'Cancel Edit' : 'Edit Profile'}
           </SignOutButton>
         </ProfileContainer>
       </ProfilePageContainer>
  );
};
export default ProfilePage
