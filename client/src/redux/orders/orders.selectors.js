import { createSelector } from 'reselect';

const selectOrders = state => state.orders;

export const selectOrdersCollections = createSelector(
  [selectOrders],
  orders => orders.orders
);

export const selectOrdersForPreview = createSelector(
  [selectOrdersCollections],
  orders => {
    // console.log(orders ? Object.keys(orders).map(key => orders[key]) : []);
    return orders ? Object.keys(orders).map(key => orders[key]) : [];
  }
);

export const selectIsOrdersFetching = createSelector(
  [selectOrders],
  orders => orders.isFetching
);

// export const selectIsOrdersLoaded = createSelector(
//   [selectOrders],
//   orders => !!orders
// );
