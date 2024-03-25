// JobListingsPage.js
import React, { useState, useEffect} from 'react';
import {JobListingsPageWrapper,JobListingsContentWrapper,JobListing,ModalOverlay, Button} from './JobListingsPageStyled';
import Header from "../../Components/Header/Header";
import SignOutButton from "../../Components/Buttons/OutlineButton.jsx";
import CreateJobForm from "../../Components/CreateJobForm/CreateJobForm";
import axios from "axios"
import {getAuthToken} from "../../axiosHelper";
import {ModalContent,ModalHeader,ModalWrapper,CloseButton} from '../../Components/ModalAlt/ModalAltStyled.jsx'
// const jobsData = [
//     { id: 1, title: 'Software Engineer', type: 'Full-time', experience: 'Mid Level', location: 'San Francisco, CA', description: "" },
//     { id: 2, title: 'Marketing Specialist', type: 'Part-time', experience: 'Entry Level', location: 'New York, NY',description: ""},
//     { id: 3, title: 'Project Manager', type: 'Full-time', experience: 'Senior Level', location: 'Chicago, IL',description: "" },
//     { id: 4, title: 'Kitchen Manager', type: 'Contract', experience: 'Entry Level', location: 'Austin, TX',description: ""},
//     // Add more job listings as needed
// ];

const JobListingsPage = ({customerData, dispatch}) => {
   const [filters, setFilters] = useState({ type: '', experience: '', location: '' });
   const [newJob, setNewJob] = useState({ title: '', type: '', experience: '', location: '', description: '' });
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isJobModalOpen, setIsJobModalOpen] = useState(false);
   const [jobs, setJobs] = useState([]);
    const handleOpenModal = (candidate) => {
            setIsModalOpen(true);
      };

      // Function to handle closing the modal
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };


    const [selectedJob, setSelectedJob] = useState(null);
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    useEffect(() => {
    const fetchJobs = async () => {

      try {
        const response = await axios.get('/jobs', {
        headers: {
          Authorization: 'Bearer '+ getAuthToken(),
        },
      });
        const data = response.data;

        // Assuming the response is an array of jobs
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
    }, []);
    const handleJobClick = (job) => {
            setSelectedJob(job);
            setIsJobModalOpen(true);
        };

    const handleCloseJobModal = () =>{
        setIsJobModalOpen(false);
    }

    const handleNewJobChange = (e) => {
           const { name, value } = e.target;
           setNewJob({ ...newJob, [name]: value });
       };

       const handleNewJobSubmit = (e) => {
           e.preventDefault();
           const newJobWithId = { ...newJob, id: Date.now() }; // Assign a unique ID
           setJobs([...jobs, newJobWithId]);
           setNewJob({ title: '', type: '', experience: '', location: '', description: '' }); // Clear the form
           setIsModalOpen(false); // Close the modal after submitting the form
       };

    const filteredJobs = jobs.filter(job => {
        return (filters.type === '' || job.type === filters.type) &&
               (filters.experience === '' || job.experience === filters.experience) &&
               (filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase()));
    });

   return (
       <>
       <JobListingsPageWrapper>
        <Header customerData={customerData} dispatch={dispatch} />
           <JobListingsContentWrapper>
               <h1>Job Listings</h1>
               <div>
                   <label>Job Type:</label>
                   <select name="type" value={filters.workType} onChange={handleFilterChange}>
                       <option value="">All</option>
                       <option value="Full-time">Full-time</option>
                       <option value="Part-time">Part-time</option>
                       <option value="Contract">Contract</option>
                   </select>
               </div>
               <div>
                   <label>Experience Level:</label>
                   <select name="experience" value={filters.experience} onChange={handleFilterChange}>
                       <option value="">All</option>
                       <option value="Entry Level">Entry Level</option>
                       <option value="Mid Level">Mid Level</option>
                       <option value="Senior Level">Senior Level</option>
                   </select>
               </div>
               <div>
                   <label>Location:</label>
                   <input type="text" name="location" value={filters.location} onChange={handleFilterChange} />
               </div>
               <div>
                   <SignOutButton onClick={() => setFilters({ type: '', experience: '', location: '' })}>Reset Filters</SignOutButton>
               </div>
               <div>
                   <SignOutButton onClick={() => setIsModalOpen(true)}>Add New Job</SignOutButton>
               </div>

                <ModalWrapper isOpen={isModalOpen}>
                   <ModalContent>
                     <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
                      <CreateJobForm customerData={customerData} dispatch={dispatch}/>
                   </ModalContent>
                 </ModalWrapper>


               {/* Display Job Listings */}
               <div>
                   {filteredJobs.map(job => (
                       <JobListing key={job.id} onClick={() => handleJobClick(job)}>
                           <h2>{job.title}</h2>
                           <p>Type: {job.workType}</p>
                           <p>Experience: {job.experience}</p>
                           <p>Location: {job.location}</p>
                       </JobListing>
                   ))}
               </div>
               {selectedJob && (
                   <ModalOverlay isOpen={isJobModalOpen} onClick={handleCloseJobModal}>
                       <ModalContent onClick={(e) => e.stopPropagation()}>
                           <h2>{selectedJob.title}</h2>
                           <p>Type: {selectedJob.workType}</p>
                           <p>Experience: {selectedJob.experience}</p>
                           <p>Location: {selectedJob.location}</p>
                           <p>Description: {selectedJob.description}</p>
                           <SignOutButton > Apply for Job </SignOutButton>
                           <SignOutButton onClick={handleCloseJobModal}>Close</SignOutButton>
                       </ModalContent>
                   </ModalOverlay>
               )}
           </JobListingsContentWrapper>
           </JobListingsPageWrapper>
          </>
       );
   };

   export default JobListingsPage;