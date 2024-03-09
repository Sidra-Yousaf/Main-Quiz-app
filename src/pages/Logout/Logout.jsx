import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const Logout = () => {
  const [topRightModal, setTopRightModal] = useState(false);

  const toggleOpen = () => setTopRightModal(!topRightModal);
  return (
    <>
      <MDBBtn onClick={toggleOpen}>Top right</MDBBtn>

      <MDBModal
        animationDirection="right"
        open={topRightModal}
        tabIndex="-1"
        setOpen={setTopRightModal}
      >
        <MDBModalDialog position="top-right" side>
          <MDBModalContent>
            <MDBModalHeader className="bg-info text-white">
              <MDBModalTitle>Product in the cart</MDBModalTitle>
              <MDBBtn
                color="none"
                className="btn-close btn-close-white"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row">
                <div className="col-3 text-center">
                  <i className="fas fa-shopping-cart fa-4x text-info"></i>
                </div>

                <div className="col-9">
                  <p>Do you need more time to make a purchase decision?</p>
                  <p>
                    No pressure, your product will be waiting for you in the
                    cart.
                  </p>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="info">Go to the cart</MDBBtn>
              <MDBBtn outline color="info" onClick={toggleOpen}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default Logout;
