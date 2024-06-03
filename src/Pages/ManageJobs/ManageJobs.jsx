import React, { useState, useEffect,useContext } from 'react';
import Header from "../../Components/Header/Header.jsx"
import {ManageJobsContainer,JobContainer,JobItem,JobContainerTitle} from "./ManageJobsStyled"
import axios from 'axios';
import {getAuthToken} from "../../axiosHelper.js"
import {useNavigate} from "react-router"
const ManageJobs = ({customerData,dispatch}) => {
 const [jobs,setJobs] = useState([])
 const navigate = useNavigate()
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

     return(

     <ManageJobsContainer>
     { jobs.length > 0 &&
        <JobContainer>
        <JobContainerTitle>
            Your Jobs
        </JobContainerTitle>
        {jobs.map(job => (
                    <JobItem onClick={(e) => {navigate(`/Manage/${job.id}`)}}key={job.id}>
                        {job.title}
                    </JobItem>
                ))}
        </JobContainer>
      }
      { jobs.length === 0 &&
              <JobContainer>
              No Jobs Found Please Create a job listing first
              {jobs.map(job => (
                          <JobItem onClick={(e) => {navigate(`/Manage/${job.id}`)}}key={job.id}>
                              {job.title}
                          </JobItem>
                      ))}
              </JobContainer>
            }
     </ManageJobsContainer>
     )
}
export default ManageJobs