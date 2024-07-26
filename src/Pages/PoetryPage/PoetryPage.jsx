// src/Pages/PoetryPage/PoetryPage.jsx
import React, { useState } from "react";
import { ButtonContainer, Poem, PoemAuthor, PoemTitle, PoemContainer, PoetryPageContainer } from "./PoetryPageStyled";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import { ModalContent, ModalWrapper, CloseButton } from '../../Components/Modal/ModalGenericStyled.jsx';
import SubmitPoem from "../../Components/SubmitPoem/SubmitPoem";
import FilterByAuthor from "../../Components/FilterByAuthor/FilterByAuthor.jsx"; // Import the new modal
import { updatePoemContent } from "../../redux/app-state-slice";
import { VerseCollection } from "../../utils/poemObjects.js";

const PoetryPage = ({ dispatch, customerData }) => {
    const [showSubmitPoemModal, setShowSubmitPoemModal] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [currentPoemIndex, setCurrentPoemIndex] = useState(0);
    const [filteredPoems, setFilteredPoems] = useState(VerseCollection); // Default to all poems
    const currentPoem = filteredPoems[currentPoemIndex];

    const openSubmitPoemModal = () => {
        setShowSubmitPoemModal(true);
    };

    const openFilterModal = () => {
        setShowFilterModal(true);
    };

    const exitSubmitPoemModal = () => {
        setShowSubmitPoemModal(false);
    };

    const exitFilterModal = () => {
        setShowFilterModal(false);
    };

    const handleFilter = (selectedAuthors) => {
        const filtered = VerseCollection.filter(poem => selectedAuthors.includes(poem.author));
        setFilteredPoems(filtered);
    };

    const nextPoem = () => {
        setCurrentPoemIndex((prevIndex) => (prevIndex + 1) % filteredPoems.length);
    };

    return (
        <>
            <ModalWrapper isOpen={showSubmitPoemModal}>
                <ModalContent>
                    <CloseButton onClick={exitSubmitPoemModal}>Close</CloseButton>
                    <SubmitPoem />
                </ModalContent>
            </ModalWrapper>

            <ModalWrapper isOpen={showFilterModal}>
                <FilterByAuthor
                    isOpen={showFilterModal}
                    onClose={exitFilterModal}
                    onFilter={handleFilter}
                />
            </ModalWrapper>

            <PoetryPageContainer>
                <Header customerData={customerData} dispatch={dispatch} />
                <ButtonContainer>
                    <Button onClick={() => nextPoem()} label="Next Poem" />
                    <Button onClick={openSubmitPoemModal} label="Submit Poem" />
                    <Button onClick={openFilterModal} label="Filter By Author" />
                </ButtonContainer>
                <PoemContainer>
                    <div>
                        {currentPoem ? (
                            <Poem>
                                <PoemTitle>{currentPoem.title}</PoemTitle>
                                <br />
                                <PoemAuthor>{currentPoem.author}</PoemAuthor>
                                <br />
                                <br />
                                {currentPoem.poem}
                            </Poem>
                        ) : (
                            <Poem>
                                <PoemTitle>No Poems available under those filters</PoemTitle>
                            </Poem>
                        )}
                    </div>
                </PoemContainer>
            </PoetryPageContainer>
        </>
    );
};

export default PoetryPage;