import React from "react";
import "./App.less";
import BurgerBuilder from "./container/BurgerBuilder";
import { Menu } from "antd";
import logo from "./assets/images/burger.svg";
import { Switch, Route, Link } from "react-router-dom";
import Checkout from "./container/Checkout/component/Checkout";
import OrderDetails from "./container/OrderDetails/component/OrderDetails";
function App() {
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
            <Menu.Item>
              <Link to="/order-details">Orders</Link>
            </Menu.Item>
          </Menu>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout-summary" component={Checkout} />
        <Route path="/order-details" component={OrderDetails} />
      </Switch>
    </div>
  );
}

export default App;
