const redux = require("redux");

const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

const store = redux.createStore(rootReducer);
console.log(store.getState());

store.subscribe(()=>{
    console.log("[Subscription]",store.getState());
})

store.dispatch({type:"INCREMENT_COUNTER"});
console.log(store.getState());

store.dispatch({type:"ADD_COUNTER",value : 10});
console.log(store.getState());


