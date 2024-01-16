import React, {useEffect, useRef, useState} from "react";
import {ButtonContainer, Poem, PoemAuthor, PoemTitle, PoemContainer, PoetryPageContainer} from "./PoetryPageStyled";
import Header from "../../Components/Header/Header";
import NeuMorphicButton from "../../Components/Button/NeumorphicButton";
import Modal from "../../Components/Modal/Modal";
import {updatePoemContent} from "../../redux/app-state-slice";
import {SuitAndTie} from "../../utils/poems.js"
import {ColterWallDevil} from "../../utils/poemObjects.js"


function PoetryPage({dispatch,customerData}) {
    const [poemHTML, setPoem] = useState("Write me a poem")
     const [poemTitle, setPoemTitle] = useState("")
      const [poemAuthor, setAuthor] = useState("")
    const [changeState, setChangeState] = useState(0)
    const [showModal, setShowModal] = useState(false)
    let poem = ""
    const handleChangePoem = (value) => {
        if (value) {
            poem = value
        }

    };
    const clearFunction = () => {
        setAuthor("")
        setPoemTitle("")
        if (changeState % 2 === 1) {
            setPoem("Roses Are Red....")
        } else {
            setPoem("Believe In Yourself, Because I Believe in you.")
        }
        setChangeState(changeState + 1)
    };
    const submitPoem = (dispatch) => {
        setShowModal(true)
        if (poem) {
            setPoem(poem)
            console.log("submitted poem: " + poemHTML)
        } else {
            console.log("poem not submitted")
        }
        dispatch(updatePoemContent(poemHTML))
    }
    const randomPoem = () => {
            if (changeState % 2 === 1) {
                setAuthor("by: " + ColterWallDevil.author)
                setPoemTitle(ColterWallDevil.title)
                setPoem(ColterWallDevil.poem)
            } else {
                setAuthor("Title")
                setPoemTitle("TItle")
                setPoem("Believe In Yourself, Because I Believe in you.")
            }
            setChangeState(changeState + 1)
        };
    const exitModal = () => {
        setShowModal(false)
        console.log(customerData)
    }
    return (
        <>
            {showModal &&
            <>
                <Modal customerData={customerData} dispatch={dispatch} exitModal={() => exitModal()}>
                </Modal>
            </>

        }
            <PoetryPageContainer>
                <Header/>
                <ButtonContainer>
                    <NeuMorphicButton onClick={() => submitPoem(dispatch)} label="Submit"/>
                    <NeuMorphicButton onClick={() => randomPoem()} label="Read Other Poems"/>
                    <NeuMorphicButton onClick={() => clearFunction()} label="Clear"/>
                </ButtonContainer>
                <PoemContainer>
                    <div onChange={handleChangePoem}>
                        <Poem>
                        {poemTitle != "" &&
                            <>
                            <PoemTitle> {poemTitle} </PoemTitle>
                            <br/>
                            <PoemAuthor> {poemAuthor} </PoemAuthor>
                            <br/>
                            <br/>
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
export default PoetryPage;