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
