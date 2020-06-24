import React, { Component } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductList data={Data} />
      </React.Fragment>
    );
  }
}
