import React from "react";
// import ProductList from "./ProductList";

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ammount: 0,
      sameSortPrice: 0,
      total: [],
      finalPrice: 0,
      data: this.props.info,
    };
  }

  increment = () => {
    this.setState({
      ammount: this.state.ammount + 1,
      sameSortPrice:
        this.state.ammount * this.state.data.price + this.state.data.price,
    });
    this.state.total.push(this.state.data.price);
  };

  decrement = () => {
    this.setState({
      ammount: this.state.ammount - 1,
      sameSortPrice: this.state.sameSortPrice - this.state.data.price,
    });
  };

  addToCorp = () => {
    let sum = this.state.total.reduce((cur, acc) => cur + acc, 0);
    this.setState({
      ammount: 0,
      sameSortPrice: 0,
      finalPrice: this.state.finalPrice + sum,
    });
  };

  render() {
    const { id, price, productName, icon, inventory } = this.state.data;
    return (
      <li key={id}>
        {productName} <i>{icon}</i>
        <h5>Price for one item is {price} Eu</h5>
        <div className="buttons">
          <button disabled={inventory === 0} onClick={this.increment}>
            +
          </button>
          <h5> {this.state.ammount}</h5>
          <button disabled={this.state.ammount === 0} onClick={this.decrement}>
            -
          </button>
        </div>
        <h5>{`Total price ${this.state.sameSortPrice} Eu`}</h5>
        <button onClick={this.addToCorp}>
          {inventory > 0 ? "Add to corp" : "Sold out"}
        </button>
      </li>
    );
  }
}
