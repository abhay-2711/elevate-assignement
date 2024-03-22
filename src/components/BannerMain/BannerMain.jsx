import React from "react";
import "./bannerMain.css";

import HeaderTop from "../HeaderTop/HeaderTop";
import Logo from "../Logo/Logo";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";

const BannerMain = () => {
  return (
    <div className="banner_bg_main">
      <HeaderTop />
      <Logo />
      <Header />
      <Banner />
    </div>
  );
};

export default BannerMain;
