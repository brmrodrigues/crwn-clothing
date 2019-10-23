import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectOrdersForPreview } from '../../redux/orders/orders.selectors';
import OrderPreview from '../order-preview/order-preview.component';

import './orders-overview.styles.scss';

const OrdersOverview = ({ orders }) => {
	return (
		<div>
			{
				(orders && orders.length > 0) ?
					orders.map(({ id, ...otherOrderProps }) => (
						<OrderPreview key={id} {...otherOrderProps} />
					))
					: <h1>Você ainda não possui nenhum pedido :(</h1>
			}
		</div>
	)
};

const mapStateToProps = createStructuredSelector({
	orders: selectOrdersForPreview
});

export default connect(mapStateToProps)(OrdersOverview);
