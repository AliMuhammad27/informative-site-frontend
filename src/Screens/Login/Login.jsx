import React, { useEffect, useState } from 'react'
import MyNav from "../../Components/Nav";
import MyFoot from "../../Components/Footer";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validateEmail } from '../../Util/Helpers';
import { userLoginAction } from '../../actions/userActions';
import Toasty from "../../Util/toast";

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showicon, setshowicon] = useState(true);
  const [loading, setloading] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.replace("/");
    }
  }, [userInfo]);
  const submitHandler = async () => {
    const emailvalidation = validateEmail(email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      setloading(true);

      console.log("submitHandler");
      await dispatch(userLoginAction(email, password, history));
      setloading(false);
    } else {
      Toasty("error", `Please enter a valid email`);
      setloading(false);
    }
  };


  return (
    <>
      <div className="wrapper">
        <section className="contact-us-box">
          <div className="container">
            <div className="back-shadow">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h4 className="text-45">Sign In</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod</p>
                  <form className="row g-3 align-items-end py-4">
                    <div className="col-md-12 my-3">
                      <input value={email}
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                        type="email" className="form-control" id="inputEmail4" placeholder="Enter Email Address" />
                    </div>
                    <div className="col-md-12 my-3">
                      <div className="form-field mb-1">
                        <input value={password}
                          onChange={(e) => {
                            setpassword(e.target.value);
                          }} type={showicon ? "password" : "text"}
                          className="site-input both-icon enter-input blur-bg" placeholder="Enter Password" name id />
                        <i onClick={() => setshowicon(!showicon)}
                          className={
                            showicon
                              ? "fa fa-eye-slash enter-icon right-icon"
                              : "fa fa-eye enter-icon right-icon"
                          } aria-hidden="true" />
                      </div>
                      <div className="text-end">
                        <Link to='/ForgotPassword1' className="text-16-rener">Forgot Password ?</Link>
                      </div>
                    </div>
                    {!loading ? (
                  <button
                    type="button"
                    onClick={() =>
                      email?.length > 0 && password?.length > 0
                        ? submitHandler()
                        : Toasty(
                            "error",
                            `Please fill out all the required fields`
                          )
                    } 

                     className="site-btn">Sign In</button> ) : (
                      <i className="fas fa-spinner fa-pulse"></i>
                    )}

                  </form>
                  <div className="text-center" style={{ textAlign: 'center' }}>
                    <Link to='/Signup' className="text-16-rener">Don't have an account? Sign Up</Link>
                  </div>


                </div>

                <div className="col-lg-6">
                  <img src="../assets/images/contact-solar.png" alt="" className="img-fluid contact-pic" />
                </div>
              </div>

            </div>

          </div>
        </section>
      </div>
      <MyFoot />
    </>
  )
}

export default Login