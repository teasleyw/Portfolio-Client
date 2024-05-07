import React, {useEffect,useState} from "react"
import {CandidateCardContainer,CandidateCardInfo,CandidateCardInfoSecondary} from "./CandidateCardStyled"
import ProfilePicture from "../../Components/ProfilePicture/ProfilePicture"
import axios from 'axios';
import {getAuthToken} from "../../axiosHelper.js"
const CandidateCard = ({userId,id,draggable}) =>{
  const [candidate, setCandidate] = useState(null);
const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", id);
  };
   useEffect(() => {
      const fetchCandidate = async () => {
        try {
          const response = await axios.get(`${userId}/candidates/info`, {

            headers: {
              'Authorization': `Bearer ${getAuthToken()}`, // Include the Authorization header with the token
              'Content-Type': 'multipart/form-data', // Set the content type if required by the API
            },
          });
          setCandidate(response.data);
          console.log(candidate)
        } catch (error) {
          console.log(error);
        }
      };

      fetchCandidate();

      return () => {

      };
    }, [userId]);


    return(
        <CandidateCardContainer id={id} draggable={draggable} onDragStart={handleDragStart}>
        <CandidateCardInfo>
            <ProfilePicture style={{flexShrink: "0"}} size={"75px"} userId={"1"} name={candidate?.firstName}/>
            <CandidateCardInfoSecondary>
            <div style={{fontSize:"22px", borderBottom: "1px solid black", textAlign: "center"} }>
                {candidate?.firstName} {candidate?.lastName}
            </div>
            <div>
                Occupation: {candidate?.job}
            </div>
            <div> Quota: {candidate?.quota}
            </div>
            <div> Attainment: {candidate?.attainment}
            </div>
            </CandidateCardInfoSecondary>

        </CandidateCardInfo>

        </CandidateCardContainer>
    )
}
export default CandidateCard;