import React, { Component } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";
import Form from "./components/Form";
import Counter from "./components/counter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      data: Data,
      filteredData: [],
      allItemsPrice: [],
      totalCoasts: 0,
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
  };

  addToCorp = () => {
    let sum = this.state.allItemsPrice.reduce((cur, acc) => cur + acc);
    this.setState({
      totalCoasts: sum,
    });
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

  handleReset = () => {
    const counters = this.state.data.map((c) => {
      c.ammount = 0;
      c.totalPrice = 0;
      return c;
    });
    this.setState({ counters, totalCoasts: 0 });
  };

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <Form onSubmit={this.submitHandler} onChange={this.changeHandler} />
          <Counter
            onReset={this.handleReset}
            totalCoasts={this.state.totalCoasts}
          />
        </header>
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
