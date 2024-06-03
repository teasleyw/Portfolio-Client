import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import {FaMinus} from "react-icons/fa"
const WorkHistoryItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  transition: all 0.3s ease; /* Added transition */
`;

const DeleteIcon = styled.div`
  opacity: ${({ isDeleteVisible }) => (isDeleteVisible ? 1 : 0)};
  margin-left: ${({ isDeleteVisible }) => (isDeleteVisible ? '0' : '-30px')};
  width: 25px;
  height: 25px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  transition: all 0.3s ease; /* Added transition */
  &:hover {
      background-color: darkred;
    }
    &:active {
      transform: scale(0.9);
    }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const CompanyInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Hide overflowing content */
`;

const CompanyName = styled.div`
  font-weight: bold;
  ${({ isEditing }) => isEditing && `cursor: pointer;`}
  &:hover {
    ${({ isEditing }) => isEditing && `outline: 1px solid #ccc;`}
  }
  transition: all 0.3s ease; /* Added transition */
`;

const PositionTitle = styled.div`
  margin-top: 5px;
  ${({ isEditing }) => isEditing && `cursor: pointer;`}
  &:hover {
    ${({ isEditing }) => isEditing && `outline: 1px solid #ccc;`}
  }
  transition: all 0.3s ease; /* Added transition */
`;

const DateRange = styled.div`
  margin-top: 5px;
  color: #888;
  display: flex;
  ${({ isEditing }) => isEditing && `cursor: pointer;`}
  &:hover {
    ${({ isEditing }) => isEditing && `outline: 1px solid #ccc;`}
  }
  transition: all 0.3s ease; /* Added transition */
`;

const WorkHistoryItem = ({
   id,
   logoSrc,
   company: originalCompany,
   jobTitle: originalJobTitle,
   startDate: originalStartDate,
   endDate: originalEndDate,
   userId,
   editable,
   updateWorkHistoryList,
   deleteWorkHistoryItemById
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [editedCompany, setEditedCompany] = useState(originalCompany);
  const [editedJobTitle, setEditedJobTitle] = useState(originalJobTitle);
  const [editedStartDate, setEditedStartDate] = useState(originalStartDate);
  const [editedEndDate, setEditedEndDate] = useState(originalEndDate);

  useEffect(() => {
      // Reset edited values to original ones when props change
      setEditedCompany(originalCompany);
      setEditedJobTitle(originalJobTitle);
      setEditedStartDate(originalStartDate);
      setEditedEndDate(originalEndDate);
    }, [originalCompany, originalJobTitle, originalStartDate, originalEndDate]);

  const handleEdit = () => {
    setIsEditing(true);
    setIsDeleteVisible(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setIsDeleteVisible(false);
    updateWorkHistoryList({
      id,
      company: editedCompany,
      jobTitle: editedJobTitle,
      startDate: editedStartDate,
      endDate: editedEndDate,
      userId,
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsDeleteVisible(false);
    // Reset edited values to original ones
    setEditedCompany(originalCompany);
    setEditedJobTitle(originalJobTitle);
    setEditedStartDate(originalStartDate);
    setEditedEndDate(originalEndDate);
  };

  const handleChange = (field, e) => {
    const value = e.target.textContent;
    switch (field) {
      case 'company':
        setEditedCompany(value);
        break;
      case 'jobTitle':
        setEditedJobTitle(value);
        break;
      case 'startDate':
        setEditedStartDate(value);
        break;
      case 'endDate':
        setEditedEndDate(value);
        break;
      default:
        break;
    }
  };

  const handleDelete = () => {
    const updatedItem = { id, isDeleted: true };
    updateWorkHistoryList(updatedItem);
    deleteWorkHistoryItemById(id);
  };

  return (
    <WorkHistoryItemWrapper>
      <DeleteIcon isDeleteVisible={isDeleteVisible} onClick={handleDelete}>
        <FaMinus />
      </DeleteIcon>
      <CompanyInfo>
        <CompanyName
          contentEditable={isEditing}
          onBlur={(e) => handleChange('company', e)}
          suppressContentEditableWarning
        >
          {editedCompany || "Company Name"}
        </CompanyName>
        <PositionTitle
          contentEditable={isEditing}
          onBlur={(e) => handleChange('jobTitle', e)}
          suppressContentEditableWarning
        >
          {editedJobTitle || "Job Title"}
        </PositionTitle>
        <DateRange>
          <div
            contentEditable={isEditing}
            onBlur={(e) => handleChange('startDate', e)}
            suppressContentEditableWarning
          >
            {editedStartDate || "Start Date"}
          </div>
          <div>-</div>
          <div
            contentEditable={isEditing}
            onBlur={(e) => handleChange('endDate', e)}
            suppressContentEditableWarning
          >
            {editedEndDate || "End Date"}
          </div>
        </DateRange>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          editable && <button onClick={handleEdit}>Edit</button>
        )}
      </CompanyInfo>
    </WorkHistoryItemWrapper>
  );
};

export default WorkHistoryItem;