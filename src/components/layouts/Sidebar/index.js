import { HomeOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { FaChartBar, FaUserAlt } from "react-icons/fa";
import { RiListSettingsFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const { Sider } = Layout;

function Sidebar() {
  return (
    <>
      <Sider trigger={null} className="navbar">
        <div className="logo" />
        <NavLink exact to="/" className="logo">
          <img
            src="https://cdn.pixabay.com/photo/2016/12/07/16/15/lotus-1889805_960_720.png"
            alt="logo-img"
            className="logo-img"
          />
        </NavLink>
        <Menu
          className="navbar-menu"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <RiListSettingsFill />,
              label: <Link to="/management">Management</Link>,
            },
            {
              key: "2",
              icon: <FaChartBar />,
              label: <Link to="/report">Report</Link>,
            },
            {
              key: "3",
              icon: <FaUserAlt />,
              label: <Link to="/account">User</Link>,
            },
          ]}
        />
      </Sider>
    </>
  );
}

export default Sidebar;
