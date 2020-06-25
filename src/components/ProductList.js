import React from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.data,
    };

    this.mappedItems = this.state.items.map((item, i) => {
      return <ProductItem info={item} key={i} />;
    });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <ul>{this.mappedItems}</ul>
        </div>
      </React.Fragment>
    );
  }
}
