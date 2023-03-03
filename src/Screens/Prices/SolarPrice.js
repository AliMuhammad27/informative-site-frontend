import React from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import { pvRates, getKeyByValue, toCsv, download } from "../../Util/Helpers";
import { Link } from "react-router-dom";
const SolarPrice = ({ match }) => {
  let pvData = "";
  if (Object.values(pvRates).includes(match.params.state.trim())) {
    pvData = getKeyByValue(pvRates, match.params.state.trim());
  }
  const downloadToCsv = function () {
    const table = document.getElementById("exportMe");
    const csv = toCsv(table);
    download(csv, "Record.csv");
  };
  const pvData1 = pvData.split("-");
  console.log("StateKey", pvData1[0]);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useWindowTitle("pv-installation");

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
                  <div class="text-center">
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
                    PV System Installation cost
                  </h2>
                </div>
                <div className="col-lg-10" style={{ marginLeft: "170px" }}>
                  {/* <ul style={{ marginLeft: "170px" }}>
                    <li>
                      <p className="">
                        An hour in the morning that receives an average of 500
                        W/m² of sunlight is equal to 0.5 peak sun hours.
                      </p>
                    </li>
                    <li>
                      <p className="">
                        An hour in the morning that receives an average of 500
                        W/m² of sunlight is equal to 0.5 peak sun hours.
                      </p>
                    </li>
                  </ul> */}
                  <p className="p-text text-center">
                    Federal solar investment tax credit The federal solar
                    investment tax credit will have the biggest impact on the
                    cost you will face to go solar in Nebraska If you install
                    your photovoltaic system before 2032, the federal tax credit
                    is 30% of the cost of your solar panel system. This is 30%
                    off the entire cost of the system including equipment, labor
                    and permitting. Example: If your solar energy system costs
                    $20,000, your federal solar tax credit would be $20,000 x
                    30% = $6,000.
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
                          <th>Starting cost for 6-kW system</th>
                          <th>Average cost per watt</th>
                          <th>2020 federal tax credit value (26%)</th>
                          <th>2021 federal tax credit value (22%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{match.params.state}</td>
                          <td>
                            {pvData1[0]
                              ? pvData1[0]
                              : "Data is not Available at the moment"}
                          </td>
                          <td>
                            {pvData1[1]
                              ? pvData1[1]
                              : "Data is not Available at the moment"}
                          </td>
                          <td>
                            {pvData1[2]
                              ? pvData1[2]
                              : "Data is not Available at the moment"}
                          </td>
                          <td>
                            {pvData1[3]
                              ? pvData1[3]
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
      {/*?php include('site-footer.php') ?*/}
    </div>
  );
};

export default SolarPrice;
