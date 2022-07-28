import React from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
const SolarPrice = () => {
  useWindowTitle("solar-price");
  return (
    <div className="wrapper">
      {/*?php include('mobile-navigation-loggedin.php') ?*/}
      <section className="inner-banner"></section>
      <section className="py-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xxl-11 col-xl-11  mx-auto">
              <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                  <h2 className="text-50 text-center">Data Tables</h2>
                </div>
                <div className="col-lg-4">
                  <div className="text-end">
                    <a href="#_" className="site-btn">
                      Download CSV
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                    <table className="table table-striped table-bordered text-center">
                      <thead>
                        <tr>
                          <th>STATE</th>
                          <th>Sep 2021</th>
                          <th>Sep 2020</th>
                          <th>MOVEMENT</th>
                          <th>CHANGE (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Alabama</td>
                          <td>12.41¢ / kWh</td>
                          <td>12.79¢ / kWh</td>
                          <td className="green-text">DOWN</td>
                          <td className="green-text">-2.971 %</td>
                        </tr>
                        <tr>
                          <td>Alabama</td>
                          <td>12.41¢ / kWh</td>
                          <td>12.79¢ / kWh</td>
                          <td className="red-text">UP</td>
                          <td className="red-text">1.806 %</td>
                        </tr>
                        <tr>
                          <td>Alabama</td>
                          <td>12.41¢ / kWh</td>
                          <td>12.79¢ / kWh</td>
                          <td className="green-text">DOWN</td>
                          <td className="green-text">-2.971 %</td>
                        </tr>
                        <tr>
                          <td>Alabama</td>
                          <td>12.41¢ / kWh</td>
                          <td>12.79¢ / kWh</td>
                          <td className="red-text">UP</td>
                          <td className="red-text">1.806 %</td>
                        </tr>
                        <tr>
                          <td>Alabama</td>
                          <td>12.41¢ / kWh</td>
                          <td>12.79¢ / kWh</td>
                          <td className="green-text">DOWN</td>
                          <td className="green-text">-2.971 %</td>
                        </tr>
                        <tr>
                          <td>Alabama</td>
                          <td>12.41¢ / kWh</td>
                          <td>12.79¢ / kWh</td>
                          <td className="red-text">UP</td>
                          <td className="red-text">1.806 %</td>
                        </tr>
                        <tr>
                          <td>Alabama</td>
                          <td>12.41¢ / kWh</td>
                          <td>12.79¢ / kWh</td>
                          <td className="green-text">DOWN</td>
                          <td className="green-text">-2.971 %</td>
                        </tr>
                        <tr>
                          <td>Alabama</td>
                          <td>12.41¢ / kWh</td>
                          <td>12.79¢ / kWh</td>
                          <td className="red-text">UP</td>
                          <td className="red-text">1.806 %</td>
                        </tr>
                        <tr>
                          <td>Alabama</td>
                          <td>12.41¢ / kWh</td>
                          <td>12.79¢ / kWh</td>
                          <td className="green-text">DOWN</td>
                          <td className="green-text">-2.971 %</td>
                        </tr>
                        <tr>
                          <td>Alabama</td>
                          <td>12.41¢ / kWh</td>
                          <td>12.79¢ / kWh</td>
                          <td className="red-text">UP</td>
                          <td className="red-text">1.806 %</td>
                        </tr>
                        <tr>
                          <td>Alabama</td>
                          <td>12.41¢ / kWh</td>
                          <td>12.79¢ / kWh</td>
                          <td className="green-text">DOWN</td>
                          <td className="green-text">-2.971 %</td>
                        </tr>
                        <tr>
                          <td>Alabama</td>
                          <td>12.41¢ / kWh</td>
                          <td>12.79¢ / kWh</td>
                          <td className="red-text">UP</td>
                          <td className="red-text">1.806 %</td>
                        </tr>
                        <tr>
                          <td>Alabama</td>
                          <td>12.41¢ / kWh</td>
                          <td>12.79¢ / kWh</td>
                          <td className="green-text">DOWN</td>
                          <td className="green-text">-2.971 %</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-lg-12 my-5">
                  <a href="#_" className="site-btn">
                    Get a Qoute
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*?php include('site-footer.php') ?*/}
    </div>
  );
};

export default SolarPrice;
