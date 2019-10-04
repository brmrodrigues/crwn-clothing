import { all, call, put, takeLatest } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';

import {
  clearCart,
  orderSuccess,
  orderFailure
} from '../cart/cart.actions';

import { CartActionTypes } from './cart.types';
import { addCollectionAndDocuments, getCurrentUser } from '../../firebase/firebase.utils';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* orderRequest({ payload: orderData }) {
  try {
    const userAuth = yield getCurrentUser();
    yield call(addCollectionAndDocuments, userAuth, orderData);
    yield put(orderSuccess());
  } catch (error) {
    yield put(orderFailure(error));
  }
}

export function* onOrderStart() {
  yield takeLatest(CartActionTypes.ORDER_START, orderRequest);
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onOrderStart)
  ]);
}
