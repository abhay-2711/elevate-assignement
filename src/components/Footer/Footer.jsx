import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div class="footer_section layout_padding">
        <div class="container">
          <div class="footer_logo">
            <a href="index.html">
              <img src="images/footer-logo.png" alt="" />
            </a>
          </div>
          <div class="input_bt">
            <input
              type="text"
              class="mail_bt"
              placeholder="Your Email"
              name="Your Email"
            />
            <span class="subscribe_bt" id="basic-addon2">
              <a href="#subscribe">Subscribe</a>
            </span>
          </div>
          <div class="footer_menu">
            <ul>
              <li>
                <a href="#sellers">Best Sellers</a>
              </li>
              <li>
                <a href="#ideas">Gift Ideas</a>
              </li>
              <li>
                <a href="#releases">New Releases</a>
              </li>
              <li>
                <a href="#deals">Today's Deals</a>
              </li>
              <li>
                <a href="#services">Customer Service</a>
              </li>
            </ul>
          </div>
          <div class="location_main">
            Contact : <a href="#number">+91 6306645505</a>
          </div>
        </div>
      </div>
      {/* copyright section start */}
      <div class="copyright_section">
        <div class="container">
          <p class="copyright_text">
            © 2024 All Rights Reserved. Made with ❤️ by - Abhay Pratap Singh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
