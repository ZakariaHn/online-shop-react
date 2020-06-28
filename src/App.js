import React, { Component } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      data: Data,
      filteredData: [],
    };
  }

  increment = (counter) => {
    const counters = [...this.state.data];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].ammount++;
    counters[index].totalPrice =
      counters[index].ammount * counters[index].price;
    this.setState({
      data: counters,
    });
  };

  decrement = (counter) => {
    const counters = [...this.state.data];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].ammount--;
    counters[index].totalPrice =
      counters[index].totalPrice - counters[index].price;
    this.setState({
      data: counters,
    });
  };

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
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            onChange={this.changeHandler}
            value={this.state.userInput}
          />
          <input type="submit" value="filter" />
        </form>
        <ProductList
          data={
            this.state.userInput ? this.state.filteredData : this.state.data
          }
          onIncrement={this.increment}
          onDecrement={this.decrement}
        />
      </React.Fragment>
    );
  }
}
