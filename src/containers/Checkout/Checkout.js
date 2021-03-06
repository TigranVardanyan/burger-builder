import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom';
import ContactData from "./ContactData/ContactData";
import {connect} from 'react-redux'
import * as actionTypes from "../../store/actions";

class Checkout extends Component {

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ings}
          price={this.props.price}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          component={ContactData}
          //render={(props) => (<ContactData
          //  {...props}
          //  ingredients={this.props.ings}
          //  price={this.props.price}
          ///>)}
        />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  };
}

export default connect(mapStateToProps)(Checkout)