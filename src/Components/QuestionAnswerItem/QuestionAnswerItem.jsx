import React, {useState,useEffect} from 'react';
import {QuestionsWrapper,Question,Answer,DeleteIcon,Info} from "./QuestionAnswerItemStyled"
import {FaMinus} from "react-icons/fa"

const QuestionAnswerItem = ({
   id,
   logoSrc,
   question: originalQuestion,
   answer: originalAnswer,
   userId,
   editable,
   updateQuestionAnswerList,
   deleteQuestionAnswerItemById
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(originalQuestion);
  const [editedAnswer, setEditedAnswer] = useState(originalAnswer);

  useEffect(() => {
      // Reset edited values to original ones when props change
      setEditedQuestion(originalQuestion);
      setEditedAnswer(originalAnswer);
    }, [originalQuestion, originalAnswer]);

  const handleEdit = () => {
    setIsEditing(true);
    setIsDeleteVisible(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setIsDeleteVisible(false);
    updateQuestionAnswerList({
      id,
      question: editedQuestion,
      answer: editedAnswer,
      userId,
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsDeleteVisible(false);
    // Reset edited values to original ones
    setEditedQuestion(originalQuestion);
    setEditedAnswer(originalAnswer);
  };

  const handleChange = (field, e) => {
    const value = e.target.textContent;
    switch (field) {
      case 'question':
        setEditedQuestion(value);
        break;
      case 'answer':
        setEditedAnswer(value);
        break;
      default:
        break;
    }
  };

  const handleDelete = () => {
    const updatedItem = { id, isDeleted: true };
    updateQuestionAnswerList(updatedItem);
    deleteQuestionAnswerItemById(id);
  };

  return (
    <QuestionsWrapper>
    <DeleteIcon isDeleteVisible={isDeleteVisible} onClick={handleDelete}>
            <FaMinus />
          </DeleteIcon>
          <Info>
         <Question
         contentEditable={isEditing}
         onBlur={(e) => handleChange('question', e)}
         suppressContentEditableWarning>
            {editedQuestion}
         </Question>
         <Answer
         contentEditable={isEditing}
         onBlur={(e) => handleChange('answer', e)}
         suppressContentEditableWarning
         style={{flex: "1",maxWidth: "400px"}}>

            {editedAnswer}
         </Answer>
         {isEditing ? (
                   <>
                     <button onClick={handleSave}>Save</button>
                     <button onClick={handleCancel}>Cancel</button>
                   </>
                 ) : (
                   editable && <button onClick={handleEdit}>Edit</button>
                 )}
                 </Info>
    </QuestionsWrapper>
  );
};

export default QuestionAnswerItem;