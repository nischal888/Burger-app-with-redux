import React from "react";
import { connect } from "react-redux";
import { Card } from "antd";
import { fetchOrder } from "../store/action";
class OrderDetails extends React.Component {
  componentDidMount() {
    this.props.fetchOrder(this.props.tokenId);
  }
  render() {
    const { fetchOrders } = this.props;

    return (
      <div>
        {fetchOrders &&
          fetchOrders.map((item) => (
            <Card key={item.id} style={{ width: 700 }}>
              <p>
                <strong>Ingredients: </strong>
                {Object.keys(item.ingredients).map((key) => (
                  <span
                    style={{
                      textTransform: "capitalize",
                      border: "1px dotted #ccc",
                      padding: 2,
                      margin: "0 2px",
                    }}
                    key={key}
                  >{`${key} (${item.ingredients[key]}) `}</span>
                ))}
              </p>
              <p>
                <b>
                  Price: <strong>USD {item.totalPrice.toFixed(2)}</strong>
                </b>
              </p>
            </Card>
          ))}
      </div>
    );
  }
}
const mapStateToProps = ({ fetchOrderReducer, authenticationReducer }) => {
  return {
    fetchOrders: fetchOrderReducer.fetchedOrders,
    tokenId: authenticationReducer.tokenId,
  };
};
const mapDispatchToProps = {
  fetchOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
