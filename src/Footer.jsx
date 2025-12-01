import React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


function Footer() {    
    return (
<div class="container"> 
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> 
        <div class="col-md-4 d-flex align-items-center"> 
            <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
             <svg class="bi" width="30" height="24" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg> </a> <span class="mb-3 mb-md-0 text-body-secondary">© 2025 Company, Inc</span> </div> 
             <div>
             <ul class="list-unstyled mt-3 mb-4" style={{ display: "flex", gap: "15px"}}>
                <li style={{fontSize:"2em"}}><FaFacebook /></li>
                <li style={{fontSize:"2em"}}><FaInstagram /></li>
                <li style={{fontSize:"2em"}}><CiLinkedin /></li>
                <li style={{fontSize:"2em"}}><FaGithub /></li>
             </ul>
             </div>
             </footer> 
              </div>
    
);
}
export default Footer;
    