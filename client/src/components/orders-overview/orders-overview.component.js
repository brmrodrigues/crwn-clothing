import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectOrdersForPreview } from '../../redux/orders/orders.selectors';
import OrdersPreview from '../orders-preview/orders-preview.component';

import './orders-overview.styles.scss';

const OrdersOverview = ({ orders }) => (
	<div className='orders-page'>
		{
			orders.map(({id, ...otherOrderProps }) => (
				<OrdersPreview key={id} {...otherOrderProps} />
			))
		}
	</div>
);

const mapStateToProps = createStructuredSelector({
	orders: selectOrdersForPreview
});

export default connect(mapStateToProps)(OrdersOverview);
