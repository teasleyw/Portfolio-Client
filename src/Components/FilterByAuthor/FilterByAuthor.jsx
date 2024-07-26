// src/Components/Modal/FilterByAuthorModal.jsx
import React, { useState, useEffect } from 'react';
import { SubmitButton, Title, CheckboxContainer, CheckboxLabel, CheckboxInput, CheckboxItem,SearchInput} from './FilterByAuthorStyled';
import {NeumorphicButton} from "../../Components/Button/NeumorphicButtonStyled";
import { ModalContent, ModalWrapper, CloseButton } from '../../Components/Modal/ModalGenericStyled.jsx';
import { VerseCollection } from "../../utils/poemObjects.js";
const FilterByAuthor = ({ isOpen, onClose, onFilter }) => {
   const [selectedAuthors, setSelectedAuthors] = useState([]);
       const [authors, setAuthors] = useState([]);
       const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };
       useEffect(() => {
           // Fetch or derive the list of authors from VerseCollection
           const uniqueAuthors = [...new Set(VerseCollection.map(poem => poem.author))];
           setAuthors(uniqueAuthors);
       }, []);

       const handleChange = (event) => {
           const { value, checked } = event.target;
           setSelectedAuthors(prev =>
               checked ? [...prev, value] : prev.filter(author => author !== value)
           );
       };

       const handleSubmit = () => {
           onClose();
           onFilter(selectedAuthors);
       };
    const filteredAuthors = authors.filter(author =>
           author.toLowerCase().includes(searchQuery)
       );

    return (
        <ModalWrapper isOpen={isOpen}>
            <ModalContent>
                <CloseButton onClick={onClose}>Close</CloseButton>
                <Title>Filter Poems by Author</Title>
                 <SearchInput
                    type="text"
                    placeholder="Search authors..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <CheckboxContainer>
               {filteredAuthors.map(author => (
                   <CheckboxItem key={author}>
                       <CheckboxInput
                           type="checkbox"
                           id={author}
                           value={author}
                           onChange={handleChange}
                           checked={selectedAuthors.includes(author)}
                       />
                       <CheckboxLabel htmlFor={author}>{author}</CheckboxLabel>
                   </CheckboxItem>
               ))}
                </CheckboxContainer>
                <NeumorphicButton onClick={handleSubmit}>Apply Filter</NeumorphicButton>
            </ModalContent>
        </ModalWrapper>
    );
};

export default FilterByAuthor;