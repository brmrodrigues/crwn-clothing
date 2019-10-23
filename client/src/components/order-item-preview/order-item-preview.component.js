import React from 'react';

import './order-item-preview.styles.scss';

const OrderItemPreview = ({ name, price, quantity }) => {
  return (
    <div className='order-item'>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>R$ {price}</span>
    </div>
  )
};

export default OrderItemPreview;
