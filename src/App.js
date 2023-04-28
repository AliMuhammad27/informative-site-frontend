import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import PrivateRoute from "./Components/PrivateRoute";

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
const ElectricalUsageCom = lazy(() =>
  import("./Screens/Prices/ElectricalUsageCom")
);
const SolarPrice = lazy(() => import("./Screens/Prices/SolarPrice"));
const EvShowrooms = lazy(() => import("./Screens/Showrooms/TeslaShowrooms"));
const ElectricPrice = lazy(() => import("./Screens/Prices/ElectricPrice"));
const EvChargingStations = lazy(() =>
  import("./Screens/EvStations/EvChargingStations")
);
const WeatherData = lazy(() => import("./Screens/Weather/WeatherData"));
const GasolinePrices = lazy(() => import("./Screens/Gasoline/GasolinePrices"));
const TeslaShowrooms = lazy(() => import("./Screens/Showrooms/TeslaShowrooms"));
const SubscriptionPlanDetails = lazy(() => import("./Screens/SubscriptionPlanDetails/SubscriptionPlanDetails"));
const NotFound = lazy(() => import("./Screens/404/NotFound"));
const AvergaSolarPanel = lazy(() =>
  import("./Screens/Prices/AveraeSolarPanel")
);
const TopSolarContractors = lazy(() =>
  import("./Screens/Contractors/TopSolarContractors")
);
const ChargingStationsLocation = lazy(() =>
  import("./Screens/Showrooms/ChargingStationsLocation")
);
const sunhoursss = lazy(() => import("./Screens/Weather/SunHourss"));
const TermsAndServices = lazy(() => import("./Screens/Tos/TermsAndServices"));
const CodeAdoption = lazy(() => import("./Screens/NewServices/CodeAdoption"));
const CodeNec = lazy(() => import("./Screens/NewServices/CodeNec"));
const Login = lazy(() => import("./Screens/Login/Login"));
const ForgotPassword1 = lazy(() => import("./Screens/ForgotPassword1/ForgotPassword1"));
const ForgotPassword2 = lazy(() => import("./Screens/ForgotPassword2/ForgotPassword2"));
const ForgotPassword3 = lazy(() => import("./Screens/ForgotPassword3/ForgotPassword3"));
const Signup = lazy(() => import("./Screens/Signup/Signup"));
const SubscriptionLogs = lazy(() => import("./Screens/SubscriptionLogs/SubscriptionLogs"));
const SubscriptionPlan = lazy(() => import("./Screens/SubscriptionPlan/SubscriptionPlan"));
const PaymentMethod = lazy(() => import("./Screens/PaymentMethod/PaymentMethod"));


function App() {
  return (
    <Suspense fallback={<div className="spinner-2 "></div>}>
      <Router basename="/">
        <Route path="/Login" component={Login} exact />

        <Route path="/ForgotPassword1" component={ForgotPassword1} exact />
        <Route path="/ForgotPassword2/:email" component={ForgotPassword2} exact />
        <Route path="/ForgotPassword3" component={ForgotPassword3} exact />
        <Route path="/Signup" component={Signup} exact />
        <Route path="/SubscriptionLogs" component={SubscriptionLogs} exact />
        <PrivateRoute path="/SubscriptionPlan" component={SubscriptionPlan} exact />
        
        <PrivateRoute path="/PaymentMethod" component={PaymentMethod} exact />
        <PrivateRoute path="/SubscriptionPlanDetails/:id" component={SubscriptionPlanDetails} exact />

        
        <Route path="/" component={Home} exact />
        <Route path="/terms-and-services" component={TermsAndServices} exact />
        <PrivateRoute
          path="/gasoline-prices/:state/:zipcode"
          component={GasolinePrices}
          exact
        />
        <PrivateRoute
          path="/naturalgas-prices/:state/:zipcode"
          component={NaturalgasRates}
          exact
        />
        <PrivateRoute path="/weather-data/:state/:zipcode" component={WeatherData} exact />
        <PrivateRoute path="/sun-hours/:state/:zipcode" component={SunHours} exact />
        <PrivateRoute path="/wind-speed/:state/:zipcode" component={WindSpeed} exact />
        <PrivateRoute
          path="/electric-car-charging-station/:state/:zipcode"
          component={EvChargingStations}
          exact
        />
        <PrivateRoute path="/tesla-showrooms/:state/:zipcode" component={EvShowrooms} exact />
        <PrivateRoute path="/electric-rates/:state/:zipcode" component={ElectricPrice} exact />
        <PrivateRoute path="/solar-rates/:state/:zipcode" component={SolarPrice} exact />
        <PrivateRoute
          path="/electrical-usage/:state/:zipcode"
          component={ElectricalUsage}
          exact
        />
        <PrivateRoute
          path="/electrical-usage-commercial/:state/:zipcode"
          component={ElectricalUsageCom}
          exact
        />
        <Route path="/about-us" component={AboutUs} exact />
        <Route path="/contact-us" component={ContactUs} exact />
        <Route path="/why-zip-it-solar" component={WhyZip} exact />
        <Route path="/data-source" component={DataSource} exact />
        <Route path="/other-good-resources" component={OtherRecourses} exact />
        <PrivateRoute
          path="/average-solar-panel-cost/:state/:zipcode"
          component={AvergaSolarPanel}
          exact
        />
        <PrivateRoute
          path="/top-solar-contractors/:state/:zipcode"
          component={TopSolarContractors}
          exact
        />
        <PrivateRoute
          path="/charging-locations/:state/:zipcode"
          component={ChargingStationsLocation}
          exact
        />
        <PrivateRoute path="/average-sunhours/:state/:zipcode" component={sunhoursss} exact />
        <PrivateRoute path="/code-adoption/:state/:zipcode" component={CodeAdoption} exact />
        <PrivateRoute path="/code-nec/:state/:zipcode" component={CodeNec} exact />
      </Router>
    </Suspense>
  );
}
export default App;
