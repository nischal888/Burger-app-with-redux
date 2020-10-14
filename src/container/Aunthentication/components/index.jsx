import React from "react";
import { Form, Input, Button } from "antd";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class AuthenticationComponent extends React.Component {
  state = {
    email: "",
    password: "",
    isSignUp: true,
  };

  onUserChangeHandle = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  authenticateSubmitHandle = () => {
    const payload = {
      email: this.state.email,
      password: this.state.password,
      returnSecureToken: true,
    };
    this.props.authenticateUser(payload, this.state.isSignUp);
  };
  switchSignOption = () => {
    this.setState((prevState) => {
      return { isSignUp: !prevState.isSignUp };
    });
  };

  render() {
    let autoRedirect = null;
    if (this.props.tokenId) {
      if (this.props.buildStatus) {
        autoRedirect = <Redirect to="/checkout-summary" />;
      } else {
        autoRedirect = <Redirect to="/" />;
      }
    }

    return (
      <div style={{ maxWidth: 500, margin: "0 auto" }}>
        {autoRedirect}
        <Form name="basic">
          <Form.Item label="Username">
            <Input
              name="email"
              value={this.state.name}
              onChange={this.onUserChangeHandle}
            />
          </Form.Item>

          <Form.Item label="Password">
            <Input.Password
              name="password"
              value={this.state.password}
              onChange={this.onUserChangeHandle}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick={this.authenticateSubmitHandle}>
              Submit
            </Button>
            <Button
              type="secondary"
              style={{ marginLeft: 10 }}
              onClick={this.switchSignOption}
            >
              Switch To Sign {this.state.isSignUp ? "Sign In" : "Sign Up "}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = ({ authenticationReducer, initIngredientsReducer }) => {
  return {
    tokenId: authenticationReducer.tokenId !== null,
    buildStatus: initIngredientsReducer.builder,
  };
};

export default connect(mapStateToProps)(AuthenticationComponent);
