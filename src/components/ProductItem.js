import React from "react";
// import ProductList from "./ProductList";

export default class ProductItem extends React.Component {
  render() {
    const {
      id,
      price,
      ammount,
      inventory,
      icon,
      productName,
    } = this.props.item;
    return (
      <li key={id}>
        {productName} <i>{icon}</i>
        <h5>Price for one item is {price} Eu</h5>
        <div className="buttons">
          <button
            disabled={inventory === 0}
            onClick={() => this.props.onIncrement(this.props.item)}
          >
            +
          </button>
          <h5> {ammount}</h5>
          <button
            disabled={ammount === 0}
            onClick={() => this.props.onDecrement(this.props.item)}
          >
            -
          </button>
        </div>
        {/* <h5>{`Total price ${sameSortPrice} Eu`}</h5>
        <button onClick={this.addToCorp}>
          {inventory > 0 ? "Add to cart" : "Sold out"}
        </button> */}
      </li>
    );
  }
}
