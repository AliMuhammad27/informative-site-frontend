import React from "react";
import { Link } from "react-router-dom";
import MyNav from "../../Components/Nav";
import MyFoot from "../../Components/Footer";

const OtherRecourses = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    <MyNav/>
      <div className="wrapper">
        {/*?php include('mobile-navigation-loggedin.php') ?*/}
        <section className="inner-banner"></section>
        <section className="providing">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h4 className="text-45 text-center">Other Good Resources</h4>
                <ul className="for-list-none">
                  <div class="row">
                    
                    <div class="col-lg-3"> 
                     <li>
                      <h4>Database of State Incentives for Renewables</h4>
                      <a href="http://www.dsireusa.org/">
                        http://www.dsireusa.org/
                      </a>
                    </li>
                      <li>
                        <h4>Solar Energy Industries Association</h4>

                        <a href="http://www.seia.org/">http://www.seia.org/</a>
                      </li>
                      <li>
                        <h4>PV Magazine</h4>

                        <a href="http://www.pv-magazine.com">
                          http://www.pv-magazine.com
                        </a>
                      </li>
                      <li>
                        <h4>Solar Power World Magazine</h4>

                        <a href="http://www.solarpowerworldonline.com/">
                          http://www.solarpowerworldonline.com/
                        </a>
                      </li></div>
                      <div class="col-lg-3">
                      <li>
                        <h4>Solar Energy International</h4>

                        <a href="http://www.solarenergy.org/">
                          http://www.solarenergy.org/
                        </a>
                      </li>
                      <li>
                        <h4>North American Board of Certified Energy Practitioners</h4>

                        <a href="http://www.nabcep.org/">http://www.nabcep.org/</a>
                      </li>
                      <li>
                        <h4>HomePower Magazine</h4>

                        <a href="http://www.homepower.com/">
                          http://www.homepower.com/
                        </a>
                      </li>
                      <li>
                        <h4>Solar Reviews</h4>

                        <a href="http://www.solarreviews.com/">
                          http://www.solarreviews.com/
                        </a>
                      </li></div>
                    <div class="col-lg-3">       <li>
                      <h4>EnergySage</h4>

                      <a href="https://www.energysage.com/">
                        https://www.energysage.com/
                      </a>
                    </li>
                      <li>
                        <h4>Time Zone Converter</h4>

                        <a href="https://www.worldtimebuddy.com/pst-to-mdt-converter/">
                          https://www.worldtimebuddy.com/pst-to-mdt-converter/
                        </a>
                      </li>
                      <li>
                        <h4>Online Calculator</h4>

                        <a href="https://www.calculator.net/">
                          https://www.calculator.net/
                        </a>
                      </li>
                      <li>
                        <h4>Roof Pitch, Angle & Rise Calculator</h4>

                        <a href="https://www.blocklayer.com/riserun/">
                          https://www.blocklayer.com/riserun/
                        </a>
                      </li></div>
                    <div class="col-lg-3">
                      <li>
                        <h4>PV Watts</h4>
                        <a href="https://pvwatts.nrel.gov/">
                          https://pvwatts.nrel.gov/
                        </a>
                      </li>
                      <li>
                        <h4>KWh Calculator</h4>

                        <a href="https://www.altestore.com/store/calculators/load_calculator/">
                          https://www.altestore.com/store/calculators/load_calculator/
                        </a>
                      </li>
                      <li>
                        <h4>Enphase Microinverter Compatibility</h4>

                        <a href="https://enphase.com/installers/microinverters/calculator/">
                          https://enphase.com/installers/microinverters/calculator/
                        </a>
                      </li></div>
                      </div>
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
      <MyFoot/>
    </>
  );
};

export default OtherRecourses;
