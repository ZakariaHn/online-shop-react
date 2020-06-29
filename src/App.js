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

  handleReset = () => {
    const counters = this.state.data.map((c) => {
      c.ammount = 0;
      c.totalPrice = 0;
      return c;
    });
    this.setState({ counters, totalCoasts: 0 });
  };

  handlePrintPill = () => {};
  // ====================> filter functions <==============

  changeHandler = (e) => {
    const { userInput, data } = this.state;
    this.setState({
      userInput: e.target.value.trim(),
    });
    const userText = userInput.toLowerCase();
    let newArr = data.filter((item) => item.productName === userText);
    userInput === ""
      ? this.setState({ filteredData: [] })
      : this.setState({ filteredData: newArr });
  };

  submitHandler = (e) => {
    const { userInput, data } = this.state;
    e.preventDefault();
    const userText = userInput.toLowerCase();
    const searchText = userText ? userText : "";
    let newArr = data.filter((item) => item.productName === searchText);
    this.setState({
      filteredData: newArr,
    });
  };

  render() {
    const { userInput, filteredData, data, totalCoasts } = this.state;
    return (
      <React.Fragment>
        <header className="header">
          <Form onSubmit={this.submitHandler} onChange={this.changeHandler} />
          <Counter
            onPrint={this.handlePrintPill}
            onReset={this.handleReset}
            totalCoasts={totalCoasts}
          />
        </header>
        <ProductList
          data={userInput ? filteredData : data}
          onIncrement={this.increment}
          onDecrement={this.decrement}
          onAddToCorp={this.addToCorp}
        />
      </React.Fragment>
    );
  }
}
