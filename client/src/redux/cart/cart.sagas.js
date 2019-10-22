import { all, call, put, takeLatest } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';

import {
  clearCart,
  orderSuccess,
  orderFailure
} from '../cart/cart.actions';

import { CartActionTypes } from './cart.types';
import { getCurrentUser, addCollectionWithUserDocRef } from '../../firebase/firebase.utils';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* orderRequest({ payload: orderData }) {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      yield put(orderFailure('Por favor, faça o login antes de realizar o pedido'));
      return;
    }

    const items = yield orderData.map(
      cartItem => ({
        id: cartItem.id,
        name: cartItem.name,
        price: cartItem.price,
        quantity: cartItem.quantity,
      }));
    yield call(addCollectionWithUserDocRef, 'orders', items, userAuth);
    yield put(orderSuccess('Pedido realizado com sucesso!'));
  } catch (error) {
    yield put(orderFailure('Falha ao processar a ordem'));
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
