import React ,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import HRAnnouncements from './components/HRAnnouncements';
import Ratingpage from './components/Ratingpage';
import Checkin_approval from './components/Checkin_approval';
import Roomexchange_approval from './components/Roomexchange_approval';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/hr_announcements" element={<HRAnnouncements />} />
        <Route path="/ratingpage" element={<Ratingpage />} />
        <Route path="/checkin_approval" element={<Checkin_approval />} />
        <Route path="/roomexchange_approval" element={<Roomexchange_approval />} />

      </Routes>      
    </Router>
  );
}

export default App;
