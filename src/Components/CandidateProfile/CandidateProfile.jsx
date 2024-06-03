import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux'; // Import connect if using Redux
import { ProfilePageContainer, TableContainer, Question,WorkHistoryItemWrapper, Answer, ContactInfoBubble, CandidatePrimaryInfoWrapper, QuestionsWrapper, TableRow, TableCell, TableHeaderCell, HeaderLinks, ProfilePictureContainer,PreviewButton,WorkHistoryWrapper,ProfileInfoContainer,ProfileJobTitle,ProfileHeaderInfo,ProfilePageContentContainer,ProfileName, ProfileCategoriesContainer, ProfileCategoriesItems, ProfileCategoriesContent, ProfileContainer,SignOutButton, ProfileInfo, ProfileImage, ProfileHeader, NameHeading } from './CandidateProfileStyled';
import Header from "../../Components/Header/Header";
import JohnnyCash from "../../Assets/Images/JohnnyCash.jpg"
import {updateIsLoggedIn} from "../../redux/app-state-slice";
import ProfilePicture from "../../Components/ProfilePicture/ProfilePicture"
import {useNavigate} from "react-router";
import {getAuthToken,request,setAuthHeader} from "../../axiosHelper.js"
import WorkHistoryItem from "../../Components/WorkHistoryItem/WorkHistoryItem"
import QuestionAnswerItem from "../../Components/QuestionAnswerItem/QuestionAnswerItem"
import MetricsTable from "../../Components/MetricsTable/MetricsTable"
import { FaEdit, FaEye,FaPhone,FaPlus,FaArrowLeft,FaArrowRight } from 'react-icons/fa'
import {ModalContent,ModalHeader,ModalWrapper,CloseButton} from '../../Components/ModalAlt/ModalAltStyled.jsx'
import axios from 'axios';
import { Document, Page } from 'react-pdf';
import ManageJobs from '../../Components/ManageJobs/ManageJobs'

import OutlineButton from "../../Components/Buttons/OutlineButton"
import CreateWorkHistoryItem from "../../Components/CreateCandidateForm/CreateWorkHistoryItem"
import CreateCandidateMetrics from "../../Components/CreateCandidateForm/CreateCandidateMetrics"
import CreateQuestionAnswerItem from "../../Components/CreateCandidateForm/CreateCandidateQuestionItem"
import ErrorPopup from "../../Components/ErrorPopup/ErrorPopup.jsx"
const CandidateProfile = ({editable, customerData,dispatch,userId,leftOffset=false, profilePictureYPadding}) => {
  const { name } = { name: "Johnny Cash"};
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error")
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
  const [workHistoryList, setWorkHistoryList] = useState([])
  const [metricsList, setMetricsList] = useState([])
  const [questionAnswerList, setQuestionAnswerList] = useState([])
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const itemsPerPage = 2; // Number of items visible per page
  const [isWorkHistoryOpen, setIsWorkHistoryOpen] = useState(false);
  const [isQuestionAnswerOpen, setIsQuestionAnswerOpen] = useState(false);
  const [isMetricsOpen, setIsMetricsOpen] = useState(false);
  const profileStyle= {
    border:'5px solid #e0e0e0',
    background: 'blue',
    boxShadow: '0'
  }
   const handleNextPage = () => {
            setCurrentPage(currentPage + 1);
          };

   const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
   };
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
   const updateWorkHistoryList = async (updatedItem) => {
     const updatedList = workHistoryList.map( async item => {

       if (item.id === updatedItem.id) {
         const updatedItemFromServer = await onUpdateWorkHistory(updatedItem);
         return updatedItemFromServer; // Replace the updated item
       }
       return item;
     });
     const updatedListWithResponses = await Promise.all(updatedList);
     setWorkHistoryList(updatedListWithResponses.filter(item => item !== null));
   };
   const updateQuestionAnswerList = async (updatedItem) => {
        const updatedList = questionAnswerList.map( async item => {

          if (item.id === updatedItem.id) {
            const updatedItemFromServer = await onUpdateQuestionAnswer(updatedItem);
            return updatedItemFromServer; // Replace the updated item
          }
          return item;
        });
        const updatedListWithResponses = await Promise.all(updatedList);
        setQuestionAnswerList(updatedListWithResponses.filter(item => item !== null));
      };
     const updateMetricsList = async (updatedItems) => {
       const updatedList = await Promise.all(
         updatedItems.map(async (updatedItem) => {
           const updatedItemFromServer = await onUpdateMetrics(updatedItem);
           return updatedItemFromServer;
         })
       );
       setMetricsList(updatedList.filter(item => item !== null));
     };


    const fetchProfilePictureUrl = async () => {
      axios.get(`1/profile-picture`,{responseType:'blob'})
        .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
        setProfilePictureUrl(imageUrl);
        })
        .catch(error => {
        });
    };
     const fetchUserData = async () => {
          axios.get(`/${userId}/candidates/info`)
            .then(response => {

            })
            .catch(error => {
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
            })
            .catch(error => {
            });
        };
        const onUpdateWorkHistory = async (item) => {
              const payload = {
                      id: item.id,
                      userId: item.userId,
                      jobTitle: item.jobTitle,
                      company: item.company,
                      endDate: item.endDate,
                      startDate: item.startDate
                  };

                 try {
                     const response = await request("POST", "/workhistory", payload, { Authorization: `Bearer ${getAuthToken()}` });
                     return response.data;
                   } catch (error) {
                     return null;
                   }
        };
        const onUpdateMetrics = async (item) => {
        const payload = {
              id: item.id,
              userId: userId,
              year: item.year,
              salesCycle: item.salesCycle,
              targetVerticals: item.targetVerticals,
             buyerPersona: item.buyerPersona,
             avgDeal: item.avgDeal,
             attainment: item.attainment,
             quota: item.quota
          };

         try {
             const response = await request("POST", "/metrics", payload, { Authorization: `Bearer ${getAuthToken()}` });
             return response.data;
           } catch (error) {
             return null;
           }
        };
        const onUpdateQuestionAnswer = async (item) => {
          const payload = {
                  id: item.id,
                  userId: item.userId,
                  answer: item.answer,
                  question: item.question,
              };

             try {
                 const response = await request("POST", "/QandA", payload, { Authorization: `Bearer ${getAuthToken()}` });
                 return response.data;
               } catch (error) {
                 return null;
               }
            };
        const getWorkHistory = async () => {
                  axios.get(`workhistory/${userId}`, {
                    headers: {
                      'Authorization': `Bearer ${getAuthToken()}`, // Include the Authorization header with the token
                    }
                  })
                    .then(response => {
                            setWorkHistoryList(response.data);

                    })
                    .catch(error => {
                    });
                };
    const getQuestionAnswer= async () => {
              axios.get(`QandA/${userId}`, {
                headers: {
                  'Authorization': `Bearer ${getAuthToken()}`, // Include the Authorization header with the token
                }
              })
                .then(response => {
                        setQuestionAnswerList(response.data);

                })
                .catch(error => {
                });
            };
    useEffect(() => {
    const fetchUserInfo = async () => {
    fetchResumeUrl()
    getWorkHistory()
    getQuestionAnswer()
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

        })
        .catch(error => {
        });
    };
    fetchUserInfo();
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
        axios.get(`1/profile-picture`,{responseType:'blob'})
        .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
        setProfilePictureUrl(imageUrl);
        })
        .catch(error => {
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
    const addWorkHistoryItemToList = (item) => {
      request(
           "POST",
           "/workhistory",
           {
               userId: userId,
               startDate: item.startDate,
               endDate: item.endDate,
               company: item.company,
               jobTitle: item.jobTitle,
           },{"Authorization" : `Bearer ${getAuthToken()}`}).then(
           (response) => {
                 const newItem = response.data;

                 // Add the new item to the workHistoryList
                 setWorkHistoryList([...workHistoryList, newItem]);

           }).catch(
           (error) => {
               if(error.response === undefined){
                  handleShowError("Error Creating User")
               }
               else{
                  handleShowError(error.response.data.message)
               }
           }
       )


    }
    const addQuestionAnswerItemToList = (item) => {
          request(
               "POST",
               "/QandA",
               {
                   userId: userId,
                   question: item.question,
                   answer: item.answer,
               },{"Authorization" : `Bearer ${getAuthToken()}`}).then(
               (response) => {
                 // Generate a unique ID for the new item using the current length of the list
                 const newItem = response.data;

                 // Add the new item to the workHistoryList
                 setQuestionAnswerList([...questionAnswerList, newItem]);

               }).catch(
               (error) => {
                   if(error.response === undefined){
                      handleShowError("Error Creating User")
                   }
                   else{
                      handleShowError(error.response.data.message)
                   }
               }
           )


        }
        const addMetricsItemToList = async (item) => {
                const payload = {
                    userId: userId,
                    year: item.year,
                    salesCycle: item.salesCycle,
                    targetVerticals: item.targetVerticals,
                    buyerPersona: item.buyerPersona,
                    avgDeal: item.avgDeal,
                    attainment: item.attainment,
                    quota: item.quota
                };
                try {
                    const response = await request("POST", `/metrics`, payload, { Authorization: `Bearer ${getAuthToken()}` });
                } catch (error) {
                    setErrorMessage('Failed to add metrics item');
                    setShowError(true);
                }
            };

    const deleteWorkHistoryItemById = (itemId) => {
        axios.delete(`/workhistory/${itemId}`, {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`
            }
        })
        .then(response => {
            // Handle successful deletion
        })
        .catch(error => {
            if (error.response === undefined) {
                handleShowError("Error deleting work history item");
            } else {
                handleShowError(error.response.data.message);
            }
        });
    };
    const deleteQuestionAnswerItemById = (itemId) => {
            axios.delete(`/QandA/${itemId}`, {
                headers: {
                    Authorization: `Bearer ${getAuthToken()}`
                }
            })
            .then(response => {
                // Handle successful deletion
            })
            .catch(error => {
                if (error.response === undefined) {
                    handleShowError("Error deleting Question Answer item");
                } else {
                    handleShowError(error.response.data.message);
                }
            });
        };
    const handleShowError = (errorMessage) => {
        setShowError(true)
        setErrorMessage(errorMessage)
    }
    const handleCloseError = () => {
            setShowError(false)
            setErrorMessage("Error")
    }

return (
<>
         {showError && <ErrorPopup message={errorMessage} onClose={handleCloseError} />}
         <ModalWrapper isOpen={isJobModalOpened}>
           <ModalContent>
                <CloseButton onClick={e => {setJobModalOpened(false)}}>&times;</CloseButton>
                <ManageJobs userId={userId}customerData={customerData} dispatch={dispatch}/>
           </ModalContent>
          </ModalWrapper>
          <ModalWrapper isOpen={isWorkHistoryOpen}>
                   <ModalContent>
                        <CloseButton onClick={e => {setIsWorkHistoryOpen(false)}}>&times;</CloseButton>
                        <CreateWorkHistoryItem setModalOpen={setIsWorkHistoryOpen} addWorkHistoryItem={addWorkHistoryItemToList} customerData={customerData} dispatch={dispatch}/>
                   </ModalContent>
          </ModalWrapper>
           <ModalWrapper isOpen={isQuestionAnswerOpen}>
                     <ModalContent>
                          <CloseButton onClick={e => {setIsQuestionAnswerOpen(false)}}>&times;</CloseButton>
                          <CreateQuestionAnswerItem setModalOpen={setIsQuestionAnswerOpen} addQuestionAnswerItem={addQuestionAnswerItemToList} customerData={customerData} dispatch={dispatch}/>
                     </ModalContent>
            </ModalWrapper>
            <ModalWrapper isOpen={isMetricsOpen}>
                     <ModalContent>
                          <CloseButton onClick={e => {setIsMetricsOpen(false)}}>&times;</CloseButton>
                          <CreateCandidateMetrics setModalOpen={setIsMetricsOpen} addMetricItem={addMetricsItemToList} customerData={customerData} dispatch={dispatch}/>
                     </ModalContent>
            </ModalWrapper>






            <ProfileHeader>
            <ProfilePictureContainer leftOffset= {leftOffset} profilePictureYPadding={profilePictureYPadding}>
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

            <div style={{display: "flex", width: "100%", gap: "25px", flex:"row", alignItems: "center", justifyContent: "center" }}>
             <h2>Work History</h2> {editable && <>
                <OutlineButton style={{height: "20px"}} onClick={(e) => {setIsWorkHistoryOpen(true)}}> <FaPlus/> </OutlineButton>
             </>}
             </div>
                  {workHistoryList.length > itemsPerPage &&
                             <div style={{width: "100%",display: "flex", gap: "25px",justifyContent: "start"}}>
                               <OutlineButton onClick={handlePrevPage} disabled={currentPage === 1}><FaArrowLeft /></OutlineButton>
                               <OutlineButton onClick={handleNextPage} disabled={currentPage === Math.ceil(workHistoryList.length / itemsPerPage)}><FaArrowRight /></OutlineButton>
                             </div>
                           }
                           <WorkHistoryItemWrapper>
                         {workHistoryList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
                          <WorkHistoryItem
                            updateWorkHistoryList={updateWorkHistoryList}
                            deleteWorkHistoryItemById={deleteWorkHistoryItemById}
                            editable={editable}
                            id={item.id}
                            userId={item.userId}
                            company={item.company}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            jobTitle={item.jobTitle}
                            key={index} />
                        ))}
                        </WorkHistoryItemWrapper>
             </WorkHistoryWrapper>
            <QuestionsWrapper>
            {editable && <>
            <OutlineButton style={{height: "20px"}} onClick={(e) => {setIsQuestionAnswerOpen(true)}}>Add Question <FaPlus/> </OutlineButton>
            </>}
            {questionAnswerList.map((item, index) => (
                    <QuestionAnswerItem
                    updateQuestionAnswerList={updateQuestionAnswerList}
                    deleteQuestionAnswerItemById={deleteQuestionAnswerItemById}
                    editable={editable}
                    id={item.id}
                    userId={item.userId}
                    question={item.question}
                    answer={item.answer}
                    key={index}
                    />
                     ))}
             </QuestionsWrapper>
             </CandidatePrimaryInfoWrapper>
             <MetricsTable updateMetricsList={updateMetricsList} editable={editable} userId={userId} setMetricsModalOpen={setIsMetricsOpen}/>

            </ProfileInfoContainer>

            </>
            )


}
export default CandidateProfile