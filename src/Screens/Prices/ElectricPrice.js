import React, { useState, useEffect } from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import { Link } from "react-router-dom";
import MyNav from "../../Components/Nav";
import MyFoot from "../../Components/Footer";

const {
  getKeyByValue,
  electricRates,
  toCsv,
  download,
} = require("../../Util/Helpers");

const ElectricPrice = ({ match }) => {
  const [electricdata, setelecticdata] = useState("");
  const apiKey = "19xwQnDr0uwToLSTtfaE66IvalFWhTh8LnqXXcSk";
  const dummy = 1;
  let electricPrice = "";
  // if (Object.values(electricRates).includes(match.params.state)) {
  //   electricPrice = getKeyByValue(electricRates, match.params.state);
  // }
  // console.log("StateKey", electricPrice);
  if (electricRates && match.params.state) {
    console.log("state", match.params.state);

    const abc = Object.values(electricRates).findIndex((ele) => {
      const trimmed = match.params.state.trim();
      console.log("matching", match.params.state === trimmed);
      return ele === trimmed;
    });

    console.log(abc);

    const abcccccc = Object.keys(electricRates).find((key) => {
      return electricRates[key] === match.params.state;
    });
    console.log("abcccccccccccc", abcccccc);

    // gasolineRates[key] === match.params.state);
    electricPrice = getKeyByValue(electricRates, match.params.state.trim());
  }

  const downloadToCsv = function () {
    const table = document.getElementById("exportMe");
    const csv = toCsv(table);
    download(csv, "Record.csv");
  };

  console.log("ElectricData", electricdata[0]);
  // const data1 = electricdata[0];
  // const data2 = electricdata[1];

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    <MyNav/>
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
                  <div class="text-center">
                    {/* <a href="#_" class="site-btn" onClick={downloadToCsv}>
                        Download CSV
                      </a> */}
                    <button
                      className="site-btn"
                      style={{ left: "500px" }}
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
                  <h2 className="text-50 text-center">Electric Rates</h2>
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
                          <th>Sep 2022</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{match.params.state}</td>
                          {electricPrice ? (
                            <td>{electricPrice}¢ / kWh</td>
                          ) : (
                            <td>Data is not Available at the moment</td>
                          )}
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

export default ElectricPrice;
