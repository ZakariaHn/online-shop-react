import React from "react";

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ammount: 0,
      data: this.props.info,
    };
  }

  increment = () => {
    this.setState({
      ammount: this.state.ammount + 1,
    });
  };
  decrement = () => {
    this.setState({ ammount: this.state.ammount - 1 });
  };

  render() {
    return (
      <li key={this.state.data.id}>
        {this.state.data.productName} <i>{this.state.data.icon}</i>
        <h5>{this.state.data.price} Eu</h5>
        <button
          disabled={this.state.data.inventory === 0}
          onClick={this.increment}
        >
          {this.state.data.inventory > 0 ? "Add to cart" : "Sold out"}
        </button>
        <button disabled={this.state.ammount === 0} onClick={this.decrement}>
          Remove from cart
        </button>
        <h2>{this.state.ammount}</h2>
      </li>
    );
  }
}
