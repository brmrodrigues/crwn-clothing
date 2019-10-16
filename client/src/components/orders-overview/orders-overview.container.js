import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsOrdersFetching } from '../../redux/orders/orders.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import OrdersOverview from './orders-overview.component';

const mapStateToProps = createStructuredSelector({
  isFetchingOrders: selectIsOrdersFetching
});

const OrdersOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(OrdersOverview);

export default OrdersOverviewContainer;
