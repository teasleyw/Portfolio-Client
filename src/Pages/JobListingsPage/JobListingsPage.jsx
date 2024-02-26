// JobListingsPage.js
import React, { useState } from 'react';
import JobListingsPageStyled from './JobListingsPageStyled';
import Header from "../../Components/Header/Header";
const jobs = [
    { id: 1, title: 'Software Engineer', type: 'Full-time', experience: 'Mid Level', location: 'San Francisco, CA' },
    { id: 2, title: 'Marketing Specialist', type: 'Part-time', experience: 'Entry Level', location: 'New York, NY' },
    { id: 3, title: 'Project Manager', type: 'Full-time', experience: 'Senior Level', location: 'Chicago, IL' },
    { id: 4, title: 'Kitchen Manager', type: 'Contract', experience: 'Entry Level', location: 'Austin, TX' },
    // Add more job listings as needed
];

const JobListingsPage = ({customerData, dispatch}) => {
    const [filters, setFilters] = useState({ type: '', experience: '', location: '' });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const filteredJobs = jobs.filter(job => {
        return (filters.type === '' || job.type === filters.type) &&
               (filters.experience === '' || job.experience === filters.experience) &&
               (filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase()));
    });

    return (
    <>
     <Header customerData={customerData} dispatch={dispatch} />
        <JobListingsPageStyled>
            <h1>Job Listings</h1>
            <div>
                <label>Job Type:</label>
                <select name="type" onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                </select>
            </div>
            <div>
                <label>Experience Level:</label>
                <select name="experience" onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="Entry Level">Entry Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Senior Level">Senior Level</option>
                </select>
            </div>
            <div>
                <label>Location:</label>
                <input type="text" name="location" onChange={handleFilterChange} />
            </div>
            <div>
                <button onClick={() => setFilters({ type: '', experience: '', location: '' })}>Reset Filters</button>
            </div>
            <div>
                {filteredJobs.map(job => (
                    <div key={job.id}>
                        <h2>{job.title}</h2>
                        <p>Type: {job.type}</p>
                        <p>Experience: {job.experience}</p>
                        <p>Location: {job.location}</p>
                    </div>
                ))}
            </div>
        </JobListingsPageStyled>
       </>
    );
};

export default JobListingsPage;
