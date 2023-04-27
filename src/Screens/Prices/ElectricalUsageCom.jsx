import React, { useState } from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import { Link } from "react-router-dom";
import MyNav from "../../Components/Nav";
import MyFoot from "../../Components/Footer";

const {
  averageElectricalUsage,
  toCsv,
  download,
} = require("../../Util/Helpers");

const ElectricalUsageCom = ({ match }) => {
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
  const filteredState = averageElectricalUsage.filter((ele) => {
    if (ele.State === match.params.state) {
      console.log("aya");
      return ele ? ele : null;
    }
  });
  console.log("FilteredState", filteredState);
  return (
    <>
    <MyNav/>
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
                    Electrical usage For Commercial
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
                          <th>Price</th>
                          <th>Average Commercial Hours/kWh</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{match.params.state}</td>
                          <td>
                            {filteredState[0].Price
                              ? filteredState[0].Price
                              : "No Data Available at the moment"}
                          </td>
                          <td>
                            {filteredState[0].Average
                              ? filteredState[0].Average
                              : "No Data Available at the moment"}
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
        <div className="col-lg-12 mb-5">
          <Link to="/" className="site-btn" onClick={goToTop}>
            Go Back To Home
          </Link>
        </div>
      </div>
    </div>
    <MyFoot/>

    </>
  );
};

export default ElectricalUsageCom;
