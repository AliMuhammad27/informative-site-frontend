import React from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import { windData, getKeyByValue, toCsv, download } from "../../Util/Helpers";
import { Link } from "react-router-dom";
import MyNav from "../../Components/Nav";
import MyFoot from "../../Components/Footer";

const WindSpeed = ({ match }) => {
  let windValues = "";
  if (Object.values(windData).includes(match.params.state)) {
    windValues = getKeyByValue(windData, match.params.state);
  }
  const windValues1 = windValues.split("-");
  console.log("StateKey", windValues1[0]);
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
  useWindowTitle("Wind-Speed");
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
              <h2 className="text-50 text-center">Average Wind speed</h2>
            </div>
            <div className="col-lg-10">
              <p className="p-text text-center">
                Here you find thee most current average wind speeds per state
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
                          <th>Rank</th>
                          <th>Average Wind Speed </th>
                          {/* <th>State / Population</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {windValues1[0]
                              ? windValues1[0]
                              : "No Data is Available at the moment"}
                          </td>
                          <td>
                            {windValues1[1]
                              ? windValues1[1]
                              : "No Data is Available at the moment"}
                          </td>
                          {/* <td>
                            {windValues1[2]
                              ? windValues1[2]
                              : "No Data is Available at the moment"}
                          </td> */}
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

export default WindSpeed;
