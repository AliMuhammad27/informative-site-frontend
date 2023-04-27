import React from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import { CSVLink } from "react-csv";
import {
  sunData,
  getKeyByValue,
  toCsv,
  download,
  sunhoursss,
  UsStates,
} from "../../Util/Helpers";
import { Link } from "react-router-dom";
import MyNav from "../../Components/Nav";
import MyFoot from "../../Components/Footer";

const SunHours = ({ match }) => {
  let sunValues = "";
  if (Object.values(sunData).includes(match.params.state.trim())) {
    sunValues = getKeyByValue(sunData, match.params.state.trim());
  }
  const sunValues1 = sunValues.split(",");
  const downloadToCsv = function () {
    const table = document.getElementById("exportMe");
    const csv = toCsv(table);
    download(csv, "Record.csv");
  };
  console.log("StateKey", sunValues1[0]);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useWindowTitle("Sun-Hours");

  let stateVal = "";
  if (Object.values(UsStates).includes(match.params.state.trim())) {
    stateVal = getKeyByValue(UsStates, match.params.state.trim());
  }
  console.log("State", stateVal);

  const filteredData = sunhoursss.filter((ele) => {
    if (ele.HqState === stateVal) {
      return ele ? ele : null;
    }
  });
  console.log("filteredData", filteredData);
  const headers = [
    { label: "State", key: "State" },
    { label: "HqState", key: "HqState" },
    { label: "AverageESH", key: "AverageESH" },
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
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h2 className="text-50 text-center">ESH (Equal Sun Hours)</h2>
            </div>
            <div className="col-lg-10">
              <ul style={{ marginLeft: "170px" }}>
                <li>
                  <p className="">What Are Peak Sun Hours?</p>
                </li>
                <li>
                  <p className="">
                    Peak sun hours differ from hours of daylight; the peak sun
                    hour actually describes the intensity of sunlight in a
                    specific area, defined as an hour of sunlight that reaches
                    an average of 1,000 watts of power per square meter (around
                    10.5 feet). One hour in the morning that receives an average
                    of 500 W/m² of sunlight is equal to 0.5 peak sun hours or
                    ESH.
                  </p>
                </li>
                <li>
                  <p className="">
                    Although your panels may get an average of 7 hours of
                    daylight a day, the average peak sun hours are generally
                    around 4 or 5. Solar radiation peaks at solar noon, when the
                    sun reaches the highest point in the sky.
                  </p>
                </li>
                <li>
                  <p className="">
                    The number of peak sun hours you get per day increases the
                    closer you are to the equator and typically during the
                    summer months.
                  </p>
                </li>
                <li>
                  <p className="">
                    It may sound complicated, but the concept is actually
                    relatively simple to apply. For example, if a given location
                    receives a total of 6,650 Wh/m² of solar radiation over the
                    course of a day, then that location gets 6.65 peak sun
                    hours.
                  </p>
                </li>
              </ul>
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
                          <th>Total Hours Per Year</th>
                          <th>Clear Days</th>
                          {/* <th>HQ STATE</th> */}
                          <th>AVERAGE ESH</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{match.params.state}</td>
                          <td>
                            {sunValues1[2]
                              ? sunValues1[2]
                              : "Data is not Available at the moment"}
                          </td>
                          <td>
                            {sunValues1[3]
                              ? sunValues1[3]
                              : "Data is not Available at the moment"}
                          </td>
                          {/* <td>
                            {filteredData[0].HqState
                              ? filteredData[0].HqState
                              : "Data is not Available at the moment"}
                          </td> */}
                          <td>
                            {filteredData[0]?.AverageESH
                              ? filteredData[0]?.AverageESH
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

export default SunHours;
