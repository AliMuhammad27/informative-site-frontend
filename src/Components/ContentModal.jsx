import React from "react";

const ContentModal = ({ title, content }) => {
  return (
    <div
      className="modal fade"
      id="subscriptionPackageDetails"
      aria-labelledby="subscriptionPackageDetailsLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body pb-5">
            <div className="main-modal-msg">
              <h4 className="heading-lg fw-800 my-5">{title}</h4>
              <div className="row">
                <div className="col-xl-8 mx-auto">
                  <div className="primContentWrap mb-2 d-md-flex text-start">
                    <p>{content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;
