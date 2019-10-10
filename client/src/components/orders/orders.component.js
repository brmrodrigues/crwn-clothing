import React, { useEffect } from 'react';
import './orders.styles.scss';

import { fetchOrdersStart } from '../../redux/orders/orders.actions';

import { connect } from 'react-redux';

const OrdersPage = ({ fetchOrdersStart }) => {
	useEffect(() => {
		fetchOrdersStart();
	}, [fetchOrdersStart]);

	return (
		<div className='orders-page'>

		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchOrdersStart: () => dispatch(fetchOrdersStart())
});

export default connect(
	null, mapDispatchToProps
)(OrdersPage);
