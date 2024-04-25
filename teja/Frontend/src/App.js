import React from 'react';
import { useEffect, useState } from "react";
import axios from './components/axios';
import ForgotPassword from './components/forgot_password';
import HostelBlocks from './components/hostel_blocks';
import DisplayTickets from './components/display_tickets';
import Home from './Home';
import TicketDetails from './components/ticket_details';
import DisplayTicketsHo from './components/display_tickets_ho';
import TicketDetailsHo from './components/ticket_details_ho';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function App() {
  return (
      <div>

      <br></br>
      <br></br>
      Route to a new page for displaying tickets:
      <Router>
         <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/display_ticket" element={<DisplayTickets/>}/>
         <Route path="/display_ticket/ticket_details" element={<TicketDetails/>}/>
          <Route path="/display_ticket_ho" element={<DisplayTicketsHo/>}/>
          <Route path="/ticket_details_ho" element={<TicketDetailsHo/>}/>
         </Routes>
      </Router>

      </div>
  );
}

export default App;
