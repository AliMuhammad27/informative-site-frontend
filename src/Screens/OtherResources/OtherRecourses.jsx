import React from "react";
import { Link } from "react-router-dom";

const OtherRecourses = () => {
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
              <div className="col-lg-12">
                <h4 className="text-45 text-center">Other Good Resources</h4>
                <ul className="for-list-none">
                  <li>
                    <a href="http://www.dsireusa.org/">
                      http://www.dsireusa.org/
                    </a>
                  </li>
                  <li>
                    <a href="http://www.seia.org/">http://www.seia.org/</a>
                  </li>
                  <li>
                    <a href="http://www.pv-magazine.com">
                      http://www.pv-magazine.com
                    </a>
                  </li>
                  <li>
                    <a href="http://www.solarpowerworldonline.com/">
                      http://www.solarpowerworldonline.com/
                    </a>
                  </li>
                  <li>
                    <a href="http://www.solarenergy.org/">
                      http://www.solarenergy.org/
                    </a>
                  </li>
                  <li>
                    <a href="http://www.nabcep.org/">http://www.nabcep.org/</a>
                  </li>
                  <li>
                    <a href="http://www.homepower.com/">
                      http://www.homepower.com/
                    </a>
                  </li>
                  <li>
                    <a href="http://www.solarreviews.com/">
                      http://www.solarreviews.com/
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="row text-center">
          <div className="col-lg-12 mb-5">
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

export default OtherRecourses;
