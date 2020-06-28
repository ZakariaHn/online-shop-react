import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <p>Total Coasts: {this.props.totalCoasts} EU</p>
      </div>
    );
  }
}

export default Counter;
