import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [show, setshow] = useState(true);
  // return el.html(content);
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-xxl-11 col-xl-11 px-0 mx-auto">
            <nav className="navbar navbar-expand-xl navbar-light">
              <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                  <img
                    src="assets/images/logo-new2.gif"
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
                <div className={"collapse navbar-collapse"} id="navbarNav">
                  <ul className="nav navbar-nav">
                    <li className="medium me-xl-3">
                      <Link
                        to="/about-us"

                        // onClick={(show) => {
                        //   setshow(!show);
                        // }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="medium mx-xl-3">
                      <Link
                        to="/why-zip-it-solar"
                        onClick={(show) => {
                          setshow(!show);
                        }}
                      >
                        WHY ZIP IT SOLAR?
                      </Link>
                    </li>
                    <li className="mx-xl-3 p-0 medium">
                      <Link
                        to="/data-source"
                        onClick={(show) => {
                          setshow(!show);
                        }}
                      >
                        Data Sources
                      </Link>
                    </li>
                    <li className="mx-xl-3 p-0 medium">
                      <Link
                        to="/other-good-resources"
                        onClick={(show) => {
                          setshow(!show);
                        }}
                      >
                        Other Good Resources
                      </Link>
                    </li>
                    <li className="mx-xl-3 p-0 medium">
                      <Link
                        to="/contact-us"
                        onClick={(show) => {
                          setshow(!show);
                        }}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav icons-nav  mt-3 mt-lg-0 flex-row">
                    <li className="nav-item ">
                      <div className="dropdown cart-drop cart-custom">
                        <button
                          className="cart-toggle transparent-btn d-flex align-items-center my-accountt"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        ></button>
                      </div>
                    </li>
                    <li className="nav-item mx-2">
                      <div class="dropdown cart-drop cart-custom for-none-block2">
                        <button
                          class="cart-toggle transparent-btn d-flex align-items-center my-accountt"
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
                          <span class="white-20-rener numbr-call">
                            +1 904 490 0081
                          </span>
                        </button>
                      </div>
                      <div class="dropdown cart-drop cart-custom for-none-block">
                        <button
                          class="cart-toggle transparent-btn d-flex align-items-center my-accountt"
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
                          <span class="white-20-rener numbr-call">
                            +1 904 490 0081
                          </span>
                        </button>
                        <ul
                          class="dropdown-menu profile-div"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <h6 class="dropdown-item  text-18-rener numbr-call2">
                              +1 904 490 0081
                            </h6>
                          </li>
                        </ul>
                      </div>
                      {/* <div className="dropdown cart-drop cart-custom">
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
                            (904) 806-8880
                          </span>
                        </button>
                      </div> */}
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
