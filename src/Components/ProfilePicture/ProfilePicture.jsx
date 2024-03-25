import React, { useState,useEffect } from 'react';
import {ProfileIcon} from "./ProfilePictureStyled.jsx"
import axios from "axios"
const ProfilePicture = ({dispatch, customerData, name, img,userId}) => {
    const [imageUrl,setImageUrl] = useState('')
      useEffect(() => {
      const fetchProfilePictureUrl = async () => {
            axios.get(userId + `/profile-picture`,{responseType:'blob'})
              .then(response => {
              const imageUrl = URL.createObjectURL(response.data);
              setImageUrl(imageUrl);
              })
              .catch(error => {
                console.log(error)
              });
          };
          fetchProfilePictureUrl()
//             const createUrl = async () => {
//                 if(img) {
//                     // Convert the string to a Blob
//                     const blob = new Blob([img], { type: 'text/plain' });
//                     setImageUrl(URL.createObjectURL(blob));
//                 }
//                 console.log(imageUrl);
//             }
//             createUrl();
               }, [img]);

    return(
            <>
            {img &&
                <ProfileIcon>
                  <img src={imageUrl} alt={name} />
                </ProfileIcon>
             }
             {!img &&
                <ProfileIcon style={{ backgroundColor: "blue" }}>
                  {name?.substring(0, 1)}
                </ProfileIcon>
}
            </>
        )

}

export default ProfilePicture;