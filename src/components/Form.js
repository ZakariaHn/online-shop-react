import React from "react";

const Form = (props) => {
  const { onSubmit, onChange, userInput } = props;
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={userInput} />
      <input
        type="submit"
        value="filter"
        className="btn btn-warning btn-sm m-2 "
      />
    </form>
  );
};

export default Form;
