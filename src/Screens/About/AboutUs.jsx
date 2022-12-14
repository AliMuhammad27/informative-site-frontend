import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="wrapper">
        {/*?php include('mobile-navigation-loggedin.php') ?*/}
        <section className="inner-banner"></section>
        <section className="providing">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img
                  src="assets/images/teslacar.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-7">
                <h4 className="text-45">About us</h4>
                <p className="p-text">
                  Matthias Herzog, Founder and Owner, A Renewable Energy
                  innovator and field expert. Handson experience in photovoltaic
                  installation, implementation, design, engineering, product and
                  market development, consulting and teaching. Knowledge and
                  certification of industry standards and protocol (NABCEP
                  Certified PV Installation Professional (Certification #
                  032611-141) &amp; NABCEP Certified PV System Inspector
                  (Certification # PVSI-072417-006718). <br />
                  Being 16+ years active in the Solar Industry, Matthias
                  recognized the need for a simple but centralized source of
                  market data will be extremely useful for not only solar system
                  designers but also many other participants of the renewable
                  revolution. Zip It Solar was founded and built to cover that
                  need.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="row text-center">
          <div className="col-lg-12 my-5">
            <Link to="/" className="site-btn" onClick={goToTop}>
              Go Back To Home
            </Link>
          </div>
        </div>
        {/*?php include('site-footer.php') ?*/}
      </div>
      <div className="overlay" />
    </div>
  );
};

export default AboutUs;
