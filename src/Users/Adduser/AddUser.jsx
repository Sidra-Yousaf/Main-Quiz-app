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

const AddUser = () => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => {
    setBasicModal(!basicModal);
    console.log("Modal State:", basicModal);
  };

  return (
    <>
      <div className="d-flex justify-content-end align-items-end px-3 py-3">
        <MDBBtn onClick={toggleOpen}>Add User</MDBBtn>
      </div>
      <MDBModal open={basicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default AddUser;
