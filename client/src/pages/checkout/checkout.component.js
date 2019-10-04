import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { orderStart } from '../../redux/cart/cart.actions';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';

const CheckoutPage = ({ cartItems, total, orderStart }) => (
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
    <CustomButton onClick={() => { orderStart(cartItems) }}> Enviar </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
  orderStart: cartItems => dispatch(orderStart(cartItems))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
