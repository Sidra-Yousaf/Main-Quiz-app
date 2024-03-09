import React from "react";
import {
  MDBPopconfirm,
  MDBPopconfirmMessage,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
const DeleteUser = () => {
  return (
    <>
      <MDBPopconfirm
        placement="bottom"
        btnChildren={
          <i
            className="fas fa-trash-alt text-danger"
            style={{ backgroundColor: "none", border: "none" }}
          ></i>
        }
      >
        <MDBPopconfirmMessage icon={<MDBIcon icon="times" />}>
          {"Are you sure you want to delete?"}
        </MDBPopconfirmMessage>
      </MDBPopconfirm>
    </>
  );
};

export default DeleteUser;
