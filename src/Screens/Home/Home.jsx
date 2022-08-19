import React, { useEffect, useState } from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import { State } from "country-state-city";
import { Link } from "react-router-dom";
import Toasty from "../../Util/toast";
import Select from "react-select";
import VectorMapp from "../../Components/VectorMax";
const Home = ({ history }) => {
  const states = State.getStatesOfCountry("US");
  const [state, setstate] = useState(null);
  const [zipcode, setzipcode] = useState("");
  const [electricrates, setelectricrates] = useState("");

  const updatedStates = states.map((state) => ({
    label: state.name,
    value: state.id,
    ...state,
  }));

  console.log("ChangedState", state);
  console.log("ChangedStateElectri", electricrates);

  return (
    <div className="wrapper">
      <section className="banner position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xxl-11 col-xl-11  mx-auto">
              <div className="row align-items-center">
                <div className="col-xxl-7 col-xl-12 col-12">
                  {
                    <h2 className="text-75 wow fadeInUp" data-wow-delay="2.6s">
                      <span className="white-text">
                        Find your data set with{" "}
                        <span className="yellow-text">2 easy steps</span>
                      </span>
                    </h2>
                  }
                  <div className="banner-box wow flipInX" data-wow-delay="2.8s">
                    <form className="row g-3 align-items-center">
                      <div className="col-md-2">
                        <Select
                          id="states"
                          name="states"
                          label="states"
                          placeholder={state}
                          options={updatedStates}
                          defaultValue={state}
                          value={state}
                          onChange={(value) => {
                            setstate(value.name);
                          }}
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
                            Select Service
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <Link
                                className="dropdown-item"
                                onClick={(e) => {
                                  state
                                    ? history.push(`/gasoline-prices/${state}`)
                                    : Toasty(
                                        "Error",
                                        "please fill all the req fields"
                                      );
                                }}
                              >
                                Gasoline Rates
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                onClick={(e) => {
                                  state
                                    ? history.push(`/electric-rates/${state}`)
                                    : Toasty(
                                        "Error",
                                        "please fill all the req fields"
                                      );
                                }}
                              >
                                Electric Rates
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                onClick={(e) => {
                                  state
                                    ? history.push(`/electrical-usage/${state}`)
                                    : Toasty(
                                        "Error",
                                        "please fill all the req fields"
                                      );
                                }}
                              >
                                {electricrates ? (
                                  electricrates
                                ) : (
                                  <>Electrical Usage</>
                                )}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                onClick={(e) => {
                                  state
                                    ? history.push(`/solar-rates/${state}`)
                                    : Toasty(
                                        "Error",
                                        "please fill all the req fields"
                                      );
                                }}
                              >
                                Pv-Installation
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                onClick={(e) => {
                                  state
                                    ? history.push(`/sun-hours/${state}`)
                                    : Toasty(
                                        "Error",
                                        "please fill all the req fields"
                                      );
                                }}
                              >
                                Sun hours
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                onClick={(e) => {
                                  state
                                    ? history.push(`/wind-speed/${state}`)
                                    : Toasty(
                                        "Error",
                                        "please fill all the req fields"
                                      );
                                }}
                              >
                                Wind Speed
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item"
                                onClick={(e) => {
                                  state
                                    ? history.push(
                                        `/naturalgas-prices/${state}`
                                      )
                                    : Toasty(
                                        "Error",
                                        "please fill all the req fields"
                                      );
                                }}
                              >
                                Natural Gas Rates
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                onClick={(e) => {
                                  state
                                    ? history.push(`/tesla-showrooms/${state}`)
                                    : Toasty(
                                        "Error",
                                        "please fill all the req fields"
                                      );
                                }}
                              >
                                Show Rooms
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                onClick={(e) => {
                                  state
                                    ? history.push(
                                        `/electric-car-charging-station/${state}`
                                      )
                                    : Toasty(
                                        "Error",
                                        "please fill all the req fields"
                                      );
                                }}
                              >
                                Charging Stations
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                onClick={(e) => {
                                  state
                                    ? history.push(`/weather-data/${state}`)
                                    : Toasty(
                                        "Error",
                                        "please fill all the req fields"
                                      );
                                }}
                              >
                                Weather
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <Link className="btn site-btn">Get Started</Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-12 col-12">
                  <img
                    src="assets/images/solar-pic.png"
                    className="img-fluid for-sollr-img wow fadeInRight"
                    data-wow-delay="2.6s"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
          <div className="row">
            <div className="col-xxl-4">
              <Link
                onClick={(e) => {
                  state
                    ? history.push(`/electrical-usage/${state}`)
                    : Toasty("Error", "please fill all the req fields");
                }}
              >
                <div
                  className="custum-cards wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="flex-shrink-0">
                      <img src="assets/images/flash.png" alt="..." />
                    </div>
                    <div className=" ms-3">
                      <span className="text-18-rener">Electrical Usage</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-xxl-4">
              <Link
                onClick={(e) => {
                  state
                    ? history.push(`/electric-rates/${state}`)
                    : Toasty("Error", "please fill all the req fields");
                }}
              >
                <div
                  className="custum-cards wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="flex-shrink-0">
                      <img src="assets/images/flash.png" alt="..." />
                    </div>
                    <div className=" ms-3">
                      <span className="text-18-rener">
                        Electrical Rate $/Kwh Residential
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-xxl-4">
              <Link
                onClick={(e) => {
                  state
                    ? history.push(`/naturalgas-prices/${state}`)
                    : Toasty("Error", "please fill all the req fields");
                }}
              >
                <div
                  className="custum-cards wow fadeInDown"
                  data-wow-delay=".5s"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="flex-shrink-0">
                      <img src="assets/images/fire.png" alt="..." />
                    </div>
                    <div className=" ms-3">
                      <span className="text-18-rener">
                        Natural Gas/ LP Rates
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-xxl-4">
              <Link
                onClick={(e) => {
                  state
                    ? history.push(`/gasoline-prices/${state}`)
                    : Toasty("Error", "please fill all the req fields");
                }}
              >
                <div
                  className="custum-cards wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="flex-shrink-0">
                      <img src="assets/images/price-tag.png" alt="..." />
                    </div>
                    <div className=" ms-3">
                      <span className="text-18-rener">Gasoline Prices</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xxl-4">
              <Link
                onClick={(e) => {
                  state
                    ? history.push(`/weather-data/${state}`)
                    : Toasty("Error", "please fill all the req fields");
                }}
              >
                <div
                  className="custum-cards wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="flex-shrink-0">
                      <img src="assets/images/weather.jpg" alt="..." />
                    </div>
                    <div className="ms-3">
                      <span className="text-18-rener">Weather</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-xxl-4">
              <Link
                onClick={(e) => {
                  state
                    ? history.push(`/wind-speed/${state}`)
                    : Toasty("Error", "please fill all the req fields");
                }}
              >
                <div
                  className="custum-cards wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="flex-shrink-0">
                      <img src="assets/images/weather.jpg" alt="..." />
                    </div>
                    <div className="ms-3">
                      <span className="text-18-rener">Wind Speed</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xxl-4">
              <Link
                onClick={(e) => {
                  state
                    ? history.push(`/wind-speed/${state}`)
                    : Toasty("Error", "please fill all the req fields");
                }}
              >
                <div
                  className="custum-cards wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="flex-shrink-0">
                      <img src="assets/images/sun-hour.jpg" alt="..." />
                    </div>
                    <div className="ms-3">
                      <span className="text-18-rener">Sun Hours</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xxl-4">
              <Link
                onClick={(e) => {
                  state
                    ? history.push(`/solar-rates/${state}`)
                    : Toasty("Error", "please fill all the req fields");
                }}
              >
                <div className="custum-cards wow fadeInUp" data-wow-delay=".5s">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="flex-shrink-0">
                      <img src="assets/images/solar-panels.png" alt="..." />
                    </div>
                    <div className=" ms-3">
                      <span className="text-18-rener">Solar Rates</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-xxl-4">
              <Link
                onClick={(e) => {
                  state
                    ? history.push(`/electric-car-charging-station/${state}`)
                    : Toasty("Error", "please fill all the req fields");
                }}
              >
                <div
                  className="custum-cards wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="flex-shrink-0">
                      <img src="assets/images/electric-car.png" alt="..." />
                    </div>
                    <div className=" ms-3">
                      <span className="text-18-rener">Charging Stations</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xxl-4">
              <Link
                onClick={(e) => {
                  state
                    ? history.push(`/tesla-showrooms/${state}`)
                    : Toasty("Error", "please fill all the req fields");
                }}
              >
                <div
                  className="custum-cards wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="flex-shrink-0">
                      <img src="assets/images/electric-car.png" alt="..." />
                    </div>
                    <div className=" ms-3">
                      <span className="text-18-rener">Tesla Showrooms</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row my-4 text-center">
            <div className="col-xxl-12 wow flipInX" data-wow-delay=".8s">
              <a href="http://altways.com/" className="site-btn ">
                Show All
              </a>
            </div>
          </div>
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
            <div
              className="banner-box wow flipInX mx-auto"
              data-wow-delay="2.8s"
            ></div>
          </div>
          <div style={{ height: "100vh" }}>
            <VectorMapp state={setstate} />
          </div>

          {/* <div className="row my-4 text-center">
            <div className="col-xxl-12 wow flipInX" data-wow-delay=".7s">
              <a href="http://altways.com/" className="site-btn">
                Explore Your Area
              </a>
            </div>
          </div> */}
          {/* <div>
            <VectorMapp />
          </div> */}

          {/* <div className="row my-5" style={{ marginTop: "15px" }}>
            <div className="col-xxl-12">
              <img
                src="assets/images/map22.png"
                alt=""
                className="img-fluid wow fadeIn"
                data-wow-delay=".7s"
              />
            </div>
          </div> */}
        </div>
      </section>
      {/* <section className="solar-map">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <h2
                className="text-50 text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                RENEWABLE ENERGY REBATE & INSENTIVES
              </h2>
              <p
                className="text-18-rener text-center wow fadeInUp"
                data-wow-delay=".7s"
              >
                By one simple click on the map, we show you the available
                Rebates & Incentives available for renewable investments
                available in this area.
              </p>
            </div>
          </div>
          <div className="row my-4 text-center">
            <div className="col-xxl-12 wow flipInX" data-wow-delay=".7s">
              <a href="http://altways.com/" className="site-btn">
                Explore Your Area
              </a>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-xxl-12">
              <img
                src="assets/images/map.png"
                alt=""
                className="img-fluid wow fadeIn"
                data-wow-delay=".7s"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* solar-map ends here */}
      {/* Historical Weather start here */}
      {/* <section className="historical-weather">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <h2
                className="text-50 text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                Historical Weather
              </h2>
              <p
                className="text-18-rener text-center wow fadeInUp"
                data-wow-delay=".7s"
              >
                Find historical weather by searching for a city, zip code, or
                airport code. Include a date for which you would like to see
                weather history. <br /> You can select a range of dates in the
                results on the next page.
              </p>
            </div>
          </div>
          <form className="row g-3 align-items-end py-4">
            <div className="col-md-6 wow fadeInLeft" data-wow-delay=".5s">
              <label htmlFor="inputEmail4" className="form-label label-rener">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="City, State or Zip Code, or Airport Code"
              />
            </div>
            <div className="col-md-2 wow fadeInRight" data-wow-delay=".5s">
              <label
                htmlFor="inputPassword4"
                className="form-label label-rener"
              >
                Date
              </label>
              <select className="form-select" id="autoSizingSelect">
                <option selected>May</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <div className="col-md-2 wow fadeInRight" data-wow-delay=".5s">
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder={16}
              />
            </div>
            <div className="col-md-2 wow fadeInRight" data-wow-delay=".5s">
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder={2022}
              />
            </div>
          </form>
          <div className="row my-4 text-center">
            <div className="col-xxl-12 wow flipInX" data-wow-delay=".7s">
              <a href="http://altways.com/" className="site-btn">
                View
              </a>
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
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    <img
                      src="assets//images/card-1.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-24">
                        Solar Energy Industry
                      </h5>
                      <p className="card-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card text-center  wow fadeInDown"
                    data-wow-delay=".5s"
                  >
                    <img
                      src="assets//images/wind.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-24">
                        Wind Energy Industry{" "}
                      </h5>
                      <p className="card-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <img
                      src="assets//images/electric.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-24">
                        Electric Car Industry
                      </h5>
                      <p className="card-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInLeft"
                    data-wow-delay=".5s"
                  >
                    <img
                      src="assets//images/real.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-24">
                        Real Estate Industry
                      </h5>
                      <p className="card-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <img
                      src="assets//images/homeowners.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-24">
                        Home Owners interested in Solar
                      </h5>
                      <p className="card-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div
                    className="card text-center wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <img
                      src="assets//images/market.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-24">Market researchers</h5>
                      <p className="card-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-4 text-center">
                <div className="col-xxl-12 wow flipInX" data-wow-delay=".9s">
                  <a href="http://altways.com/" className="site-btn">
                    View More
                  </a>
                </div>
              </div>
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
                <h1 className="text-center" style={{ fontSize: "25px" }}>
                  Zip it solar would love to hear what you think about our
                  service. Any feedback is welcome! if you like to see
                  additional data made available here or if you are a provider
                  of a data set you think should publish, PLEASE get in touch
                  with us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
