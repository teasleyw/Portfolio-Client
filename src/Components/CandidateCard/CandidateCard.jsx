import React from "react"
import {CandidateCardContainer,CandidateCardInfo} from "./CandidateCardStyled"
import ProfilePicture from "../../Components/ProfilePicture/ProfilePicture"
const CandidateCard = ({userId,id,draggable}) =>{
const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", id);
  };



    return(
        <CandidateCardContainer id={id} draggable={draggable} onDragStart={handleDragStart}>
        <CandidateCardInfo>
            <ProfilePicture size={"75px"} userId={"1"} name={"Will"}/>
            <div> William Teasley
            </div>
            <div> Occupation: AE
            </div>
            <div> Quota: 1.2M
            </div>
            <div> Attainment: 100%
            </div>

        </CandidateCardInfo>

        </CandidateCardContainer>
    )
}
export default CandidateCard;