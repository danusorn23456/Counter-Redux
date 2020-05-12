import React from "react";
import Counter from "./container/counter";
import "./App.css";
function App(props) {
  return (
    <>
      <div style={{ height: "20vh" }}></div>
      <div className="App">
        <div className="panel">
          <Counter></Counter>
        </div>
      </div>
      <div className="menustart"></div>
    </>
  );
}

export default App;
