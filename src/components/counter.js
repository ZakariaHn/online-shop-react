import React from "react";

const Counter = (props) => {
  return (
    <div className="counter">
      <div>
        <button onClick={props.onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <button onClick={props.onPrint} className="btn btn-primary btn-sm m-2">
          ??????
        </button>
      </div>
      <p>Total Coasts: {props.totalCoasts} €</p>
    </div>
  );
};

export default Counter;
