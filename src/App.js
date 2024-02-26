import './App.css';
//Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import HomePage from "./Pages/HomePage/HomePage";
import MusicPage from "./Pages/MusicPage/MusicPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import EventsPage from "./Pages/EventsPage/EventsPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import BowlingPage from "./Pages/BowlingPage/BowlingPage";
//Router
import { BrowserRouter as Router,Route,Routes, } from 'react-router-dom';
//fonts
import "./Assets/Fonts/ice_caps/IceCaps.ttf"
import "./Assets/Fonts/Aboreto/Aboreto-Regular.ttf"
import PoetryPage from "./Pages/PoetryPage/PoetryPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import JobListingsPage from "./Pages/JobListingsPage/JobListingsPage";


import {useDispatch, useSelector} from "react-redux";


function App() {
    const dispatch = useDispatch();
    const customerData = useSelector((state) => {
        return state.customerData;
    });
  return (
    <div>
        <Router>
        <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/Home" element={<HomePage dispatch={dispatch} customerData={customerData}/>} />
            <Route path="/Events" element={<EventsPage dispatch={dispatch} customerData={customerData}/>} />
            <Route path="/Poetry" element={<PoetryPage dispatch={dispatch} customerData={customerData}/>} />
            <Route path="/About" element={<AboutPage dispatch={dispatch} customerData={customerData}/>} />
            <Route path="/Music" element={<MusicPage dispatch={dispatch} customerData={customerData}/>} />
            <Route path="/Bowling" element={<BowlingPage dispatch={dispatch} customerData={customerData}/>} />
            <Route path="/Login" element={<LoginPage dispatch={dispatch} customerData={customerData}/>} />
            <Route path="/Profile" element={<ProfilePage dispatch={dispatch} customerData={customerData}/>} />
            <Route path="/Jobs" element={<JobListingsPage dispatch={dispatch} customerData={customerData}/>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
