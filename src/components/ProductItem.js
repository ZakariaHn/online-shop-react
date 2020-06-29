import React from "react";

const ProductItem = (props) => {
  const {
    id,
    price,
    ammount,
    inventory,
    icon,
    productName,
    totalPrice,
  } = props.item;
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
          onClick={() => props.onIncrement(props.item)}
        >
          +
        </button>
        <h5> {ammount}</h5>
        <button
          className="btn btn-danger btn-sm m-2"
          disabled={ammount === 0}
          onClick={() => props.onDecrement(props.item)}
        >
          -
        </button>
      </div>
      <p>{`Total price ${totalPrice} €`}</p>
      <button
        onClick={() => props.onAddToCorp(props.item)}
        className="btn btn-primary btn-sm m-2"
      >
        {inventory > 0 ? "Add to cart" : "Sold out"}
      </button>
    </li>
  );
};

export default ProductItem;
