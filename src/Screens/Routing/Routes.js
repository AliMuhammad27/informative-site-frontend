import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../Home/Home"));
const MyNav = lazy(() => import("../../Components/Nav"));
const MyFoot = lazy(() => import("../../Components/Footer"));
const OtherRecourses = lazy(() => import("../OtherResources/OtherRecourses"));
const DataSource = lazy(() => import("../DataSource/DataSource"));
const WhyZip = lazy(() => import("../WhyZip/WhyZip"));
const ContactUs = lazy(() => import("../Contact/ContactUs"));
const AboutUs = lazy(() => import("../About/AboutUs"));
const NaturalgasRates = lazy(() => import("../Prices/NaturalgasRates"));
const WindSpeed = lazy(() => import("../Weather/WindSpeed"));
const SunHours = lazy(() => import("../Weather/SunHours"));
const ElectricalUsage = lazy(() => import("../Prices/ElectricalUsage"));
const SolarPrice = lazy(() => import("../Prices/SolarPrice"));
const EvShowrooms = lazy(() => import("../Showrooms/TeslaShowrooms"));
const ElectricPrice = lazy(() => import("../Prices/ElectricPrice"));
const EvChargingStations = lazy(() =>
  import("../EvStations/EvChargingStations")
);
const WeatherData = lazy(() => import("../Weather/WeatherData"));
const GasolinePrices = lazy(() => import("../Gasoline/GasolinePrices"));
const NotFound = lazy(() => import("../404/NotFound"));
const Routes = () => {
  return (
    <section>
      <Switch>
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
      </Switch>
    </section>
  );
};

export default Routes;
