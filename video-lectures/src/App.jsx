import React from 'react'
import {Routes, Route} from 'react-router-dom'
import styled from "styled-components";
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import LoginMainPage from './Components/LoginMainPage';
import VideoLessonMainPage from './Components/VideoLessonMainPage';
import Video from './Components/Video';
import './App.css';
function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<LoginMainPage/>} />
        <Route path="/dashboard" element={<LandingPage/>} />
        <Route path="/video" element={<VideoLessonMainPage/>} />
        <Route path="/videoplayer" element={<Video/>} />
      </Routes>
    </MainContainer>
    
  )
}

export default App

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb, #60a5fa);
  color: white;
`;