import React, { useState, useEffect,useContext } from 'react';
import Header from "../../Components/Header/Header.jsx"
import {ManageJobsContainer,JobContainer,JobItem,JobContainerTitle} from "./ManageJobsStyled"
import axios from 'axios';
import {getAuthToken,request} from "../../axiosHelper.js"

const ManageJobs = ({customerData,dispatch,userId}) => {
 const [jobs,setJobs] = useState([])
 useEffect(() => {
       const fetchJobs = async () => {
       try {
            const response = await axios.get(`jobs/company/1`, {
              headers: {
                'Authorization': `Bearer ${getAuthToken()}`, // Include the Authorization header with the token
                'Content-Type': 'multipart/form-data', // Set the content type if required by the API
              },
              });
              setJobs(response.data)


      } catch (error) {
        console.log(error);
      }
      }
      fetchJobs()
      },[])
       const onAddToJob = async (user,jobId) => {
            const payload = {
                    "jobId": jobId,
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

     return(
     <div>
        <JobContainer>
        <JobContainerTitle>
            Your Jobs
        </JobContainerTitle>
        {jobs.map(job => (
                    <JobItem onClick={(e) => {onAddToJob(userId,job.id)}}key={job.id}>
                        {job.title}
                    </JobItem>
                ))}
        </JobContainer>
     </div>)
}
export default ManageJobs