import React from "react";
import CheckoutSummary from "../../CheckoutSummary/component/CheckoutSummary";
import ContactData from "./ContactData";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Checkout extends React.Component {
  onCheckoutCancel = () => {
    this.props.history.goBack();
  };
  onCheckoutContinue = () => {
    this.props.history.replace("/checkout-summary/contact-data");
  };

  render() {
    const checkOutRender = this.props.orderConfirm ? <Redirect to="/" /> : null;
    return (
      <div style={{ textAlign: "center" }}>
        {checkOutRender}

        <CheckoutSummary
          ingredients={this.props.ingrnt}
          onCheckoutCancel={this.onCheckoutCancel}
          onCheckoutContinue={this.onCheckoutContinue}
        />
        <Route
          path={`${this.props.match.path}/contact-data`}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = ({
  initIngredientsReducer,
  orderIngredientsReducer,
}) => {
  return {
    ingrnt: initIngredientsReducer.ingredients,
    price: initIngredientsReducer.totalPrice,
    orderConfirm: orderIngredientsReducer.orderConfirm,
  };
};

export default connect(mapStateToProps)(Checkout);
