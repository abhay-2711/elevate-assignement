import React from "react";
import "./header.css";

const Header = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div>
      <div className="header_section">
        <div className="container">
          <div className="containt_main">
            <div id="mySidenav" className="sidenav">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onClick={closeNav}
              >
                &times;
              </a>
              <a href="/">Home</a>
              <a href="/">Fashion</a>
              <a href="/">Electronic</a>
              <a href="/">Jewellery</a>
            </div>
            <span className="toggle_icon" onClick={openNav}>
              <img src="images/toggle-icon.png" alt="" />
            </span>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All Category
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </div>
            <div className="main">
              {/* <!-- Another variation with a button --> */}
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search this blog"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    style={{backgroundColor: "#f26522", borderColor: "#f26522"}}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="header_box">
              <div className="lang_box">
                <a
                  href="#"
                  title="Language"
                  className="nav-link"
                  data-toggle="dropdown"
                  aria-expanded="true"
                >
                  <img
                    src="images/flag-uk.png"
                    alt="flag"
                    className="mr-2"
                    title="United Kingdom"
                  />
                  English{" "}
                  <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
                </a>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    <img src="images/flag-france.png" className="mr-2" alt="flag" />
                    French
                  </a>
                </div>
              </div>
              <div className="login_menu">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      <span className="padding_10">Cart</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <span className="padding_10">Cart</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
