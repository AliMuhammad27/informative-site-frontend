import React,{useState,useEffect} from 'react'
import useWindowTitle from '../../Hooks/useWindowTitle'
import axios from 'axios'
import VecttorMap from "../../Components/VectorMax"
const GasolinePrices = ({match}) => {
  const[gasdata,setgasdata]=useState('')
  const apiKey='4e28b47273e7002079347d838122fb6c'
  const state=match.params.state
  const zipcode=match.params.zipcode

  const handlelatAndlong = async () => {
    try {
      const res = await axios({
        url: `https://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${apiKey}`,
        method: "GET",
      });
      console.log("handlelatAndlong", res);
      setgasdata(res?.data)
    } catch (err) {
      console.log("Error",err);
    }
  };
  useEffect(()=>{
    handlelatAndlong()
 },[])
 console.log("GasData",gasdata)
    useWindowTitle('gasoline-prices')
  return (
    <div className="wrapper">
    <section className="inner-banner">
    </section>
    <section className="py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h2 className="text-50 text-center">Area-wide gasoline PRICES</h2>
          </div>
          <div className="col-lg-10">
            <p className="p-text text-center">There are many variations of passages of Lorem Ipsum available, but
              the majority
              have suffered alteration in some form, by injected humour, or randomised words which don't look
              even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
          </div>
        </div>
          {/* <div className="col-lg-12">
            <img src="../../assets/images/map2.png" alt="" className="img-fluid" />
          </div> */}
          <div

// className="row text-center"

style={{ width: "100%", height: "100vh" }}

>

<VecttorMap/>

</div>
      </div>
    </section>
    <section className="tables-box">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-xxl-11 col-xl-11  mx-auto">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered px-2">
                    <thead>
                      <tr>
                        <th>STATE</th>
                        <th>DATE</th>
                        <th>Regular</th>
                        <th>Mid-Grade</th>
                        <th>Premium</th>
                        <th>Diesel</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alabama</td>
                        <td>Jan 20, 2022</td>
                        <td>$4.569</td>
                        <td>$4.569</td>
                        <td>$4.569</td>
                        <td>$4.569</td>
                      </tr>
                      <tr>
                        <td>Alaska</td>
                        <td>Jan 20, 2022</td>
                        <td>$4.691</td>
                        <td>$4.691</td>
                        <td>$4.691</td>
                        <td>$4.691</td>
                      </tr>
                      <tr>
                        <td>Arizona</td>
                        <td>Jan 20, 2022</td>
                        <td>$3.589</td>
                        <td>$3.589</td>
                        <td>$3.589</td>
                        <td>$3.589</td>
                      </tr>
                      <tr>
                        <td>Arkansas</td>
                        <td>Jan 20, 2022</td>
                        <td>$3.589</td>
                        <td>$3.589</td>
                        <td>$3.589</td>
                        <td>$3.589</td>
                      </tr>
                      <tr>
                        <td>California</td>
                        <td>Jan 20, 2022</td>
                        <td>$4.569</td>
                        <td>$4.569</td>
                        <td>$4.569</td>
                        <td>$4.569</td>
                      </tr>
                      <tr>
                        <td>Colorado</td>
                        <td>Jan 20, 2022</td>
                        <td>$9.365</td>
                        <td>$9.365</td>
                        <td>$9.365</td>
                        <td>$9.365</td>
                      </tr>
                      <tr>
                        <td>California</td>
                        <td>Jan 20, 2022</td>
                        <td>$4.569</td>
                        <td>$4.569</td>
                        <td>$4.569</td>
                        <td>$4.569</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-12 my-5">
                <a href="#_" className="site-btn">Get a Qoute</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  )
}

export default GasolinePrices
