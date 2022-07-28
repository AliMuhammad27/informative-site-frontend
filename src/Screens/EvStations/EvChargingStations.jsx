import React, { useState, useEffect } from "react";
import axios from "axios";
import useWindowTitle from "../../Hooks/useWindowTitle";
import Map from "../../Components/map";
import api from "../../Util/api";
const EvChargingStations = ({ match }) => {
  const [superchargers, setsuperchargers] = useState("");
  const [lat, setlat] = useState([]);
  const [address, setaddress] = useState([]);
  const [lng, setlng] = useState("");
  const apiKey = "4e28b47273e7002079347d838122fb6c";
  useWindowTitle("Tesla Charging");
  const handlelatAndlong = async () => {
    try {
      const res = await axios({
        url: `https://api.openweathermap.org/geo/1.0/zip?zip=${match.params.zipcode}&appid=${apiKey}`,
        method: "GET",
      });
      console.log("handlelatAndlong", res);
      console.log("lat&long", res?.data?.lat, res?.data?.lon);
      getSuperChargers(res?.data?.lat, res?.data?.lon, match?.params?.state);
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    handlelatAndlong();
  }, []);
  const getSuperChargers = async (lat, long, state) => {
    try {
      const res = await api.get(`test?lat=${lat}&long=${long}&state=${state}`);
      console.log("Ress", res.data);
      setsuperchargers(res?.data?.data);
      setlat(res?.data?.data[0]?.location?.lat);
      setlng(res?.data?.data[0]?.location?.lng);
    } catch (err) {
      console.log("Error", err);
    }
  };
  console.log("lat&lng", lat, lng);
  const getAddress = (lat, lng) => {
    console.log("lat, lng", lat, lng);
    const apikey = "AIzaSyAHPUufTlBkF5NfBT3uhS9K4BbW2N-mkb4";
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=false&key=${apikey}`
    )
      .then((response) => response.json())
      .then((data) => setaddress(data?.results[0]?.formatted_address));
    console.log("data", address);
    return address;
    //  try {
    //   const res= await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=false&key=${apikey}`);
    //   console.log('res',res?.data?.results[0]?.formatted_address)
    //   return apikey
    //  } catch (error) {
    //    console.log('error',error)
    //  }
  };
  return (
    <div className="wrapper">
      {/*?php include('mobile-navigation-loggedin.php') ?*/}
      <section className="inner-banner"></section>
      <section className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h2 className="text-50 text-center">
                Area-wide Electric Car charging stations
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
          {/* <div className="col-lg-12">
          <img src="../../assets/images/mapp.png" alt="" className="img-fluid" />
        </div> */}
          <Map lat={lat} lng={lng} />
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
                          <th>NAME</th>
                          <th>Charging stations - Location</th>
                        </tr>
                      </thead>
                      {superchargers && superchargers.length > 0 ? (
                        superchargers.map((item, index) => (
                          <tbody key={index}>
                            <tr>
                              <td>{item?.title}</td>
                              <td>
                                {getAddress(
                                  item?.location?.lat,
                                  item?.location?.lng
                                )}
                              </td>
                            </tr>
                          </tbody>
                        ))
                      ) : (
                        <tr>No Results Found</tr>
                      )}
                    </table>
                  </div>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-lg-12 my-5">
                  <a href="#_" className="site-btn">
                    Get a Qoute
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*?php include('site-footer.php') ?*/}
    </div>
  );
};

export default EvChargingStations;
