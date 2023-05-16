/** @format */

import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Banner from "./Banner";
import Footer from "./Footer";

export class Common extends Component {
  render() {
    return (
      <>
        <Nav />
        <Banner />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Common;
