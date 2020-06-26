import React from "react";
// import ProductList from "./ProductList";

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ammount: 0,
      sameSortPrice: 0,
      total: [],
      finalPrice: [],
      data: this.props.info,
    };
  }

  increment = () => {
    const { ammount, total } = this.state,
      { price } = this.state.data;

    this.setState({
      ammount: ammount + 1,
      sameSortPrice: ammount * price + price,
    });

    total.push(price);
  };

  decrement = () => {
    const { ammount, sameSortPrice } = this.state,
      { price } = this.state.data;

    this.setState({
      ammount: ammount - 1,
      sameSortPrice: sameSortPrice - price,
    });
  };

  addToCorp = () => {
    const { total, finalPrice } = this.state;
    let sum = total.reduce((cur, acc) => cur + acc);

    this.setState({
      ammount: 0,
      sameSortPrice: 0,
    });

    finalPrice.push(sum);
    console.log(finalPrice);
  };

  render() {
    const { id, price, productName, icon, inventory } = this.state.data,
      { ammount, sameSortPrice } = this.state;

    return (
      <li key={id}>
        {productName} <i>{icon}</i>
        <h5>Price for one item is {price} Eu</h5>
        <div className="buttons">
          <button disabled={inventory === 0} onClick={this.increment}>
            +
          </button>
          <h5> {ammount}</h5>
          <button disabled={ammount === 0} onClick={this.decrement}>
            -
          </button>
        </div>
        <h5>{`Total price ${sameSortPrice} Eu`}</h5>
        <button onClick={this.addToCorp}>
          {inventory > 0 ? "Add to cart" : "Sold out"}
        </button>
      </li>
    );
  }
}
