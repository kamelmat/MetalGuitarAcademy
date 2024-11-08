import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StartJourney from './components/StartJourney';
import Onboarding from './components/Onboarding';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/start-journey" element={<StartJourney />} />
            <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
    );
}

export default App;
