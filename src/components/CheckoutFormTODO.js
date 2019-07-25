import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      message:''
    };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });

    if (response.ok) console.log("Purchase Complete!")
  } // User clicked submit



  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="payment-form">
        <p>Would you like to complete the purchase?</p>
        <div style={{borderRadius: '0.5em', height: '100px', padding: '50px', border: '3px solid orange', marginTop: '10px', marginBottom: '30px',  backgroundColor: 'aliceblue', width:'500px'}} >
          <CardElement />
        </div>
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
