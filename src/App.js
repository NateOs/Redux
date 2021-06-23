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
import { INCREASE, DECREASE, RESET } from './actions.js'
import reducer from "./reducer";

//initial store
const initialStore = {
  count: 78,
  name: "Nathan",
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
