import React from "react";
import './../../App.css';
import {NavLink} from "react-router-dom";
import Home from "./../home";

function header() {
    return (
      <>
        <nav class="navbar navbar-dark">
            <div class="container">
                <NavLink to="/" class="navbar-brand"> CYSWITCH </NavLink>
                <button class="btn gldn">Connect to Wallet</button>
            </div>
        </nav>
      </>
    )
}
export default header;
