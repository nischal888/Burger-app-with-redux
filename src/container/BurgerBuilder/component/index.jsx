import React from "react";
import Burger from "../../Burger/Burger";
import BuildControls from "../../BuildControls";
import "../BurgerBuilder.less";
import { Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import OrderSummary from "./OrderSummary";
import { connect } from "react-redux";
import ActionTypes from "../../../store/actions";
import {
  initIngredients,
  addIngredients,
  deleteIngredients,
} from "../store/actions";
import { OrderConfirm } from "../../Checkout/store/action";
const controls = [
  { labels: "Salad", type: "salad" },
  { labels: "Bacon", type: "bacon" },
  { labels: "Cheese", type: "cheese" },
  { labels: "Meat", type: "meat" },
];

class BurgerBuilderComponent extends React.Component {
  // state = {
  //   ingredients: null,
  //   totalPrice: 4,
  //   purchaseable: false,
  //   summaryModal: false,
  //   isLoading: false,
  // };
  state = {
    purchaseable: false,
    summaryModal: false,
    isLoading: false,
  };

  componentDidMount() {
    // axios
    //   .get("https://react-burgerapp-942a6.firebaseio.com/ingredients.json")
    //   .then((response) => {
    //     this.setState({
    //       ingredients: response.data,
    //     });
    //   })
    //   .catch((error) => error);
    this.props.initIngredients();
  }

  updatePurchase = () => {
    const updatedIngredients = { ...this.props.newIngredients };
    console.log("component", updatedIngredients);
    const sum = Object.keys(updatedIngredients)
      .map((igKeys) => {
        return updatedIngredients[igKeys];
      })
      .reduce((arr, el) => {
        return arr + el;
      }, 0);
    return sum > 0;
  };

  toggleModal = () => {
    this.setState({
      summaryModal: !this.state.summaryModal,
    });
  };
  openOrderSummary = () => {
    this.setState({
      summaryModal: true,
    });
  };

  continueWithOrder = () => {
    this.props.OrderConfirm();
    this.props.history.push("/checkout-summary");
  };

  render() {
    let disableBtn = { ...this.props.newIngredients };
    for (let prop in disableBtn) {
      // returns true/false for each Ingredients
      disableBtn[prop] = disableBtn[prop] <= 0;
    }
    const antIcon = <LoadingOutlined style={{ fontSize: 44 }} spin />;

    return (
      <Spin indicator={antIcon} spinning={this.state.isLoading}>
        {this.props.newIngredients ? (
          <div>
            <Burger ingredients={this.props.newIngredients} />

            <div className="priceOrder">
              <p className="price">Price: $ {this.props.price.toFixed(2)}</p>
              <Button
                type="primary"
                onClick={this.openOrderSummary}
                disabled={!this.updatePurchase()}
              >
                Order
              </Button>
            </div>
            {controls.map((ctrl) => {
              return (
                <BuildControls
                  key={ctrl.labels}
                  label={ctrl.labels}
                  type={ctrl.type}
                  add={() => this.props.addIngredients(ctrl.type)}
                  delete={() => this.props.deleteIngredients(ctrl.type)}
                  disabled={disableBtn}
                />
              );
            })}
            {this.state.summaryModal && (
              <OrderSummary
                ingredients={this.props.newIngredients}
                close={this.toggleModal}
                price={this.props.price}
                clickOrder={this.continueWithOrder}
              />
            )}
          </div>
        ) : (
          <Spin spinner="true" indicator={antIcon} style={{ top: 95 }} />
        )}
      </Spin>
    );
  }
}
const mapStateToProps = ({ reducer, initIngredientsReducer }) => {
  return {
    //ingrnt: reducer.ingredients,
    price: initIngredientsReducer.totalPrice,
    newIngredients: initIngredientsReducer.ingredients,
  };
};
const mapDispatchToProps = {
  addIngredients,
  deleteIngredients,
  initIngredients,
  OrderConfirm,
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addIngredients: (ingrName) =>
//       dispatch({ type: ActionTypes.ADD_INGREDIENT, ingredientName: ingrName }),
//     deleteIngredients: (ingrName) =>
//       dispatch({
//         type: ActionTypes.REMOVE_INGREDIENT,
//         ingredientName: ingrName,
//       }),
//     initIngredients: dispatch(initIngredients()),
//   };
// };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilderComponent);
