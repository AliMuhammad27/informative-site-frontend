import React from "react";
import { Link } from "react-router-dom";

const DataSource = () => {
  return (
    <div className="wrapper">
      {/*?php include('mobile-navigation-loggedin.php') ?*/}
      <section className="inner-banner"></section>
      <section className="providing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h4 className="text-45">Data Source</h4>
              <p className="p-text py-4">
                All data on Zip It Solar are public. Some easy to find and some
                very hidden. At Zip It Solar, all data are updated and accurate.
                We evaluate our sourced very careful and maintain and review our
                databases frequently. Per request, we can provide you with the
                source database. Please contact us here (link to contact form).
              </p>
              <div className>
                <Link to="contact-us" className="site-btn my-4">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row text-center">
        <div className="col-lg-12 my-5">
          <Link to="/" className="site-btn">
            Go Back To Home
          </Link>
        </div>
      </div>
      {/*?php include('site-footer.php') ?*/}
    </div>
  );
};

export default DataSource;
