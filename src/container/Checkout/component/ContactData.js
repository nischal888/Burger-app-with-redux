import React from "react";
import { Form, Input, Button, Select, Spin } from "antd";
import "../../Checkout/Checkout.less";
import { LoadingOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { orderIngredients } from "../store/action";
const { Option } = Select;
class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    street: "",
    postalCode: "",
    deliveryMethod: "",
    isLoading: false,
  };
  onChangeHandle = (event) => {
    event.preventDefault();
    //console.log(event);
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  onOrderSubmit = () => {
    this.setState({
      isLoading: true,
    });
    //e.preventDefault();
    const payload = {
      name: this.state.name,
      email: this.state.email,
      street: this.state.street,
      postalCode: this.state.postalCode,
      deliveryMethod: this.state.deliveryMethod,
      ingredients: this.props.ingrnt,
      totalPrice: this.props.price,
    };
    // fetch("https://react-burgerapp-942a6.firebaseio.com/orders.json", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // }).then((response) => {
    //   this.setState({
    //     isLoading: false,
    //   });
    //   this.props.history.push("/");
    // });
    this.props.orderIngredients(payload);
  };
  render() {
    const antIcon = <LoadingOutlined style={{ fontSize: 44 }} spin />;
    return (
      <div className="contact-wrap">
        <Form>
          <Form.Item label="Name">
            <Input
              name="name"
              value={this.state.name}
              onChange={this.onChangeHandle}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              name="email"
              value={this.state.email}
              onChange={this.onChangeHandle}
            />
          </Form.Item>
          <Form.Item label="Street">
            <Input
              name="street"
              value={this.state.street}
              onChange={this.onChangeHandle}
            />
          </Form.Item>
          <Form.Item label="Postal Code">
            <Input
              name="postalCode"
              value={this.state.postalCode}
              onChange={this.onChangeHandle}
            />
          </Form.Item>
          <Form.Item label="Delevery Method">
            <Select
              name="deliveryMethod"
              onChange={(value) => {
                this.setState({
                  deliveryMethod: value,
                });
              }}
              value={this.state.deliveryMethod}
            >
              <Option value="Fastest">Fastest</Option>
              <Option value="Moderate">Moderate</Option>
            </Select>
          </Form.Item>
          <Button
            onClick={this.onOrderSubmit}
            type="primary"
            style={{ float: "right" }}
          >
            Order Now
          </Button>
        </Form>
        {this.state.isLoading && (
          <div className="spinner-styling">
            <Spin spinner="true" indicator={antIcon} />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ initIngredientsReducer }) => {
  return {
    ingrnt: initIngredientsReducer.ingredients,
    price: initIngredientsReducer.totalPrice,
  };
};
const mapDispatchToProps = {
  orderIngredients,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
