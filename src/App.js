import React from "react";
import "./App.less";
import BurgerBuilder from "./container/BurgerBuilder";
import { connect } from "react-redux";
import { Menu } from "antd";
import logo from "./assets/images/burger.svg";
import { Switch, Route, Link, withRouter, Redirect } from "react-router-dom";
import Checkout from "./container/Checkout/component/Checkout";
import OrderDetails from "./container/OrderDetails/component/OrderDetails";
import Authentication from "./container/Aunthentication/";
import LogOut from "./container/Aunthentication/components/LogOut";
import { retainLoginStatus } from "./container/Aunthentication/store/actions";
class App extends React.Component {
  componentDidMount() {
    this.props.retainLoginStatus();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/authentication" component={Authentication} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.tokenId) {
      routes = (
        <Switch>
          <Route path="/checkout-summary" component={Checkout} />
          <Route path="/order-details" component={OrderDetails} />
          <Route path="/logout" component={LogOut} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }
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
              {this.props.tokenId ? (
                <Menu.Item>
                  <Link to="/order-details">Orders</Link>
                </Menu.Item>
              ) : null}
              <Menu.Item>
                {this.props.tokenId ? (
                  <Link to="/logout">Log Out</Link>
                ) : (
                  <Link to="/authentication">Authenticate</Link>
                )}
              </Menu.Item>
            </Menu>
          </nav>
        </header>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = ({ authenticationReducer }) => {
  return { tokenId: authenticationReducer.tokenId !== null };
};
const mapDispatchToProps = {
  retainLoginStatus,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
