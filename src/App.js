import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

//store
import { createStore } from "redux";

// importing ACTIONS
import { INCREASE, DECREASE,RESET } from './actions.js'

//initial store
const initialStore = {
  count: 78,
  name: "Nathan",
};

//reducer
const reducer = (state, action) => {
  console.log({ state, action });
  if (action.type === "DECREASE") {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === "INCREASE") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }
  if (action.type === "CHANGE NAME") {
    return { ...state, name: "Janet" };
  }
  return state;
};

//store
const store = createStore(reducer, initialStore);

// dispatching an ACTION
store.dispatch({ type: DECREASE });

// dispatch
store.dispatch({ type: INCREASE });

// dispatch
store.dispatch({ type: RESET });

console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
