import React, { useEffect, useState } from 'react'
import MyNav from "../../Components/Nav";
import MyFoot from "../../Components/Footer";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validateEmail } from '../../Util/Helpers';
import { userLoginAction } from '../../actions/userActions';
import Toasty from "../../Util/toast";
import axios from 'axios';
import { baseURL } from '../../Util/api';
import Swal from 'sweetalert2';

const ForgotPassword1 = ({history}) => {
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);

  const submitHandler = async () => {
    const emailvalidation = validateEmail(email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      const body = { email };
      setloading(true);

      console.log("TEST");
      try {
        const res = await axios.post(`${baseURL}/user/userRecoverPassword`, body);
        setloading(false);

        console.log("res", res);
        if (res?.status == 201) {
          Swal.fire({
            icon: "success",
            title: "SUCCESS",
            text: "Verification Code Sent to your mail",
            showConfirmButton: false,
            timer: 1500
          });
          history.push({
            pathname: `/ForgotPassword2/${email}`
          });
        }
      } catch (error) {
        setloading(false);

        console.log("IN HERE");
        console.log(error?.response?.data);
        Toasty("error", `🦄 Invalid Email!`);
      }
    } else {
      setloading(false);

      Toasty("error", `Please enter a valid email`);
    }
  };

  return (
    <div><div>
    <div className="wrapper">
      <section className="contact-us-box">
        <div className="container">
          <div className="back-shadow">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h4 className="text-45">Forgot Password</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod</p>
                <form className="row g-3 align-items-end py-4">
                  <div className="col-md-12 my-3">
                    <input    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }} type="text" className="form-control" id="inputEmail4" placeholder="Enter Email Address" />
                  </div>
                  <div className="text-center">
                    <a href="#_" className="text-16-rener">Back To Login</a>
                  </div>
                  <div className="text-center">
                  {!loading ? (
                    <button type="button"
                      onClick={() =>
                        email?.length > 0
                          ? submitHandler()
                          : Toasty(
                              "error",
                              `Please fill out all the required fields`
                            )
                      }    className="site-btn">Continue</button>   ) : (
                        <i className="fas fa-spinner fa-pulse"></i>
                      )}
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
                <img src="../assets/images/contact-solar.png" alt="" className="img-fluid contact-pic" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="overlay" />
  </div>
  </div>
  )
}

export default ForgotPassword1