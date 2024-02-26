// JobListingsPageStyled.js
import styled from 'styled-components';

const JobListingsPageStyled = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: white;

    div {
        margin-bottom: 10px;
    }

    label {
        margin-right: 10px;
    }

    input[type="text"],
    select {
        padding: 5px;
        border: 1px solid #ccc;
    }

    button {
        padding: 5px 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
`;

export default JobListingsPageStyled;
