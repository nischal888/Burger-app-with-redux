import React from "react";
import { Modal, Button } from "antd";

const OrderSummary = (props) => {
  const { ingredients, price, close, clickOrder } = props;

  return (
    <Modal
      title="Your Order"
      visible
      onCancel={props.close}
      footer={[
        <Button key="back" onClick={close}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={clickOrder}>
          Continue
        </Button>,
      ]}
    >
      <h2>A delicious Burger with the following ingredients</h2>
      <ul>
        {Object.keys(ingredients).map((igKeys) => {
          return (
            <li key={igKeys}>
              <strong>{igKeys} : </strong>
              {ingredients[igKeys]}
            </li>
          );
        })}
      </ul>
      <p>
        <strong>Total Price: $ {price.toFixed(2)}</strong>
      </p>
      <span>Continue to checkout?</span>
    </Modal>
  );
};

export default OrderSummary;
