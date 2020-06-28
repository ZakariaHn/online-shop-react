import React from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.data,
    };
    console.log(this.state.items);
  }

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

  increment = (counter) => {
    const counters = [...this.state.items];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].ammount++;
    counters[index].totalPrice =
      counters[index].ammount * counters[index].price;
    this.setState({
      items: counters,
    });
  };

  decrement = (counter) => {
    const counters = [...this.state.items];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].ammount--;
    counters[index].totalPrice =
      counters[index].totalPrice - counters[index].price;
    this.setState({
      items: counters,
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.items.map((item) => {
          return (
            <ProductItem
              item={item}
              key={item.id}
              onIncrement={this.increment}
              onDecrement={this.decrement}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
