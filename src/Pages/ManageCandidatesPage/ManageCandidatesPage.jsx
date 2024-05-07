import React, { useState, useEffect,useContext } from 'react';
import Header from "../../Components/Header/Header.jsx"
import axios from 'axios';
import {getAuthToken} from "../../axiosHelper.js"
import CandidateProfile from "../../Components/CandidateProfile/CandidateProfile"
import {request, setAuthHeader} from "../../axiosHelper";
import ProfilePicture from "../../Components/ProfilePicture/ProfilePicture.jsx"
import CandidateCardComponent from "../../Components/CandidateCard/CandidateCard.jsx"
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import {ManageCandidatesPageContainer,StatusSelectContainer,CandidateCard, StatusColumn, Shortlist, CandidatesIconContainer, StatusItem,CandidatesContainer,CandidatesTitleContainer,CandidatesTitle} from "./ManageCandidatesStyled"
const ManageCandidatesPage = ({ customerData,dispatch}) => {
    const { jobId } = useParams(); // Extract jobId from URL parameter
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [candidates,setCandidates] = useState()
    const [columns, setColumns] = useState({
        "Shortlist": [],
        "Reviewing": [],
        "Interviewing": [],
        "Hired": []
    });


    const candidate = {
        firstName: "Will",
        lastName: "Teasley",
        id: "1",
        location: "Austin, TX",
        company: "Google",
        experience: "25",
        quota: "250k",
        attainment: "100%"
    }
       const handleInvalidPicture = (candidate) => {


       };
//         const fetchCandidates= async () => {
//              axios.get(`jobs/candidates`,{responseType:'blob'})
//                .then(response => {
//                 setCandidates(response)
//
//                })
//                .catch(error => {
//                  console.log(error)
//                });
//            };
           useEffect(() => {
                 const fetchCandidate = async () => {
                   try {
                     const response = await axios.get(`jobs/candidates/${jobId}`, {

                       headers: {
                         'Authorization': `Bearer ${getAuthToken()}`, // Include the Authorization header with the token
                         'Content-Type': 'multipart/form-data', // Set the content type if required by the API
                       },
                     });
                     const updatedColumns = {
                             "Shortlist": [],
                             "Reviewing": [],
                             "Interviewing": [],
                             "Hired": []
                           };

                           response.data.forEach(candidate => {
                             updatedColumns[candidate.status].push(candidate.userId);
                           });
                           console.log(columns)

                           setColumns(updatedColumns);
                   } catch (error) {
                     console.log(error);
                   }
                 };

                 fetchCandidate();

                 // Cleanup function (if needed)
                 return () => {
                   // Cleanup code here, if any
                 };
               }, []);


    const handleOpenModal = (candidate) => {
      setSelectedCandidate(candidate);
      setIsModalOpen(true);
    };



    const handleDrop = (columnId,e) => {
       const itemId = e.dataTransfer.getData("text/plain");
       request(
              "POST",
              "/jobs/candidates",
              {
                  jobId: 1,
                  userId: itemId,
                  status: columnId

              },{"Authorization" : `Bearer ${getAuthToken()}`}).then(
              (response) => {
              setColumns((prevColumns) => {
                  const updatedColumns = { ...prevColumns };
                  // Remove the item from the source column
                  const sourceColumnId = Object.keys(prevColumns).find(
                      (key) => prevColumns[key].some((item) => parseInt(item) === parseInt(itemId))
                  );
                  if (sourceColumnId) {
                      updatedColumns[sourceColumnId] = updatedColumns[sourceColumnId].filter(
                          (item) => parseInt(item) !== parseInt(itemId)
                      );
                  }
                  // Add the item to the destination column
                  updatedColumns[columnId] = [...(updatedColumns[columnId] || []), itemId];
                  console.log(updatedColumns);
                  return updatedColumns;
              });



              }).catch(
              (error) => {
              }
          );



//          setColumns((prevColumns) => {
//              const updatedColumns = { ...prevColumns };
//              const sourceColumnId = Object.keys(prevColumns).find(
//                (key) => prevColumns[key].includes(itemId)
//              );
//
//              if (sourceColumnId) {
//                // Remove the item from the source column
//                updatedColumns[sourceColumnId] = updatedColumns[sourceColumnId].filter(
//                  (item) => item !== itemId
//                );
//              }
//
//              // Add the item to the destination column
//              updatedColumns[columnId] = [...(updatedColumns[columnId] || []), itemId];
//
//              return updatedColumns;
//            });
          console.log("Item dropped:", itemId, "into column:", columnId);
        };

      const handleDragOver = (e) => {
        e.preventDefault();
      };


    return(

        <>
        <Header customerData={customerData} dispatch={dispatch}/>
        <ManageCandidatesPageContainer>
            <StatusSelectContainer>
            <StatusItem onDrop={handleDrop}
                              onDragOver={handleDragOver}
                              > Shortlist (3) </StatusItem>
            <StatusItem> Reviewing (10)</StatusItem>
            <StatusItem> Interviewing (5)</StatusItem>
            <StatusItem> Hired (0) </StatusItem>
            </StatusSelectContainer>
            <CandidatesContainer>


            <CandidatesIconContainer>
                <StatusColumn id="Shortlist" onDrop={(e) => handleDrop("Shortlist",e)} onDragOver={handleDragOver} >
                    {columns["Shortlist"].map((item) => (
                      <CandidateCardComponent draggable={true} key={item} id={item} userId={item} content={`Candidate ${item}`} />
                    ))}
                  </StatusColumn>
                  <StatusColumn id="Reviewing" onDrop={(e) => handleDrop("Reviewing",e)} onDragOver={handleDragOver}>
                    {columns["Reviewing"].map((item) => (
                      <CandidateCardComponent draggable={true} key={item} id={item} userId={item} content={`Candidate ${item}`} />
                    ))}
                  </StatusColumn>
                  <StatusColumn id="Interviewing" onDrop={(e) => handleDrop("Interviewing",e )} onDragOver={handleDragOver}>
                    {columns["Interviewing"].map((item) => (
                      <CandidateCardComponent draggable={true} key={item} id={item} userId={item} content={`Candidate ${item}`} />
                    ))}
                  </StatusColumn>
                  <StatusColumn id="Hired" onDrop={(e) => handleDrop("Hired",e)} onDragOver={handleDragOver}>
                    {columns["Hired"].map((item) => (
                      <CandidateCardComponent draggable={true} key={item} id={item} userId={item} content={`Candidate ${item}`} />
                    ))}
                  </StatusColumn>

            </CandidatesIconContainer>
            </CandidatesContainer>
        </ManageCandidatesPageContainer>
        </>
    )
}

export default ManageCandidatesPage;