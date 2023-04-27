import React from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import { CSVLink } from "react-csv";
import MyNav from "../../Components/Nav";
import MyFoot from "../../Components/Footer";

import {
  UpdatedPvSystems,
  PvSystems,
  UsStates,
  getKeyByValue,
  UpdatedPvSystems1,
  toCsv,
  download,
  pvRates,
} from "../../Util/Helpers";
import { Link } from "react-router-dom";
const AvergaSolarPanel = ({ match }) => {
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

  // const filteredData = UpdatedPvSystems.filter((ele) => {
  //   if (ele.State === stateVal) {
  //     return ele ? ele : null;
  //   }
  // });

  const filteredData1 = UpdatedPvSystems1.filter((ele) => {
    if (ele.State === stateVal) {
      return ele ? ele : null;
    }
  });

  // let pvData = "";
  // if (Object.values(pvRates).includes(match.params.state.trim())) {
  //   pvData = getKeyByValue(pvRates, match.params.state.trim());
  // }

  //const pvData1 = pvData.split("-");
  //console.log("StateKey", pvData1[0]);
  console.log("state", match.params.state);
  //console.log("filteredData", filteredData);
  console.log("filteredData1", filteredData1);
  const headers = [
    { label: "State", key: "State" },
    { label: "system size", key: "SystemSize" },
    { label: "system cost", key: "SystemCost" },
    { label: "system cost tax", key: "SystemCostITC" },
    { label: "average cost", key: "AverageCost" },
  ];

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
                  <CSVLink
                    data={filteredData1}
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
                    Average solar panel cost by system size
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
                          <th>system size</th>
                          <th>system cost</th>
                          <th>system cost (after 30% ITC)</th>
                          <th>Average cost per watt</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData1.length > 0 ? (
                          filteredData1.map((item, index) => (
                            <tr>
                              <td>{match.params.state}</td>
                              <td>
                                {item?.SystemSize
                                  ? item?.SystemSize
                                  : "Data is not Available at the moment"}
                              </td>
                              <td>
                                {item?.SystemCost
                                  ? item?.SystemCost
                                  : "Data is not Available at the moment"}
                              </td>
                              <td>
                                {item?.SystemCostITC
                                  ? item?.SystemCostITC
                                  : "Data is not Available at the moment"}
                              </td>
                              {
                                <td>
                                  {item?.Average
                                    ? item?.Average
                                    : "Data is not Available at the moment"}
                                </td>
                              }
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td>{match.params.state}</td>
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
      {/*?php include('site-footer.php') ?*/}
    </div>
    <MyFoot/>

    </>
  );
};

export default AvergaSolarPanel;
