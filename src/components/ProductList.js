import React from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends React.Component {
  // addToCorp = () => {
  //   const { total, finalPrice } = this.state;
  //   let sum = total.reduce((cur, acc) => cur + acc);

  //   this.setState({
  //     ammount: 0,
  //     sameSortPrice: 0,
  //   });

  //   finalPrice.push(sum);
  //   console.log(finalPrice);
  // };

  render() {
    return (
      <React.Fragment>
        {this.props.data.map((item) => {
          return (
            <ProductItem
              item={item}
              key={item.id}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
