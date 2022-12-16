import './App.css';
//Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import HomePage from "./Pages/HomePage/HomePage";
import EventsPage from "./Pages/EventsPage/EventsPage";
//Router
import { BrowserRouter as Router,Route,Routes, } from 'react-router-dom';
//fonts
import "./Assets/Fonts/ice_caps/IceCaps.ttf"
import "./Assets/Fonts/Aboreto/Aboreto-Regular.ttf"
import PoetryPage from "./Pages/PoetryPage/PoetryPage";

function App() {
  return (
    <div>
        <Router>
        <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/Home" element={<HomePage/>} />
            <Route path="/Events" element={<EventsPage/>} />
            <Route path="/Poetry" element={<PoetryPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
