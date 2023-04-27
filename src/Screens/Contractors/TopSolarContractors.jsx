import React, { useState } from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import { Link } from "react-router-dom";
import MyNav from "../../Components/Nav";
import MyFoot from "../../Components/Footer";

import { CSVLink } from "react-csv";
const {
  topsolardata,
  UsStates,
  getKeyByValue,
  toCsv,
  download,
} = require("../../Util/Helpers");
const TopSolarContractors = ({ match }) => {
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
  useWindowTitle("Top-Solar-Contractor");
  let stateVal = "";
  if (Object.values(UsStates).includes(match.params.state.trim())) {
    stateVal = getKeyByValue(UsStates, match.params.state.trim());
  }
  console.log("State", stateVal);

  const filteredData = topsolardata.filter((ele) => {
    if (ele.HQSTATE === stateVal) {
      return ele ? ele : null;
    }
  });
  console.log("filteredData", filteredData);

  const headers = [
    { label: "NATIONA LRANK", key: "NATIONALRANK" },
    { label: "COMPANY", key: "COMPANY" },
    { label: "PRIMARY MARKET", key: "PRIMARYMARKET" },
    {
      label: "TOTAL KW INSTALLED SINCE FOUNDING",
      key: "TOTALKWINSTALLEDSINCEFOUNDING",
    },
    { label: "KW INSTALLED IN 2021", key: "KWINSTALLEDIN2021" },
  ];
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
                  <CSVLink
                    data={filteredData}
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
                  <h2 className="text-50 text-center">Top Solar Contractors</h2>
                </div>
                <div className="col-lg-10" style={{ marginLeft: "120px" }}>
                  <p className="p-text text-center">
                    The list details the headquarters location of a company,
                    number of employees, its primary market (utility,
                    commercial/C&I, residential, or residential/commercial
                    split) and its primary service (EPC, developer, solar
                    installer, installation subcontractor, electrical
                    subcontractor, sales partner). Companies choose their
                    primary market and primary service. That does not mean they
                    only work in these areas. They could work across all markets
                    and all services, and their listed kilowatts reflect their
                    cumulative installation numbers from the last year in all
                    markets, services and states. Ranks are determined by the
                    number of kilowatts (DC) a company was involved with
                    installing in 2021 in the United States only. If two
                    companies reported the same 2021 numbers, they were sorted
                    by total kilowatts installed. (Source: SolarPowerWorld)
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
                          <th>NATIONAL RANK</th>
                          <th>Company Name </th>
                          <th>Primary Market</th>
                          <th>TOTAL KW INSTALLED SINCE FOUNDING</th>
                          <th>KW INSTALLED IN 2021</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.length > 0 ? (
                          filteredData.map((item, index) => (
                            <tr>
                              <td>
                                {item?.NATIONALRANK
                                  ? item?.NATIONALRANK
                                  : "Data is not Available at the moment"}
                              </td>
                              <td>
                                {item?.COMPANY
                                  ? item?.COMPANY
                                  : "Data is not Available at the moment"}
                              </td>
                              <td>
                                {item?.PRIMARYMARKET
                                  ? item?.PRIMARYMARKET
                                  : "Data is not Available at the moment"}
                              </td>
                              <td>
                                {item?.TOTALKWINSTALLEDSINCEFOUNDING
                                  ? item?.TOTALKWINSTALLEDSINCEFOUNDING
                                  : "Data is not Available at the moment"}
                              </td>
                              <td>
                                {item?.KWINSTALLEDIN2021
                                  ? item?.KWINSTALLEDIN2021
                                  : "Data is not Available at the moment"}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td>No Data Available At the moment</td>
                            <td>No Data Available At the moment</td>
                            <td>{match.params.state}</td>
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
    <MyFoot/>

    </>
  );
};

export default TopSolarContractors;
