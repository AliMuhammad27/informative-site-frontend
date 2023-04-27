import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../Util/api'
import Toasty from "../../Util/toast";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const SubscriptionPlan = ({history}) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    getpackgesHandler()
  }, [])
  
  const [packges,setpackages]=useState()
  const [packk,setpackk]=useState()
  const [loading,setloading]=useState()

  const getpackgesHandler = async () => {
    try {
      // try {
      const res = await axios.get(`${baseURL}/user/getPackages`,);
      setpackages(res?.data?.packages)
      setloading(false);

    } catch (error) {
      setloading(false);

      console.log("error", error?.response);
      // alert(error?.response?.data?.message)
      Toasty("error", `🦄 ${error?.response?.data?.message}!`);
    }
  };
  async function handleToken(token) {
    console.log("handleToken");
    const config = {
      header: {
        Authorization: "Bearer sk_test_OVw01bpmRN2wBK2ggwaPwC5500SKtEYy9V"
      }
    };
    const response = await axios.post(
      `${baseURL}/checkout`,
      { token, product: packk?.amount },
      config
    );
    console.log("response", response);
    const { source } = response.data;
    console.log(
      "res",
      response.data.id,
      response.data.status,
      response.headers.date,
      response.data.receipt_email
    );

    const res = await axios.post(
      `${baseURL}/user/userbuysubscription`,
      {
        card_holder_name: response?.data?.billing_details?.name,
        card_number: response?.data?.payment_method_details?.last4,
packagee:packk,
        userid: userInfo?._id,
      },
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      }
    );
    localStorage.setItem("userInfo", JSON.stringify(res?.data));

    setloading(false);
    if (res?.status == 201) {
      history?.push("/");
      Swal.fire({
        icon: "success",
        title: "",
        text: "Congratulations! You have successfully subscribed to our package",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  return (
    <div><div>
    <div className="wrapper">
      <section className="contact-us-box">
        <div className="container">
          <div className="back-shadow">
            <div className="row justify-content-center text-center">
              <div className="col-lg-10">
                <h4 className="text-45">Subscription Plan</h4>
                <p className="text-16-rener">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                  Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
                  tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus.</p>
              </div>
            </div>
            <div className="row">
             {packges?.length>0 &&packges?.map(pac=>(
              <div className="col-lg-4">
                <div className="standard-box box">
                  <div className="ribbon ribbon-top-left"><span>${pac?.amount} Per Year</span></div>
                  <h5 className="packge-name text-center">{pac?.packagename}</h5>
                  <small className="text-white">Duration : {pac?.duration} Months</small>
                  <ul>
                    <li>
                      <img src="../assets/images/green-check.png" alt="" />
                      <span>{pac?.details} </span>
                    </li>
                  </ul>
                  <div onClick={()=>{setpackk(pac)}}>
                  <StripeCheckout
                                stripeKey="pk_test_IdCqGO7sona7aWZqqiXTs3MN00vl1vkEQa"
                                token={handleToken}
                                amount={pac?.amount * 100}
                                email={userInfo?.email}
                              ></StripeCheckout>  </div>              </div>
              </div>))}
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

export default SubscriptionPlan