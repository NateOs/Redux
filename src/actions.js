export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
export const RESET = "RESET";

// the whole point of action creators is to always return a proper action with its proper type.
export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};
