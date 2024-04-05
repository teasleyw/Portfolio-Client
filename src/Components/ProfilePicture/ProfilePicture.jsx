import React, { useState,useEffect } from 'react';
import {ProfileIcon} from "./ProfilePictureStyled.jsx"
import axios from "axios"
const ProfilePicture = ({dispatch, customerData, name, img,userId,size,Style}) => {
    const [imageUrl,setImageUrl] = useState('')
       if (Style==null) {
                   Style = {
                      background: 'blue'
                  }
          }

      useEffect(() => {

      const fetchProfilePictureUrl = async () => {
            console.log(Style)
            console.log(userId);
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
            {imageUrl &&
                <ProfileIcon style={Style} size={size}>
                  <img src={imageUrl} alt={name} />
                </ProfileIcon>
             }
             {!imageUrl &&
                <ProfileIcon size={size} style={Style}>
                  {name?.substring(0, 1)}
                </ProfileIcon>
}
            </>
        )

}

export default ProfilePicture;