import AuthenticationComponent from "./components";
import { authenticateUser } from "./store/actions";
import { connect } from "react-redux";

const mapDispatchToProps = {
  authenticateUser,
};

const Authentication = AuthenticationComponent;

export default connect(null, mapDispatchToProps)(Authentication);
