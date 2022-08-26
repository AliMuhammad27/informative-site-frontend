import React, { useState } from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import { Link } from "react-router-dom";
const {
  getKeyByValue,
  electricUsage,
  toCsv,
  download,
} = require("../../Util/Helpers");

const ElectricalUsage = ({ match }) => {
  let electricalData = "";
  if (Object.values(electricUsage).includes(match.params.state.trim())) {
    electricalData = getKeyByValue(electricUsage, match.params.state.trim());
  }
  const electricalData1 = electricalData.split("-");
  console.log("StateKey", electricalData1[0]);
  //console.log("StateKey", match.params.state);
  const downloadToCsv = function () {
    const table = document.getElementById("exportMe");
    const csv = toCsv(table);
    download(csv, "Record.csv");
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useWindowTitle("electrical-usage");
  return (
    <div className="wrapper">
      {/*?php include('mobile-navigation-loggedin.php') ?*/}
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xxl-11 col-xl-11  mx-auto">
              <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                  <h2 className="text-50 text-center">
                    Electrical usage for residential and commercial
                  </h2>
                </div>
              </div>
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
                      className="table table-striped table-bordered text-center"
                      id="exportMe"
                    >
                      <thead>
                        <tr>
                          <th>STATE</th>
                          <th>Average retail price (cents/kWh)</th>
                          <th>Net summer capacity (MW)</th>
                          <th>Net generation (MWh)</th>
                          <th>Total retail sales (MWh)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          {/* <td>{match.params.state}</td>
                          <td>{data1[1]}¢ / kWh</td>
                          <td>{data2[1]}¢ / kWh</td>
                          {data2[1] < data1[1] ? (
                            <td className="red-text">UP</td>
                          ) : (
                            <td className="green-text">DOWN</td>
                          )}
                          <td className="green-text">
                            {(data1[1] - data2[1]).toFixed(2)}
                          </td> */}

                          <td>{match.params.state}</td>
                          <td>
                            {electricalData1[0]
                              ? electricalData1[0]
                              : "No Data Available at the moment"}
                          </td>
                          <td>
                            {electricalData1[1]
                              ? electricalData1[1]
                              : "No Data Available at the moment"}
                          </td>
                          <td>
                            {electricalData1[2]
                              ? electricalData1[2]
                              : "No Data Available at the moment"}
                          </td>
                          <td>
                            {electricalData1[3]
                              ? electricalData1[3]
                              : "No Data Available at the moment"}
                          </td>
                          {/* <td>{dummy}¢ / kWh</td> */}
                          {/* {1 < 2 ? (
                            <td className="red-text">UP</td>
                          ) : (
                            <td className="green-text">DOWN</td>
                          )}
                          <td className="green-text">{(2 - 3).toFixed(2)}</td> */}
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

export default ElectricalUsage;
