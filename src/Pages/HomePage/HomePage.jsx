import React  from 'react';
import {
    CoverPhoto,
    HomePageContainer, MainContentContainer,
    Name,
    NameContainer,
    Occupation,
} from "./HomePageStyle";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
function HomePage() {
    return (
        <>

            <HomePageContainer>
                <Header/>
                <CoverPhoto/>
                <MainContentContainer>
                    <NameContainer>
                        <Name> William Teasley </Name>
                        <Occupation> Full-Stack-Developer </Occupation>
                    </NameContainer>

                </MainContentContainer>


            </HomePageContainer>
            <Footer/>
        </>
    );
}


export default HomePage;