// JobListingsPage.js
import React, { useState } from 'react';
import {JobListingsPageWrapper,JobListingsContentWrapper,JobListing, ModalContent,ModalOverlay} from './JobListingsPageStyled';
import Header from "../../Components/Header/Header";
const jobsData = [
    { id: 1, title: 'Software Engineer', type: 'Full-time', experience: 'Mid Level', location: 'San Francisco, CA', description: "" },
    { id: 2, title: 'Marketing Specialist', type: 'Part-time', experience: 'Entry Level', location: 'New York, NY',description: ""},
    { id: 3, title: 'Project Manager', type: 'Full-time', experience: 'Senior Level', location: 'Chicago, IL',description: "" },
    { id: 4, title: 'Kitchen Manager', type: 'Contract', experience: 'Entry Level', location: 'Austin, TX',description: ""},
    // Add more job listings as needed
];

const JobListingsPage = ({customerData, dispatch}) => {
   const [jobs, setJobs] = useState(jobsData);
   const [filters, setFilters] = useState({ type: '', experience: '', location: '' });
   const [newJob, setNewJob] = useState({ title: '', type: '', experience: '', location: '', description: '' });
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isJobModalOpen, setIsJobModalOpen] = useState(false);

    const [selectedJob, setSelectedJob] = useState(null);
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };
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
                   <select name="type" value={filters.type} onChange={handleFilterChange}>
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
                   <button onClick={() => setFilters({ type: '', experience: '', location: '' })}>Reset Filters</button>
               </div>
               <div>
                   <button onClick={() => setIsModalOpen(true)}>Add New Job</button>
               </div>

              {/* Modal for Creating New Job */}
                  <ModalOverlay isOpen={isModalOpen}>
                      <ModalContent>
                          <h2>Create New Job</h2>
                          <form onSubmit={handleNewJobSubmit}>
                            <div>
                                <label>Title:</label>
                                <input type="text" name="title" value={newJob.title} onChange={handleNewJobChange} />
                            </div>
                            <div>
                                <label>Job Type:</label>
                                <select name="type" value={newJob.type} onChange={handleNewJobChange}>
                                    <option value="">Select</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Contract">Contract</option>
                                </select>
                            </div>
                            <div>
                                <label>Experience Level:</label>
                                <select name="experience" value={newJob.experience} onChange={handleNewJobChange}>
                                    <option value="">Select</option>
                                    <option value="Entry Level">Entry Level</option>
                                    <option value="Mid Level">Mid Level</option>
                                    <option value="Senior Level">Senior Level</option>
                                </select>
                            </div>
                            <div>
                                <label>Location:</label>
                                <input type="text" name="location" value={newJob.location} onChange={handleNewJobChange} />
                            </div>
                            <div>
                                <label>Description:</label>
                                <textarea name="description" value={newJob.description} onChange={handleNewJobChange}></textarea>
                            </div>
                            <button type="submit">Add New Job</button>
                          </form>
                          <button onClick={() => setIsModalOpen(false)}>Close</button>
                      </ModalContent>
                  </ModalOverlay>


               {/* Display Job Listings */}
               <div>
                   {filteredJobs.map(job => (
                       <JobListing key={job.id} onClick={() => handleJobClick(job)}>
                           <h2>{job.title}</h2>
                           <p>Type: {job.type}</p>
                           <p>Experience: {job.experience}</p>
                           <p>Location: {job.location}</p>
                       </JobListing>
                   ))}
               </div>
               {selectedJob && (
                   <ModalOverlay isOpen={isJobModalOpen} onClick={handleCloseJobModal}>
                       <ModalContent onClick={(e) => e.stopPropagation()}>
                           <h2>{selectedJob.title}</h2>
                           <p>Type: {selectedJob.type}</p>
                           <p>Experience: {selectedJob.experience}</p>
                           <p>Location: {selectedJob.location}</p>
                           <p>Description: {selectedJob.description}</p>
                           <button onClick={handleCloseJobModal}>Close</button>
                       </ModalContent>
                   </ModalOverlay>
               )}
           </JobListingsContentWrapper>
           </JobListingsPageWrapper>
          </>
       );
   };

   export default JobListingsPage;