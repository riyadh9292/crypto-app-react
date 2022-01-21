import { Avatar, Menu, Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/cryptocurrency.png";
import {
  BulbOutlined,
  FundOutlined,
  HolderOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons/lib/icons";

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
      <Menu theme="dark">
        <Menu.Item key="home" icon={<HolderOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="crypto" icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>

        <Menu.Item key="exchanges" icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item key="news" icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
