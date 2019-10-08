import React from 'react';
import './orders.styles.scss';

import { connect } from 'react-redux';

import NativeSelects from '../native-select/native-select.component';

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
