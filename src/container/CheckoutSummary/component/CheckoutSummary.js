import React from "react";
import { Button } from "antd";
import Burger from "../../Burger/Burger";

const CheckoutSummary = (props) => {
  return (
    <>
      <h1>We hope the burger tastes good!</h1>
      <div>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button type="dashed" danger onClick={props.onCheckoutCancel}>
        Cancel
      </Button>
      <Button type="primary" onClick={props.onCheckoutContinue}>
        Continue
      </Button>
    </>
  );
};

export default CheckoutSummary;
