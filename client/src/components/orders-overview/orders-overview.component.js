import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectOrdersForPreview } from '../../redux/orders/orders.selectors';
import OrderCard from '..//order-card.component';

import './orders-overview.styles.scss';

const OrdersOverview = ({ orders }) => (
  <div className='orders-overview'>
    {
      orders.map(({ id, ...otherOrderProps }) => (
        <OrderCard key={id} {...otherOrderProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  orders: selectOrdersForPreview
});

export default connect(mapStateToProps)(OrdersOverview);
