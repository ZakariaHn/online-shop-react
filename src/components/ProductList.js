import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const items = props.data.map((item, i) => {
    return <ProductItem info={item} key={i} />;
  });
  return <ul>{items}</ul>;
};

export default ProductList;
