import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div>
          <button
            onClick={this.props.onReset}
            className="btn btn-primary btn-sm m-2"
          >
            Reset
          </button>
          <button
            onClick={this.props.onPrint}
            className="btn btn-primary btn-sm m-2"
          >
            ??????
          </button>
        </div>
        <p>Total Coasts: {this.props.totalCoasts} €</p>
      </div>
    );
  }
}

export default Counter;
