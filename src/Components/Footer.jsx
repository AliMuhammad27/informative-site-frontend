import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-10 col-xl-11 col-12 mx-auto">
            <div className="row align-items-baseline">
              <div className="col-lg-4">
                <a href="index.php">
                  <img
                    src="assets/images/logo-new2.gif"
                    alt=""
                    className="img-fluid web-logo"
                  />
                </a>
                <h3 className="p-text text-white py-2">
                  ZIPITSOLAR provides a MAP and ZIP Code based <br />
                  website where the visitor can find market specific <br /> data
                  for free
                </h3>
                <ul className="ps-0 social-icons">
                  <li>
                    <a href="#_">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#_">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#_">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-4">
                    <h6>Quick Links</h6>
                    <ul className="pl-0 footer-links">
                      <li>
                        <Link to="/"> Home</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/why-zip-it-solar">Why Zip IT Solar</Link>
                      </li>
                      <li>
                        <Link to="/data-source">Data Sources</Link>
                      </li>
                      <li>
                        <Link to="/other-good-resources">
                          Other Good Resources
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="col-lg-4">
                    <h6>Quick Data</h6>
                    <ul className="pl-0 footer-links">
                      <li>
                        <a href="#_">Electrical Rate $/Kwh Residential</a>
                      </li>
                      <li>
                        <a href="#_">Natural Gas/ LP Rates</a>
                      </li>
                      <li>
                        <a href="#_">Gasoline Prices</a>
                      </li>
                      <li>
                        <a href="#_">Top Solar Contractors</a>
                      </li>
                      <li>
                        <a href="#_">Installed Solar Capacity</a>
                      </li>
                      <li>
                        <a href="#_">Rebates/Incentives</a>
                      </li>
                    </ul>
                  </div> */}
                  <div className="col-lg-4" style={{ marginLeft: "100px" }}>
                    <h6>Contact Us</h6>
                    <ul className="ps-0">
                      <ul className="pl-0 footer-links addrs">
                        <li>
                          <i className="fas fa-envelope" /> Zipitsolar@mail.com
                        </li>
                        <li>
                          <i className="fas fa-phone" /> +1 035 2445 8265
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" /> 40 S. Liberty
                          St. Onalaska, WI 54650
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <p className="mb-0 white-20-rener">
                  © 2021 ZIPITSOLAR.com, All Rights Reserved
                </p>
              </div>
              <div className="col-lg-6 text-end">
                <ul className="pl-0 footer-links d-inline-flex">
                  <li>
                    <a href="#_" className="px-2">
                      {" "}
                      Terms &amp; Conditions{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#_"> Privacy Policy </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
