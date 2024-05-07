import styled from 'styled-components'


export const ManageJobsContainer = styled.div`
     background: #f4f4f4;
     width: 100vw;
     height: 100vh;
     overflow: hidden;
     display: flex;
     align-items: center;
     justify-content: center;
`

export const JobContainer = styled.div`
   background: #e4e4e4;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 25px;
   height: 75vh;
`

export const JobContainerTitle = styled.div`
    font-size: 50px;
    border-bottom: 1px black solid;
    width: 100%;
    text-align: center;
`
export const JobItem = styled.button`
    background-color navy; /* Transparent background or secondaryColor */
    color: white; /* Default text color is black or primaryColor */
    border: 1px solid navy; /* Thick dark blue border */
    height: 40px;
    width: 300px;
    cursor: pointer; /* Show pointer cursor on hover */
    font-size: 15px;
    border-radius: 20px;
    /* Transition effect for hover */
    transition: background-color 0.3s, color 0.3s;
    /* Hover effect */
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: white; /* Change background color to dark blue on hover */
        color: black; /* Change text color to white on hover */
    }

`