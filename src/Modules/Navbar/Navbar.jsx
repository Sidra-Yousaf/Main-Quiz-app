import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBSideNavLink,
  MDBDropdownDivider,
  MDBBadge,
} from "mdb-react-ui-kit";
import UserProfile from "../UserProfile/UserProfile";
import { Link } from "react-router-dom";

const Navbar = ({ updateSidenav, sidenavState }) => {
  return (
    <>
      <MDBNavbar id="main-navbar" expand="lg" light fixed="top" bgColor="light">
        <MDBContainer fluid>
          <MDBBtn
            onClick={() => updateSidenav(!sidenavState)}
            className="shadow-0 p-0 me-3 d-flex justify-content-end d-xxl-none ms-5"
            color="light"
          >
            <MDBIcon icon="bars" size="lg" fas />
          </MDBBtn>

          <MDBInputGroup
            textAfter={<MDBIcon icon="search" fas />}
            className="d-none d-md-flex w-auto my-auto"
          >
            <input
              type="search"
              className="form-control"
              placeholder='Search (ctrl + "/" to focus)'
              style={{ minWidth: "225px" }}
            />
          </MDBInputGroup>

          <MDBNavbarNav className="justify-content-end d-flex flex-row">
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  style={{ cursor: "pointer" }}
                  tag="a"
                  className="nav-link me-3 me-lg-0 hidden-arrow"
                >
                  <MDBIcon icon="bell" fas />
                  <MDBBadge pill notification color="danger">
                    1
                  </MDBBadge>
                </MDBDropdownToggle>
                <MDBDropdownMenu style={{ zIndex: 1060 }}>
                  <MDBDropdownItem>
                    <MDBSideNavLink>Some news</MDBSideNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBSideNavLink>Another news</MDBSideNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBSideNavLink>Something else here</MDBSideNavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className="">
              <MDBNavbarLink className="" href="#">
                <MDBIcon fas icon="fill-drip" />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink className="me-3 me-lg-0" href="#">
                <MDBIcon fab icon="github" />
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  style={{ cursor: "pointer" }}
                  tag="a"
                  className="nav-link me-3 me-lg-0 hidden-arrow"
                >
                  <MDBIcon flag="uk" fas />
                </MDBDropdownToggle>
                <MDBDropdownMenu style={{ zIndex: 1060 }}>
                  <MDBDropdownItem>
                    <MDBSideNavLink>
                      <MDBIcon flag="uk" fas /> English{" "}
                      <MDBIcon icon="check" className="text-success ms-2" />
                    </MDBSideNavLink>
                  </MDBDropdownItem>
                  {/* <MDBDropdownDivider /> */}
                  <MDBDropdownItem>
                    <MDBSideNavLink>
                      <MDBIcon flag="pl" fas /> Polski
                    </MDBSideNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBSideNavLink>
                      <MDBIcon flag="cn" fas /> 中文
                    </MDBSideNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBSideNavLink>
                      <MDBIcon flag="jp" fas /> 日本語
                    </MDBSideNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBSideNavLink>
                      <MDBIcon flag="de" fas /> Deutsch
                    </MDBSideNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBSideNavLink>
                      <MDBIcon flag="fr" fas /> Français
                    </MDBSideNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBSideNavLink>
                      <MDBIcon flag="es" fas /> Español
                    </MDBSideNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBSideNavLink>
                      <MDBIcon flag="ru" fas /> Русский
                    </MDBSideNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBSideNavLink>
                      <MDBIcon flag="pt" fas /> Português
                    </MDBSideNavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  style={{ cursor: "pointer" }}
                  tag="a"
                  className="nav-link hidden-arrow d-flex align-items-center"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle"
                    style={{ height: 22 }}
                    alt=""
                  />
                </MDBDropdownToggle>
                <MDBDropdownMenu style={{ zIndex: 1060 }}>
                  <MDBDropdownItem>
                    <MDBSideNavLink>
                      <Link to="/userprofile">Profile</Link>
                    </MDBSideNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBSideNavLink>Settings</MDBSideNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBSideNavLink>Logout</MDBSideNavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;
