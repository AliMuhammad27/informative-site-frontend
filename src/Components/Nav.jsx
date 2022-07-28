import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-xxl-11 col-xl-11 px-0 mx-auto">
            <nav className="navbar navbar-expand-xl navbar-light">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                  <img
                    src="assets/images/logo.png"
                    alt=""
                    className="img-fluid ml-3 ml-sm-0 web-logo"
                  />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="nav navbar-nav">
                    <li className="medium me-xl-3">
                      <a href="http://altways.com/">About Us</a>
                    </li>
                    <li className="medium mx-xl-3">
                      <a href="http://altways.com/">Research Solar</a>
                    </li>
                    <li className="mx-xl-3 p-0 medium">
                      <a href="http://altways.com/">Solar Calculator</a>
                    </li>
                    <li className="mx-xl-3 p-0 medium">
                      <a href="http://altways.com/">Community Solar</a>
                    </li>
                    <li className="mx-xl-3 p-0 medium">
                      <a href="http://altways.com/">Contact Us</a>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav icons-nav ms-auto mt-3 mt-lg-0 flex-row">
                    <li className="nav-item">
                      <div className="dropdown cart-drop cart-custom">
                        <button
                          className="cart-toggle transparent-btn d-flex align-items-center my-accountt"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src="assets/images/srch.png"
                            alt=""
                            className="img-fluid"
                          />
                        </button>
                      </div>
                    </li>
                    <li className="nav-item mx-2">
                      <div className="dropdown cart-drop cart-custom">
                        <button
                          className="cart-toggle transparent-btn d-flex align-items-center my-accountt"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src="assets/images/phone-call.png"
                            alt=""
                            className="img-fluid"
                          />
                          <span className="white-20-rener numbr-call">
                            +1 035 2445 8265
                          </span>
                        </button>
                      </div>
                    </li>
                    <li className="nav-item mx-3">
                      <a href="http://altways.com/" className="site-btn-header">
                        Request a Quote{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Nav;
