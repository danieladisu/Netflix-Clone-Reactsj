/** @format */

export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        basket: [...state.basket, action.item],
        // Yalew lay actionun chmirilign
      };
    default:
      return state;
  }
};

export default reducer;
