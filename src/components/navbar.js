import React from "react";
import Logo from "../assets/Website Assets/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand" to="/home">
              <img
                src={Logo}
                alt="..."
                loading="lazy"
                style={{ marginLeft: "1rem" }}
              />
            </Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/home">
                  SIMS PPOB - ASSIDDIQIE ELZA PUTRA
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ marginRight: "50px" }}>
                <Link className="nav-link" to="/top-up">
                  Top up
                </Link>
              </li>
              <li className="nav-item" style={{ marginRight: "50px" }}>
                <Link className="nav-link" to='/transaction'>
                  Transaction
                </Link>
              </li>
              <li className="nav-item" style={{ marginRight: "30px" }}>
                <Link className="nav-link" to='/profile'>
                  Akun
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
