import React  from 'react';
import {
    CoverPhoto,
    HomePageContainer,
    Name,
    NameContainer,
    Occupation,
} from "./HomePageStyle";
import coverPhoto from "../../Assets/Images/coverPhoto.png"
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
function HomePage() {
    return (
        <>

            <HomePageContainer>
                <Header/>

                <CoverPhoto src={(coverPhoto)} alt="fuck you"></CoverPhoto>
                <NameContainer>
                    <Name> Frost Milano </Name>
                    <Occupation> web developer </Occupation>
                </NameContainer>
            </HomePageContainer>
            <Footer/>
        </>
    );
}


export default HomePage;