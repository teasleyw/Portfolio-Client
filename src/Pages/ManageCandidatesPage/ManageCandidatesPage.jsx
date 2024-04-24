import React, { useState, useEffect,useContext } from 'react';
import Header from "../../Components/Header/Header.jsx"
import CandidateProfile from "../../Components/CandidateProfile/CandidateProfile"
import ProfilePicture from "../../Components/ProfilePicture/ProfilePicture.jsx"
import CandidateCardComponent from "../../Components/CandidateCard/CandidateCard.jsx"
import {ManageCandidatesPageContainer,StatusSelectContainer,CandidateCard, StatusColumn, Shortlist, CandidatesIconContainer, StatusItem,CandidatesContainer,CandidatesTitleContainer,CandidatesTitle} from "./ManageCandidatesStyled"
const ManageCandidatesPage = ({customerData,dispatch}) => {
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [columns, setColumns] = useState({
        "Shortlist-Column": ["1"],
        "Reviewing-Column": [],
        "Interviewing-Column": [],
        "Hired-Column": []
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


    const handleOpenModal = (candidate) => {
      setSelectedCandidate(candidate);
      setIsModalOpen(true);
    };



    const handleDrop = (columnId,e) => {
       const itemId = e.dataTransfer.getData("text/plain");
         setColumns((prevColumns) => {
             const updatedColumns = { ...prevColumns };
             const sourceColumnId = Object.keys(prevColumns).find(
               (key) => prevColumns[key].includes(itemId)
             );

             if (sourceColumnId) {
               // Remove the item from the source column
               updatedColumns[sourceColumnId] = updatedColumns[sourceColumnId].filter(
                 (item) => item !== itemId
               );
             }

             // Add the item to the destination column
             updatedColumns[columnId] = [...(updatedColumns[columnId] || []), itemId];

             return updatedColumns;
           });
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
                <StatusColumn id="Shortlist-Column" onDrop={(e) => handleDrop("Shortlist-Column",e)} onDragOver={handleDragOver} >
                    {columns["Shortlist-Column"].map((item) => (
                      <CandidateCardComponent draggable={true} key={item} id={item} content={`Candidate ${item}`} />
                    ))}
                  </StatusColumn>
                  <StatusColumn id="Reviewing-Column" onDrop={(e) => handleDrop("Reviewing-Column",e)} onDragOver={handleDragOver}>
                    {columns["Reviewing-Column"].map((item) => (
                      <CandidateCardComponent draggable={true} key={item} id={item} content={`Candidate ${item}`} />
                    ))}
                  </StatusColumn>
                  <StatusColumn id="Interviewing-Column" onDrop={(e) => handleDrop("Interviewing-Column",e )} onDragOver={handleDragOver}>
                    {columns["Interviewing-Column"].map((item) => (
                      <CandidateCardComponent draggable={true} key={item} id={item} content={`Candidate ${item}`} />
                    ))}
                  </StatusColumn>
                  <StatusColumn id="Hired-Column" onDrop={(e) => handleDrop("Hired-Column",e)} onDragOver={handleDragOver}>
                    {columns["Hired-Column"].map((item) => (
                      <CandidateCardComponent draggable={true} key={item} id={item} content={`Candidate ${item}`} />
                    ))}
                  </StatusColumn>

            </CandidatesIconContainer>
            </CandidatesContainer>
        </ManageCandidatesPageContainer>
        </>
    )
}

export default ManageCandidatesPage;