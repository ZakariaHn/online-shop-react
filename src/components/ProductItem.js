import React from "react";

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ammount: 0 };
  }

  increment = () => {
    this.setState({ ammount: this.state.ammount + 1 });
  };
  decrement = () => {
    this.setState({ ammount: this.state.ammount - 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <h2>{this.state.ammount}</h2>
      </div>
      // <li key={id}>
      //   {productName} <i>{icon}</i>
      //   <h5>{price} Eu</h5>
      //   <h2></h2>
      //   <button disabled={inventory === 0} onClick={add}>
      //     {inventory > 0 ? "Add to cart" : "Sold out"}
      //   </button>
      // </li>
    );
  }
}
