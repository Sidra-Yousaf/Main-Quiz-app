import React, { useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBPopconfirm,
  MDBPopconfirmMessage,
  MDBIcon,
} from "mdb-react-ui-kit";
import AddUser from "../Adduser/AddUser";

const Table = () => {
  const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);
  const handleDeleteConfirmation = () => {
    setIsDeleteConfirmed(false);
  };

  const handleDeleteClick = () => {
    setIsDeleteConfirmed(true);
  };
  return (
    <>
      <AddUser />
      <MDBTable align="top">
        <MDBTableHead>
          <tr>
            <th scope="col">Profile</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Created at</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3 mt-2">
                  <p className="fw-bold mb-1">Alex Ray</p>
                  <p className="text-muted mb-0">alex.ray@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1 mt-3">Consultant</p>
            </td>
            <td>
              <MDBBadge color="primary" pill className="mt-3">
                Onboarding
              </MDBBadge>
            </td>
            <td>02-02-2023</td>
            <td className=" d-flex gap-3 mt-5">
              <i className="fas fa-edit text-warning"></i>
              <MDBPopconfirm
                className="ripple .ripple-surface .ripple-surface-light .btn .btn-primary"
                placement="bottom"
                btnChildren={
                  <i
                    className="fas fa-trash-alt text-danger"
                    onClick={handleDeleteClick}
                  ></i>
                }
                onCancel={() => setIsDeleteConfirmed(false)}
                isVisible={isDeleteConfirmed}
                onConfirm={handleDeleteConfirmation}
              >
                <MDBPopconfirmMessage>
                  {"   Are you sure you want to delete?    "}
                </MDBPopconfirmMessage>
              </MDBPopconfirm>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3 mt-2">
                  <p className="fw-bold mb-1">Alex Ray</p>
                  <p className="text-muted mb-0">alex.ray@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1 mt-3">Consultant</p>
            </td>
            <td>
              <MDBBadge color="primary" pill className="mt-3">
                Onboarding
              </MDBBadge>
            </td>
            <td>02-02-2023</td>
            <td className=" d-flex gap-3 mt-5">
              <i className="fas fa-edit text-warning"></i>
              <MDBPopconfirm
                className="ripple .ripple-surface .ripple-surface-light .btn .btn-primary"
                placement="bottom"
                btnChildren={
                  <i
                    className="fas fa-trash-alt text-danger"
                    onClick={handleDeleteClick}
                  ></i>
                }
                onCancel={() => setIsDeleteConfirmed(false)}
                isVisible={isDeleteConfirmed}
                onConfirm={handleDeleteConfirmation}
              >
                <MDBPopconfirmMessage>
                  {"   Are you sure you want to delete?    "}
                </MDBPopconfirmMessage>
              </MDBPopconfirm>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3 mt-2">
                  <p className="fw-bold mb-1">Alex Ray</p>
                  <p className="text-muted mb-0">alex.ray@gmail.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1 mt-3">Consultant</p>
            </td>
            <td>
              <MDBBadge color="primary" pill className="mt-3">
                Onboarding
              </MDBBadge>
            </td>

            <td>02-02-2023</td>

            <td className=" d-flex gap-3 mt-5">
              <i className="fas fa-edit text-warning"></i>
              <MDBPopconfirm
                className="ripple .ripple-surface .ripple-surface-light .btn .btn-primary"
                placement="bottom"
                btnChildren={
                  <i
                    className="fas fa-trash-alt text-danger"
                    onClick={handleDeleteClick}
                  ></i>
                }
                onCancel={() => setIsDeleteConfirmed(false)}
                isVisible={isDeleteConfirmed}
                onConfirm={handleDeleteConfirmation}
              >
                <MDBPopconfirmMessage>
                  {"   Are you sure you want to delete?    "}
                </MDBPopconfirmMessage>
              </MDBPopconfirm>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default Table;
