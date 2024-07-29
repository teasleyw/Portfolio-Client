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
     const [poemOfTheDay, setPoemOfTheDay] = useState(null);
    useEffect(() => {
            // Find the poem of the day when the component mounts
            const poem = VerseCollection.find(poem => poem.poemOfTheDay);
            setPoemOfTheDay(poem);
        }, []);

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
        if (filtered.length > 0) {
                setCurrentPoemIndex(0); // Set to the first poem in the filtered list
            } else {
                setCurrentPoemIndex(-1); // Set to an invalid index if no poems match the filter
            }
        setFilteredPoems(filtered);
    };

    const nextPoem = () => {
        setCurrentPoemIndex((prevIndex) => (prevIndex + 1) % filteredPoems.length);
    };
      const showPoemOfTheDay = () => {
        if (poemOfTheDay) {
          // Reset filters
          setFilteredPoems(VerseCollection);

          // Find the index of the poem of the day in the original collection
          const index = VerseCollection.findIndex(poem => poem === poemOfTheDay);
          if (index !== -1) {
            setCurrentPoemIndex(index);
          }
        }
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
                     <Button onClick={nextPoem} label="Next Poem" />
                    <Button onClick={showPoemOfTheDay} label="Poem of the Day" />
                    <Button onClick={openSubmitPoemModal} label="Submit Poem" />
                    <Button onClick={openFilterModal} label="Filter By Author" />
                </ButtonContainer>
                <PoemContainer>
                    <div>
                        {currentPoem ? (
                            <Poem>
                            {currentPoem === poemOfTheDay && <PoemOfTheDay>Poem of the Day</PoemOfTheDay>}
                                <PoemTitle>{currentPoem.title}</PoemTitle>
                                <br />
                                <PoemAuthor>{currentPoem.author}</PoemAuthor>
                                <PoemText>
                                {currentPoem.poem}
                                </PoemText>
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