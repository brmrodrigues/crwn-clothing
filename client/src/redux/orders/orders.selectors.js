import { createSelector } from 'reselect';

const selectOrders = state.orders;

export const selectIsOrdersFetching = createSelector(
  [selectOrders],
  orders => orders.isFetching
);

export const selectIsOrdersLoaded = createSelector(
  [selectOrders],
  orders => !!orders.collections
);
