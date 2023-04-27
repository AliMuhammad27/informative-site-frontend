import React, { useEffect, useState } from 'react'
import MyNav from "../../Components/Nav";
import MyFoot from "../../Components/Footer";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validateEmail } from '../../Util/Helpers';
import { userLoginAction, userResetPasswordAction } from '../../actions/userActions';
import Toasty from "../../Util/toast";
import axios from 'axios';
import { baseURL } from '../../Util/api';
import Swal from 'sweetalert2';

const ForgotPassword3 = (props) => {
  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);
  const [password, setpassword] = useState();
  const [confirm_password, setconfirm_password] = useState();
  const [showicon, setshowicon] = useState(true);
  const [showicon2, setshowicon2] = useState(true);

  const onSubmitHandler = async () => {
    setloading(true);
    console.log(
      "body",
      password,
      confirm_password,
      props?.location?.state?.code,
      props?.location?.state?.email
    );

    await dispatch(
      userResetPasswordAction(
        password,
        confirm_password,
        props?.location?.state?.code,
        props?.location?.state?.email
      )
    );
    setloading(false);
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
                <p>Kindly enter the new password.</p>
                <form className="row g-3 align-items-end py-4">
                  <div className="col-md-12 my-3">
                    <div className="form-field mb-1">
                      <input                     type={showicon ? "password" : "text"}    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
 className="site-input both-icon enter-input blur-bg" placeholder="Enter Password" name id />
                      <i onClick={() => setshowicon(!showicon)}
                          className={
                            showicon
                              ? "fa fa-eye-slash enter-icon right-icon"
                              : "fa fa-eye enter-icon right-icon"
                          } aria-hidden="true" />
                    </div>
                  </div>
                  <div className="col-md-12 my-3">
                    <div className="form-field mb-1">
                      <input                     type={showicon2 ? "password" : "text"}   value={confirm_password}
                    onChange={(e) => {
                      setconfirm_password(e.target.value);
                    }}
 className="site-input both-icon enter-input blur-bg" placeholder="Confirm Password" name id />
                      <i onClick={() => setshowicon2(!showicon2)}
                          className={
                            showicon2
                              ? "fa fa-eye-slash enter-icon right-icon"
                              : "fa fa-eye enter-icon right-icon"
                          }  aria-hidden="true" />
                    </div>
                  </div>
                  <div className="text-center">
                  {!loading ? (
                    <button  onClick={() =>
                      confirm_password?.length > 0 && password?.length > 0
                        ? onSubmitHandler()
                        : Toasty(
                            "error",
                            `Please fill out all the required fields`
                          )
                    } type="button" className="site-btn">Update</button>   ) : (
                      <i className="fas fa-spinner fa-pulse"></i>
                    )}
                  </div>
                  <div className="text-center">
                    <Link to='/Login' className="text-16-rener">Back To Login</Link>
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

export default ForgotPassword3