import React, { useEffect, useState } from 'react'
import InputPhone from '../../Components/InputPhone';
import { useDispatch, useSelector } from 'react-redux';
import { userSignUpAction } from '../../actions/userActions';
import { validateEmail } from '../../Util/Helpers';
import { Link } from 'react-router-dom';
import Toasty from "../../Util/toast";
import MyNav from "../../Components/Nav";
import MyFoot from "../../Components/Footer";

const Signup = ({history}) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      if(userInfo?.subscription == null){
        history.replace("/SubscriptionPlan");

      }
      else{
      history.replace("/")}
    }
  }, [userInfo]);
  
  
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setphone] = useState("");

  const [confirmpassword, setconfirmpassword] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [showicon, setshowicon] = useState(true);
  const [showicon2, setshowicon2] = useState(true);

  const dispatch = useDispatch();

  const registerUserHandler = async () => {
    const emailvalidation = validateEmail(email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      try {
        setloading(true);
const body={firstName,
  lastName,
  phone,
  confirmpassword,
  email,
  password}
        await dispatch(userSignUpAction(body, history));
        setloading(false);
      } catch (error) {
        setloading(false);
      }
    } else {
      setloading(false);

      Toasty("error", `Please enter a valid email`);
    }
    setloading(false);
  };
  return (
    <>
    <MyNav/>
      <div className="wrapper">
      <section className="inner-banner"></section>

        <section className="contact-us-box">
          <div className="container">
            <div className="back-shadow">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h4 className="text-45">Sign Up</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod</p>
                  <form className="row g-3 align-items-end py-4">
                    <div className="col-md-6 my-3">
                      <input  value={firstName}
                    onChange={(e) => {
                      setfirstName(e.target.value);
                    }} type="text" className="form-control" id="inputEmail4" placeholder="Enter First Name" />
                    </div>
                    <div className="col-md-6 my-3">
                      <input value={lastName}
                    onChange={(e) => {
                      setlastName(e.target.value);
                    }} type="text" className="form-control" id="inputEmail4" placeholder="Enter Last Name" />
                    </div>
                    <div className="col-md-12 my-3">
                      <input type="email" value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }} className="form-control" id="inputPassword4" placeholder="Enter Email Address" />
                    </div>
                    <div className="col-md-12 my-3">
                    <InputPhone
                              unique={true}
                              name={'phone'}
                              value={phone}
                              onChange={setphone}
                            />    
                    </div>
                    <div className="col-md-12 my-3">
                      <div className="form-field mb-1">
                        <input   value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}                     type={showicon ? "password" : "text"}
                    className="site-input both-icon enter-input blur-bg" placeholder="Confirm Password" name id />
                        <i  onClick={() => setshowicon(!showicon)}
                    className={
                      showicon
                        ? "fa fa-eye-slash enter-icon right-icon"
                        : "fa fa-eye enter-icon right-icon"
                    }  aria-hidden="true" />
                      </div>
                    </div>
                    <div className="col-md-12 my-3">
                      <div className="form-field mb-1">
                        <input   value={confirmpassword}
                    onChange={(e) => {
                      setconfirmpassword(e.target.value);
                    }}                     type={showicon2 ? "password" : "text"}
                    className="site-input both-icon enter-input blur-bg" placeholder="Confirm Password" name id />
                        <i  onClick={() => setshowicon2(!showicon2)}
                    className={
                      showicon2
                        ? "fa fa-eye-slash enter-icon right-icon"
                        : "fa fa-eye enter-icon right-icon"
                    }  aria-hidden="true" />
                      </div>
                    </div>
                    {!loading ? (
                  <button
                    type="button"
                    onClick={() =>
                      email?.length > 0
                        ? registerUserHandler()
                        : Toasty(
                            "error",
                            `Please fill out all the required fields`
                          )
                    } className="site-btn">Sign Up</button> ) : (
                      <i className="fas fa-spinner fa-pulse"></i>
                    )}
                    <Link to='/Login' className="text-16-rener">Already have an account? Sign In</Link>
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
      <MyFoot/>
    </>
  )
}

export default Signup