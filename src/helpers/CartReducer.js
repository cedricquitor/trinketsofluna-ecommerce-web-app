export const ACTIONS = {
  ADD_ITEM: "add-item",
};

export const sumItems = (cartItems) => {
  return {
    itemCount: cartItems.reduce((total, product) => total + product.quantity, 0),
    total: cartItems.reduce((total, product) => total + product.price * product.quantity, 0),
  };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      // Check if item is already in cart
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };

    default:
      return state;
  }
};
