import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-10 col-xl-11 col-12 mx-auto">
            <div className="row">
              <div className="col-lg-4">
                <a href="index.php">
                  <img
                    src="assets/images/logo.png"
                    alt=""
                    className="img-fluid web-logo"
                  />
                </a>
              </div>
              <div className="col-lg-8">
                <h3 className="text-30-rener">
                  ZIPITSOLAR provides a MAP and ZIP Code based website where the
                  customer/visitor{" "}
                </h3>
                <div className="row">
                  <div className="col-lg-4">
                    <h6>Start a conversation:</h6>
                    <ul className="pl-0 footer-links">
                      <li>
                        <a href="#_"> Zipitsolar@mail.com</a>
                      </li>
                      <li>
                        <a href="#_">+1 035 2445 8265</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h6>Find Our Address:</h6>
                    <ul className="pl-0 footer-links">
                      <li>
                        <a href="#_">
                          Old Westbury 256, New York 11201,United States
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <h6>Our Social:</h6>
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
                </div>
                <hr />
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
