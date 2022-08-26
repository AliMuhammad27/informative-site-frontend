import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./Screens/Home/Home"));
const MyNav = lazy(() => import("./Components/Nav"));
const MyFoot = lazy(() => import("./Components/Footer"));

const OtherRecourses = lazy(() =>
  import("./Screens/OtherResources/OtherRecourses")
);
const DataSource = lazy(() => import("./Screens/DataSource/DataSource"));
const WhyZip = lazy(() => import("./Screens/WhyZip/WhyZip"));
const ContactUs = lazy(() => import("./Screens/Contact/ContactUs"));
const AboutUs = lazy(() => import("./Screens/About/AboutUs"));
const NaturalgasRates = lazy(() => import("./Screens/Prices/NaturalgasRates"));
const WindSpeed = lazy(() => import("./Screens/Weather/WindSpeed"));
const SunHours = lazy(() => import("./Screens/Weather/SunHours"));
const ElectricalUsage = lazy(() => import("./Screens/Prices/ElectricalUsage"));
const SolarPrice = lazy(() => import("./Screens/Prices/SolarPrice"));
const EvShowrooms = lazy(() => import("./Screens/Showrooms/TeslaShowrooms"));
const ElectricPrice = lazy(() => import("./Screens/Prices/ElectricPrice"));
const EvChargingStations = lazy(() =>
  import("./Screens/EvStations/EvChargingStations")
);
const WeatherData = lazy(() => import("./Screens/Weather/WeatherData"));
const GasolinePrices = lazy(() => import("./Screens/Gasoline/GasolinePrices"));
const TeslaShowrooms = lazy(() => import("./Screens/Showrooms/TeslaShowrooms"));

function App() {
  return (
    <Suspense fallback={<div className="spinner-2 "></div>}>
      <Router basename="/zipitsolarbackend/frontend">
        <MyNav />
        <Route path="/" component={Home} exact />
        <Route
          path="/gasoline-prices/:state"
          component={GasolinePrices}
          exact
        />
        <Route
          path="/naturalgas-prices/:state"
          component={NaturalgasRates}
          exact
        />
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
    </Suspense>
  );
}
export default App;
