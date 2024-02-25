import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import Header from "../../Components/Header/Header";
import gifTitle from '../../Assets/Gifs/Originals.gif';
import ColterWall from "../../Assets/Images/ColterWall.jpeg"
import WarrenZeiders from "../../Assets/Images/WarrenZeiders.jpeg"
import JohnnyCash from "../../Assets/Images/JohnnyCash.jpg"
import RLBurnside from "../../Assets/Images/RLBurnside.jpeg"
import FrostMilano from "../../Assets/Images/Frost.jpeg"
import Creek from "../../Assets/Images/Creek.jpeg"
import { FaTimes } from 'react-icons/fa';
import {
  ThemeButton,
  VideoList,
  VideoListItem,
  VideoPopup,
  ThemeNameContainer,
  ThemeName, PageWrapper,NinetiesHeader, GifTitle, CloseButton
} from './MusicPageStyled.js';
import OriginalsTheme from './Themes/OriginalsTheme.jsx';
import starsBackground from '../../Assets/Images/starsBackground.png'
import musicBackground from '../../Assets/Images/CountryMusic.png'
// Define your themes array with colors
const themes = [
{ name: 'Originals',
color: '#000', // Gold or yellow color for a retro vibe
image: 'url('+ starsBackground + ') repeat',
themeStyles: { color: '#000', fontFamily: 'Comic Sans MS' }  },
  { name: 'Country Theme', color: '#FF6B6B', image: '#FF6B6B' },  // Coral Red
  { name: 'Rock Theme', color: '#00FFFF', image: '#333333' }, // Medium Turquoise
];

// Define corresponding font colors for each theme
const fontColors = [
'blue', // Font color for Theme 3
  '#FFF', // Font color for Theme 1
  '#00FFFF', // Font color for Theme 2

];
const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

const videos = [
  { name: 'Folsom Prison - Johnny Cash', videoId: 'WgX-RpJUQaY' ,image: JohnnyCash },
  { name: 'On the run - Warren Zeiders', videoId: 'uPzXBCo3oX0', image: WarrenZeiders },
  { name: 'Kate McCannon - Colter Wall', videoId: '6aZvjIHHqsg', image: ColterWall },
  { name: 'Poor Black Mattie - RL Burnside', videoId: '8uw9GKmIn70', image: RLBurnside },
  { name: 'Altar - Frost Milano', videoId: '1UeZf8lbk5g', image: FrostMilano },
  { name: 'Annabelle - Frost Milano', videoId: 'JxrelAOvx4E', image: Creek }
];

const MusicPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [slideDirection, setSlideDirection] = useState(null);
  const popupRef = useRef(null);
   useEffect(() => {
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          setIsPopupOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  const handleNextTheme = () => {
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentThemeIndex((prevIndex) => (prevIndex === themes.length - 1 ? 0 : prevIndex + 1));
      setSlideDirection(null);
    }, 300);
  };

  const handlePrevTheme = () => {
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentThemeIndex((prevIndex) => (prevIndex === 0 ? themes.length - 1 : prevIndex - 1));
      setSlideDirection(null);
    }, 300);
  };

  const openVideo = (videoId) => {
    setIsPopupOpen(true);
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setIsPopupOpen(false);
    setSelectedVideo(null);
  };

  return (
    <PageWrapper style={{ backgroundColor: themes[currentThemeIndex].color, background: themes[currentThemeIndex].image} }  theme={themes[currentThemeIndex]}>
    <Header/>
    {themes[currentThemeIndex].name == 'Originals' &&  <OriginalsTheme/>}
      <ThemeNameContainer  themeColor={themes[currentThemeIndex].color} >
        <ThemeButton onClick={handlePrevTheme} fontColor={fontColors[currentThemeIndex]}>{'◀'}</ThemeButton>
        <ThemeName slideDirection={slideDirection} fontColor={fontColors[currentThemeIndex]}>
        {themes[currentThemeIndex].name}
        </ThemeName>
        <ThemeButton fontColor={fontColors[currentThemeIndex]} onClick={handleNextTheme}>{'▶'}</ThemeButton>
      </ThemeNameContainer>
      <VideoList>
        {videos.map((video, index) => (
          <VideoListItem
          key={index}
          onClick={() => openVideo(video.videoId)}
          backgroundImage={video.image}>
            <span>{video.name}</span>
          </VideoListItem>
        ))}
      </VideoList>
      {(selectedVideo && isPopupOpen) && (
        <div ref={popupRef}>
        <VideoPopup>
          <CloseButton onClick={closeVideo}> Exit Popup </CloseButton>
          <YouTube videoId={selectedVideo} opts={opts} />
        </VideoPopup>
        </div>
      )}
    </PageWrapper>
  );
};

export default MusicPage;