import React from 'react';
import Order from '../order/order.component';

import './orders-preview.styles.scss';

const OrdersPreview = ({ orders }) => (
	<div>
		{
			orders.map((order) => (
				<Order key={order.id} order={order} />
			))
		}
	</div>
);

export default OrdersPreview;
