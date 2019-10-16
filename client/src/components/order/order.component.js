import React from 'react';

import './order.styles.scss';

import OrderItemPreview from '../order-item-preview/order-item-preview.component';

const Order = ({ order }) => (
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
        order.orderItems.map(({id, ...otherOrderItemProps }) => (
          <OrderItemPreview key={id} {...otherOrderItemProps} />
        ))
      }
    </div>
  </div>
);

export default Order;