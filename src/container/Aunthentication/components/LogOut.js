import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../store/actions";

class LogOut extends React.Component {
  componentDidMount() {
    this.props.logOut();
  }
  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = {
  logOut,
};

export default connect(null, mapDispatchToProps)(LogOut);
