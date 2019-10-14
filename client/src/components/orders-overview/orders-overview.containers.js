import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsOrdersFetching } from '../../redux/orders/orders.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import OrdersPage from '../orders/orders.component';

const mapStateToProps = createStructuredSelector({
  isFetchingOrders: selectIsOrdersFetching;
});

const OrdersContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(OrdersPage);

export default OrdersContainer;
