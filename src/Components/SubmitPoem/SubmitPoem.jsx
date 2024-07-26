import React, { useState } from "react";
import { SubmitContainer, Title, Textarea, SubmitButton, CloseButton, EmailDisplay,InfoText } from "./SubmitPoemStyled";

const SubmitPoem = ({ onClose, userEmail }) => {
    const [poemContent, setPoemContent] = useState("");

    const handleChange = (event) => {
        setPoemContent(event.target.value);
    };

    const handleSubmit = () => {
        // Instead of submitting to a backend, just log the email and poem
        console.log("Submitted Poem: ", poemContent);
        console.log("User Email: ", userEmail);
        onClose(); // Close the modal after "submission"
    };

    return (
        <SubmitContainer>
            <Title>Submit Your Poem</Title>
            <InfoText>
                This feature is currently under construction.
                Please send your poems directly to <a href="mailto:Teasleyw@msu.edu">Teasleyw@msu.edu</a>&nbsp;
                for them to be added.
            </InfoText>
            {/* <Title>Submit Your Poem</Title>
            <Textarea
                placeholder="Write your poem here..."
                value={poemContent}
                onChange={handleChange}
            />
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            <EmailDisplay>{userEmail}</EmailDisplay> */}

        </SubmitContainer>
    );
};

export default SubmitPoem;