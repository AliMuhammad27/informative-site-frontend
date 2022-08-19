import React from "react";
import Home from "./Screens/Home/Home";
import MyNav from "./Components/Nav";
import MyFoot from "./Components/Footer";
import GasolinePrices from "./Screens/Gasoline/GasolinePrices";
import TeslaShowrooms from "./Screens/Showrooms/TeslaShowrooms";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WeatherData from "./Screens/Weather/WeatherData";
import EvChargingStations from "./Screens/EvStations/EvChargingStations";
import ElectricPrice from "./Screens/Prices/ElectricPrice";
import EvShowrooms from "./Screens/Showrooms/TeslaShowrooms";
import SolarPrice from "./Screens/Prices/SolarPrice";
import ElectricalUsage from "./Screens/Prices/ElectricalUsage";
import SunHours from "./Screens/Weather/SunHours";
import WindSpeed from "./Screens/Weather/WindSpeed";
import NaturalgasRates from "./Screens/Prices/NaturalgasRates";
import AboutUs from "./Screens/About/AboutUs";
import ContactUs from "./Screens/Contact/ContactUs";
import WhyZip from "./Screens/WhyZip/WhyZip";
import DataSource from "./Screens/DataSource/DataSource";
import OtherRecourses from "./Screens/OtherResources/OtherRecourses";
function App() {
  return (
    <Router basename="/zipitsolarbackend/frontend">
      <MyNav />
      <Route path="/" component={Home} exact />
      <Route path="/gasoline-prices/:state" component={GasolinePrices} exact />
      <Route
        path="/naturalgas-prices/:state"
        component={NaturalgasRates}
        exact
      />
      <Route path="/tesla-showrooms" component={TeslaShowrooms} exact />
      <Route path="/weather-data/:state" component={WeatherData} exact />
      <Route path="/sun-hours/:state" component={SunHours} exact />
      <Route path="/wind-speed/:state" component={WindSpeed} exact />
      <Route
        path="/electric-car-charging-station/:state"
        component={EvChargingStations}
        exact
      />
      <Route path="/tesla-showrooms/:state/" component={EvShowrooms} exact />
      <Route path="/electric-rates/:state" component={ElectricPrice} exact />
      <Route path="/solar-rates/:state" component={SolarPrice} exact />
      <Route
        path="/electrical-usage/:state"
        component={ElectricalUsage}
        exact
      />
      <Route path="/about-us" component={AboutUs} exact />
      <Route path="/contact-us" component={ContactUs} exact />
      <Route path="/why-zip-it-solar" component={WhyZip} exact />
      <Route path="/data-source" component={DataSource} exact />
      <Route path="/other-good-resources" component={OtherRecourses} exact />
      <MyFoot />
    </Router>
  );
}
export default App;
