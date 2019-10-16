import React from 'react';
import Order from '../order/order.component';

import './orders-preview.styles.scss';

const OrdersPreview = ({ orders }) => (
	<div className='orders-preview'>
		<div className='preview'>
			{
				orders.map((order) => (
						<Order key={order.id} order={order} />
					))
			}
		</div>
	</div>
);

export default OrdersPreview;
