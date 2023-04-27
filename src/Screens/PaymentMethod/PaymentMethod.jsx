import React from 'react'

const PaymentMethod = () => {
  return (
    <div><div>
    <div className="wrapper">
      <section className="contact-us-box">
        <div className="container">
          <div className="back-shadow">
            <div className="row justify-content-center text-center">
              <div className="col-lg-10">
                <h4 className="text-45">Payment Method</h4>
                <p className="text-16-rener">Enter your credit card details to proceed with payment</p>
                <h4 className="text-22-rener-black">Billing Amount: 0.00</h4>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <form className="row g-3 align-items-end py-4">
                  <div className="col-md-6 my-3">
                    <label htmlFor="inputEmail4" className="form-label mb-0">Cardholder Name*</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Cardholder Name*" />
                  </div>
                  <div className="col-md-6 my-3">
                    <label htmlFor="inputEmail4" className="form-label mb-0">Credit/Debit Card No.*</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Credit/Debit Card No.*" />
                  </div>
                  <label htmlFor="inputEmail4" className="form-label mb-0">Expiry Date*</label>
                  <div className="col-md-6 mt-0 mb-2">
                    <input type="date" className="form-control" id="inputEmail4" placeholder="Enter First Name" />
                  </div>
                  <div className="col-md-6 mt-0 mb-2">
                    <input type="date" className="form-control" id="inputEmail4" placeholder="Enter Last Name" />
                  </div>
                  <div className="col-md-12 my-3">
                    <label htmlFor="inputEmail4" className="form-label mb-0">CVV*</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="Enter CVV number" />
                  </div>
                  <div className="text-center">
                    <button type="button" className="site-btn" data-bs-toggle="modal" data-bs-target="#succ-modal">Proceed</button>
                  </div>
                  <div className="text-center">
                    <button type="button" className="site-btn-header">View Subscription Log</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* Modal */}
    <div className="modal fade succ-pop" id="succ-modal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          <div className="modal-body">
            <img src="../assets/images/check.png" alt="" />
            <h5 className="py-4">Payment Successfully Made!</h5>
            <div className>
              <a href="#_" className="site-btn px-5">OK</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Modal */}
    <div className="modal fade succ-pop" id="unsucc-modal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          <div className="modal-body">
            <img src="../assets/images/pop-pic2.png" alt="" />
            <h5 className="py-4">Payment was Unsuccessful.
              Please try again.</h5>
            <div className>
              <a href="#_" className="site-btn px-5">OK</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="overlay" />
  </div>
  </div>
  )
}

export default PaymentMethod