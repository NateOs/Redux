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
    console.log("you decreased");
  }
  if (action.type === INCREASE) {
    console.log("you increased");
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
    // console.log("REMOVE");
    // console.log(action.payload.id);

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
