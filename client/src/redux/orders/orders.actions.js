import OrdersTypes from './orders.types';

export const fetchOrdersStart = status => ({
  type: OrdersTypes.FETCH_ORDERS_START,
  payload: status
});

export const fetchOrdersSuccess = ordersMap => ({
  type: OrdersTypes.FETCH_ORDERS_SUCCESS,
  payload: ordersMap
});

export const fetchOrdersFailure = errorMessage => ({
  type: OrdersTypes.FETCH_ORDERS_FAILURE,
  payload: errorMessage
});
