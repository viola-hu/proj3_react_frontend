import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Payment extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="payment-form">
          <h1>Payment Form</h1>
          <div className="payment-form">
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </StripeProvider>
    );
  }
}

export default Payment;
