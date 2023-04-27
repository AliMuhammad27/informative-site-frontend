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


import InputNumber from '../../Components/InputNumber'

const ForgotPassword2 = ({ match, history }) => {
  const [loading, setloading] = useState(false);

  const [code, setcode] = useState();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const onSubmitHandler = async () => {
    try {
      setloading(true);
      console.log("body", code, match?.params?.email);
      const body = { code, email: match?.params?.email };
      console.log("TEST");
      // try {
      const res = await axios.post(`${baseURL}/user/userverifyRecoverCode`, body);
      setloading(false);
      console.log("res", res);
      history?.push({
        pathname: "/ForgotPassword3",
        state: { code: code, email: match?.params?.email }
      });
    } catch (error) {
      setloading(false);

      console.log("error", error?.response);
      // alert(error?.response?.data?.message)
      Toasty("error", `🦄 ${error?.response?.data?.message}!`);
    }
  };

  const resentCodeHandler = async (e) => {
    e.preventDefault();
    const useremail = match?.params?.email;
    const body = { email: useremail };

    try {
      const res = await axios.post(`${baseURL}/user/userRecoverPassword`, body);
      console.log("res", res);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "SUCCESS",
          text: "Verification Code Sent to your mail",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.log(error.response);
      Toasty("error", `🦄 Invalid Email!`);
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
                  <p>Kindly enter your verification code</p>
                  <form className="row g-3 align-items-end py-4">
                    <div className="col-md-12 my-3">
                      <InputNumber
                        min={0}
                        value={code}
                        onChange={setcode}
                        max={9}
                        className="form-control "
                      />                  </div>
                    <div className="text-center">
                      <Link
                        to="#"
                        onClick={resentCodeHandler} className="text-16-rener">Resend code</Link>
                    </div>
                    <div className="text-center">
                      {!loading ? (
                        <button type="button"
                          onClick={() =>
                            code?.length > 0
                              ? onSubmitHandler()
                              : Toasty(
                                "error",
                                `Please fill out all the required fields`
                              )
                          } className="site-btn">Continue</button>) : (
                        <i className="fas fa-spinner fa-pulse"></i>
                      )}
                    </div>
                    <div className="text-center">
                      <Link
                        to="/Login" className="text-16-rener">Back To Login</Link>
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

export default ForgotPassword2