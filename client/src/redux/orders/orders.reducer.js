import OrdersTypes from './orders.types';

const INITIAL_STATE = {
  orders: null,
  isFetching: false,
  errorMessage: undefined
};

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrdersTypes.FETCH_ORDERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case OrdersTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        orders: action.payload
      };
    case OrdersTypes.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default ordersReducer;
