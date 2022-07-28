import React, { useEffect, useState } from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import { State } from "country-state-city";
import { Link } from "react-router-dom";
import Toasty from "../../Util/toast";
import Select from "react-select";
const Home = ({ history }) => {
  const states = State.getStatesOfCountry("US");
  const [state, setstate] = useState(null);
  const [zipcode, setzipcode] = useState("");

  const updatedStates = states.map((state) => ({
    label: state.name,
    value: state.id,
    ...state,
  }));
  console.log("ChangedState", state);
  return (
    <div className="wrapper">
      <section className="banner position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xxl-11 col-xl-11  mx-auto">
              <div className="row align-items-center">
                <div className="col-xxl-7 col-xl-12 col-12">
                  <h6
                    className="text-20-rener wow fadeInLeft"
                    data-wow-delay="2s"
                  >
                    <span>
                      <img src="assets/images/line.png" alt="" />
                    </span>{" "}
                    Be Eco---Friendly
                  </h6>
                  <h5 className="text-75 wow fadeInUp" data-wow-delay="2.3s">
                    Proven Renewable
                  </h5>
                  <h5 className="text-75 wow fadeInUp" data-wow-delay="2.6s">
                    Energy <span className="yellow-text">Solutions</span>
                  </h5>
                  <div className="banner-box wow flipInX" data-wow-delay="2.8s">
                    <form className="row g-3 align-items-center">
                      <div className="col-md-2">
                        {/* <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="State"
                          value={state}
                          onChange={(e) => {
                            setstate(e.target.value);
                          }}
                        /> */}
                        <Select
                          id="states"
                          name="states"
                          label="states"
                          options={updatedStates}
                          value={state}
                          // onChange={value => {
                          //   setFieldValue("country", value);
                          //   setFieldValue("state", null);
                          //   setFieldValue("city", null);
                          // }}
                          onChange={(value) => {
                            setstate(value);
                          }}
                        />
                      </div>
                      <div className="col-md-2">
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Zip Code"
                          value={zipcode}
                          onChange={(e) => {
                            setzipcode(e.target.value);
                          }}
                        />
                      </div>
                      <div className="col-md-3">
                        {/* <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Service</option>
                                        <option value="1">Gasoline Rates</option>
                                        <option value="2">Electric Rates</option>
                                        <option value="3">Solar Rates</option>
                                        <option value="3">Show Rooms</option>
                                        <option value="3">Charging Stations</option>
                                        <option value="3">Weather</option>
                                    </select> */}
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
                                  state && zipcode.length > 0
                                    ? history.push(
                                        `/gasoline-prices/${state.name}/${zipcode}`
                                      )
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
                              <a
                                className="dropdown-item"
                                onClick={(e) => {
                                  state && zipcode.length > 0
                                    ? history.push(
                                        `/electric-rates/${state.name}/${zipcode}`
                                      )
                                    : Toasty(
                                        "Error",
                                        "please fill all the req fields"
                                      );
                                }}
                              >
                                Electric Rates
                              </a>
                            </li>
                            {/* <li>
                              <a
                                className="dropdown-item"
                                nClick={(e) => {
                                  state.length > 0 && zipcode.length > 0
                                    ? history.push(
                                        `/solar-rates/${state}/${zipcode}`
                                      )
                                    : Toasty(
                                        "Error",
                                        "please fill all the req fields"
                                      );
                                }}
                              >
                                Solar Rates
                              </a>
                            </li> */}
                            <li>
                              <Link
                                className="dropdown-item"
                                onClick={(e) => {
                                  state && zipcode.length > 0
                                    ? history.push(
                                        `/tesla-showrooms/${state.name}/${zipcode}`
                                      )
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
                                  state && zipcode.length > 0
                                    ? history.push(
                                        `/electric-car-charging-station/${state.name}/${zipcode}`
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
                                  state && zipcode.length > 0
                                    ? history.push(
                                        `/weather-data/${state.name}/${zipcode}`
                                      )
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
                        <button className="btn site-btn">Get Started</button>
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
      {/* banner section ends here */}
      {/* How Much money start here */}
      <section className="much-money">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <h2
                className="text-50 text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                How Much money you save on solar
              </h2>
              <p
                className="text-18-rener text-center wow fadeInUp"
                data-wow-delay=".7s"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or <br /> randomised words which don't look
                even slightly believable. If you are going to use a passage of
                Lorem Ipsum,
              </p>
              <img
                src="assets/images/chart1.png"
                alt=""
                className="img-fluid py-4 wow fadeIn"
                data-wow-delay=".7s"
              />
            </div>
          </div>
        </div>
      </section>
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
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or <br /> randomised words which don't look
                even slightly believable. If you are going to use a passage of
                Lorem Ipsum,
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4">
              <div className="custum-cards wow fadeInLeft" data-wow-delay=".5s">
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
            </div>
            <div className="col-xxl-4">
              <div className="custum-cards wow fadeInDown" data-wow-delay=".5s">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="flex-shrink-0">
                    <img src="assets/images/fire.png" alt="..." />
                  </div>
                  <div className=" ms-3">
                    <span className="text-18-rener">Natural Gas/ LP Rates</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4">
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
            </div>
            <div className="col-xxl-4">
              <div className="custum-cards wow fadeInLeft" data-wow-delay=".5s">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="flex-shrink-0">
                    <img src="assets/images/contract.png" alt="..." />
                  </div>
                  <div className="ms-3">
                    <span className="text-18-rener">Top Solar Contractors</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4">
              <div className="custum-cards wow fadeInUp" data-wow-delay=".5s">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="flex-shrink-0">
                    <img src="assets/images/solar-panels.png" alt="..." />
                  </div>
                  <div className=" ms-3">
                    <span className="text-18-rener">
                      Installed Solar Capacity
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4">
              <div
                className="custum-cards wow fadeInRight"
                data-wow-delay=".5s"
              >
                <div className="d-flex align-items-center justify-content-center">
                  <div className="flex-shrink-0">
                    <img src="assets/images/badge.png" alt="..." />
                  </div>
                  <div className=" ms-3">
                    <span className="text-18-rener">Rebates/Incentives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4 text-center">
            <div className="col-xxl-12 wow flipInX" data-wow-delay=".8s">
              <a href="#" className="site-btn ">
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
                Area-wide solar potential
              </h2>
              <p
                className="text-18-rener text-center wow fadeInUp"
                data-wow-delay=".7s"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or <br /> randomised words which don't look
                even slightly believable. If you are going to use a passage of
                Lorem Ipsum,
              </p>
            </div>
          </div>
          <div className="row my-4 text-center">
            <div className="col-xxl-12 wow flipInX" data-wow-delay=".7s">
              <a href="#" className="site-btn">
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
      </section>
      {/* solar-map ends here */}
      {/* Historical Weather start here */}
      <section className="historical-weather">
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
              <a href="#" className="site-btn">
                View
              </a>
            </div>
          </div>
        </div>
      </section>
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
                  <a href="#" className="site-btn">
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
                <h1 className="text-50-white2 text-center">
                  Let's Find Out What Solar Panels Are
                </h1>
                <h1 className="text-50-white2 text-center">Best For You</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
