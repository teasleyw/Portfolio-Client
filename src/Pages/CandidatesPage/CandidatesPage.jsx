import React, { useState }  from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { CandidatesPageContainer, CandidateDescription, ModalHeader, CandidateCard, OtherCandidatesTable,TopCandidatesContainer,ProfilePicture, ModalWrapper, ModalContent, CloseButton,TopCandidateButton,LinkedInIconLink} from './CandidatesPageStyled';
import WarrenZeiders from "../../Assets/Images/WarrenZeiders.jpeg"
import JohnnyCash from "../../Assets/Images/JohnnyCash.jpg"
import Header from "../../Components/Header/Header";
import RLBurnside from "../../Assets/Images/RLBurnside.jpeg"
// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const candidates = [
  {
    id: 1,
    name: 'Johnny Cash',
    profilePicture: JohnnyCash,
    status: 'Top Candidate',
    yearsOfExperience: 5,
    typeOfWorker: 'Software Developer',
    linkedInProfile: 'https://www.linkedin.com/in/william-teasley-77149a20a/',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque turpis vel magna convallis, semper molestie nisi lobortis. Morbi ut mi ut lacus fringilla accumsan sit amet sed massa. Etiam nisi neque, consectetur in felis id, accumsan mollis lorem. Integer magna nisl, consequat tristique urna sit amet, consequat tempor mi. Duis id enim eu ligula congue luctus sed sed sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut lobortis, lacus eu finibus porta, urna quam lobortis nunc, non molestie nisl orci a ligula."
  },
  {
    id: 2,
    name: 'Warren Zeiders',
    profilePicture: WarrenZeiders,
    status: 'Top Candidate',
    yearsOfExperience: 8,
    typeOfWorker: 'Project Manager',
    linkedInProfile: 'https://www.linkedin.com/in/william-teasley-77149a20a/',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque turpis vel magna convallis, semper molestie nisi lobortis. Morbi ut mi ut lacus fringilla accumsan sit amet sed massa. Etiam nisi neque, consectetur in felis id, accumsan mollis lorem. Integer magna nisl, consequat tristique urna sit amet, consequat tempor mi. Duis id enim eu ligula congue luctus sed sed sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut lobortis, lacus eu finibus porta, urna quam lobortis nunc, non molestie nisl orci a ligula."
  },
  {
    id: 3,
    name: 'RL Burnside',
    profilePicture: RLBurnside,
    status: 'Top Candidate',
    yearsOfExperience: 10,
    typeOfWorker: 'Mechanical Engineer',
    linkedInProfile: 'https://www.linkedin.com/in/william-teasley-77149a20a/',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque turpis vel magna convallis, semper molestie nisi lobortis. Morbi ut mi ut lacus fringilla accumsan sit amet sed massa. Etiam nisi neque, consectetur in felis id, accumsan mollis lorem. Integer magna nisl, consequat tristique urna sit amet, consequat tempor mi. Duis id enim eu ligula congue luctus sed sed sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut lobortis, lacus eu finibus porta, urna quam lobortis nunc, non molestie nisl orci a ligula."
  },
  {
    id: 4,
    name: 'Sarah Brown',
    profilePicture: 'invalid',
    status: 'Regular Candidate',
    yearsOfExperience: 7,
    typeOfWorker: 'Data Scientist',
    linkedInProfile: 'https://www.linkedin.com/in/william-teasley-77149a20a/',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque turpis vel magna convallis, semper molestie nisi lobortis. Morbi ut mi ut lacus fringilla accumsan sit amet sed massa. Etiam nisi neque, consectetur in felis id, accumsan mollis lorem. Integer magna nisl, consequat tristique urna sit amet, consequat tempor mi. Duis id enim eu ligula congue luctus sed sed sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut lobortis, lacus eu finibus porta, urna quam lobortis nunc, non molestie nisl orci a ligula."
  }
];
// Sample size expansion
for (let i = 4; i < 20; i++) {
  candidates.push({
    id: i + 1,
    name: `Candidate ${i + 1}`,
    profilePicture: null,
    status: 'Regular Candidate',
    yearsOfExperience: Math.floor(Math.random() * 15) + 1,
    typeOfWorker: i % 3 === 0 ? 'Software Developer' : i % 3 === 1 ? 'Project Manager' : 'Mechanical Engineer',
    linkedInProfile: `https://www.linkedin.com/in/candidate-${i + 1}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque turpis vel magna convallis, semper molestie nisi lobortis. Morbi ut mi ut lacus fringilla accumsan sit amet sed massa. Etiam nisi neque, consectetur in felis id, accumsan mollis lorem. Integer magna nisl, consequat tristique urna sit amet, consequat tempor mi. Duis id enim eu ligula congue luctus sed sed sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut lobortis, lacus eu finibus porta, urna quam lobortis nunc, non molestie nisl orci a ligula."
  });
}


// CandidatesPage component
function CandidatesPage({customerData, dispatch}) {
  const [filterYearsOfExperience, setFilterYearsOfExperience] = useState('');
  const [filterJobTitle, setFilterJobTitle] = useState('');
  const [isValidPicture, setIsValidPicture] = useState(true);


   const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleToggleTopCandidate = () =>{
        selectedCandidate.status = selectedCandidate.status === "Top Candidate" ? 'Regular Candidate' : 'Top Candidate';
    }
    // Function to handle opening the modal and setting the selected candidate
    const handleOpenModal = (candidate) => {
      setSelectedCandidate(candidate);
      setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
      setSelectedCandidate(null);
      setIsModalOpen(false);
    };
      // Function to handle invalid picture
        const handleInvalidPicture = (candidate) => {
            candidate.profilePicture = null;
            setIsValidPicture(false);

        };





    const filteredCandidates = candidates.filter(candidate => {
     if (filterYearsOfExperience) {
       if (filterYearsOfExperience === '0-3' && candidate.yearsOfExperience > 3) {
         return false;
       }
       if (filterYearsOfExperience === '3-6' && (candidate.yearsOfExperience < 3 || candidate.yearsOfExperience > 6)) {
         return false;
       }
       if (filterYearsOfExperience === '6-10' && (candidate.yearsOfExperience < 6 || candidate.yearsOfExperience > 10)) {
         return false;
       }
       if (filterYearsOfExperience === '10+' && candidate.yearsOfExperience < 10) {
         return false;
       }
     }
     if (filterJobTitle && candidate.typeOfWorker !== filterJobTitle) {
       return false;
     }
     return true;
    });


  const topCandidates = filteredCandidates.filter(candidate => candidate.status === 'Top Candidate');
  const otherCandidates = filteredCandidates.filter(candidate => candidate.status !== 'Top Candidate');
// Function to handle toggling the status of a candidate

  return (
  <>
  <Header customerData={customerData} dispatch={dispatch} />
    <CandidatesPageContainer>

      <h2>Filter Candidates</h2>
      <div>
        <label>Filter by Years of Experience:</label>
        <select value={filterYearsOfExperience} onChange={e => setFilterYearsOfExperience(e.target.value)}>
              <option value="">All</option>
              <option value="0-3">0-3 years</option>
              <option value="3-6">3-6 years</option>
              <option value="6-10">6-10 years</option>
              <option value="10+">10+ years</option>
            </select>
      </div>
      <div>
        <label>Filter by Job Title:</label>
        <select value={filterJobTitle} onChange={e => setFilterJobTitle(e.target.value)}>
          <option value="">All</option>
          {[...new Set(candidates.map(candidate => candidate.typeOfWorker))].map(jobTitle => (
            <option key={jobTitle} value={jobTitle}>{jobTitle}</option>
          ))}
        </select>
      </div>

      {/* Display top candidates */}
      <h2>Top Candidates</h2>
      <TopCandidatesContainer>
        {topCandidates.map(candidate => (
          <CandidateCard key={candidate.id} onClick={() => handleOpenModal(candidate)}>
            <div className="profilePictureContainer">
                {candidate.profilePicture ? (
                  <ProfilePicture>
                    <img src={candidate.profilePicture} alt={candidate.name} onError={() => handleInvalidPicture(candidate)} />
                  </ProfilePicture>
                ) : (
                  <ProfilePicture style={{ backgroundColor: "blue" }}>
                    {candidate.name.substring(0, 1)}
                  </ProfilePicture>
                )}
            </div>
            <h3>{candidate.name}</h3>
            <p>Job: {candidate.typeOfWorker}</p>
            <p>Years of Experience: {candidate.yearsOfExperience}</p>
            <a href={candidate.linkedInProfile} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </CandidateCard>
        ))}
      </TopCandidatesContainer>

      {/* Display other candidates */}
      <h2>Other Candidates</h2>
      <OtherCandidatesTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Years of Experience</th>
            <th>LinkedIn Profile</th>
          </tr>
        </thead>
        <tbody>
          {otherCandidates.map(candidate => (
            <tr key={candidate.id} onClick={() => handleOpenModal(candidate)}>
              <td>{candidate.name}</td>
              <td>{candidate.typeOfWorker}</td>
              <td>{candidate.yearsOfExperience}</td>
              <td><a href={candidate.linkedInProfile} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></td>
            </tr>
          ))}
        </tbody>
      </OtherCandidatesTable>
      {/* Candidate Modal */}
        <ModalWrapper isOpen={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
          <ModalHeader>
          {selectedCandidate && selectedCandidate.profilePicture ? (
            <ProfilePicture>
              <img src={selectedCandidate?.profilePicture} alt={selectedCandidate?.name} onError={() => handleInvalidPicture(selectedCandidate)} />
            </ProfilePicture>
          ) : (
            <ProfilePicture style={{ backgroundColor: "blue" }}>
              {selectedCandidate?.name.substring(0, 1)}
            </ProfilePicture>
          )}
          <h2>{selectedCandidate?.name}</h2>
          </ModalHeader>
          <p>Main Title: {selectedCandidate?.typeOfWorker}</p>
          <p>Years of Professional Experience: {selectedCandidate?.yearsOfExperience}</p>
          <CandidateDescription> {selectedCandidate?.description} </CandidateDescription>
          <LinkedInIconLink href={selectedCandidate?.linkedInProfile} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
          </LinkedInIconLink>
          <TopCandidateButton onClick = {handleToggleTopCandidate}> Toggle Top Candidate </TopCandidateButton>

        </ModalContent>
      </ModalWrapper>
    </CandidatesPageContainer>
    </>
  );
}

export default CandidatesPage;
