export const ACTIONS = {
  ADD_ITEM: "add-item",
  INCREASE_PRODUCT_QUANTITY: "increase-product-quantity",
};

export const sumItems = (cartItems) => {
  return {
    itemCount: cartItems.reduce((total, product) => total + product.productQuantity, 0),
    total: cartItems.reduce((total, product) => total + product.productPrice * product.productQuantity, 0),
  };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      // Check if item is already in cart
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          productQuantity: 1,
        });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };
    case ACTIONS.INCREASE_PRODUCT_QUANTITY:
      const increaseProductIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      state.cartItems[increaseProductIndex].productQuantity++;

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
        increaseProductIndex,
      };
    default:
      return state;
  }
};
