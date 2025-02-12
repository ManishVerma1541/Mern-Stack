import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="" >
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/addperson">
                  Add Person
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/update">
                  Update
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact Us
                </Link>
              </li>
           
            </ul>
           
          </div>
        </div>
        <div className="d-flex me-2 gap-2 text-center">
          <a className="me-3" href="">Profile</a>
          <Link className="btn btn-outline-dark btn-sm login" to="/login">Log In</Link>
          <Link className="btn btn-outline-dark btn-sm login" to="signup">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};
