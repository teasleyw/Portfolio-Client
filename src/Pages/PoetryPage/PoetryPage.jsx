import React, {useEffect, useRef, useState} from "react";
import {ButtonContainer, Poem, PoemContainer, PoetryPageContainer} from "./PoetryPageStyled";
import Header from "../../Components/Header/Header";
import NeuMorphicButton from "../../Components/Button/NeumorphicButton";
import ModalUnderConstruction from "../../Components/Modal/ModalUnderConstruction";


function EventsPage() {
    const [poemHTML, setPoem] = useState("Write me a poem")
    const [changeState, setChangeState] = useState(0)
    const [showModal, setShowModal] = useState(false)
    let poem = ""
    const handleChangePoem = (value) => {
        if (value) {
            poem = value
        }

    };
    const clearFunction = () => {
        if (changeState % 2 === 1) {
            setPoem("Roses Are Red....")
        } else {
            setPoem("Believe In Yourself, Because I Believe in you.")
        }
        setChangeState(changeState + 1)
        console.log(poemHTML)
    };
    const submitPoem = () => {
        setShowModal(true)
        console.log(showModal)
        if (poem) {
            setPoem(poem)
            console.log("submitted poem: " + poemHTML)
        } else {
            console.log("poem not submitted")
        }
    }
    const exitModal = () => {
        setShowModal(false)
        console.log(showModal)
    }
    return (
        <>
            {showModal &&
            <>
                <ModalUnderConstruction exitModal={() => exitModal()}>
                </ModalUnderConstruction>
            </>

        }
            <PoetryPageContainer>
                <Header/>
                <ButtonContainer>
                    <NeuMorphicButton onClick={() => submitPoem()} label="Submit"/>
                    <NeuMorphicButton onClick={() => submitPoem()} label="Read Other Poems"/>
                    <NeuMorphicButton onClick={() => clearFunction()} label="Clear"/>
                </ButtonContainer>
                <PoemContainer>
                    <PoemLogic onChange={handleChangePoem}>
                        <Poem>
                            {poemHTML}
                        </Poem>
                    </PoemLogic>
                </PoemContainer>
            </PoetryPageContainer>
        </>
    );
}

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
export default EventsPage;