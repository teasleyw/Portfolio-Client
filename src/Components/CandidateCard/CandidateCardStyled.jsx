import styled from "styled-components"

export const CandidateCardContainer = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 20px;
    background: white;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,.5);
    transition: transform .1s linear, background .3s ease-out;
    cursor: grab;
    &:hover {

       background: #e0e0e0;
       transform scale(1.1);
    }

`
export const CandidateCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100%;

`