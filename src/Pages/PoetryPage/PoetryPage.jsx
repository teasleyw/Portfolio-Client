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
import axios from 'axios';

const PoetryPage = ({ dispatch, customerData }) => {
    const [showSubmitPoemModal, setShowSubmitPoemModal] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [currentPoemIndex, setCurrentPoemIndex] = useState(0);
    const [filteredPoems, setFilteredPoems] = useState(VerseCollection); // Default to all poems
    const currentPoem = filteredPoems[currentPoemIndex];
    const sendPoem = async (poemData) => {
      try {
        const response = await axios.post('http://poembackend-env-1.eba-xavekrmk.us-east-1.elasticbeanstalk.com/poems/send-email', poemData);
        console.log('Poem sent successfully:', response.data);
      } catch (error) {
        console.error('Error sending poem:', error);
      }
    };

    // Example poem data
    const poemData = {
        author: "author",
        date: `2024-07-26T14:45:00.000Z`,
      title: 'My Poem',
      poem: 'This is the content of my poem.',
    };

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
                    <Button onClick={() => sendPoem()} label="test"/>
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