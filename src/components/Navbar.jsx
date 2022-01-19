import { Avatar, Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/cryptocurrency.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={logo} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
          {/* <Button className="menu-control-container"></Button> */}
        </Typography.Title>
      </div>
    </div>
  );
};

export default Navbar;
