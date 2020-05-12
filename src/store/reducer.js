const initailState = {
  counter: 0,
};

const Reducer = (state = initailState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "SUBTRACT_COUNTER":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    default:
      return state;
  }
};

export default Reducer;
