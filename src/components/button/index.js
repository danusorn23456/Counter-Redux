import React from "react";


export default function index(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
