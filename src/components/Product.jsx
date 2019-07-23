import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/Form";
import FormText from "react-bootstrap/FormText";
import Button from "react-bootstrap/Button";


export default function Product(props){

  const {id} = props.match.params;
  // console.log(id);

  // need jwt for user to get a cart
  // if use logged in, valid string; if not, null
  const jwt = localStorage.getItem('jwt');
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonStatus, setButtonStatus] = useState(false);
  const [buttonText, setButtonText] = useState('Add to Cart');

  // first time the component renders
  // axios request to get the product info by id
  useEffect(()=>{
    getProductById(id);
    if(!jwt){
      setButtonStatus(true);
      setButtonText('Login to use cart')
    }
  },[]);

  const getProductById = ()=>{
    const URL = `http://localhost:3000/products/${id}`;

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
  }


  // ************ regardless of user loggin, check if the product is out of stock *************
  // if yes, 1) show message, 2) disable AddtoCart button
  // TESTED: if a button is disabled, won't be able to trigger click event handler
  // let setButtonStatus(false);
  // let inStockUI;
  // if (product.stock <= 0){
  //   setButtonStatus(true);
  //   inStockUI = (
  //     <span class="out-of-stock">Sorry, this product is out of stock.</span>
  //   );
  // } else {
  //   inStockUI = (<span>{product.stock} pcs</span>)
  // }
  // ************ // ************ // ************ // ************ // ************



  // _handleChangeQuantity make sure quantity stored in state is <= stock
  const _handleChangeQuantity = (event) => {
    console.log('event.target.value:', event.target.value); // actual input quantity

    // Only when a user is logged in, toggle the button status based on user input quantity
    if(jwt){
      // TEST: typeof event.target.value is a string, need to parse it to integer!!!
      let wantedQuantity = parseInt(event.target.value);
      // console.log('type of wantedQuantity', typeof(wantedQuantity));

      // check if the input quantity is more than actual stock
      // since user can manually type in the amount
      if (wantedQuantity > product.stock){
        // 1) prompt message
        setErrorMessage('Sorry, not enough stock.');
        // 2) the input quantity doesn't count, reset state quantity to 0
        setQuantity(0);
        // 3) disable 'Add to Cart' button, cannot click
        setButtonStatus(true);
      } else {
        setErrorMessage('');
        setQuantity(wantedQuantity);
        setButtonStatus(false);
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
      setErrorMessage('Please select quantity.')
      setButtonStatus(true);
      return;
    }
    // if not, then quantity is valid, send to the DB and add into the cart!
    const URL = "http://localhost:3000/line_items";
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
    })
    .catch(err => {
      console.warn('ERROR of adding to cart', err);
    });
  }; // _handleAddToCart



  return(
    <Container>
      <Row>
        <Col sm md={7}>
          <Figure>
            <Figure.Image
              fluid={true}
              alt="500x500"
              src={`/images/${product.image}`}
            />
            <Figure.Caption>
              {product.description}
            </Figure.Caption>
          </Figure>
        </Col>
        <Col sm md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>{product.name}</strong></ListGroup.Item>
            <ListGroup.Item>Category: {category.name}
            </ListGroup.Item>
            <ListGroup.Item>Price: {`$${product.price}`}</ListGroup.Item>
            <ListGroup.Item>
              <Form.Text className="errorMessage">
                {errorMessage}
              </Form.Text>
              Select Quantity:{' '}
              <input type="number" min="0" max={product.stock} placeholder='0' onChange={_handleChangeQuantity}/>
              <Form.Text>
                (In stock: {product.stock})
              </Form.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button id="add-to-cart" disabled={buttonStatus} onClick={_handleAddToCart}>{buttonText}</Button>
            </ListGroup.Item>
          </ListGroup>

        </Col>
      </Row>
    </Container>


  );
}
