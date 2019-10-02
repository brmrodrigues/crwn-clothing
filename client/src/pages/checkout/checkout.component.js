import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Item</span>
      </div>
      <div className='header-block'>
        <span>Descrição</span>
      </div>
      <div className='header-block'>
        <span>Quantidade</span>
      </div>
      <div className='header-block'>
        <span>Preço</span>
      </div>
      <div className='header-block'>
        <span>Remover</span>
      </div>
    </div>

    {
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
    }

    <div className='total'>TOTAL: R$ {total}</div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
    <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);