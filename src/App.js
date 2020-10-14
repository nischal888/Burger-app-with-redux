import React from "react";
import "./App.less";
import BurgerBuilder from "./container/BurgerBuilder";
import { connect } from "react-redux";
import { Menu } from "antd";
import logo from "./assets/images/burger.svg";
import { Switch, Route, Link } from "react-router-dom";
import Checkout from "./container/Checkout/component/Checkout";
import OrderDetails from "./container/OrderDetails/component/OrderDetails";
import Authentication from "./container/Aunthentication/";
import LogOut from "./container/Aunthentication/components/LogOut";
function App(props) {
  return (
    <div className="App">
      <header className="header-styling">
        <h1>
          <img src={logo} alt="BurgerLogo" />
        </h1>
        <nav>
          <Menu mode="horizontal">
            <Menu.Item>
              <Link to="/">Burger Builder</Link>
            </Menu.Item>
            {props.tokenId ? (
              <Menu.Item>
                <Link to="/order-details">Orders</Link>
              </Menu.Item>
            ) : null}
            <Menu.Item>
              {props.tokenId ? (
                <Link to="/logout">Log Out</Link>
              ) : (
                <Link to="/authentication">Authenticate</Link>
              )}
            </Menu.Item>
          </Menu>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout-summary" component={Checkout} />
        <Route path="/order-details" component={OrderDetails} />
        <Route path="/authentication" component={Authentication} />
        <Route path="/logout" component={LogOut} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ authenticationReducer }) => {
  return { tokenId: authenticationReducer.tokenId !== null };
};

export default connect(mapStateToProps)(App);
