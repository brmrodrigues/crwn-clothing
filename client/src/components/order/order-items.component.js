import React from 'react';

import './order-items.styles.scss';

import OrderItemPreview from '../order-item-preview/order-item-preview.component';

const OrderItems = ({ items }) => {
  return (
    <div>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Item</span>
        </div>
        <div className='header-block'>
          <span>Quantidade</span>
        </div>
        <div className='header-block'>
          <span>Preço</span>
        </div>
      </div>
      <div className='order-item'>
        {
          items.map(({ id, ...otherItemProps }) => (
            <OrderItemPreview key={id} {...otherItemProps} />
          ))
        }
      </div>
    </div>
  )
};

export default OrderItems;