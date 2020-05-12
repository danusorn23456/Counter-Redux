import React from "react";
import Button from "../../components/button";
import Number from "../../components/number";
import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <div>
      <Number counter={props.counter}></Number>
      <div style={{ display: "felx" }}>
        <Button onClick={()=>props.incrementCounter()}>Increment</Button>
        <Button onClick={()=>props.decrementCounter()}>Decrement</Button>
        <Button onClick={()=>props.addCounter(5)}>Add 5</Button>
        <Button onClick={()=>props.subtractCounter(5)}>Subtract 5</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch({ type: "INCREMENT_COUNTER" }),
    decrementCounter: () => dispatch({ type: "DECREMENT_COUNTER" }),
    addCounter: (value) => dispatch({ type: "ADD_COUNTER", value: 5 }),
    subtractCounter: (value) => dispatch({ type: "SUBTRACT_COUNTER", value: 5 }),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
