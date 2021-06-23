import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import { Provider } from "react-redux";

//store
import { createStore } from "redux";

// importing ACTIONS
import reducer from "./reducer";

// react-redux - Provider - wraps app, connect - used in components

//initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

//store
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    // Wrapping our entire app with Provider
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
