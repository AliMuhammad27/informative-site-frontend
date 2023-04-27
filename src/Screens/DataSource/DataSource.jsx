import React from "react";
import { Link } from "react-router-dom";
import MyNav from "../../Components/Nav";
import MyFoot from "../../Components/Footer";

const DataSource = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    <MyNav/>
    <div className="wrapper">
      {/*?php include('mobile-navigation-loggedin.php') ?*/}
      <section className="inner-banner"></section>
      <section className="providing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h4 className="text-45">Data Source</h4>
              <p className="p-text py-4">
                We evaluate our data very careful and maintain and review our
                databases frequently. Per request, we can provide you with the
                source reference. Please contact us here{" "}
                <Link to="/contact-us">Click Here to Contact Us</Link>
              </p>
              <div className>
                <Link to="/contact-us" className="site-btn my-4">
                  Contact Us
                </Link>
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
      {/*?php include('site-footer.php') ?*/}
    </div>
    <MyFoot/>

    </>
  );
};

export default DataSource;
