import React, { useEffect, useState } from "react";
import { State } from "country-state-city";
import MyNav from "../../Components/Nav";
import MyFoot from "../../Components/Footer";

import Modal from "../../Components/modal/Modal";
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
import Modal1 from "../../Components/Modal";
import WOW from "wowjs";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
const { zipCodeData } = require("../../Util/Helpers");
const Home = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const AuthNotifHandler=async()=>{
    Swal.fire({
      icon: "info",
      title: "",
      text: "Please Login or Signup to proceed further",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  
const subscriptionidNotifHandler=async()=>{
  Swal.fire({
    icon: "info",
    title: "",
    text: "To avail this feature you must subscribe",
    showConfirmButton: false,
    timer: 1500,
  });
await history?.push('/SubscriptionPlan')
}
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
  const states = State.getStatesOfCountry("US");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
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
    if (state && general) return (path = `/${general}/${state}/${zipcode}`);
  };
  const res = handler();
  let sasas = "";
  console.log("Ress", res);
  console.log("ZipCodeChanges", zipcode);
  console.log("ZipCodeData", zipCodeData);

  console.log("abbbbbbbbbb");

  const filteredState = zipCodeData.filter((ele) => {
    if (zipcode >= ele.RangeFrom && zipcode <= ele.RangeTo) {
      console.log("aya");
      sasas = ele.State;
      console.log("stattttteeeee", sasas);
      return ele ? ele : null;
    }
  });
  console.log("FilteredState", filteredState[0]?.State);

  const filteredStatesssss = zipCodeData.filter((ele) => {
    if (ele.RangeFrom.length === 4 && ele.RangeTo.length === 4) {
      console.log("aya");
      console.log("stattttteeeee", sasas);
      return ele ? ele : null;
    }
  });
  console.log("WithLenght4", filteredStatesssss);

  useEffect(() => {
    if (sasas) {
      setstate(sasas);
    }
  }, [sasas]);

  const vidRef = React.useRef(null);
  const handlePlayVideo = () => {
    vidRef?.current?.pause();
  };

  setTimeout(() => {
    handlePlayVideo();
  }, 8600);
const handlerr=()=>{
  if( !userInfo){AuthNotifHandler()}
  else if(userInfo && userInfo?.subscription?.packagename){
    state && general ? history.push(handler()) : Modal1()
  }
  else if(userInfo && userInfo?.subscription == null){
    subscriptionidNotifHandler()
  }
}
  return (
    <>
    <MyNav/>
    <div className="wrapper">
      {/*?php include('mobile-navigation-loggedin.php') ?*/}
      {/* banner section starts here */}
      <section className="banner position-relative">
        <div className="overlay2"></div>
        <video autoPlay muted loop id="myVideo" ref={vidRef}>
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
                Quick & Easy Access to industry
              </h5>
              <h5
                className="text-75 wow fadeInUp text-center"
                data-wow-delay="2.6s"
              >
                specific data{" "}
                <span className="yellow-text">
                  always current and reliable.
                </span>
              </h5>
              <div
                className="banner-box wow flipInX mx-auto"
                data-wow-delay="2.8s"
              >
                {/* <h6>Search Data</h6> */}
                <form className="row g-3 align-items-center">
                  <div className="col-lg">
                    <h6 className="s-data">Search Data</h6>
                  </div>
                  <div className="col-lg col-md-6">
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
                  <div className="col-lg col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Zip Code"
                      value={zipcode}
                      onChange={(e) => setzipcode(e.target.value)}
                    />
                  </div>
                  <div className="col-lg col-md-6">
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
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("code-nec");
                            }}
                          >
                            Code NEC & ASCE version
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("code-adoption");
                            }}
                          >
                            U.S. Code Adoptions
                          </Link>
                        </li>

                        <li>
                          <Link
                            to="#"
                            className="dropdown-item"
                            onClick={(e) => {
                              setgeneral("gasoline-prices");
                            }}
                          >
                            Gasoline Prices Per Gallon
                          </Link>
                        </li>
                        {/* <Link
                          to="#"
                          className="dropdown-item"
                          onClick={(e) => {
                            setgeneral("electric-rates");
                          }}
                        >
                          Electric Rates
                        </Link> */}
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("electrical-usage");
                            }}
                          >
                            Electrical Usage & Price
                          </Link>
                        </li>
                        {/* <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("electrical-usage-commercial");
                            }}
                          >
                            Average Electrical Usage Commercial
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("solar-rates");
                            }}
                          >
                            Pv System Installation
                          </Link>
                        </li> */}

                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("average-solar-panel-cost");
                            }}
                          >
                            Average Solar Installation Cost
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
                        {/* <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("average-sunhours");
                            }}
                          >
                            Average ESH (Equal Sun Hours)
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("top-solar-contractors");
                            }}
                          >
                            Top Solar Contractors
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
                        {/* <li>
                          <Link
                            className="dropdown-item"
                            onClick={(e) => {
                              setgeneral("electric-car-charging-station");
                            }}
                          >
                            Available Electric Car Charging Stations
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            className="dropdown-item"
                            onClick={(e) => {
                              setgeneral("charging-locations");
                            }}
                          >
                            Electric Car Charging Locations
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
                  <div className="col-lg col-md-6">
                    <div className=" text-sm-center">
                      <Link 
                      onClick={handlerr}
                        // onClick={(e) => {!userInfo ? AuthNotifHandler() : userInfo && userInfo?.subscription!== null ? state && general ? history.push(handler()) : Modal1() :userInfo && userInfo?.subscription == null ? subscriptionidNotifHandler() : null}}
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
                Ultimate Photovoltaic Industry Solutions - Zip It Solar
              </h2>
              <p
                className="text-18-rener text-center wow fadeInUp"
                data-wow-delay=".7s"
              >
                It's undeniable that we're standing at the precipice of a
                sustainable energy revolution. And while the renewable industry
                is fast growing, there's still a lot of optimization to be done
                for our professionals to serve the growing demand. This is why
                we created Zipltsolar, a cloud-based database with all the
                industry specific design and research data necessary to do your
                job at your fingertips
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "65px" }}>
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
                  <div className=" ms-3">Electrical Usage & Price</div>
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
                  <div className=" ms-3">Natural Gas/Lp Rates</div>
                </div>
                <div className="blub-box d-lg-flex d-md-flex d-sm-block align-items-center  my-5">
                  <Link
                    onClick={(e) => {
                      setgeneral("top-solar-contractors");
                      goToTop();
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img src="assets/images/solar-3.png" alt="..." />
                    </div>
                  </Link>
                  <div className=" ms-3">Top Solar Contractors</div>
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
                  <div className=" ms-3">ESH (Equal Sun Hours)</div>
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
                  <div className=" ms-3">Weather Data</div>
                </div>

                <div className="blub-box d-lg-flex d-md-flex d-sm-block align-items-center  my-5">
                  <Link
                    onClick={(e) => {
                      setgeneral("code-adoption");
                      goToTop();
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img src="assets/images/solar-3.png" alt="..." />
                    </div>
                  </Link>
                  <div className=" ms-3">Us code Adoption</div>
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
                  <div className=" ms-3">Gasoline Prices Per Gallon</div>
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
                  <div className=" ms-3">Tesla Show Rooms/Garages</div>
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
                  <div className=" ms-3">Electric Car Charging locatations</div>
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
                  <div className=" ms-3">Average Wind Speed</div>
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
                  <div className=" ms-3">Average Solar Installation Cost</div>
                </div>

                <div className="blub-box d-lg-flex d-md-flex d-sm-block align-items-center  my-5">
                  <Link
                    onClick={(e) => {
                      setgeneral("code-nec");
                      goToTop();
                    }}
                  >
                    <div className="flex-shrink-0">
                      <img src="assets/images/solar-3.png" alt="..." />
                    </div>
                  </Link>
                  <div className=" ms-3">Code NEC & ASCE version</div>
                </div>
              </div>
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
          </div>
          {/* <div className="row my-4 text-center">
            <div className="col-xxl-12 wow flipInX" data-wow-delay=".7s">
              <a href="#" className="site-btn">
                Explore Your Area
              </a>
            </div>
          </div> */}
          <form className="row g-3 align-items-center">
            <div className="col-lg">
              <h6 className="s-data">Search Data</h6>
            </div>
            <div className="col-lg col-md-6">
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
            <div className="col-lg col-md-6">
              <input
                type="number"
                className="form-control"
                id="inputEmail4"
                placeholder="Zip Code"
                value={zipcode}
                onChange={(e) => setzipcode(e.target.value)}
              />
            </div>
            <div className="col-lg col-md-6">
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
                      className="dropdown-item"
                      to="#"
                      onClick={(e) => {
                        setgeneral("code-nec");
                      }}
                    >
                      Code NEC & ASCE version
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={(e) => {
                        setgeneral("code-adoption");
                      }}
                    >
                      U.S. Code Adoptions
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="dropdown-item"
                      onClick={(e) => {
                        setgeneral("gasoline-prices");
                      }}
                    >
                      Gasoline Prices Per Gallon
                    </Link>
                  </li>
                  {/* <Link
                          to="#"
                          className="dropdown-item"
                          onClick={(e) => {
                            setgeneral("electric-rates");
                          }}
                        >
                          Electric Rates
                        </Link> */}
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={(e) => {
                        setgeneral("electrical-usage");
                      }}
                    >
                      Electrical Usage & Price
                    </Link>
                  </li>
                  {/* <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("electrical-usage-commercial");
                            }}
                          >
                            Average Electrical Usage Commercial
                          </Link>
                        </li> */}
                  {/* <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("solar-rates");
                            }}
                          >
                            Pv System Installation
                          </Link>
                        </li> */}

                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={(e) => {
                        setgeneral("average-solar-panel-cost");
                      }}
                    >
                      Average Solar Installation Cost
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
                  {/* <li>
                          <Link
                            className="dropdown-item"
                            to="#"
                            onClick={(e) => {
                              setgeneral("average-sunhours");
                            }}
                          >
                            Average ESH (Equal Sun Hours)
                          </Link>
                        </li> */}
                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={(e) => {
                        setgeneral("top-solar-contractors");
                      }}
                    >
                      Top Solar Contractors
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
                  {/* <li>
                          <Link
                            className="dropdown-item"
                            onClick={(e) => {
                              setgeneral("electric-car-charging-station");
                            }}
                          >
                            Available Electric Car Charging Stations
                          </Link>
                        </li> */}
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={(e) => {
                        setgeneral("charging-locations");
                      }}
                    >
                      Electric Car Charging Locations
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
            <div className="col-lg col-md-6">
              <div className=" text-sm-center">
                <Link
                                      onClick={handlerr}

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
        </div>
      </section>
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
                    ZIP IT SOLAR is a dynamic and living platform.
                    <br /> We will add new Data Sets and update existing once on
                    a continuing basis. <br />
                    Here some of the industries and the data they might be
                    interested in.
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
                    <Link onClick={() => setShow(true)}>
                      <i className="fas fa-plus" />
                    </Link>
                    <Modal
                      title="Solar Energy Industry"
                      onClose={() => setShow(false)}
                      show={show}
                      content="Average electrical cost - Wind speed - Average Wind Energy installation cost - Available rebates - Average electrical consumption - Weather data - Building codes - etc. 
                      "
                    >
                      <Lottie
                        options={defaultOptions2}
                        height={150}
                        width={150}
                      />
                    </Modal>
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
                    <Link onClick={() => setShow1(true)}>
                      <i className="fas fa-plus" />
                    </Link>
                    <Modal
                      title="Wind Energy Industry"
                      onClose={() => setShow1(false)}
                      show={show1}
                      content="Average electrical cost - Equal Sun Hours (EHS) - Available Rebates - Average electrical consumption - Weather data - Average solar Installation cost - Building codes -etc.
                      "
                    >
                      {}
                      <Lottie
                        options={defaultOptions6}
                        height={150}
                        width={150}
                      />
                    </Modal>
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
                    <Link onClick={() => setShow2(true)}>
                      <i className="fas fa-plus" />
                    </Link>
                    <Modal
                      title=" Electric Car Industry"
                      onClose={() => setShow2(false)}
                      show={show2}
                      content="Average electrical cost - Available EV charging stations - Available TESLA show rooms -etc. "
                    >
                      {}
                      <Lottie
                        options={defaultOptions4}
                        height={150}
                        width={150}
                      />
                    </Modal>
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
                    <Link onClick={() => setShow3(true)}>
                      <i className="fas fa-plus" />
                    </Link>
                    <Modal
                      title="Real Estate Industry"
                      onClose={() => setShow3(false)}
                      show={show3}
                      content="Average electrical cost - Building codes - Average Gasoline cost - Weather data -etc. "
                    >
                      {}
                      <Lottie
                        options={defaultOptions}
                        height={150}
                        width={150}
                      />
                    </Modal>
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
                    <Link onClick={() => setShow4(true)}>
                      <i className="fas fa-plus" />
                    </Link>
                    <Modal
                      title="Home Owners interested in Solar"
                      onClose={() => setShow4(false)}
                      show={show4}
                      content="Average electrical cost - Average Solar and Wind Energy installation cost - Building codes - Available rebates & incentives - Weather data - Gasoline prices - Available EV charging stations - Available TESLA show rooms -etc. "
                    >
                      {}
                      <Lottie
                        options={defaultOptions5}
                        height={150}
                        width={150}
                      />
                    </Modal>
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
                    <Link onClick={() => setShow5(true)}>
                      <i className="fas fa-plus" />
                    </Link>
                    <Modal
                      title="Market researchers"
                      onClose={() => setShow5(false)}
                      show={show5}
                      content="Electricity rate $/kWh residential & commercial - Natural Gas/LP rates - Gasoline prices - Average electrical usage for residential and commercial - Top Solar Contractors in your area - Installed solar capacity (Ohm, Sages Solar,..) - Rebates/Incentives - PV System Installation cost (average) - Financial Offers (Special loans and credit lines for green investments) - Weather data (Record high temp, record low temp., Average temp. ,Average high temp, Rain) - ESH (Equal Sun Hours) - Average Wind speed - Wind Energy installation cost (average) - Available Electric Car Charging Stations - Tesla Show Rooms/Garages - Building Code adoptions (ICC, etc.) - Electrical code adoptions - and so much more."
                    >
                      {}
                      <Lottie
                        options={defaultOptions3}
                        height={150}
                        width={150}
                      />
                    </Modal>
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
                    <Link onClick={() => setShow6(true)}>
                      <i className="fas fa-plus" />
                    </Link>
                    <Modal
                      title="Politicians"
                      onClose={() => setShow6(false)}
                      show={show6}
                      content="Average electricity cost - Wind speed - Available rebates - Average electrical consumption - Weather data - Building codes - Top Solar Contractors, Gasoline Price, Natural Gas Rates, EV Charging Stations, etc."
                    >
                      {}
                      <Lottie
                        options={defaultOptions8}
                        height={150}
                        width={150}
                      />
                    </Modal>
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
                    <Link onClick={() => setShow7(true)}>
                      <i className="fas fa-plus" />
                    </Link>
                    <Modal
                      title="Policy Makers"
                      onClose={() => setShow7(false)}
                      show={show7}
                      content="Average electricity cost - Wind speed - Available rebates - Average electrical consumption - Weather data - Building codes - Top Solar Contractors, Gasoline Price, Natural Gas Rates, EV Charging Stations, etc."
                    >
                      {}
                      <Lottie
                        options={defaultOptions7}
                        height={150}
                        width={150}
                      />
                    </Modal>
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
                    <Link onClick={() => setShow8(true)}>
                      <i className="fas fa-plus" />
                    </Link>
                    <Modal
                      title="Tourism Industry"
                      onClose={() => setShow8(false)}
                      show={show8}
                      content="Wind speed, Weather data, Gasoline Prices, Tesla Show Rooms, etc."
                    >
                      {}
                      <Lottie
                        options={defaultOptions9}
                        height={150}
                        width={150}
                      />
                    </Modal>
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
                    <Link onClick={() => setShow9(true)}>
                      <i className="fas fa-plus" />
                    </Link>
                    <Modal
                      title="Construction"
                      onClose={() => setShow9(false)}
                      show={show9}
                      content="Average electricity cost - Wind speed - Available rebates - Average electrical consumption - Weather data - Building codes - Top Solar Contractors, Gasoline Price, etc."
                    >
                      {}
                      <Lottie
                        options={defaultOptions10}
                        height={150}
                        width={150}
                      />
                    </Modal>
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
    <MyFoot/>

    </>
  );
};
export default Home;
