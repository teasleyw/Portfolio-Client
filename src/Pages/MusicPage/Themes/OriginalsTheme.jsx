import React, { useState } from 'react';
import gifTitle from '../../../Assets/Gifs/Originals.gif';
import jukeBox from '../../../Assets/Gifs/jukebox.gif';
import musicNote from '../../../Assets/Gifs/MusicNoteGif.gif'
import proyn from '../../../Assets/Music/proyn-loop.mp3'
import AudioPlayer from 'react-h5-audio-player';
import {
  ThemeButton,
  VideoList,
  VideoListItem,
  VideoPopup,
  ThemeNameContainer,
  ThemeName, PageWrapper,NinetiesHeader, GifTitle
} from '../MusicPageStyled.js';

// Define your themes array with colors
const themes =
  { name: '90s Nostalgia',
  color: '#000', // Gold or yellow color for a retro vibe
  themeStyles: { background: 'url(90s_bg_pattern.jpg) repeat', color: '#000', fontFamily: 'Comic Sans MS' }} // Yellow;


const OriginalsTheme = () => {

  return (
  <>
    <AudioPlayer
        style={{display: 'none'}}
        autoPlay
        src={proyn}
        onPlay={e => console.log("onPlay")}
        loop
      />
      <NinetiesHeader theme={themes}>
      <GifTitle src={jukeBox} alt="jukebox"/>
      <GifTitle src={gifTitle} alt="90s Title" />
      <GifTitle src={musicNote} alt="musicNote"/>
      </NinetiesHeader>
  </>
  );
};

export default OriginalsTheme;