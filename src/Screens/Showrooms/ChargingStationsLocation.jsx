import React, { useEffect, useState } from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import Pagination from "../../Components/Pagination";
import axios from "axios";
import { CSVLink } from "react-csv";
import { baseURL } from "../../Util/api";
import {
  updatedElectricCharging,
  UsStates,
  getKeyByValue,
  toCsv,
  download,
  getSerial,
} from "../../Util/Helpers";
import { Link } from "react-router-dom";
const ChargingStationsLocation = ({ match }) => {
  const [page, setPage] = useState(1);
  const [stations, setStations] = useState();
  const downloadToCsv = function () {
    const table = document.getElementById("exportMe");
    const csv = toCsv(table);
    download(csv, "Record.csv");
  };
  useWindowTitle("Average-solar-panel");
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  let stateVal = "";
  if (Object.values(UsStates).includes(match.params.state.trim())) {
    stateVal = getKeyByValue(UsStates, match.params.state.trim());
  }
  console.log("State", stateVal);
  const filteredData = updatedElectricCharging.filter((ele) => {
    if (ele.STATE === stateVal) {
      return ele ? ele : null;
    }
  });
  console.log("filteredData", filteredData);

  const headers = [
    { label: "State", key: "State" },
    {
      label: "StationName",
      key: "StationName",
    },
    { label: "StreetAddress", key: "StreetAddress" },
    {
      label: "City",
      key: "City",
    },
  ];

  const getStationsData = async (page, state) => {
    return await axios.get(`${baseURL}/stations/allstations`, {
      params: {
        page,
        state,
      },
    });
  };

  const executionFunction = async () => {
    const response = await getStationsData(page, stateVal);
    if (response) {
      setStations(response?.data);
    }
    // console.log("Response Data", response.data);
  };

  useEffect(() => {
    console.log("Fetching records from db");
    executionFunction();
  }, [page]);

  console.log("Stations", stations?.docs);

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
                    data={stations?.docs}
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
                    EV Charging Station Locations
                  </h2>
                </div>
                <div className="col-lg-10" style={{ marginLeft: "120px" }}>
                  <p className="p-text text-center">
                    Here you find the largest and newest EV Charging Stations
                    per state. Add more locations!
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
                          <th>Serial No</th>
                          <th>State</th>
                          <th>Station Name</th>
                          <th>Street Address</th>
                          <th>City</th>
                          <th>ZIP</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stations &&
                        Object.keys(stations).length > 0 &&
                        stations.docs.length > 0
                          ? stations.docs.map((item, index) => (
                              <tr className="tableRow">
                                <td>
                                  {" "}
                                  {getSerial(
                                    stations.limit,
                                    stations.page,
                                    index
                                  )}
                                </td>
                                <td>{item?.State}</td>
                                <td>{item?.StationName}</td>
                                <td>{item?.StreetAddress}</td>
                                <td>{item?.City}</td>
                                <td>{item?.ZIP}</td>
                              </tr>
                            ))
                          : "No stations"}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div>
                {stations?.docs?.length > 0 && (
                  <Pagination
                    totalDocs={stations?.totalDocs}
                    totalPages={stations?.totalPages}
                    currentPage={stations?.page}
                    setPage={setPage}
                    hasNextPage={stations?.hasNextPage}
                    hasPrevPage={stations?.hasPrevPage}
                  />
                )}
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

export default ChargingStationsLocation;
