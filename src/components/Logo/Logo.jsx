import React from "react";
import "./logo.css";

const Logo = () => {
  return (
    <div>
      <div className="logo_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="logo">
                <a href="/">
                  <img src="/images/logo.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
