import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Header() {

    const [clicked, setClicked] = React.useState(false);
    const [isMouseOver, setIsMouseOver] = React.useState(false);
    
    
    
    function handleClick() {
    
      setClicked(!clicked);
    }
    
    function handleMouseOver() {
      setIsMouseOver(true);
    }
    
    function handleMouseOut() {
      setIsMouseOver(false);
    }

    return (
        <header className="container d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                <li className="nav-item"><a style = {{color:"green", fontSize:"25px", fontWeight:"bold"}}href="#">React Resume</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Examples</a></li>
                <li class="nav-item"> <div class="col-md-12 right-align-text ">
                    <button
                     onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                type="button" class="btn btn-success" style={{ backgroundColor: isMouseOver && "black"}}>Get Started</button> </div> </li>
            </ul>
           
        </header>
    );
}


export default Header;

