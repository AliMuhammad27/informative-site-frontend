import React, { useEffect, useState } from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import axios from "axios";
import {
  weatherDate,
  getKeyByValue,
  toCsv,
  download,
  cToF,
} from "../../Util/Helpers";
import { Link } from "react-router-dom";
import { defaultUrl } from "../../Util/api";
const { zipCodeData } = require("../../Util/Helpers");
const WeatherData = ({ match }) => {
  console.log("ZipCodeData", zipCodeData);
  const [weatherdata, setweatherdata] = useState("");
  // const [lat, setlat] = useState("");
  // const [lon, setlon] = useState("");
  // const getGeoCode = async (state, limit, appid) => {
  //   return await axios.get("http://api.openweathermap.org/geo/1.0/direct", {
  //     params: {
  //       q: String(state),
  //       limit,
  //       appid,
  //     },
  //   });
  // };
  console.log("weatherdata", weatherdata?.forecast?.temperature);
  const getWeatherData = async (key, q,) => {
    return await axios.get("https://api.weatherapi.com/v1/forecast.json", {
      params: {
        key,
        q,
      },
    });
  };
  const executionFunction = async () => {
    const response = await getWeatherData(
      "dcb90f1ca39049feba1214220231903",
      match?.params?.zipcode.trim(),
    );
    if (response) {
      console.log('forecast23',response?.data?.forecast?.forecastday[0]?.day)
      setweatherdata(response?.data?.forecast?.forecastday[0]?.day);
    }
    // console.log("Response Data", response.data);
  };
  let weatherValues = "";
  if (Object.values(weatherDate).includes(match.params.state)) {
    weatherValues = getKeyByValue(weatherDate, match.params.state);
  }
  const weatherValues1 = weatherValues.split(",");
  console.log("StateKey", weatherValues1[0]);
  useWindowTitle("Weather-data");
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    console.log("Running the openWeather function");
    executionFunction();
  }, [match.params.state]);
  console.log("WeatherData", weatherdata);
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
                    <button className="site-btn" id="export">
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
              <h2 className="text-50 text-center">
                EXTREME HIGHEST & LOWEST AVERAGE TEMPERATURE PER STATE.
              </h2>
            </div>
            <div className="col-lg-10">
              <p className="p-text text-center">
                Here you find the specific temperature data needed for PV System
                Designs per zip code location.
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
                          <th>STATE</th>
                          <th>Extreme Lowest Temp</th>
                          <th>Highest Avg Temp</th>
                          <th>Rank</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{match.params.state}</td>
                          <td>
                            {weatherdata
                              ? weatherdata?.mintemp_f
                              : "Data is not Available at the moment"}
                            °F
                          </td>
                          <td>
                            {" "}
                            {weatherdata
                              ? weatherdata?.maxtemp_f
                              : "Data is not Available at the moment"}
                            °F
                          </td>
                          <td>
                            {weatherValues1[3]
                              ? weatherValues1[3]
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
  );
};
export default WeatherData;
