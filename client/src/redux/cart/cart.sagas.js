import { all, call, put, takeLatest } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';

import {
  clearCart,
  orderSuccess,
  orderFailure
} from '../cart/cart.actions';

import { CartActionTypes } from './cart.types';
import { getCurrentUser, addCollectionToUserDocument } from '../../firebase/firebase.utils';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* orderRequest({ payload: orderData }) {
  try {
    const userAuth = yield getCurrentUser();
    const items = yield orderData.map(
      cartItem => ({
        id: cartItem.id,
        name: cartItem.name,
        price: cartItem.price,
        quantity: cartItem.quantity
      }));
    console.log(orderData);
    console.log(items);
    yield call(addCollectionToUserDocument, userAuth, items);
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
