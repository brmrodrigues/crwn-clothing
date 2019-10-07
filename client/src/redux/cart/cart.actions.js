import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});

export const orderStart = orderData => ({
  type: CartActionTypes.ORDER_START,
  payload: orderData
})

export const orderSuccess = orderMessage => ({
  type: CartActionTypes.ORDER_SUCCESS,
  payload: orderMessage
})

export const orderFailure = orderMessage => ({
  type: CartActionTypes.ORDER_FAILURE,
  payload: orderMessage
})
