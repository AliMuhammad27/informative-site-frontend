import React, { useState, useEffect } from "react";
import axios from "axios";
import useWindowTitle from "../../Hooks/useWindowTitle";
import GasolinePrices from "../Gasoline/GasolinePrices";

const ElectricPrice = ({ match }) => {
  const [electricdata, setelecticdata] = useState("");
  const apiKey = "19xwQnDr0uwToLSTtfaE66IvalFWhTh8LnqXXcSk";
  const dummy = 1;
  let statekey = "";
  const usStates = {
    13.71: "Alabama",
    22.82: "Alaska",
    12.68: "Arizona",
    10.9: "Arkansas",
    26.71: "California",
    13.61: "Colorado",
    25.61: "Connecticut",
    13.16: "Delaware",
    14.04: "District of Columbia",
    13.5: "Florida",
    12.89: "Georgia",
    39.97: "Hawaii",
    10.07: "Idaho",
    14.73: "Illinois",
    14.29: "Indiana",
    11.73: "Iowa",
    13.32: "Kansas",
    11.98: "Kentucky",
    11.05: "Louisiana",
    23.03: "Maine",
    14.16: "Maryland",
    25.33: "Massachusetts",
    17.43: "Michigan",
    13.4: "Minnesota",
    11.04: "Missouri",
    12.66: "Mississippi",
    10.76: "Montana",
    10.36: "Nebraska",
    13.39: "Nevada",
    22.97: "New Hampshire",
    16.93: "New Jersey",
    13.44: "New Mexico",
    19.74: "New York",
    12.24: "North Carolina",
    10.03: "North Dakota",
    12.87: "Ohio",
    11.21: "Oklahoma",
    11.01: "Oregon",
    14.7: "Pennsylvania",
    23.46: "Rhode Island",
    13.91: "South Carolina",
    11.35: "South Dakota",
    11.49: "Tennessee",
    12.8: "Texas",
    10.55: "Utah",
    19.8: "Vermont",
    12.54: "Virginia",
    10.14: "Washington",
    13.34: "West Virginia",
    15.2: "Wisconsin",
    10.69: "Wyoming",
  };
  const electricData = {};
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
  if (Object.values(usStates).includes(match.params.state)) {
    statekey = getKeyByValue(usStates, match.params.state);
  }
  console.log("StateKey", statekey);
  const handleElectricData = async () => {
    try {
      const res = await axios.get(
        `https://api.eia.gov/series/?api_key=${apiKey}&series_id=ELEC.PRICE.${statekey}-ALL.A`
      );
      console.log("Resss", res);
      setelecticdata(res?.data?.series[0]?.data);
    } catch (err) {
      console.log("Error", err);
    }
  };
  useWindowTitle("electric-rates");
  useEffect(() => {
    handleElectricData();
  }, []);
  console.log("ElectricData", electricdata[0]);
  const data1 = electricdata[0];
  const data2 = electricdata[1];
  //   const changeInPercent = (data1[1] - data2[1]).toFixed(2) * 100;
  //   console.log("Change", changeInPercent);
  return (
    <div className="wrapper">
      {/*?php include('mobile-navigation-loggedin.php') ?*/}
      <section className="inner-banner"></section>
      <section className="py-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xxl-11 col-xl-11  mx-auto">
              <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                  <h2 className="text-50 text-center">Data Tables</h2>
                </div>
                <div className="col-lg-4">
                  <div className="text-end">
                    <a href="#_" className="site-btn">
                      Download CSV
                    </a>
                  </div>
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
                    <table className="table table-striped table-bordered text-center">
                      <thead>
                        <tr>
                          <th>STATE</th>
                          <th>Sep 2022</th>
                          {/* <th>Sep 2020</th>
                          <th>MOVEMENT</th>
                          <th>CHANGE (%)</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {statekey ? (
                          <tr>
                            {/* <td>{match.params.state}</td>
                            <td>{data1[1]}¢ / kWh</td>
                            <td>{data2[1]}¢ / kWh</td>
                            {data2[1] < data1[1] ? (
                              <td className="red-text">UP</td>
                            ) : (
                              <td className="green-text">DOWN</td>
                            )}
                            <td className="green-text">
                              {(data1[1] - data2[1]).toFixed(2)}
                            </td> */}

                            <td>{match.params.state}</td>
                            <td>{statekey}¢ / kWh</td>
                            {/* <td>{dummy}¢ / kWh</td> */}
                            {/* {1 < 2 ? (
                              <td className="red-text">UP</td>
                            ) : (
                              <td className="green-text">DOWN</td>
                            )}
                            <td className="green-text">{(2 - 3).toFixed(2)}</td> */}
                          </tr>
                        ) : (
                          <tr>No results</tr>
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
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*?php include('site-footer.php') ?*/}
    </div>
  );
};

export default ElectricPrice;
