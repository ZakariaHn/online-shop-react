import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  // const ff = props.finaly;
  const items = props.data.map((item, i) => {
    return <ProductItem info={item} key={i} />;
  });
  return (
    <div>
      <ul>{items}</ul>
      {/* <h3>{ff}</h3> */}
    </div>
  );
};

export default ProductList;
