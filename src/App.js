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

// react-redux - "Provider" - wraps app, then "connect" - used in components

//initial store
const initialStore = {
  cart: cartItems,
  total: 45,
  amount: 50,
};

//store
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    // Wrapping our entire app with Provider
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
