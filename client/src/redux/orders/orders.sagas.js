import { all, call, put, takeLatest } from 'redux-saga/effects';

import OrdersActionTypes from '../orders/orders.types';

import { fetchOrdersSuccess, fetchOrdersFailure } from '../orders/orders.actions';
import { firestore, getCurrentUser, convertOrdersSnapshotToArray } from '../../firebase/firebase.utils';

export function* fetchOrdersAsync() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      yield put(fetchOrdersSuccess([]));
    }

    const ordersRef = firestore.collection('orders');
    const ordersByUserQuery = ordersRef.where("user", "==", userAuth.uid);
    const snapshot = yield ordersByUserQuery.get();
    const ordersArray = yield call(
      convertOrdersSnapshotToArray,
      snapshot);
    // console.log(ordersArray);
    yield put(fetchOrdersSuccess(ordersArray));
  } catch (error) {
    yield put(fetchOrdersFailure(error.message));
  }
}

export function* fetchOrdersStart() {
  yield takeLatest(
    OrdersActionTypes.FETCH_ORDERS_START,
    fetchOrdersAsync
  );
};

export function* ordersSagas() {
  yield all([
    call(fetchOrdersStart)
  ]);
}
