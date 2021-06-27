import {
  DECREASE,
  INCREASE,
  RESET,
  CLEAR_CART,
  GET_AMOUNT,
  GET_TOTAL,
  REMOVE,
} from "./actions";

//reducer
const reducer = (state, action) => {
  // USING IF

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return { ...state, cart: tempCart };
  }
  if (action.type === INCREASE) {
    const newCartItem = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: newCartItem };
  }
  if (action.type === RESET) {
    console.log("you RESET");
  }
  if (action.type === GET_AMOUNT) {
    console.log("AMOUNT");
  }
  if (action.type === GET_TOTAL) {
    console.log("TOTAL");
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }

  return state;

  // USING SWITCH SYNTAX

  // switch (action.type) {
  //   case CLEAR_CART: {
  //     return { ...state, cart: [] };
  //   }
  //   default:
  //     return state;
  // }
};

export default reducer;
