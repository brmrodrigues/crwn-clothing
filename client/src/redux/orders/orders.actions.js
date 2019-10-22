import OrdersActionTypes from './orders.types';

export const fetchOrdersStart = () => ({
  type: OrdersActionTypes.FETCH_ORDERS_START,
});

export const fetchOrdersSuccess = ordersArray => ({
  type: OrdersActionTypes.FETCH_ORDERS_SUCCESS,
  payload: ordersArray
});

export const fetchOrdersFailure = errorMessage => ({
  type: OrdersActionTypes.FETCH_ORDERS_FAILURE,
  payload: errorMessage
});
