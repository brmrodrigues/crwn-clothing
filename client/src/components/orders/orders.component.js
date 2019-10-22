import React, { useEffect } from 'react';
import './orders.styles.scss';

import { fetchOrdersStart } from '../../redux/orders/orders.actions';
import OrdersOverviewContainer from '../../components/orders-overview/orders-overview.container';

import { connect } from 'react-redux';

const OrdersPage = ({ fetchOrdersStart, match }) => {
	useEffect(() => {
		fetchOrdersStart();
	}, [fetchOrdersStart]);

	return (
		<div className='orders-page'>
			<Route exact
				path={`${match.path}`}
				component={OrdersOverviewContainer}
			/>
			{/* <Route exact
				path={`${match.path}/:orderId`}
				component={OrdersPageContainer}
			/> */}
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchOrdersStart: () => dispatch(fetchOrdersStart())
});

export default connect(
	null, mapDispatchToProps
)(OrdersPage);
