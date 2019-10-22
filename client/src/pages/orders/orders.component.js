import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchOrdersStart } from '../../redux/orders/orders.actions';

import OrdersOverviewContainer from '../../components/orders-overview/orders-overview.container';
// import OrdersPageContainer from '../../pages/orders/order.container';

const OrdersPage = ({ fetchOrdersStart, match }) => {
	useEffect(() => {
		fetchOrdersStart();
	}, [fetchOrdersStart]);

	return (
		<div>
			<Route exact
				path={`${match.path}`}
				component={OrdersOverviewContainer}
			/>
			{/* <Route
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
