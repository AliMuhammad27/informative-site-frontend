import React, { useEffect, useState } from "react";
import { State } from "country-state-city";
import { Link } from "react-router-dom";
import Select from "react-select";
import VectorMapp from "../../Components/VectorMax";
import Lottie from "react-lottie";
import AnimationData from "../../Lotties/59875-home.json";
import AnimationData2 from "../../Lotties/102467-solar-panel.json";
import AnimationData3 from "../../Lotties/96916-searching.json";
import AnimationData4 from "../../Lotties/lf30_editor_8hh6f8fh.json";
import AnimationData5 from "../../Lotties/lf30_editor_ar3emp8n.json";
import AnimationData6 from "../../Lotties/lf30_editor_uqrsia3g.json";
import AnimationData7 from "../../Lotties/lf30_editor_e37ufmz2.json";
import AnimationData8 from "../../Lotties/lf30_editor_l5xvcdc7.json";
import AnimationData9 from "../../Lotties/lf30_editor_moamicbr.json";
import AnimationData10 from "../../Lotties/lf30_editor_w9uygc7w.json";
import Modal from "../../Components/Modal";
import WOW from "wowjs";
const Home = ({ history }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: AnimationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: AnimationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: AnimationData4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions5 = {
    loop: true,
    autoplay: true,
    animationData: AnimationData5,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions6 = {
    loop: true,
    autoplay: true,
    animationData: AnimationData6,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions7 = {
    loop: true,
    autoplay: true,
    animationData: AnimationData7,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions8 = {
    loop: true,
    autoplay: true,
    animationData: AnimationData8,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions9 = {
    loop: true,
    autoplay: true,
    animationData: AnimationData9,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions10 = {
    loop: true,
    autoplay: true,
    animationData: AnimationData10,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { zipCodeData } = require("../../Util/Helpers");
  const states = State.getStatesOfCountry("US");
  const [state, setstate] = useState(null);
  const [zipcode, setzipcode] = useState(null);
  const [general, setgeneral] = useState("");
  const updatedStates = states.map((state) => ({
    label: state.name,
    value: state.id,
    ...state,
  }));
  console.log("updatesStates", updatedStates);
  useEffect(() => {
    console.log("Running on State Change");
  }, [state]);

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  console.log("ChangedState", state);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handler = () => {
    let path = "";
    if (state && general) return (path = `/${general}/${state}`);
  };
  const res = handler();
  console.log("Ress", res);
  console.log("ZipCodeChanges", zipcode);
  console.log("ZipCodeData", zipCodeData);

  console.log("abbbbbbbbbb");

  const filteredState = zipCodeData.filter((ele) => {
    if (zipcode >= ele.rangeFrom && zipcode <= ele.rangeTo) {
      console.log("aya");
      return ele ? ele : null;
    }
  });
  console.log("FilteredState", filteredState[0]?.state);

  useEffect(() => {
    if (filteredState) {
      setstate(filteredState[0]?.state);
    }
  }, [filteredState]);
  return (
    <div className="wrapper">
      {/*?php include('mobile-navigation-loggedin.php') ?*/}
      {/* banner section starts here */}
      <section className="banner position-relative">
        <div className="overlay2"></div>
        <video autoPlay muted loop id="myVideo">
          <source src="assets/images/banner-video.mp4" type="video/mp4" />
        </video>
        <div className="container-fluid bb">
          <div className="row">
            <div className="col-12 col-xxl-12 col-xl-12">
              <h6
                className="text-20-rener wow fadeInLeft text-center"
                data-wow-delay="2s"
              >
                <span>
                  <img src="assets/images/line.png" alt="" />
                </span>{" "}
                Be Eco---Friendly
              </h6>
              <h5
                className="text-75 wow fadeInUp text-center"
                data-wow-delay="2.3s"
              >
                Proven Renewable
              </h5>
              <h5
                className="text-75 wow fadeInUp text-center"
                data-wow-delay="2.6s"
              >
                Energy <span className="yellow-text">Solutions</span>
              </h5>
              <div
                className="banner-box wow flipInX mx-auto"
                data-wow-delay="2.8s"
              >
                <h6>Search Data</h6>
                <form className="row g-3 align-items-end">
                  <div className="col-md-3 col-sm-4">
                    <Select
                      id="states"
                      name="states"
                      label="states"
                      placeholder={state ? state : "State"}
                      options={updatedStates}
                      defaultValue={"State"}
                      value={state}
                      onChange={(value) => {
                        setstate(value.name);
                      }}
                    />
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <input
                      type="number"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Zip Code"
                      value={zipcode}
                      onChange={(e) => setzipcode(e.target.value)}
                    />
                  </div>
                  <div className="col-md-3">
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {general ? general : <>Select Service</>}
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item"
                            onClick={(e) => {
                              setgeneral("gasoline-prices");
                            }}
                          >
                            Gasoline Prices
                          </Link>
                        </li>
                        <Link
                          to="#"
                          className="dropdown-item"
                          onClick={(e) => {
                            setgeneral("electric-rates");
                          }}
                        >
                          Electric Rates
                        </Link>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("electric-usage");
                            }}
                          >
                            Average Electrical Usage
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("solar-rates");
                            }}
                          >
                            Pv System Installation
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("sun-hours");
                            }}
                          >
                            ESH (Equal Sun Hours)
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            onClick={(e) => {
                              setgeneral("wind-speed");
                            }}
                          >
                            Average Wind Speed
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="dropdown-item"
                            onClick={(e) => {
                              setgeneral("naturalgas-prices");
                            }}
                          >
                            Natural Gas/Lp Rates
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            onClick={(e) => {
                              setgeneral("tesla-showrooms");
                            }}
                          >
                            Tesla Show Rooms/Garages
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            onClick={(e) => {
                              setgeneral("electric-car-charging-station");
                            }}
                          >
                            Available Electric Car Charging Stations
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            onClick={(e) => {
                              setgeneral("weather-data");
                            }}
                          >
                            Weather data
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12 text-sm-center">
                    <div className="col-md-5">
                      <Link
                        onClick={(e) => {
                          state && general ? history.push(handler()) : Modal();
                        }}
                        className="btn site-btn"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner section ends here */}
      {/* How Much money start here */}
      {/* <section class="much-money">
  <div class="container">
      <div class="row">
          <div class="col-xxl-12">
              <h2 class="text-50 text-center wow fadeInUp" data-wow-delay=".5s">How Much money you save on solar
              </h2>
              <p class="text-18-rener text-center wow fadeInUp" data-wow-delay=".7s">There are many variations of
                  passages of Lorem Ipsum available,
                  but the
                  majority have suffered
                  alteration in some form, by injected humour, or <br> randomised words which don't look even
                  slightly
                  believable. If you are going to use a passage of Lorem Ipsum,</p>
              <img src="../assets/images/chart1.png" alt="" class="img-fluid py-4 wow fadeIn"
                  data-wow-delay=".7s">
          </div>
      </div>
  </div>
    </section> */}
      {/* How Much money ends here */}
      {/* searchable data start here */}
      <section className="searchable-data">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <h2
                className="text-50 text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                Location specific searchable data
              </h2>
              <p
                className="text-18-rener text-center wow fadeInUp"
                data-wow-delay=".7s"
              >
                We have sourced and connected all these DATA SETS and made them
                available to you. Simply select the DATA SET you are interested
                in and enter the ZIP CODE and/or STATE above. If you prefer a
                Map based research scroll down and use our MAP.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 order order-lg-1 order-md-1 order-1">
              <div className=" wow fadeInLeft" data-wow-delay=".5s">
                <div className="blub-box d-lg-flex d-md-flex d-sm-block align-items-center my-5">
                  <Link
                    onClick={(e) => {
                      setgeneral(`electrical-usage`);
                      goToTop();
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img src="assets/images/solar-3.png" alt="..." />
                    </div>
                  </Link>
                  <div className=" ms-3">Electrical Usage</div>
                </div>
                <div className="blub-box d-lg-flex d-md-flex d-sm-block align-items-center  my-5">
                  <Link
                    onClick={(e) => {
                      setgeneral("naturalgas-prices");
                      goToTop();
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img src="assets/images/solar-2.png" alt="..." />
                    </div>
                  </Link>
                  <div className=" ms-3">Natural Gas/ LP Rates</div>
                </div>
                <div className="blub-box d-lg-flex d-md-flex d-sm-block align-items-center  my-5">
                  <Link
                    onClick={(e) => {
                      setgeneral("electric-rates");
                      goToTop();
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img src="assets/images/solar-3.png" alt="..." />
                    </div>
                  </Link>
                  <div className=" ms-3">
                    Electrical Rate $/Kwh <br /> Residential
                  </div>
                </div>
                <div className="blub-box d-lg-flex d-md-flex d-sm-block align-items-center  my-5">
                  <Link
                    onClick={(e) => {
                      setgeneral("sun-hours");
                      goToTop();
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img src="assets/images/solar-3.png" alt="..." />
                    </div>
                  </Link>
                  <div className=" ms-3">Sun-Hours</div>
                </div>
                <div className="blub-box d-lg-flex d-md-flex d-sm-block align-items-center  my-5">
                  <Link
                    onClick={(e) => {
                      setgeneral("weather-data");
                      goToTop();
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img src="assets/images/solar-3.png" alt="..." />
                    </div>
                  </Link>
                  <div className=" ms-3">Weather</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-3 order-3">
              <div className="wow fadeInDown" data-wow-delay=".5s">
                <img
                  src="assets/images/blub.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 order-lg-3 order-md-2 order-2">
              <div className="wow fadeInRight" data-wow-delay=".5s">
                <div className="blub-box d-lg-flex d-md-flex d-sm-block text-sm-center align-items-center my-5">
                  <Link
                    onClick={(e) => {
                      setgeneral("gasoline-prices");
                      goToTop();
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img src="assets/images/money-bag.png" alt="..." />
                    </div>
                  </Link>
                  <div className=" ms-3">Gasoline Prices</div>
                </div>
                <div className="blub-box d-lg-flex d-md-flex d-sm-block text-sm-center align-items-center  my-5">
                  <Link
                    onClick={(e) => {
                      setgeneral("tesla-showrooms");
                      goToTop();
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img src="assets/images/usr.png" alt="..." />
                    </div>
                  </Link>
                  <div className=" ms-3">Tesla Showrooms</div>
                </div>
                <div className="blub-box d-lg-flex d-md-flex d-sm-block text-sm-center align-items-center  my-5">
                  <Link
                    onClick={(e) => {
                      setgeneral("electric-car-charging-station");
                      goToTop();
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img src="assets/images/capacity.png" alt="..." />
                    </div>
                  </Link>
                  <div className=" ms-3">Charging Stations</div>
                </div>
                <div className="blub-box d-lg-flex d-md-flex d-sm-block text-sm-center align-items-center  my-5">
                  <Link
                    onClick={(e) => {
                      setgeneral("wind-speed");
                      goToTop();
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img src="assets/images/capacity.png" alt="..." />
                    </div>
                  </Link>
                  <div className=" ms-3">Wind Speed</div>
                </div>
                <div className="blub-box d-lg-flex d-md-flex d-sm-block text-sm-center align-items-center  my-5">
                  <Link
                    onClick={(e) => {
                      setgeneral("solar-rates");
                      goToTop();
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img src="assets/images/capacity.png" alt="..." />
                    </div>
                  </Link>
                  <div className=" ms-3">Solar Rates</div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row my-4 text-center">
            <div className="col-xxl-12 wow flipInX" data-wow-delay=".8s">
              <a href="#" className="site-btn ">
                Show All
              </a>
            </div>
          </div> */}
        </div>
      </section>
      {/* searchable data ends here */}
      {/* solar-map start here */}
      <section className="solar-map">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <h2
                className="text-50 text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                MAP BASED RESEARCH
              </h2>
              <p className="text-center wow fadeInUp">
                1.Select The Data Set You Are Interested In
              </p>
              <p className="text-center wow fadeInUp">
                2.Click on an area on the Map where you like to see the data
              </p>
            </div>
          </div>
          {/* <div className="row my-4 text-center">
            <div className="col-xxl-12 wow flipInX" data-wow-delay=".7s">
              <a href="#" className="site-btn">
                Explore Your Area
              </a>
            </div>
          </div> */}
          <h6>Search Data</h6>
          <form className="row g-3 align-items-center my-3">
            <div className="col-md-3 col-sm-4">
              <Select
                id="states"
                name="states"
                label="states"
                placeholder={state ? state : "State"}
                options={updatedStates}
                defaultValue={"State"}
                value={state}
                onChange={(value) => {
                  setstate(value.name);
                }}
              />
            </div>
            <div className="col-md-3 col-sm-4">
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Zip Code"
              />
            </div>
            <div className="col-md-3">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {general ? general : <>Select Service</>}
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link
                      to="#"
                      className="dropdown-item"
                      onClick={(e) => {
                        setgeneral("gasoline-prices");
                      }}
                    >
                      Gasoline Prices
                    </Link>
                  </li>
                  <Link
                    to="#"
                    className="dropdown-item"
                    onClick={(e) => {
                      setgeneral("electric-rates");
                    }}
                  >
                    Electric Rates
                  </Link>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={(e) => {
                        setgeneral("electric-usage");
                      }}
                    >
                      Avergae Electrical Usage
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={(e) => {
                        setgeneral("solar-rates");
                      }}
                    >
                      Pv System Installation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={(e) => {
                        setgeneral("sun-hours");
                      }}
                    >
                      ESH (Equal Sun Hours)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(e) => {
                        setgeneral("wind-speed");
                      }}
                    >
                      Average Wind Speed
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(e) => {
                        setgeneral("naturalgas-prices");
                      }}
                    >
                      Natural Gas/LP Rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(e) => {
                        setgeneral("tesla-showrooms");
                      }}
                    >
                      Tesla Show Rooms/Garages
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(e) => {
                        setgeneral("electric-car-charging-station");
                      }}
                    >
                      Available Electric Car Charging Stations
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(e) => {
                        setgeneral("weather-data");
                      }}
                    >
                      Weather Data
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 text-sm-center">
              <div className="col-md-5">
                <Link
                  onClick={(e) => {
                    state && general ? history.push(handler()) : Modal();
                  }}
                  className="btn site-btn"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </form>
          <div className="my-map" style={{ height: "100vh", bottom: 0 }}>
            <VectorMapp state={setstate} />
          </div>

          {/* <div className="row my-5">
            <div className="col-xxl-12">
              <img
                src="assets/images/map.png"
                alt=""
                className="img-fluid wow fadeIn"
                data-wow-delay=".7s"
              />
            </div>
          </div> */}
        </div>
      </section>
      {/* solar-map ends here */}
      {/* Historical Weather start here */}
      {/* <section class="historical-weather">
  <div class="container">
      <div class="row">
          <div class="col-xxl-12">
              <h2 class="text-50 text-center wow fadeInUp" data-wow-delay=".5s">Historical Weather</h2>
              <p class="text-18-rener text-center wow fadeInUp" data-wow-delay=".7s">Find historical weather by
                  searching for a city, zip code, or
                  airport code. Include a date for which you would like to see weather history. <br> You can
                  select a
                  range of dates in the results on the next page.</p>
          </div>
      </div>
      <form class="row g-3 align-items-end py-4">
          <div class="col-md-6 wow fadeInLeft" data-wow-delay=".5s">
              <label for="inputEmail4" class="form-label label-rener">Location</label>
              <input type="text" class="form-control" id="inputEmail4"
                  placeholder="City, State or Zip Code, or Airport Code">
          </div>
          <div class="col-md-2 wow fadeInRight" data-wow-delay=".5s">
              <label for="inputPassword4" class="form-label label-rener">Date</label>
              <select class="form-select" id="autoSizingSelect">
                  <option selected>May</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          <div class="col-md-2 wow fadeInRight" data-wow-delay=".5s">
              <input type="text" class="form-control" id="inputPassword4" placeholder="16">
          </div>
          <div class="col-md-2 wow fadeInRight" data-wow-delay=".5s">
              <input type="text" class="form-control" id="inputPassword4" placeholder="2022">
          </div>
      </form>
      <div class="row my-4 text-center">
          <div class="col-xxl-12 wow flipInX" data-wow-delay=".7s">
              <a href="#" class="site-btn">View</a>
          </div>
      </div>
  </div>
    </section> */}
      {/* Historical Weather ends here */}
      {/* potential start here */}
      <section className="potential">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xxl-11 col-xl-11  mx-auto">
              <div className="row align-items-center">
                <div className="col-xxl-12 col-xl-12 col-12">
                  <h2
                    className="text-50 text-center wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    OUR POTENTIAL USERS
                  </h2>
                  <p
                    className="text-18-rener text-center wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    Find historical weather by searching for a city, zip code,
                    or airport code. Include a date for which you would like to
                    see weather history. <br /> You can select a range of dates
                    in the results on the next page.
                  </p>
                </div>
              </div>
              <div className="row align-items-end">
                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    {/* <div className="loti-anim" id="giveaways"></div> */}
                    <Lottie
                      options={defaultOptions2}
                      height={150}
                      width={150}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-24">
                        Solar Energy Industry
                      </h5>
                      <p className="card-text">
                        - Average electrical cost - Average wind speed
                      </p>
                    </div>
                    <a href="#_">
                      <i className="fas fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card text-center  wow fadeInDown"
                    data-wow-delay=".5s"
                  >
                    <Lottie
                      options={defaultOptions6}
                      height={150}
                      width={150}
                    />
                    {/* <div className="loti-anim" id="giveaways2"></div> */}
                    <div className="card-body">
                      <h5 className="card-title text-24">
                        Wind Energy Industry{" "}
                      </h5>
                      <p className="card-text">
                        - - Average electrical cost - - Equal Sun Hours (EHS)
                      </p>
                    </div>
                    <a href="#_">
                      <i className="fas fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <Lottie
                      options={defaultOptions4}
                      height={150}
                      width={150}
                    />
                    {/* <div className="loti-anim" id="giveaways3"></div> */}
                    <div className="card-body">
                      <h5 className="card-title text-24">
                        Electric Car Industry
                      </h5>
                      <p className="card-text">
                        - Average electrical cost - Available EV charging
                        stations
                      </p>
                    </div>
                    <a href="#_">
                      <i className="fas fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    {/* <div className="loti-anim" id="giveaways4"></div> */}
                    <Lottie options={defaultOptions} height={150} width={150} />
                    <div className="card-body">
                      <h5 className="card-title text-24">
                        Real Estate Industry
                      </h5>
                      <p className="card-text">
                        - Average electrical cost - - Building codes
                      </p>
                    </div>
                    <a href="#_">
                      <i className="fas fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Lottie
                      options={defaultOptions5}
                      height={150}
                      width={150}
                    />
                    {/* <div className="loti-anim" id="giveaways5"></div> */}
                    <div className="card-body">
                      <h5 className="card-title text-24">
                        Home Owners interested in Solar
                      </h5>
                      <p className="card-text">
                        - Average electrical cost - Gasoline prices
                      </p>
                    </div>
                    <a href="#_">
                      <i className="fas fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <Lottie
                      options={defaultOptions3}
                      height={150}
                      width={150}
                    />
                    {/* <div className="loti-anim" id="giveaways6"></div> */}
                    <div className="card-body">
                      <h5 className="card-title text-24">Market researchers</h5>
                      <p className="card-text">
                        - Average Wind speed - Rebates/Incentives
                      </p>
                    </div>
                    <a href="#_">
                      <i className="fas fa-plus" />
                    </a>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <Lottie
                      options={defaultOptions8}
                      height={150}
                      width={150}
                    />
                    {/* <div className="loti-anim" id="giveaways6"></div> */}
                    <div className="card-body">
                      <h5 className="card-title text-24">Politicians</h5>
                      <p className="card-text">
                        - Average Wind speed - Rebates/Incentives
                      </p>
                    </div>
                    <a href="#_">
                      <i className="fas fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <Lottie
                      options={defaultOptions7}
                      height={150}
                      width={150}
                    />
                    {/* <div className="loti-anim" id="giveaways6"></div> */}
                    <div className="card-body">
                      <h5 className="card-title text-24">Policy Makers</h5>
                      <p className="card-text">
                        - Average Wind speed - Rebates/Incentives
                      </p>
                    </div>
                    <a href="#_">
                      <i className="fas fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <Lottie
                      options={defaultOptions9}
                      height={150}
                      width={150}
                    />
                    {/* <div className="loti-anim" id="giveaways6"></div> */}
                    <div className="card-body">
                      <h5 className="card-title text-24">Tourism Industry</h5>
                      <p className="card-text">
                        - Average Wind speed - Rebates/Incentives
                      </p>
                    </div>
                    <a href="#_">
                      <i className="fas fa-plus" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <Lottie
                      options={defaultOptions10}
                      height={150}
                      width={150}
                    />
                    {/* <div className="loti-anim" id="giveaways6"></div> */}
                    <div className="card-body">
                      <h5 className="card-title text-24">Construction</h5>
                      <p className="card-text">
                        - Average Wind speed - Rebates/Incentives
                      </p>
                    </div>
                    <a href="#_">
                      <i className="fas fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="row my-4 text-center">
                <div className="col-xxl-12 wow flipInX" data-wow-delay=".9s">
                  <a href="#" className="site-btn">
                    View More
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* potential ends here */}
      {/* Best For You start here */}
      <section className="best-for-you">
        <div className="container">
          <div className="best-for-you2 wow zoomIn" data-wow-delay=".7s">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="text-25-acumin text-white  text-center">
                  Zip IT Solar Would Love To Hear What You Think About
                </h1>
                <h1 className="text-25-acumin text-white  text-center">
                  {" "}
                  Our Services. Any Feedback Is Welcome!
                </h1>
                <h6 className="text-center text-18-rener text-white py-4">
                  If You Like To See Additional Data Made Available Here Or If
                  You Are A Provider Of A <br /> Data Set You Think We Should
                  Publish, Please Get In Touch With Us
                </h6>
                <Link to="/contact-us" className="site-btn-yellow">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Best For You ends here */}
      {/*?php include('site-footer.php') ?*/}
    </div>
  );
};
export default Home;
