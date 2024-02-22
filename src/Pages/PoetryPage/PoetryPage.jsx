import React, {useEffect, useRef, useState} from "react";
import {ButtonContainer, Poem, PoemAuthor, PoemTitle, PoemContainer, PoetryPageContainer} from "./PoetryPageStyled";
import Header from "../../Components/Header/Header";
import NeuMorphicButton from "../../Components/Button/NeumorphicButton";
import Modal from "../../Components/Modal/Modal";
import {updatePoemContent} from "../../redux/app-state-slice";
import {SuitAndTie} from "../../utils/poems.js"
import {VerseCollection} from "../../utils/poemObjects.js"



const PoetryPage = ({ dispatch, customerData }) => {
    const [poemHTML, setPoemHTML] = useState("Write me a poem");
    const [poemTitle, setPoemTitle] = useState("");
    const [poemAuthor, setAuthor] = useState("");
    const [poemIndex, setPoemIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [prevPoemIndex, setPrevPoemIndex] = useState(-1); // Initialize prevPoemIndex state

    const poemElement = useRef(null);
    let poem = ""
    const handleChangePoem = (value) => {
        if (value) {
            poem = value
        }
    };

    const clearFunction = () => {
        setAuthor("");
        setPoemTitle("");
        setPoemHTML(poemHTML === "Roses Are Red...." ? "Believe In Yourself, Because I Believe in you." : "Roses Are Red....");
    };

    const submitPoem = (dispatch) => {
        setShowModal(true);
        if (poemHTML) {
            console.log("submitted poem: " + poemHTML);
        } else {
            console.log("poem not submitted");
        }
        dispatch(updatePoemContent(poemHTML));
    };

    const randomPoem = () => {
        let randomIndex;
        do {
            // Get a random index within the VerseCollection array
            randomIndex = Math.floor(Math.random() * VerseCollection.length);
        } while (randomIndex === prevPoemIndex); // Repeat until a different poem index is selected

        // Update the previously selected poem index
        setPrevPoemIndex(randomIndex);

        // Get the poem object at the random index
        const randomPoem = VerseCollection[randomIndex];

        // Set the author, poem title, and poem content based on the random poem
        setAuthor("by: " + randomPoem.author);
        setPoemTitle(randomPoem.title);
        setPoemHTML(randomPoem.poem);
    };

    const exitModal = () => {
        setShowModal(false);
        console.log(customerData);
    };

    return (
        <>
            {showModal &&
                <Modal customerData={customerData} dispatch={dispatch} exitModal={() => exitModal()} />
            }
            <PoetryPageContainer>
                <Header />
                <ButtonContainer>
                    <NeuMorphicButton onClick={() => submitPoem(dispatch)} label="Submit" />
                    <NeuMorphicButton onClick={() => randomPoem()} label="Read Other Poems" />
                    <NeuMorphicButton onClick={() => clearFunction()} label="Clear" />
                </ButtonContainer>
                <PoemContainer>
                    <div>
                        <Poem>
                            {poemTitle !== "" &&
                                <>
                                    <PoemTitle>{poemTitle}</PoemTitle>
                                    <br />
                                    <PoemAuthor>{poemAuthor}</PoemAuthor>
                                    <br />
                                    <br />
                                </>
                            }
                            <PoemLogic onChange={handleChangePoem}>
                                <div>
                                {poemHTML}
                                </div>
                           </PoemLogic>
                        </Poem>
                    </div>
                </PoemContainer>
            </PoetryPageContainer>
        </>
    );
};

const PoemLogic = (props) => {
    const {onChange} = props;
    const element = useRef();
    let elements = React.Children.toArray(props.children);
    if (elements.length > 1) {
        throw Error("Can't have more than one child");
    }
    const onMouseUp = () => {
        const value = element.current?.value || element.current?.innerText;
        onChange(value);
    };
    useEffect(() => {
        const value = element.current?.value || element.current?.innerText;
        onChange(value);
    });
    elements = React.cloneElement(elements[0], {
        contentEditable: true,
        suppressContentEditableWarning: true,
        ref: element,
        onKeyUp: onMouseUp
    });
    return elements;
};

export default PoetryPage;