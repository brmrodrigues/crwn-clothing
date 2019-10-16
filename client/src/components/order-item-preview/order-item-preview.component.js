import React from 'react';

import './order-item-preview.styles.scss';

const OrderItemPreview = ({ orderItem }) => {
  const { name, price, quantity } = orderItem;
  return (
    <div className='order-item'>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='value'>{quantity}</span>
      </span>
      <span className='price'>R$ {price}</span>
    </div>
  )};

export default OrderItemPreview;
