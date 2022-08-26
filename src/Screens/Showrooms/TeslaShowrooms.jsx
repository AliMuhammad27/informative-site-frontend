import React from "react";
import { Link } from "react-router-dom";
import useWindowTitle from "../../Hooks/useWindowTitle";
import {
  teslaShowrooms,
  getKeyByValue,
  links,
  toCsv,
  download,
} from "../../Util/Helpers";
const TeslaShowrooms = ({ match }) => {
  let teslashowrooms = "";
  let showroomlinks = "";
  if (Object.values(teslaShowrooms).includes(match.params.state.trim())) {
    teslashowrooms = getKeyByValue(teslaShowrooms, match.params.state.trim());
  }
  if (Object.values(links).includes(match.params.state)) {
    showroomlinks = getKeyByValue(links, match.params.state);
  }
  const downloadToCsv = function () {
    const table = document.getElementById("exportMe");
    const csv = toCsv(table);
    download(csv, "Record.csv");
  };
  const teslashowrooms1 = teslashowrooms.split(",");
  const showroomlinks1 = showroomlinks.split("-");
  console.log("TeslaShowrooms", teslashowrooms1);
  console.log("TeslaShowroomsLinks", showroomlinks1);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useWindowTitle("showrooms");
  return (
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
        <section class="py-4"></section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h2 className="text-50 text-center">
                Area-wide Tesla Show Rooms
              </h2>
            </div>
            <div className="col-lg-10">
              <p className="p-text text-center">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum,
              </p>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-lg-12">
              <img
                src="../../assets/images/mapp.png"
                alt=""
                className="img-fluid"
              />
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
                      id="exportMe"
                      className="table table-striped table-bordered px-2"
                    >
                      <thead>
                        <tr>
                          <th>STATE</th>
                          <th>Showroom-Locations</th>
                          <th>Location Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teslashowrooms1.length > 0 ? (
                          teslashowrooms1.map((item, index) => (
                            <tr key={index}>
                              <td key={index}>{match.params.state}</td>
                              <td>
                                <div>
                                  {item
                                    ? item
                                    : "Data is not Available at the moment"}
                                </div>
                              </td>
                              {item ? (
                                <td>
                                  <a href={showroomlinks1[index]}>
                                    <div>{showroomlinks1[index]}</div>
                                  </a>
                                </td>
                              ) : (
                                <td>No Location Available</td>
                              )}
                            </tr>
                          ))
                        ) : (
                          <tr>no showrooms</tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <script src="ex.js"></script>
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

export default TeslaShowrooms;
