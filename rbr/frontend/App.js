import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announcements from './components/Announcements';
import MyProfile from './components/MyProfile';
import MyPod from './components/MyPod';
import AllotHr from './components/AllotHr';
import Tickets from './components/Tickets';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Announcements/>}/>
        <Route path="/MyProfile" element={<MyProfile/>}/>
        <Route path="/MyPod" element={<MyPod/>}/>
        <Route path="/AllotHr" element={<AllotHr/>}/>
        <Route path="/Tickets" element={<Tickets/>}/>
      </Routes>
    </Router>
  );
};

export default App;
