export const initialState = [];

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}