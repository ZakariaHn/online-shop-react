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

  changeHandler = (e) => {
    this.setState({
      userInput: e.target.value.trim(),
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const userText = this.state.userInput;
    let newArr = this.state.data.filter(
      (item) => item.productName === userText
    );
    this.state.userInput === ""
      ? this.setState({ filteredData: [] })
      : this.setState({ filteredData: newArr });
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
        />
      </React.Fragment>
    );
  }
}
