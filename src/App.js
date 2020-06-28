import React, { Component } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";
import Form from "./components/Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      data: Data,
      filteredData: [],
      allItemsPrice: [],
    };
  }

  increment = (counter) => {
    const counters = [...this.state.data];
    const i = counters.indexOf(counter);
    counters[i] = { ...counter };
    counters[i].ammount++;
    counters[i].totalPrice = counters[i].ammount * counters[i].price;
    this.state.allItemsPrice.push(counters[i].price);
    this.setState({
      data: counters,
    });
    console.log(this.state.allItemsPrice);
  };

  decrement = (counter) => {
    const counters = [...this.state.data];
    const i = counters.indexOf(counter);
    counters[i] = { ...counter };
    counters[i].ammount--;
    counters[i].totalPrice = counters[i].totalPrice - counters[i].price;

    this.setState({
      data: counters,
    });
    console.log(this.state.allItemsPrice);
  };

  addToCorp = () => {
    let sum = this.state.allItemsPrice.reduce((cur, acc) => cur + acc);
    console.log(sum);
  };

  // ====================> filter functions <==============

  changeHandler = (e) => {
    this.setState({
      userInput: e.target.value.trim(),
    });
    const userText = this.state.userInput.toLowerCase();
    let newArr = this.state.data.filter(
      (item) => item.productName === userText
    );
    this.state.userInput === ""
      ? this.setState({ filteredData: [] })
      : this.setState({ filteredData: newArr });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const userText = this.state.userInput.toLowerCase();
    const searchText = userText ? userText : "";
    let newArr = this.state.data.filter(
      (item) => item.productName === searchText
    );
    this.setState({
      filteredData: newArr,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.submitHandler} onChange={this.changeHandler} />
        <ProductList
          data={
            this.state.userInput ? this.state.filteredData : this.state.data
          }
          onIncrement={this.increment}
          onDecrement={this.decrement}
          onAddToCorp={this.addToCorp}
        />
      </React.Fragment>
    );
  }
}
