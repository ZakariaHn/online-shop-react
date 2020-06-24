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
    this.setState({
      ammount: this.state.ammount + 1,
      sameSortPrice:
        this.state.ammount * this.state.data.price + this.state.data.price,
    });
    this.state.total.push(this.state.data.price);
    // let allItemsPrice = [];
    // allItemsPrice.push(this.state.data.price);
    console.log(this.state.total);
    // return allItemsPrice;
  };

  decrement = () => {
    this.setState({
      ammount: this.state.ammount - 1,
      sameSortPrice: this.state.sameSortPrice - this.state.data.price,
    });
  };

  addToCorp = () => {
    this.setState({
      ammount: 0,
      sameSortPrice: 0,
      total: [...this.state.total],
    });
    let sum = this.state.total.reduce((cur, acc) => cur + acc);

    // let finalsum = this.state.total.reduce((cur, acc) => cur + acc);
    // this.state.finalPrice.push(finalsum);
    // console.log(finalsum);
  };

  render() {
    const { id, price, productName, icon, inventory } = this.state.data;
    return (
      <li key={id}>
        {productName} <i>{icon}</i>
        <h5>Price for one item is {price} Eu</h5>
        <h5>Corp: {this.state.ammount}</h5>
        <h5>Total price {this.state.sameSortPrice} Eu</h5>
        <br></br>
        <button disabled={inventory === 0} onClick={this.increment}>
          +
        </button>
        <button disabled={this.state.ammount === 0} onClick={this.decrement}>
          -
        </button>
        <button onClick={this.addToCorp}>
          {inventory > 0 ? "Add to cart" : "Sold out"}
        </button>
        <br></br>
        <br></br>
        {/* <ProductList finaly={this.state.finalPrice} /> */}
      </li>
    );
  }
}
