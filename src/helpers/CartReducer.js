export const ACTIONS = {
  ADD_ITEM: "add-item",
  ADD_MORE_PRODUCT: "add-more-product",
};

export const sumItems = (cartItems) => {
  return {
    itemCount: cartItems.reduce((total, product) => total + product.productQuantity, 0),
    total: cartItems.reduce((total, product) => total + product.productPrice * product.productQuantity, 0),
  };
};

export const CartReducer = (state, action) => {
  const productInCart = state.cartItems.find((item) => item.id === action.payload.id);
  const indexOfProductInCart = state.cartItems.findIndex((item) => item.id === action.payload.id);

  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      // Check if item is already in cart
      if (!productInCart) {
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
    case ACTIONS.ADD_MORE_PRODUCT:
      state.cartItems[indexOfProductInCart].productQuantity++;
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };
    default:
      return state;
  }
};
