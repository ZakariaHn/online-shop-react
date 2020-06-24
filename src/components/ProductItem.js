import React from "react";

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ammount: 0,
      totalPrice: 0,
      total: [],
      data: this.props.info,
    };
  }

  increment = () => {
    this.setState({
      ammount: this.state.ammount + 1,
      totalPrice:
        this.state.ammount * this.state.data.price + this.state.data.price,
    });
    // let totalAmount = 0;
    // totalAmount += this.state.ammount;
  };

  decrement = () => {
    this.setState({
      ammount: this.state.ammount - 1,
      totalPrice: this.state.totalPrice - this.state.data.price,
    });
  };

  render() {
    const { id, price, productName, icon, inventory } = this.state.data;
    return (
      <li key={id}>
        {productName} <i>{icon}</i>
        <h5>Price for one Item {price} Eu</h5>
        <lable>Corp: {this.state.ammount}</lable>
        <lable>TotalPrice {this.state.totalPrice} Eu</lable>
        <br></br>
        <button disabled={inventory === 0} onClick={this.increment}>
          {inventory > 0 ? "Add to cart" : "Sold out"}
        </button>
        <button disabled={this.state.ammount === 0} onClick={this.decrement}>
          Remove from cart
        </button>
        <br></br>
        <br></br>
      </li>
    );
  }
}
