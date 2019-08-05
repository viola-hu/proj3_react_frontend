import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutFormTODO';

class Payment extends Component {

  // StripeProvider is what actually creates the Stripe instance
  // and passes in your API key.
  render() {
    return (
      <StripeProvider apiKey="pk_test_dBB7Zc6zujggRBFHQUdShiJg00Ee8VeuNR">
        <div className="payment-form">
          <h1 className="payment-form-title">Payment Form</h1>
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
