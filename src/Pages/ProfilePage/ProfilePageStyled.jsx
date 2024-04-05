import styled from 'styled-components';
const backgroundColor = "#f8f9fa";
// Container for the entire profile page
export const ProfilePageContainer= styled.div`
   background: ${backgroundColor};
   min-height: 100vh;
   max-height: 100vh;
   overflow:hidden;
   display: flex;
   flex-direction: column;
`;
export const ProfilePageContentContainer= styled.div`
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
   background: ${backgroundColor};
   overflow:hidden;
   padding-top:80px;
   width: 100vw;
   color: white;
   height: fit-content;
   max-height: 100vh;
   overflow: hidden;
   position: absolute;
   justify-content: top;
   align-items: start;
   top: 0;
   display: flex;
   flex-direction: row;
   left: 0;
   opacity: ${props => props.opacity};
`;

export const ProfileCategoriesContainer = styled.div`
     @media screen and (max-width: 960px) {
       width:100vw;
     }


    height: 100%;
    color: black;
    width: 15vw;
    background: #f0f0f0;
`
export const ProfilePictureContainer = styled.div`
    position: absolute;
    top: 10vh;
    left: calc(50% + 50px);
    @media screen and (max-width: 960px) {
      left: calc(50% - 50px);
      top: 25vh;
    }

`
export const ProfileHeader =  styled.div`
    margin-top:40px;
    width: 75vw;
    height: 25vh;
    background: white;
    display: flex;
    justify-content: space-between;

    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4); /* Shadow effect */
      @media screen and (max-width: 960px) {
        padding-top:10px;
        width: 100vw;
        height: 15vh;
        border-radius: 0px;
        margin-top: 0;
        box-shadow: none; /* Shadow effect */
      }

`
export const HeaderLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 20px;
    justify-content: space-between;
    width: 25%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
     @media screen and (max-width: 960px) {
                margin: 0;
                width: 40%;
                justify-content: start;

             }

`


export const BodyInfoWrapper= styled.div`
    width: 100%;
    background:transparent;
    margin-left: 10%;
    @media screen and (max-width: 960px) {
           width:100%;
    }

`

export const ProfileInfoContainer = styled.div`
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4); /* Shadow effect */
    margin-top: 20px;
    justify-content: start;
    align-items: center;
    color: black;
    background-color: white;
    border-radius: 20px;
    width: 75vw;
    height: 75vh;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 960px) {
    margin-top: 0;
    border-radius: 0;
    box-shadow: none;
    width: 100vw;
  }


`
export const ProfileName=  styled.div`
    font-size: 60px;
    color: black;
    font-family: Times;
    @media screen and (max-width: 960px) {
            font-size: 30px;
         }

`
export const ProfileCategoriesContent = styled.div`
  @media screen and (max-width: 960px) {
    flex-direction: row;
  }
    display: flex;
    flex-direction: column;
`
export const ProfileCategoriesItems= styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Aboreto;
    font-size: 22px;
    height: 5vh;
    border: 1px solid black;
    /* Hover effect */
    &:hover {
        background-color: #e0e0e0; /* Lighter shade on hover */
    }
    /* Active effect */
    /* Conditional active state */
    ${({ active }) => active && `
        background-color: #c0c0c0; /* Darker shade when active */
    `}
    @media screen and (max-width: 960px) {
            width:100%;
          }
`

// Container for the profile content
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  background: #e0e0e0;
  width: 85vw;
  @media screen and (max-width: 960px) {
          width: 100vw;
        }


  height: calc(100vh - 80px);
`;
// Container for the profile content
export const ProfileJobTitle = styled.div`
    color: black;
    font-size: 30px;
     @media screen and (max-width: 960px) {
        color: #606060;
        font-size: 20px;
     }

`;
export const ProfileHeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Times;
    margin-left: 5%;
    gap: 5px;

`
export const PreviewButton = styled.button`
    background-color navy; /* Transparent background or secondaryColor */
    color: white; /* Default text color is black or primaryColor */
    border: 1px solid navy; /* Thick dark blue border */
    height: 40px;
    width: 100%;
    cursor: pointer; /* Show pointer cursor on hover */
    font-size: 18px;
    border-radius: 20px;
    /* Transition effect for hover */
    transition: background-color 0.3s, color 0.3s;
    /* Hover effect */
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: white; /* Change background color to dark blue on hover */
        color: black; /* Change text color to white on hover */
    }

`
// Styled sign out button
export const SignOutButton = styled.button`
    background-color: transparent; /* Transparent background */
    color: black; /* Red text color */
    border: 4px solid #ff5555; /* Thick red border */
    padding: 10px 20px; /* Button padding */
    border-radius: 20px; /* Button border radius */
    cursor: pointer; /* Show pointer cursor on hover */

    /* Transition effect for hover */
    transition: background-color 0.3s, color 0.3s;

    /* Hover effect */
    &:hover {
      background-color: #ff5555; /* Change background color to red on hover */
      color: #fff; /* Change text color to white on hover */
    }
  `;

// Container for profile image and name
export const ProfileInfo = styled.div`
    background-color: #f0f0f0;
    border-radius: 8px; /* Rounded corners */
    display: flex;
    align-items: center;
      justify-content: center;
      flex-direction: column;

      padding: 20px;
      margin-top: 20px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4); /* Shadow effect */
`;

// Profile image
export const ProfileImage = styled.img`
  width: 100px; /* Adjust size as needed */
  height: 100px;
  border-radius: 50%; /* Make it circular */
  margin-right: 20px;
`;

// Header for the profile page
// export const ProfileHeader = styled.h2`
//   color: #333; /* Dark text color */
//   margin-bottom: 20px;
// `;

// Name heading
export const NameHeading = styled.h3`
  color: #555; /* Slightly darker text color */
   input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        outline: none;
        &:hover {
        box-shadow: 0px 0px 20px rgba(255, 0, 0, 0.4); /* Shadow effect */
         }
         &:focus {
                 box-shadow: 0px 0px 20px rgba(255, 0, 0, 0.4); /* Shadow effect */
                  }

      }
`;
