import React from 'react';
import OrderItems from '../order/order-items.component';

import './order-preview.styles.scss';

const OrderPreview = ({ orderItems, createdAt }) => {
	return (
		<div>
			<h3>{createdAt.toDate().toLocaleString()}</h3>
			<div>
				{
					<OrderItems items={orderItems} />
				}
			</div>
		</div>
	)
};

export default OrderPreview;
