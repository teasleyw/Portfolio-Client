import React, {Component} from 'react';
import yinyang from "../../Assets/Images/yinyang.png";
import {
    BackgroundYinYang,
    EventPageBackgroundContainer,
    EventTitle,
    EventTitleContainer,
    EventTitleUnderline
} from "./EventsPageStyle";
import Header from "../../Components/Header/Header";

class EventsPage extends Component {
    render() {
        return (
            <>
                <EventPageBackgroundContainer>
                    {Array.from({ length: 700}, (_, i) => <BackgroundYinYang key={i} src={yinyang}/>)}
                </EventPageBackgroundContainer>
                    <Header/>
                    <EventTitleContainer><EventTitle> EVENTS </EventTitle></EventTitleContainer>
                    <EventTitleUnderline/>
            </>
        );
    }
}

export default EventsPage;