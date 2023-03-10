import React, { useState } from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
const {
  electricusagepricedata,
  toCsv,
  download,
} = require("../../Util/Helpers");

const ElectricalUsage = ({ match }) => {
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
  const filteredState = electricusagepricedata.filter((ele) => {
    if (ele.State === match.params.state.trim()) {
      console.log("aya");
      return ele ? ele : null;
    }
  });
  console.log("FilteredState", filteredState);
  useWindowTitle("electrical-usage-price");
  const headers = [
    { label: "State", key: "State" },
    { label: "ResidentialPrice", key: "ResidentialPrice" },
    { label: "ResidentialAverage", key: "ResidentialAverage" },
    { label: "CommercialPrice", key: "CommercialPrice" },
    { label: "CommercialAverage", key: "CommercialAverage" },
  ];
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
                  <CSVLink
                    data={filteredState}
                    headers={headers}
                    filename={"records.csv"}
                  >
                    <div class="text-end">
                      <button className="site-btn" id="export">
                        Download Csv
                      </button>
                    </div>
                  </CSVLink>
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
                    ELECTRICAL USAGE & PRICES
                  </h2>
                </div>
                <div className="col-lg-10" style={{ marginLeft: "120px" }}>
                  <p className="p-text text-center">
                    Here you find the most current electricity pricing for
                    residential & commercial usage in average per state
                  </p>
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
                          <th>Residential Price</th>
                          <th>U.S.Average Residential Price</th>
                          <th>Commercial Price</th>
                          <th>U.S. Average Commercial Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredState.length > 0 ? (
                          filteredState.map((item, index) => (
                            <tr>
                              <td>{match.params.state}</td>
                              <td>
                                {item?.ResidentialPrice
                                  ? item?.ResidentialPrice
                                  : "Data is not Available at the moment"}
                              </td>
                              <td>
                                {item?.ResidentialAverage
                                  ? item?.ResidentialAverage
                                  : "Data is not Available at the moment"}
                              </td>
                              <td>
                                {item?.CommercialPrice
                                  ? item?.CommercialPrice
                                  : "Data is not Available at the moment"}
                              </td>
                              <td>
                                {item?.CommercialAverage
                                  ? item?.CommercialAverage
                                  : "Data is not Available at the moment"}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td>{match.params.state}</td>
                            <td>No Data Available At the moment</td>
                            <td>No Data Available At the moment</td>
                            <td>No Data Available At the moment</td>
                            <td>No Data Available At the moment</td>
                          </tr>
                        )}
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
  );
};

export default ElectricalUsage;
