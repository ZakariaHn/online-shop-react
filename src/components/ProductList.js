import React from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends React.Component {
  render() {
    return (
      <div className="productItem">
        {this.props.data.map((item) => {
          return (
            <ProductItem
              item={item}
              key={item.id}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onAddToCorp={this.props.onAddToCorp}
            />
          );
        })}
      </div>
    );
  }
}
