import React from "react";

export default class ProductItem extends React.Component {
  render() {
    const {
      id,
      price,
      ammount,
      inventory,
      icon,
      productName,
      totalPrice,
    } = this.props.item;
    return (
      <li key={id}>
        <div className="cardHeader">
          <h5> {productName} </h5>
          <i>{icon}</i>
        </div>
        <p>{price} €</p>
        <div className="buttons">
          <button
            className="btn btn-danger btn-sm m-2"
            disabled={inventory === 0}
            onClick={() => this.props.onIncrement(this.props.item)}
          >
            +
          </button>
          <h5> {ammount}</h5>
          <button
            className="btn btn-danger btn-sm m-2"
            disabled={ammount === 0}
            onClick={() => this.props.onDecrement(this.props.item)}
          >
            -
          </button>
        </div>
        <p>{`Total price ${totalPrice} €`}</p>
        <button
          onClick={() => this.props.onAddToCorp(this.props.item)}
          className="btn btn-primary btn-sm m-2"
        >
          {inventory > 0 ? "Add to cart" : "Sold out"}
        </button>
      </li>
    );
  }
}
