import './App.css';
//Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import HomePage from "./Pages/HomePage/HomePage";
import EventsPage from "./Pages/EventsPage/EventsPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
//Router
import { BrowserRouter as Router,Route,Routes, } from 'react-router-dom';
//fonts
import "./Assets/Fonts/ice_caps/IceCaps.ttf"
import "./Assets/Fonts/Aboreto/Aboreto-Regular.ttf"
import PoetryPage from "./Pages/PoetryPage/PoetryPage";

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
            <Route path="/Home" element={<HomePage/>} />
            <Route path="/Events" element={<EventsPage/>} />
            <Route path="/Poetry" element={<PoetryPage dispatch={dispatch} customerData={customerData}/>} />
            <Route path="/About" element={<AboutPage dispatch={dispatch} customerData={customerData}/>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
