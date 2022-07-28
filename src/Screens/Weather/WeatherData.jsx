import React, { useEffect, useState } from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
import moment from "moment";
import axios from "axios";
const day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const WeatherData = ({ match }) => {
  const [weatherdata, setweatherdata] = useState("");
  const [lat, setlat] = useState("");
  const [long, setlong] = useState("");
  const apiKey = "4e28b47273e7002079347d838122fb6c";
  const state = match.params.state;
  const zipcode = match.params.zipcode;
  console.log("State", match.params.state);
  console.log("ZipCode", zipcode);

  useWindowTitle("Weather-data");
  const handlelatAndlong = async () => {
    try {
      const res = await axios({
        url: `https://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${apiKey}`,
        method: "GET",
      });
      console.log("handlelatAndlong", res);
      // setlat(res?.data?.lat)
      // setlong(res?.data?.lon)
      handleSevenDaysData(res?.data?.lat, res?.data?.lon);
    } catch (err) {
      console.log("Error", err);
    }
  };
  console.log("Lat", lat);
  console.log("long", long);
  const handleSevenDaysData = async (lat, long) => {
    console.log("lat&long", lat, long);
    try {
      const res = await axios({
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=currently,minutely,hourly,alerts&appid=4e28b47273e7002079347d838122fb6c`,
        method: "GET",
      });
      console.log("handleSevenDaysData", res);
      setweatherdata(res?.data?.daily);
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    handlelatAndlong();
  }, []);
  console.log("WeatherData", weatherdata);

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursdsay",
    "Friday",
    "Saturday",
  ];

  var date = new Date();
  const returnDate = () => {
    date.setDate(date.getDate() + 1);
    return String(date).split(" ")[0];
  };
  var date2 = new Date();
  const returnDate2 = () => {
    date2.setDate(date2.getDate() + 1);
    return moment(date2).format("LL");
  };

  return (
    <div className="wrapper">
      <section className="inner-banner"></section>
      <section className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h2 className="text-50 text-center">USA WEATHER EXTREMES</h2>
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
        </div>
      </section>
      <section className="tables-box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xxl-11 col-xl-11  mx-auto">
              <div className="row">
                <div className="col-lg-12">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered px-2">
                      <thead>
                        <tr>
                          <th>STATE</th>
                          <th>DATE</th>
                          <th>dAY</th>
                          <th>Temperature</th>
                          <th>Wind Speed</th>
                          <th>Humidity</th>
                        </tr>
                      </thead>
                      {weatherdata && weatherdata?.length > 0 ? (
                        weatherdata.map((item, index) => (
                          <tbody>
                            <tr>
                              <td>{match.params.state}</td>
                              <td>{returnDate2()}</td>
                              <td>{returnDate()}</td>
                              <td>{item?.temp?.day}c</td>
                              <td>{item?.wind_speed} km/h</td>
                              <td>{item?.humidity}%</td>
                            </tr>
                          </tbody>
                        ))
                      ) : (
                        <tr>No results</tr>
                      )}
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
    </div>
  );
};
export default WeatherData;
