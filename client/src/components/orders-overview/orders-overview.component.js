import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectOrdersForPreview } from '../../redux/orders/orders.selectors';
import OrdersPreview from '../orders-preview/orders-preview.component';

import './orders-overview.styles.scss';

const OrdersOverview = ({ orders }) => (
	<div>
		{
			orders && orders.count > 0 ?
				orders.map(({ ...otherOrderProps }) => (
					<OrdersPreview {...otherOrderProps} />
				))
				: <h1>Você ainda não possui nenhum pedido :(</h1>
		}
	</div>
);

const mapStateToProps = createStructuredSelector({
	orders: selectOrdersForPreview
});

export default connect(mapStateToProps)(OrdersOverview);
