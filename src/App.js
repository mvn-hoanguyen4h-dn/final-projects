import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Route, Switch, NavLink } from "react-router-dom";
import "./assets/scss/styles.scss";
import Sidebar from "./components/layouts/Sidebar";
import PrivateRoute from "./core/guards/PrivateRoute";
import Account from "./pages/Account";
import Auth from "./pages/Auth";
import Features from "./pages/Features";

const { Header, Content } = Layout;

function App() {
  return (
    <>
      <Layout className="App">
        <Sidebar className="navbar" />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <nav>
              <ul className="nav-links-list flex">
                <li className="nav-links-item">
                  <NavLink to="/auth/login" activeClassName="active">
                    <FaSignInAlt />
                  </NavLink>
                </li>
                <li className="nav-links-item">
                  <NavLink to="/account" activeClassName="active">
                    <FaUserAlt />
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Header>
          <Content className="site-layout-background">
            <Switch>
              <PrivateRoute path="/account">
                <Account />
              </PrivateRoute>
              <Route path="/auth">
                <Auth />
              </Route>
              <PrivateRoute path="/">
                <Features />
              </PrivateRoute>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
