import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  return (
    <div className="productItem">
      {props.data.map((item) => {
        return (
          <ProductItem
            item={item}
            key={item.id}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
            onAddToCorp={props.onAddToCorp}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
