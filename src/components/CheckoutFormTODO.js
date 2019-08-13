import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios';
import url from '../lib/url';
import ModalHint from './ModalHint';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:''
    };
    this.submit = this.submit.bind(this);
  }

  async submit(event) {
    // LEARNING:
    // DOCS:
    // 1) The injectStripe function wraps the component, creating a new component with an injected stripe prop, which contains a Stripe object.
    // MEANING: wrapped inside the injectStripe() function, CheckoutForm component gets a 'stripe' prop whose value is a stripe object => this.props.stripe
    // this stripe object has many methods, and one of them is createToken(), used to tokenize the credential card info
    // 2) https://stripe.com/docs/stripe-js/reference#stripe-create-token
    // tokenData, an object containing additional payment information you might have collected, and it's highly recommended collecting name and address
    // name should use the user's signup name!
    // 2.5) tested: if not passing any argument to .createToken(), it still generates token
    // however, as highly recommended by docs, collecting name and address can be used to perform a number of verifications, such as CVC, ZIP, and address verification!!!
    let {token} = await this.props.stripe.createToken({name: "Name"});
    // ********************** TODO: **********************
    // 1, when a user login, send back user name for Stripe token creation + cart line_items info for updating top right corner cart items number, and store both in localStorage
    // 2, when a user signup, store user name directly in localStorage, set cart item number as (0), later when add line items to cart, will need to update localStorage cart item number info!
    // 3, when log out, clear localStorage, user name + cart info + jwt
    // ***************************************************

    // 3) the below line won't run, until the above line created a token and stored into the variable 'token', -> that's what await does!!!
    console.log('****** token *****', token); // tested fine!

    // some invalid card number will be recognised by stripe automatically during user input,
    // while some numbers cannot generate Stripe token at all.
    // to avoid crash, insert message and return function.
    if(!token){
      this.setState({
        message:'Invalid card information. Please contact your card issuer for more details.'
      });
      return;
    }

    console.log('****** This is Stripe Token: *****', token.id); // tested fine!

    // Only after the above token is generated, will then run the below code and post the data including the token to server, to actually make the charge!

    const URL = `${url.URL}/charge`; 

    const jwt = localStorage.getItem('jwt');

    const configHeader = {
      headers: {
        Authorization: 'Bearer ' + jwt
      }
    };

    const data = {
      charge: {
        stripeToken: token.id
      }
    };

    axios.post(URL, data, configHeader)
    .then(res => {
      console.log('stripe response', res);
      console.log('stripe response', res.statusText);

      // 1, payment successful
      if (res.statusText == "OK"){

        // 1> frontend, reset localStorage totalProductsNumberInCart, to be reused!
        // so that when redirect to the new route after payment,
        // BootNav rerenders and top right corner shopping bag number changes back to "0"
        localStorage.setItem('totalProductsNumberInCart', 0);

        // 2> backend, send request to server to change DB
        // 1) move line_items from cart into order
        // 2) also update product stock!

        // 3> at last redirect to order page!
        // ********** TODO: **************
        // doing the below in a separate axios request as previously have already built the below process based on faking Successful payment
        // will need to minimise the axios request and do logic process at the backend in one step once payment is successful.
        // for now, using the already built process as a separate step due to tight deadline
        moveLineItemsFromCartToOrderAndUpdateStock();
      }
    })
    .catch(err => {
      console.warn('stripe error', err.response);
      this.setState({
        message: 'Transaction unsuccessful. Please contact your card issuer for more details.'
      });
    });


    const moveLineItemsFromCartToOrderAndUpdateStock = () => {
      const URL = `${url.URL}/order`;

      const jwt = localStorage.getItem('jwt');

      const configHeader = {
        headers: {
          Authorization: 'Bearer ' + jwt,
        },
      };

      axios.get(URL, configHeader)
      .then(res => {
        console.log('response of success order id:', res.data.id);

        // get the order_id from response, and redirect!
        const orderId = res.data.id
        // 1) if order succeed, redirect to order page, and show messages there!
        this.props.history.push(`/order/${orderId}`)
      })
      .catch(err => {
        // 2) if order failed, show message like out of order!
        console.warn('ERROR!', err);
      });
    };
  };



  render(){
    let errorMessage = (
      <p className="checkout-errorMessage"><small>
        {this.state.message}
      </small></p>
    );

    return (
      <div className="payment-form">
        <Container>
          <Row>
            <Col>
              <p className="enter-details">Enter Card Details</p>
            </Col>
          </Row>
          <Row>
            <Col>
              {errorMessage}
            </Col>
          </Row>
          <Row>
            <Col className="stripe-form">
              <CardElement />
            </Col>
          </Row>
          <Row>
            <button className="submit-button" onClick={this.submit}><h5>Submit</h5></button>
          </Row>
          <Row>
            <ModalHint/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default injectStripe(withRouter(CheckoutForm));
