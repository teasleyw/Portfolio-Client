// src/Components/Modal/FilterByAuthorModal.jsx
import React, { useState, useEffect } from 'react';
import {
  SubmitButton,
  Title,
  CheckboxContainer,
  CheckboxLabel,
  CheckboxInput,
  CheckboxItem,
  SearchInput,
  ButtonContainer
} from './FilterByAuthorStyled';
import { StyledButton } from "../../Components/Button/ButtonStyled";
import { NeumorphicButton } from "../../Components/Button/NeumorphicButtonStyled";
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
    const authorCounts = VerseCollection.reduce((acc, poem) => {
      acc[poem.author] = (acc[poem.author] || 0) + 1;
      return acc;
    }, {});
    const uniqueAuthors = Object.keys(authorCounts).map(author => ({
      name: author,
      count: authorCounts[author]
    }));
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
    author.name.toLowerCase().includes(searchQuery)
  );

  const selectAll = () => {
    setSelectedAuthors(filteredAuthors.map(author => author.name));
  };

  const deselectAll = () => {
    setSelectedAuthors([]);
  };

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
            <CheckboxItem key={author.name}>
              <CheckboxInput
                type="checkbox"
                id={author.name}
                value={author.name}
                onChange={handleChange}
                checked={selectedAuthors.includes(author.name)}
              />
              <CheckboxLabel htmlFor={author.name}>
                {author.name} ({author.count})
              </CheckboxLabel>
            </CheckboxItem>
          ))}
        </CheckboxContainer>
        <ButtonContainer>
          <StyledButton onClick={selectAll}>Select All</StyledButton>
          <StyledButton onClick={deselectAll}>Deselect All</StyledButton>
          <StyledButton onClick={handleSubmit}>Apply Filter</StyledButton>
        </ButtonContainer>
      </ModalContent>
    </ModalWrapper>
  );
};

export default FilterByAuthor;
