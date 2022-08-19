import React, { useState, useEffect } from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import { Link } from "react-router-dom";
import axios from "axios";
import VecttorMap from "../../Components/VectorMax";
const {
  getKeyByValue,
  gasolineRates,
  toCsv,
  download,
} = require("../../Util/Helpers");

const GasolinePrices = ({ match }) => {
  console.log("state", match.params.state);
  const state = match.params.state;
  let gasolinePrice = "";
  //const flag = !Object.values(gasolineRates).includes("Florida");

  // if (Object.values(gasolineRates).includes(match.params.state)) {
  if (gasolineRates && match.params.state) {
    const abcccccc = Object.keys(gasolineRates).find(
      (key) => gasolineRates[key] === match.params.state
      // console.log(
      //   "gasolineRates[key] === match.params.state",
      //   gasolineRates,
      //   key,
      //   match.params.state
      // )
    );
    console.log("abcccccccccccc", abcccccc);

    // gasolineRates[key] === match.params.state);
    gasolinePrice = getKeyByValue(gasolineRates, match.params.state);
  }
  // }
  const downloadToCsv = function () {
    const table = document.getElementById("exportMe");
    const csv = toCsv(table);
    download(csv, "Record.csv");
  };
  const gasolinePrice1 = gasolinePrice?.split(",");
  // console.log("StateKey", gasolinePrice1[0]);
  useWindowTitle("gasoline-prices");
  console.log("match", match.params.state);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log("gasolinePrice1", gasolinePrice1);
  }, [gasolinePrice1]);
  return (
    <div className="wrapper">
      <section className="inner-banner"></section>
      <section className="py-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-xxl-11 col-xl-11  mx-auto">
              <div class="row">
                <div class="col-lg-4"></div>
                <div class="col-lg-4"></div>
                <div class="col-lg-4">
                  <div class="text-end">
                    {/* <a href="#_" class="site-btn" onClick={downloadToCsv}>
                        Download CSV
                      </a> */}
                    <button
                      className="site-btn"
                      id="export"
                      onClick={downloadToCsv}
                    >
                      Download Csv
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h2 className="text-50 text-center">Area-wide gasoline PRICES</h2>
            </div>
            <div className="col-lg-10">
              <p className="p-text text-center">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum,
              </p>
            </div>
          </div>
          {/* <div className="col-lg-12">
            <img src="../../assets/images/map2.png" alt="" className="img-fluid" />
          </div> */}
          <div
          // className="row text-center"

          // style={{ width: "100%", height: "100vh" }}
          >
            {/* <VecttorMap/> */}
          </div>
        </div>
      </section>
      <section className="tables-box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xxl-11 col-xl-11  mx-auto">
              <div className="row">
                <div className="col-lg-12">
                  <div className="table-responsive">
                    <table
                      className="table table-striped table-bordered px-2"
                      id="exportMe"
                    >
                      <thead>
                        <tr>
                          <th>STATE</th>
                          {/* <th>DATE</th> */}
                          <th>Regular</th>
                          <th>Mid-Grade</th>
                          <th>Premium</th>
                          <th>Diesel</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{match?.params?.state}</td>
                          {gasolinePrice1?.length > 0 &&
                            gasolinePrice1?.map((gas) => (
                              <td>
                                {gas
                                  ? gas
                                  : "Data is not available at the moment"}
                              </td>
                            ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-lg-12 my-5">
                  <a href="http://altways.com/" className="site-btn">
                    Get a Qoute
                  </a>
                </div>
              </div>
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
    </div>
  );
};

export default GasolinePrices;
