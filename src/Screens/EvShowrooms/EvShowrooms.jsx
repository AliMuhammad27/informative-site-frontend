import React from "react";
import useWindowTitle from "../../Hooks/useWindowTitle";
const EvShowrooms = ({ match }) => {
  useWindowTitle("Tesla-showrooms");
  return (
    <div className="wrapper">
      {/*?php include('mobile-navsigation-loggedin.php') ?*/}
      <section className="inner-banner"></section>
      <section className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h2 className="text-50 text-center">
                Area-wide Tesla Show Rooms/Garages
              </h2>
            </div>
            <div className="col-lg-10">
              <p className="p-text text-center">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum,
              </p>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-lg-12">
              <img
                src="../assets/images/mapp.png"
                alt=""
                className="img-fluid"
              />
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
                    <table className="table table-striped table-bordered px-2">
                      <thead>
                        <tr>
                          <th>NAME</th>
                          <th>Showroom-Locations</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Buena Park</td>
                          <td>Canoga Park-Topanga</td>
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
      {/*?php include('site-footer.php') ?*/}
    </div>
  );
};

export default EvShowrooms;
