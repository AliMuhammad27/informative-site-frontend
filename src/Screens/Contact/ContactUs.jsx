import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="wrapper">
        {/*?php include('mobile-navigation-loggedin.php') ?*/}
        <section className="inner-banner"></section>
        <section className="contact-us-box">
          <div className="container">
            <h4 className="text-45 text-center">Contact Us</h4>
            <div className="back-shadow">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h4 className="text-45">Get in Touch</h4>
                  <form className="row g-3 align-items-end py-4">
                    <div className="col-md-10 my-3">
                      <label htmlFor="inputEmail4" className="form-label mb-0">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="col-md-10 my-3">
                      <label htmlFor="inputEmail4" className="form-label mb-0">
                        Email Address*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <div className="col-md-10 my-3">
                      <label htmlFor="inputEmail4" className="form-label mb-0">
                        Company (not as required)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Enter Subject"
                      />
                    </div>
                    <div className="col-md-10 my-3">
                      <label htmlFor="inputEmail4" className="form-label mb-0">
                        Message*
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={5}
                        placeholder="Enter Message"
                        defaultValue={""}
                      />
                    </div>
                    <button type="button" className="site-btn">
                      Send
                    </button>
                  </form>
                </div>
                <div className="col-lg-6">
                  <img
                    src="assets/images/contact-solar.png"
                    alt=""
                    className="img-fluid contact-pic"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="row text-center">
          <div className="col-lg-12 my-5">
            <Link to="/" className="site-btn" onClick={goToTop}>
              Go Back To Home
            </Link>
          </div>
        </div>
        {/*?php include('site-footer.php') ?*/}
      </div>
      <div className="overlay" />
    </div>
  );
};

export default ContactUs;
