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
import EvShowrooms from "./Screens/EvShowrooms/EvShowrooms";
import SolarPrice from "./Screens/Prices/SolarPrice";
function App() {
  return (
    <Router basename="/zipitsolarbackend/frontend">
      <MyNav />
      <Route path="/" component={Home} exact />
      <Route
        path="/gasoline-prices/:state/:zipcode"
        component={GasolinePrices}
        exact
      />
      <Route path="/tesla-showrooms" component={TeslaShowrooms} exact />
      <Route
        path="/weather-data/:state/:zipcode"
        component={WeatherData}
        exact
      />
      <Route
        path="/electric-car-charging-station/:state/:zipcode"
        component={EvChargingStations}
        exact
      />
      <Route
        path="/tesla-showrooms/:state/:zipcode"
        component={EvShowrooms}
        exact
      />
      <Route
        path="/electric-rates/:state/:zipcode"
        component={ElectricPrice}
        exact
      />
      <Route path="/solar-rates/:state/:zipcode" component={SolarPrice} exact />
      <MyFoot />
    </Router>
  );
}
export default App;
