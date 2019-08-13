import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import url from '../lib/url';
import ReactImageMagnify from 'react-image-magnify';


export default function Product(props){

  // product id passed by props
  const {id} = props.match.params;
  // console.log(id);

  // need jwt for user to get a cart
  // if use logged in, valid string; if not, null
  const jwt = localStorage.getItem('jwt');
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({});
  const [quantity, setQuantity]= useState(1);
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonStatus, setButtonStatus] = useState(false);
  const [buttonText, setButtonText] = useState('Add to Cart');
  const [successAddToCartMessage, setSuccessAddToCartMessage] = useState('');

  // first time the component renders
  // axios request to get the product info by id
  useEffect(()=>{
    getProductById(id);
    if(!jwt){
      setButtonStatus(true);
      setButtonText('Login to use cart')
    }
  },[id]);

  const getProductById = (id)=>{
    const URL = `${url.URL}/products/${id}`;

    axios.get(URL)
    .then(res => {
      console.log('response:', res.data);
      console.log('categoryName:', res.data.category.name);

      setProduct(res.data); // the product object, including its category object
      setCategory(res.data.category); // the associated category object
    })
    .catch(err => {
      console.warn('ERRORS!!!:', err);
      // setErrorMessage('Product not found');
      props.history.push('/')
    });
  };


  // _handleChangeQuantity make sure quantity stored in state is <= stock
  const _handleChangeQuantity = (event) => {
    console.log('event.target.value:', event.target.value); // actual input quantity

    // Only when a user is logged in,
    // can the user toggle the button status based on user input quantity
    if(jwt){
      // if the user has added product into the cart, will get success message
      // on next click on quantity, clear the message;
      setSuccessAddToCartMessage('');

      // TEST: typeof event.target.value is a string, need to parse it to integer!!!
      let wantedQuantity = parseInt(event.target.value);
      // console.log('type of wantedQuantity', typeof(wantedQuantity));

      // check if the input quantity is more than actual stock
      // since user can manually type in the amount
      // ********************#TODO*********************
      // this logic is not perfect
      // should axios request the current cart data with the existing quantity(if any, by default = 0)
      // then compare total requested quantity (wantedQuantity + existing cart quantity) with the product stock,
      // currently, once post request, backend is checking the total requested quantity (existing + new) to make sure <= stock
      // if not, would send back error to .catch()
      // it's not perfect user experience, but at least currently, at the frontend
      // make sure user's actual type-in value is <= stock number,
      // will leave it for now due to tight deadline, but will refactor late
      if (wantedQuantity > product.stock){
        // 1) prompt message
        setErrorMessage('Sorry, not enough stock.');
        // 2) the input quantity doesn't count, reset state quantity to 0
        setQuantity(1);
        // 3) disable 'Add to Cart' button, cannot click
        setButtonStatus(true);
      } else {
        setErrorMessage('');
        setQuantity(wantedQuantity);
        setButtonStatus(false);
        setButtonText('Add to Cart');
      }
      console.log('wantedQuantity:', wantedQuantity);
    }
    // if a user is not logged in, do nothing, as the user cannot click 'Add to Cart'

  }; //_handleChangeQuantity

  console.log('stateQuantity:', quantity);
  console.log('button disabled?:', buttonStatus);


  // At this stage, have ensure that
  // only when 1) user login & 2) input quantity <= stock
  // that a user can click the 'Add to Cart' button!
  const _handleAddToCart = (event) => {
    // console.log(event);
    console.log('clicked cart');
    console.log('when click cart, stateQuantity', quantity);
    console.log('when click cart, typeof stateQuantity', typeof(quantity));

    // check if the state quantity is 0 or empty?
    // if yes, propmt message, disable button and return early
    if(!quantity){
      console.log('when quantity === 0, it ran!');
      setErrorMessage('Please select a quantity.')
      setButtonStatus(true);
      return;
    }
    // if not, then quantity is valid, send to the DB and add into the cart!
    // const URL = "https://toyshoppingsite.herokuapp.com/line_items";
    // const URL = "http://localhost:3000/line_items";
    const URL = `${url.URL}/line_items`;
    const product_id = product.id;
    const data = {
      line_item:{
        product_id,
        quantity
      }
    };
    const configHeader = {
      headers: {
        Authorization: "Bearer " + jwt
      }
    };

    axios.post(URL, data, configHeader)
    .then(res => {
      console.log('added to cart',res);

      // 1) update localStorage's totalProductsNumberInCart
      window.localStorage.setItem('totalProductsNumberInCart', res.data.total_products_number_in_cart);

      // 2) pop up a msg to user, showing adding to cart successfully, with a link to cart page
      setSuccessAddToCartMessage(`Successfully added to cart!`);

      // 3) push to itself to trigger BootNav rerender and update shopping bag number
      props.history.push(`/product/${id}`);
    })
    .catch(err => {
      console.warn('ERROR of adding to cart', err);
      setErrorMessage('Sorry, not enough stock.')
    });
  }; // _handleAddToCart

  let showSuccessMessage = "";
  if(successAddToCartMessage){
    showSuccessMessage = (
      <Link to={`/cart`} className="view-your-cart">
        <strong><p className = 'show-success-mesage'>
          {successAddToCartMessage} {' '}
          View your cart
        </p></strong>
      </Link>
    )
  }



  return(
    <div className="fluid">
      <div className="fluid__image-container">
        <div className="image_wrapper">
          <ReactImageMagnify {...{
              smallImage: {
                  alt: `${props.image}`,
                  isFluidWidth: true,
                  src: process.env.PUBLIC_URL +`/images/${product.image}`,
              },
              largeImage: {
                  src: process.env.PUBLIC_URL +`/images/${product.image}`,
                  width: 600,
                  height: 600
              },
              isHintEnabled: true,
              shouldHideHintAfterFirstActivation: false
          }} />
        </div>
      </div>
      <div className="fluid__instructions">
        <div>
          {showSuccessMessage}
        </div>
        <h3 className="product-name">
          <strong>
            {product.name}
          </strong>
        </h3>
        <p>
          <span className="product-label">
            Category
          </span>
          :{' '}
          {category.name}
        </p>
        <p>
          <span className="product-label">
            Price
          </span>
          : {`$${product.price}`}
        </p>
        <small className="errorMessage">
          {errorMessage}
        </small>
        <div>
          <span className="product-label">
            Select Quantity
          </span>:{' '}
          <input
            type="number"
            min="1"
            max={product.stock}
            defaultValue="1" onChange={_handleChangeQuantity}
          />
          <br/>
          <small>
          (In stock: {product.stock})
          </small>
        </div>
        <div>
          <button
            id="add-to-cart"
            disabled={buttonStatus} onClick={_handleAddToCart}
          >
            {buttonText}
          </button>
        </div>
        <p>
          <span className="product-label">
            Description
          </span>
          : <br/>
          {product.description}
        </p>
      </div>
    </div>
  );
}
