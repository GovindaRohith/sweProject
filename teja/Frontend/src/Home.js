import React from 'react';
import { useEffect, useState } from "react";
import axios from './components/axios';
import ForgotPassword from './components/forgot_password';
import HostelBlocks from './components/hostel_blocks';
import DisplayTickets from './components/display_tickets';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Home(){
    return(
        <div>
        
      include forgot_password component:
      <ForgotPassword />
       ****************************************************************************************
      <br />
      <br />
      <HostelBlocks />
        </div>
    );
}

export default Home;