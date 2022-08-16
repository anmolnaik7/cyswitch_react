import React from "react";
import './../../App.css';
import {NavLink} from "react-router-dom";

function header() {
    return (
      <>
        <nav className="navbar navbar-dark">
            <div className="container">
                <NavLink to="/" className="navbar-brand"> CYSWITCH </NavLink>
                <button className="btn gldn">Connect to Wallet</button>
            </div>
        </nav>
      </>
    )
}
export default header;
