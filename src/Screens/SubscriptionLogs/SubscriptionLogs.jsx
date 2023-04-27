import React from 'react'

const SubscriptionLogs = () => {
  return (
    <div><div>
    <div className="wrapper">
      <section className="contact-us-box">
        <div className="container">
          <div className="back-shadow">
            <div className="row justify-content-center text-center">
              <div className="col-lg-10">
                <h4 className="text-45 py-2">Subscription Log</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h4 className="text-24">Current Subscription</h4>
                <div className="p-2">
                  <h6 className="text-18-rener">Package Type: <span className="text-16-rener"> Montly</span></h6>
                  <h6 className="text-18-rener">Subscribed On: <span className="text-16-rener">Sept 27, 2021</span></h6>
                  <h6 className="text-18-rener">Expires On: <span className="text-16-rener">Sept 26, 2022</span></h6>
                  <h6 className="text-18-rener">Amount Paid: <span className="text-16-rener"> $12</span></h6>
                </div>
              </div>
              <div className="col-lg-6">
                <h4 className="text-24">Past Subscription</h4>
                <div className="p-2">
                  <h6 className="text-18-rener">Package Type: <span className="text-16-rener"> Yearly</span></h6>
                  <h6 className="text-18-rener">Subscribed On: <span className="text-16-rener">Sept 27, 2021</span></h6>
                  <h6 className="text-18-rener">Expires On: <span className="text-16-rener">Sept 26, 2022</span></h6>
                  <h6 className="text-18-rener">Amount Paid: <span className="text-16-rener"> $12</span></h6>
                </div>
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

export default SubscriptionLogs