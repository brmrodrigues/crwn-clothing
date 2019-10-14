import { createSelector } from 'reselect';

const selectOrders = state.orders;

export const selectOrdersForPreview = createSelector(
  [selectOrders],
  orders => orders ? Object.keys(orders).map(key => orders[key]) : []
);

export const selectIsOrdersFetching = createSelector(
  [selectOrders],
  orders => orders.isFetching
);

export const selectIsOrdersLoaded = createSelector(
  [selectOrders],
  orders => !!orders.collections
);
