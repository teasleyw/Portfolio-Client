import React, {useState} from 'react';
import styled from 'styled-components';

const WorkHistoryItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 50px; /* Adjust as needed */
  height: 50px; /* Adjust as needed */
  margin-right: 20px;
`;

const CompanyInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.div`
  font-weight: bold;
`;

const PositionTitle = styled.div`
  margin-top: 5px;
`;

const DateRange = styled.div`
  margin-top: 5px;
  color: #888; /* Adjust as needed */
`;
const Input = styled.input`

`;


const WorkHistoryItem = ({ logoSrc, companyName, positionTitle, startDate, endDate, editable, onEdit  }) => {
const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    companyName,
    positionTitle,
    startDate,
    endDate,
  });
    const handleEdit = () => {
    setIsEditing(true);
    };

  const handleSave = () => {
    setIsEditing(false);
    onEdit(editedData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };
  return (
    <WorkHistoryItemWrapper>
    {isEditing ? (
            <CompanyInfo>
              <input type="text" name="companyName" value={editedData.companyName} onChange={handleChange} />
              <input type="text" name="positionTitle" value={editedData.positionTitle} onChange={handleChange} />
              <input type="text" name="startDate" value={editedData.startDate} onChange={handleChange} />
              <input type="text" name="endDate" value={editedData.endDate} onChange={handleChange} />
              <button onClick={handleSave}>Save</button>
            </CompanyInfo>
          ) : (
            <CompanyInfo>
              <CompanyName>{companyName}</CompanyName>
              <PositionTitle>{positionTitle}</PositionTitle>
              <DateRange>{startDate} - {endDate}</DateRange>
              {editable && <button onClick={handleEdit}>Edit</button>}
            </CompanyInfo>
          )}
{/*       <Logo src={logoSrc} alt={companyName} /> */}
    </WorkHistoryItemWrapper>
  );
};

export default WorkHistoryItem;