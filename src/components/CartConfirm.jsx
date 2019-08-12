import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import url from '../lib/url';

import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";



export default function CartConfirm(props){

  const jwt = localStorage.getItem('jwt');

  const [lineItems, setLineItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  // const [totalProductsNumberInCart, setTotalProductsNumberInCart] = useState(window.localStorage.getItem('totalProductsNumberInCart'))
  // const [quantity, setQuantity] = useState(0);
  // const [product, setProduct] = useState({});

  useEffect(()=>{
    // const URL = `https://toyshoppingsite.herokuapp.com/cart`;
    const URL = `${url.URL}/cart`;

    const configHeader = {
      headers: {
        Authorization: 'Bearer ' + jwt,
      },
    };

    // console.log('%c get CART', 'font-size: 20pt');
    axios.get(URL, configHeader)
    .then(res => {
      console.log('response:', res.data); // an array of all line_item objects of the cart / current_user
      setLineItems(res.data);
    })
    .catch(err => {
      console.warn('SERVER ERROR:', err);
      // if any error, e.g. unlogged in user send random request in address bar
      // redirect to home page
      props.history.push('/');
    });
  },[]);

  // in case there's no line_items inside the cart of the current_user
  let noLineItemsToShow = (
    <div>
      <Table striped hover responsive="md">
        <thead>
          <tr>
            <th className="cart-label"><strong>My Cart</strong></th>
            <th className="cart-label"><strong>Item</strong></th>
            <th className="cart-label"><strong>Quantity</strong></th>
            <th className="cart-label"><strong>Price</strong></th>
            <th className="cart-label"><strong>Subtotal</strong></th>
          </tr>
        </thead>
      </Table>

      <div className="no-items-in-cart">
        <div>There's no item in your cart.</div>
        <Image
          src={process.env.PUBLIC_URL + `/images/nopurchaseyet02.gif`}
          style={{maxWidth: '100%'}}
        />
      </div>
    </div>
  );


  let total = 0;
  lineItems.forEach(li => {
    total += li.quantity * li.product.price;
  })


  const _handleUpdateQuantity = (event)=>{
    event.preventDefault();
    event.persist();
    console.log(event);

    const updatedQuantity = parseInt(event.target[0].value);
    const lineItemId = parseInt(event.target[0].name);
    console.log('updated quantity',updatedQuantity); // new quantity input
    console.log('lineItemId',lineItemId); // product_id

    // ******************LEARNING: ******************
    // let currentProductStock;
    // lineItems.forEach((li)=>{
    //   if(li.product_id === lineItemId){
    //     console.log('currentProductId', li.product_id);
    //     currentProductStock = li.product.stock
    //   }
    // });
    // console.log('currentProductStock', currentProductStock);
    //
    // // 1) double check if the updatedQuantity is <= currentProductStock
    // // if no, pop up error message, and return early, no need to proceed
    // // until the next updatedQuantity is a valid number, then do axios request
    // if(updatedQuantity > currentProductStock){
    //   setErrorMessage(`Sorry, only ${currentProductStock} in stock.`)
    //   return;
    // }
    // ******************************************************

    // APPARENTLY, the form input is very smart to check
    // if the updatedQuantity(user input) is <= max && >= min
    // ONE MORE THING !!!
    if (isNaN(updatedQuantity)){
      console.log('its NaN');
      // POP UP MESSAGE:
      setErrorMessage('Please select a quantity.')
      // return early
      return;
    }
    console.log('should not run if its NaN');

    // if the above is clear,
    // 1) clear errorMessage first
    setErrorMessage('');
    // 2) ideally, check if the updatedQuantity is the same as the existing quantity stored in line_item
    // if yes, no need to send further axios request,
    // but for now, it might be rare, leave this for refactor later.
    // 3) send axios post request to DB, to update the single line_item
    // axios.put(url[, data[, config]])
    // const URL = `https://toyshoppingsite.herokuapp.com/line_items/${lineItemId}`;
    const URL = `${url.URL}/line_items/${lineItemId}`;
    const data = {
      line_item: {
        quantity: updatedQuantity
      }
    };
    const configHeader = {
      headers: {
        Authorization: "Bearer " + jwt
      }
    };

    axios.put(URL, data, configHeader)
    .then(res => {
      console.log('response from server:', res.data); // an array of all line_item objects of the cart / current_user

      // 1) update localStorage totalProductsNumberInCart
      updateTotalProductsNumberInCart(res.data);

      // 2) update the state: lineItems
      // DB send back the whole array of line_item objects, including its product association
      // the whole page will re-render with updated state
      setLineItems(res.data);

      // 3) push to itself which will trigger BootNav to rerender,
      // in order to show updated number in top right corner shopping bag
      // Though get warning in console:
      // Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack
      // it won't go to a new page, but did trigger BootNav to re-render
      props.history.push('/cart');

    })
    .catch(err => {
      console.warn('ERROR of updating quantity', err);
      setErrorMessage('Sorry, not enough stock.')
    });

  }



  const _handleRemoveLineItem = (event) => {
    event.persist();
    console.log('click image', event);
    console.log('lineItemId', event.target.name);
    // console.log('typeof', typeof(event.target.name));

    const lineItemId = parseInt(event.target.name);
    // console.log('typeof', typeof(lineItemId));

    // send delete request to DB with line_item id
    // axios.delete(url[, config])
    // const URL = `https://toyshoppingsite.herokuapp.com/line_items/${lineItemId}`;
    const URL = `${url.URL}/line_items/${lineItemId}`;

    const configHeader = {
      headers: {
        Authorization: "Bearer " + jwt
      }
    };

    axios.delete(URL, configHeader)
    .then(res => {
      console.log('DELETE response:', res.data);
      // after deleting, send back a new line_items array to update state!

      // 1) update localStorage totalProductsNumberInCart
      updateTotalProductsNumberInCart(res.data);

      // 2) update the state: lineItems
      setLineItems(res.data);

      // 3) push to itself which will trigger BootNav to rerender
      props.history.push('/cart');

    })
    .catch(err => {
      console.warn('ERRORS!!!:', err);
    });
  };



  const updateTotalProductsNumberInCart = ( updatedLineItems ) => {

    // 1) if there's no line item left in the cart, empty array
    // update localStorage, totalProductsNumberInCart = 0
    if(updatedLineItems.length === 0){
      console.log('totalProductsNumberInCart', 0);
      window.localStorage.setItem('totalProductsNumberInCart', 0);
    } else {
      let updatedTotalProductsNumberInCart = 0;

      updatedLineItems.forEach(li => {
        updatedTotalProductsNumberInCart += li.quantity;
      });

      console.log('updatedTotalProductsNumberInCart:', updatedTotalProductsNumberInCart);

      // update localStorage with the new totalProductsNumberInCart
      window.localStorage.setItem(
        'totalProductsNumberInCart',
        updatedTotalProductsNumberInCart
      );
    };
  };


  return(
    <Container>
      { // if there's no line_items in the cart
        !lineItems.length
        ?
        noLineItemsToShow
        :
        <Table striped hover responsive="md">
          <thead>
            <tr>
              <th className="cart-label"><strong>My Cart</strong></th>
              <th className="cart-label"><strong>Item</strong></th>
              <th className="cart-label"><strong>Quantity</strong></th>
              <th className="cart-label"><strong>Price</strong></th>
              <th className="cart-label"><strong>Subtotal</strong></th>
            </tr>
          </thead>

            <tbody>
              {lineItems.map(li => (
                <tr key={li.product.name}>
                  <td>
                    <Link to={`/product/${li.product_id}`}>
                      <Image
                        className="cart-thumbnail"
                        src={process.env.PUBLIC_URL +`/images/${li.product.image}`}
                        thumbnail
                      />
                    </Link>
                  </td>

                  <td className="product-name"><br/><strong>{li.product.name}</strong></td>

                  <td>

                    <form className="quantity-update change-quantity" onSubmit={_handleUpdateQuantity}>
                      <input
                        type="number"
                        min="1"
                        max={li.product.stock}
                        name={li.id}
                        defaultValue={li.quantity}
                      /> {' '}
                      <input
                        type="submit"
                        className="update-quantity"
                        value="Update"
                        disabled={false}
                      /> {' '}
                    </form>
                    <Image
                      name={li.id}
                      className="trash change-quantity"
                      src={process.env.PUBLIC_URL + '/images/small-trash.png'}
                      title="Remove"
                      onClick={_handleRemoveLineItem}
                      fluid
                    />
                  </td>

                  <td><br/><strong>${li.product.price}</strong></td>

                  <td><br/><strong>${li.quantity * li.product.price}</strong></td>
                </tr>
               ))
              }
              <tr>
                <td> </td>
                <td> </td>
                <td>
                  <small className="errorMessage">
                    {errorMessage}
                  </small>
                </td>
                <td><strong className="cart-label">Total: </strong></td>
                <td><strong className="cart-label">${total}</strong></td>
              </tr>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td>
                  <Link to={'/checkout'}>
                    <Button id="checkout">Check Out</Button>
                  </Link>
                </td>
              </tr>
            </tbody>
        </Table>
      }
    </Container>
  );
} // CartConfirm
