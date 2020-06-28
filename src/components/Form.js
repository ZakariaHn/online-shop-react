import React, { Component } from "react";
class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          type="text"
          onChange={this.props.onChange}
          value={this.props.userInput}
        />
        <input type="submit" value="filter" />
      </form>
    );
  }
}

export default Form;