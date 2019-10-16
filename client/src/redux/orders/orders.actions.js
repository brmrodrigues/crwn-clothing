import OrdersTypes from './orders.types';

export const fetchOrdersStart = () => ({
  type: OrdersTypes.FETCH_ORDERS_START,
});

export const fetchOrdersSuccess = ordersMap => ({
  type: OrdersTypes.FETCH_ORDERS_SUCCESS,
  payload: ordersMap
});

export const fetchOrdersFailure = errorMessage => ({
  type: OrdersTypes.FETCH_ORDERS_FAILURE,
  payload: errorMessage
});
