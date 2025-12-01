import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUsers } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";
import { CiShare2 } from "react-icons/ci";
import { RiTimeLine } from "react-icons/ri";
import { CgGhost } from "react-icons/cg";
import portfolio from "/Images/portfolio-11.jpg"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import portfolio1 from "/Images/header-background.webp"

function NoteArea() {

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
    <main>
      <div>
        <div className="d-flex h-100 text-center text-bg-dark py-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
            <symbol id="check2" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </symbol>
            <symbol id="circle-half" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
            </symbol>
            <symbol id="moon-stars-fill" viewBox="0 0 16 16">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
            </symbol>
            <symbol id="sun-fill" viewBox="0 0 16 16">
              <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </symbol>
          </svg>

          <svg className="bi ms-auto d-none" aria-hidden="true"><use href="#check2" /></svg>

          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <main className="px-3">
              <h1 className="lead" style={{ fontSize: "60px", fontWeight: "bolder" }}>
                Effortlessly craft stunning resume sites that <span style={{ color: "yellow", fontStyle: "italic" }}>stand out.</span>
              </h1>
              <p className="lead">
                Build a stunning resume and portfolio website in minutes with React Resume! Choose from our professional templates, customize with ease, and host your site automatically to impress potential employers and clients.
              </p>
              <p className="lead">
                <a href="#"><button 
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="btn btn-success" style={{ backgroundColor: isMouseOver && "black",borderRadius: "12px" }}>Get Started Today</button></a>
              </p>
            </main>
          </div>
        </div>

        <div className="container">
          <img src="https://reactresume.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftimbaker.78d3156f.webp&w=1080&q=75" alt="tim baker image" height="600" />
        </div>

        <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <h3 style={{ fontWeight: "bolder" }}>Create. Customize.<span style={{ color: "yellow" }}>Launch.</span> 🚀</h3>
          <h1 style={{ fontWeight: "bolder" }}>Everything you need: Have your site live in minutes</h1>
          <p style={{ fontWeight: "bolder" }}>Experience the ease of building your professional online presence with React Resume. With our range of features, from customizable templates to automatic hosting, we've streamlined the process, making it easy for you to create, customize, and launch your personal site in a matter of minutes.</p>

        </div>


        <div className="container">
          <div className="responsive">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col d-flex align-items-start">
                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                  <use xlinkHref="#bootstrap" />
                </svg>
                <div>
                  <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                    <FaUsers color="yellow" fontSize="36px" textAlign="center" />User-friendly UI
                  </h3>
                  <p>Easily input and manage your personal information, work history, skills, and accomplishments through our intuitive and user-friendly interface.</p>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                  <use xlinkHref="#cpu-fill" />
                </svg>
                <div>
                  <h3 className="fw-bold mb-0 fs-4 text-body-emphasis"><BsLightningCharge color="yellow" fontSize="36px" textAlign="center" />Instant Website Generation</h3>
                  <p>With just a few clicks, turn your details into a fully-responsive, mobile-friendly resume website optimized for fast loading and high performance.</p>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                  <use xlinkHref="#calendar3" />
                </svg>
                <div>
                  <h3 className="fw-bold mb-0 fs-4 text-body-emphasis"><CgGhost color="yellow" fontSize="36px" />Automated Hosting</h3>
                  <p>We take care of hosting your resume website, ensuring it remains accessible and up-to-date without any hassle or manual effort on your part.</p>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                  <use xlinkHref="#speedometer2" />
                </svg>
                <div>
                  <h3 className="fw-bold mb-0 fs-4 text-body-emphasis"><GrUpdate color="yellow" fontSize="36px" /> Continuous Updates</h3>
                  <p>Stay ahead of the curve as we regularly update and improve our templates, features, and technology, ensuring your resume website remains cutting-edge.</p>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                  <use xlinkHref="#toggles2" />
                </svg>
                <div>
                  <h3 className="fw-bold mb-0 fs-4 text-body-emphasis"><CiShare2 color="yellow" fontSize="36px" />Unique Link - Easy Sharing</h3>
                  <p>Effortlessly share your stunning resume website with potential employers, collaborators, and clients through convenient sharing options and custom URLs.</p>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                  <use xlinkHref="#geo-fill" />
                </svg>
                <div>
                  <h3 className="fw-bold mb-0 fs-4 text-body-emphasis"><RiTimeLine color="yellow" fontSize="36px" />Time-saving</h3>
                  <p>Forget about labor-intensive manual resume editing and formatting. React Resume streamlines the process and lets you focus on showcasing your unique talents and achievements.</p>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div class="container margin-top-5 text-center">
          <h1>Select Your Plan: Simple Pricing for Everyone</h1>
          <p style={{ fontWeight: "bolder" }}>Explore our straightforward pricing plans and get started today.</p>
        </div>

        <div className="boxed-container container py-4">
          <div class="col"> <div class="card mb-4 rounded-3 shadow-sm" style={{ outline: "1px solid yellow" }}>
            <div ><p style={{ color: "yellow", fontWeight: "bolder" }}>Open Source</p> <h2 style={{ fontWeight: "bolder" }}>Free</h2> </div>
            <div class="card-body">
              <p>No cost, open-source, for DIY enthusiasts</p>
              <ul class="list-unstyled mt-3 mb-4">

                <li> &#10003; Open-Source Access</li>
                <li> &#10003; Do-It-Yourself Building</li>
                <li>&#10003; Basic Template</li>
                <li>&#10003; Self-Hosted</li>
              </ul>
              <button 
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              type="button" class="w-50 btn btn-lg btn-success"style={{ backgroundColor: isMouseOver && "black"}}>Get the template</button>
            </div>
          </div>
          </div>
          <div class="col"> <div class="card mb-4 rounded-3 shadow-sm" style={{ outline: "1px solid yellow" }}>
            <div> <p style={{ color: "yellow", fontWeight: "bolder" }}>Managed</p> </div>
            <div class="card-body"> <h1 class="card-title pricing-card-title">$2.5<small class="text-body-secondary fw-light">/month</small></h1>
              <p>Fully featured: Everything you need</p>
              <ul class="list-unstyled mt-3 mb-4">
                <li>&#10003; Instant Website Generation</li>
                <li>&#10003; User-friendly Editor</li>
                <li>&#10003; Personal domain</li>
                <li>&#10003; Hosted automatically</li>
                <li>&#10003; Continuous Template Updates</li>
                <li>&#10003; Easy Site Sharing</li>
              </ul>
              <button 
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              type="button" class="w-50 btn btn-lg btn-success" style={{ backgroundColor: isMouseOver && "black"}}>Get started</button>
            </div>
          </div>
          </div>
        </div>

        <div className="container">

          <h1>From the blog</h1>
          <h4>Insights, tips, and inspiration for crafting the perfect resume site.</h4>

        </div>

        <div className="d-flex justify-content-center flex-wrap gap-4 py-4">
          <div class="card mb-4 rounded-3 shadow-sm" style={{ outline: "2px solid yellow" }}>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src={portfolio} rounded />
                </Col>

              </Row>
            </Container>
          </div>
        </div>


        <div className="container">

          <h1>See it in action: Sites created with React Resume</h1>
          <p>Discover the potential of React Resume! Explore the sites below to see how a professional portfolio website can elevate your online presence and impress employers and clients with visually stunning showcases of your skills and experiences.</p>

        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>

          <div className="boxed-container container py-4">
            <div class="card mb-4 rounded-3 shadow-sm" style={{ outline: "2px solid yellow" }}>
              <img src={portfolio1} alt="portfolio1" height="400" />
            </div>
          </div>

          <div className="boxed-container container py-4">
            <div class="card mb-4 rounded-3 shadow-sm" style={{ outline: "2px solid yellow" }}>

              <img src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww" alt="portfolio2" height="400" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NoteArea;
