import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal1 from "../../Components/Modal";
import { baseURL } from "../../Util/api";
import Swal from "sweetalert2";
import axios from "axios";
import Button from "../../Components/Button";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const ContactUs = () => {
  const [Name, setname] = useState("");
  const [email, setemail] = useState("");
  const [company, setcompany] = useState("");
  const [message, setmessage] = useState("");
  const [phone, setphone] = useState("");
  const [loading, setisloading] = useState(false);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const addFeedbackHandler = async () => {
    try {
      setisloading(true);
      const body = { Name, email, company, message, phone };
      console.log("Body", body);
      const res = await axios.post(`${baseURL}/feedback/createFeedback`, body);
      if (res?.status == 201) {
        setisloading(false);
        console.log("blockkk");
        Swal.fire({
          icon: "success",
          title: "",
          text: `${res.data.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log("error", err?.response?.data);
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Internal Server Error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  console.log("Phone Number", typeof value);
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
                        value={Name}
                        onChange={(e) => {
                          setname(e.target.value);
                        }}
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
                        value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                        id="inputPassword4"
                        placeholder="Enter Email Address"
                      />
                    </div>

                    <div className="col-md-10 my-3">
                      <label className="form-label mb-0">Phone Number*</label>
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={setphone}
                      />
                    </div>
                    <div className="col-md-10 my-3">
                      <label htmlFor="inputEmail4" className="form-label mb-0">
                        Company (not as required)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={company}
                        onChange={(e) => {
                          setcompany(e.target.value);
                        }}
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
                        value={message}
                        onChange={(e) => {
                          setmessage(e.target.value);
                        }}
                        placeholder="Enter Message"
                        defaultValue={""}
                      />
                    </div>
                    <Button
                      className="site-btn"
                      loading={loading}
                      onClick={(e) => {
                        Name.length > 0 &&
                        email.length > 0 &&
                        message.length > 0
                          ? addFeedbackHandler()
                          : Modal1();
                      }}
                    >
                      Send
                    </Button>
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
          <div className="col-lg-12 mb-5">
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
