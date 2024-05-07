import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux'; // Import connect if using Redux
import { ProfilePageContainer, TableContainer, Question, Answer, ContactInfoBubble, CandidatePrimaryInfoWrapper, QuestionsWrapper, TableRow, TableCell, TableHeaderCell, HeaderLinks, ProfilePictureContainer,PreviewButton,WorkHistoryWrapper,ProfileInfoContainer,ProfileJobTitle,ProfileHeaderInfo,ProfilePageContentContainer,ProfileName, ProfileCategoriesContainer, ProfileCategoriesItems, ProfileCategoriesContent, ProfileContainer,SignOutButton, ProfileInfo, ProfileImage, ProfileHeader, NameHeading } from './CandidateProfileStyled';
import Header from "../../Components/Header/Header";
import JohnnyCash from "../../Assets/Images/JohnnyCash.jpg"
import {updateIsLoggedIn} from "../../redux/app-state-slice";
import ProfilePicture from "../../Components/ProfilePicture/ProfilePicture"
import {useNavigate} from "react-router";
import {getAuthToken,request} from "../../axiosHelper.js"
import WorkHistoryItem from "../../Components/WorkHistoryItem/WorkHistoryItem"
import { FaEdit, FaEye,FaPhone,FaPlus } from 'react-icons/fa'
import {ModalContent,ModalHeader,ModalWrapper,CloseButton} from '../../Components/ModalAlt/ModalAltStyled.jsx'
import axios from 'axios';
import { Document, Page } from 'react-pdf';
import ManageJobs from '../../Components/ManageJobs/ManageJobs'

const CandidateProfile = ({customerData,dispatch,userId,leftOffset=false}) => {
  const { name } = { name: "Johnny Cash"};
  const navigate = useNavigate();
  const [profilePictureUrl, setProfilePictureUrl] = useState(JohnnyCash);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [tempFirstName, setTempFirstName] = useState(customerData.firstName.value);
  const [tempLastName, setTempLastName] = useState(customerData.lastName.value);
  const [selectedItem, setSelectedItem] = useState(null);
  const [userInfo,setUserInfo] = useState(null);
  const [resumeUrl,setResume] = useState(null);
  const [isContactInfoOpen, setContactInfoOpen] = useState(false)
  const [isResumeModalOpened,setResumeModalOpened] = useState(false)
  const [isJobModalOpened,setJobModalOpened] = useState(false)

  const profileStyle= {
    border:'5px solid #e0e0e0',
    background: 'blue',
    boxShadow: '0'
  }
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
     const handleItemClick = (item) => {
            setSelectedItem(item);
     };


    const fetchProfilePictureUrl = async () => {
      axios.get(`1/profile-picture`,{responseType:'blob'})
        .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
        setProfilePictureUrl(imageUrl);
        console.log(imageUrl)
        })
        .catch(error => {
          console.log(error)
        });
    };
     const fetchUserData = async () => {
          axios.get(`/${userId}/candidates/info`)
            .then(response => {

            console.log(response.data)
            })
            .catch(error => {
              console.log(error)
            });
        };
    const fetchResumeUrl = async () => {
          axios.get('1/resume', {
            responseType: 'blob', // Set the response type to 'blob' to receive a binary response
            headers: {
              'Authorization': `Bearer ${getAuthToken()}`, // Include the Authorization header with the token
              'Content-Type': 'multipart/form-data', // Set the content type if required by the API
            },
          })
            .then(response => {
            let base64String;

            const file = URL.createObjectURL(response.data);
            let reader = new FileReader();
                reader.readAsDataURL(response.data);
                reader.onloadend = () => {
                  base64String = reader.result;
                  setResume(base64String.substr(base64String.indexOf(',') + 1));

                };
                setResume(file)
                console.log("resume" + resumeUrl)
            })
            .catch(error => {
              console.log(error)
            });
        };
    useEffect(() => {
    const fetchUserInfo = async () => {
    fetchResumeUrl()
     axios.get(
         `${userId}/candidates/info`,
         {
           headers: {
             'Content-Type': 'multipart/form-data',
             'Authorization': "Bearer " + getAuthToken()
           }
         }
       ).then(response => {
        setUserInfo(response.data);
        console.log("user Info" + userInfo.job)

        })
        .catch(error => {
          console.log(error)
        });
    };
    fetchUserInfo();
    console.log(userInfo)
    },[userId]
    );
    const uploadImage = async (userId) => {
      try {
        const formData = new FormData();
        formData.append('profilePicture', selectedFile);

        // Make a POST request to your backend endpoint
        const response = await axios.post(userId + "/profile-picture", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': "Bearer " + getAuthToken()
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
      const onAddToJob = async (user) => {
      const payload = {
              "jobId": 1,
              "userId": user,
              status: "Shortlist"
          };

         request(
        "POST",
        "/jobs/candidates",
       payload,{Authorization: `Bearer ${getAuthToken()}`}).then(
        (response) => {
            alert("added user to job")
        }).catch(
        (error) => {
        }
    );
        };
    const data = {
      "2020": {
          "Quota": "$1,000,000",
          "Attainment": "102%",
          "Sales Cycle": "45",
          "Target Verticals": 'Healthcare, Finance, Technology',
          "Buyer Persona": 'CTO,CEO,COO',
          "AVG Deal": "$25,000"
        },
        "2021": {
          "Quota": "$1,200,000",
          "Attainment": "117%",
          "Sales Cycle": "-",
          "Target Verticals": "-",
          "Buyer Persona": "-",
          "AVG Deal": "-"
        },
        "2022": {
          "Quota": "$1,500,000",
          "Attainment": "$120%",
          "Sales Cycle": "-",
          "Target Verticals": "-",
          "Buyer Persona": "-",
          "AVG Deal": "-"
        },
        "2023": {
          "Quota": "$1,800,000",
          "Attainment": "123%",
          "Sales Cycle": "-",
           "Target Verticals": "-",
          "Buyer Persona": "-",
          "AVG Deal": "-"
        }
    };
    const years = Object.keys(data);

return (
<>

         <ModalWrapper isOpen={isJobModalOpened}>

           <ModalContent>
                <CloseButton onClick={e => {setJobModalOpened(false)}}>&times;</CloseButton>
                <ManageJobs userId={userId}customerData={customerData} dispatch={dispatch}/>
           </ModalContent>
          </ModalWrapper>





            <ProfileHeader>
            <ProfilePictureContainer leftOffset= {leftOffset}>
                <ProfilePicture Style={profileStyle} size={"100px"} userId={userId} name={userInfo?.firstName}/>
            </ProfilePictureContainer>
                <ProfileHeaderInfo>

                <ProfileName>  {userInfo?.firstName} {userInfo?.lastName} </ProfileName>
                <ProfileJobTitle> {userInfo?.location} </ProfileJobTitle>
                <ProfileJobTitle> Occupation: {userInfo?.job}</ProfileJobTitle>


                 </ProfileHeaderInfo>
                 <HeaderLinks>
                        <PreviewButton onClick={e=> {setResumeModalOpened(true)}} > Resume  &nbsp;
                         <FaEye/>
                       </PreviewButton>
                       <PreviewButton onClick={e=> {setJobModalOpened(true)}} > Add to Job  &nbsp;
                            <FaPlus/>
                       </PreviewButton>
                        <PreviewButton onClick={(e) => setContactInfoOpen(true)}> Contact Info  &nbsp;
                            <FaPhone/>
                         </PreviewButton>
                         <ContactInfoBubble visible={isContactInfoOpen}>  <CloseButton onClick={(e) => setContactInfoOpen(false)}>&times;</CloseButton>  Phone Number: 512-512-5122 <br/> Email Address: Email@gmail.com </ContactInfoBubble>
                 </HeaderLinks>
            </ProfileHeader>
            <ProfileInfoContainer>
            <CandidatePrimaryInfoWrapper>
            <WorkHistoryWrapper>
                  <h2>Work History</h2>

                      <WorkHistoryItem
                        style={{flex: "4"}}
                        logoSrc={JohnnyCash}
                        companyName="Oracle"
                        positionTitle="Enterprise Account Executive"
                        startDate="January 2019"
                        endDate="Present"
                      />
                      <WorkHistoryItem
                          style={{flex: "4"}}
                          logoSrc={JohnnyCash}
                          companyName="Apple"
                          positionTitle="Enterprise Account Executive"
                          startDate="June 2016"
                          endDate="December 2018"
                        />
             </WorkHistoryWrapper>
            <QuestionsWrapper>
                    <Question> Why I’m Looking? </Question>
                    <Answer style={{flex: "1",maxWidth: "400px"}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet ornare euismod.
                     </Answer>
                     <Question> Top Priorities </Question>

                  <Answer style={{flex: "1",maxWidth: "400px"}}>
                      Proin purus augue, auctor commodo libero et, vestibulum pellentesque nulla.
                  </Answer>
             </QuestionsWrapper>
             </CandidatePrimaryInfoWrapper>

      <TableContainer>
        <TableRow>
          <TableHeaderCell> Year </TableHeaderCell>
          {Object.keys(data).map(year => (
            <TableHeaderCell key={year}>{year}</TableHeaderCell>
          ))}
        </TableRow>
        {Object.keys(data['2020']).map(key => (
          <TableRow key={key}>
            <TableCell isKey>{key}</TableCell>
            {Object.keys(data).map(year => (
              <TableCell key={year}>{data[year][key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableContainer>

            </ProfileInfoContainer>

            </>
            )


}
export default CandidateProfile