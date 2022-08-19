import React from "react";
import { Link } from "react-router-dom";

const WhyZip = () => {
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
                <h4 className="text-45">Why ZPI IT SOLAR</h4>
                <p className="p-text py-4">
                  Zip It Solar does not provide any information which is not
                  already publicly available. But as a PV System designer, I
                  have a need for specific and current data to do my
                  calculations and designs. Managing and maintaining a huge
                  bookmark collection is one way; another is ZIP IT SOLAR. A web
                  platform with all the needed datasets available by simply
                  entering a Zip code or State Name. Having a centralized and
                  easy to access data platform available is useful for not only
                  the Photovoltaic industry but for many other industries too:
                </p>
                <ul className="for-list-nonee ">
                  <li>
                    <img src="assets/images/check-icn.png" alt="" />
                    <span className="text-16-rener">Wind Industry</span>
                  </li>
                  <li>
                    <img src="assets/images/check-icn.png" alt="" />
                    <span className="text-16-rener">
                      Electric Car Industry (EV)
                    </span>
                  </li>
                  <li>
                    <img src="assets/images/check-icn.png" alt="" />
                    <span className="text-16-rener">Real Estate Industry</span>
                  </li>
                  <li>
                    <img src="assets/images/check-icn.png" alt="" />
                    <span className="text-16-rener">Researchers</span>
                  </li>
                  <li>
                    <img src="assets/images/check-icn.png" alt="" />
                    <span className="text-16-rener">Homeowners</span>
                  </li>
                  <li>
                    <img src="assets/images/check-icn.png" alt="" />
                    <span className="text-16-rener">Politicians</span>
                  </li>
                  <li>
                    <img src="assets/images/check-icn.png" alt="" />
                    <span className="text-16-rener">Policy makers</span>
                  </li>
                  <li>
                    <img src="assets/images/check-icn.png" alt="" />
                    <span className="text-16-rener">Tourism Industry</span>
                  </li>
                  <li>
                    <img src="assets/images/check-icn.png" alt="" />
                    <span className="text-16-rener">Construction</span>
                  </li>
                  <li>
                    <img src="assets/images/check-icn.png" alt="" />
                    <span className="text-16-rener">And many more</span>
                  </li>
                </ul>
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

export default WhyZip;
