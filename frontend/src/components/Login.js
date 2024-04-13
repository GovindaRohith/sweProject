import React, { useState, useEffect } from 'react';
import axios from './axios';


export default function Login() { 
    return (
        <div>
            Login part goes here
            <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">UserName</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>

<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>

<button type="button" class="btn btn-outline-primary">Login</button>

<br/> 
<br/> 

Forgot password goes here 

<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">ID to mail</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<button type="button" class="btn btn-outline-primary">Send password to my mail</button>


        </div>
    );
}

