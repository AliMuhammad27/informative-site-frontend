import React, { useEffect, useState } from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import {
  weatherDate,
  getKeyByValue,
  toCsv,
  download,
} from "../../Util/Helpers";
import { Link } from "react-router-dom";

const WeatherData = ({ match }) => {
  let weatherValues = "";
  if (Object.values(weatherDate).includes(match.params.state)) {
    weatherValues = getKeyByValue(weatherDate, match.params.state);
  }
  const weatherValues1 = weatherValues.split(",");
  console.log("StateKey", weatherValues1[0]);
  const downloadToCsv = function () {
    const table = document.getElementById("exportMe");
    const csv = toCsv(table);
    download(csv, "Record.csv");
  };
  useWindowTitle("Weather-data");
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
              <h2 className="text-50 text-center">USA WEATHER EXTREMES</h2>
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
                          <th>Avg °F</th>
                          <th>Avg °C</th>
                          <th>Rank</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{match.params.state}</td>
                          <td>
                            {weatherValues1[0]
                              ? weatherValues1[0]
                              : "Data is not Available at the moment"}
                          </td>
                          <td>
                            {weatherValues1[1]
                              ? weatherValues1[1]
                              : "Data is not Available at the moment"}
                          </td>
                          <td>
                            {weatherValues1[2]
                              ? weatherValues1[2]
                              : "Data is not Available at the moment"}
                          </td>
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
export default WeatherData;
